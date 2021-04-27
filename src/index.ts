#!/usr/bin/env node

import yargs, { Options } from 'yargs';
import { welcome } from './welcome';
import { Auth } from '@/Auth';
import { initConfiguration } from '@/commands/init';
import { CommandSchema } from '@/commands/schema';
import { CommandTypings } from '@/commands/typings';
import { CommandBootstrap } from '@/commands/bootstrap';
import { Config, Configuration, ConfigurationOptions } from '@/Configuration';
import { CommandResolver } from '@/commands/backend/commands/resolver';
import { CommandModels } from '@/commands/backend/commands/models';

type ConfOptions = {
  [P in keyof ConfigurationOptions]: Options;
};

const confOptions = (o: ConfOptions) => o as { [key: string]: Options };

const projectOptions: ConfOptions = {
  namespace: {
    describe: 'GraphQL Editor Namespace',
    type: 'string',
  },
  project: {
    describe: 'GraphQL Editor Project',
    type: 'string',
  },
  version: {
    describe: 'GraphQL Editor Version name',
    type: 'string',
  },
};

welcome().then(() => {
  new Configuration();
  return yargs
    .usage('Usage: $0 <command> [options]')
    .help('h')
    .alias('h', 'help')
    .command('init', 'Create editor project config inside current working directory.', async (yargs) => {
      await Auth.login().then(Config.setTokenOptions);
      await initConfiguration(yargs.argv as Pick<ConfigurationOptions, 'project' | 'namespace' | 'version'>);
    })
    .options(
      confOptions({
        ...projectOptions,
      }),
    )
    .command('schema', 'Generate GraphQL schema from project at given path', async (yargs) => {
      await Auth.login().then(Config.setTokenOptions);
      await CommandSchema(yargs.argv as Pick<ConfigurationOptions, 'project' | 'namespace' | 'version' | 'schemaDir'>);
    })
    .options(
      confOptions({
        ...projectOptions,
        schemaDir: {
          describe: 'Path to created schema containing its name and extension',
          type: 'string',
        },
      }),
    )
    .command('typings', 'Generate GraphQL typings for TypeScript or Javascript', async (yargs) => {
      await Auth.login().then(Config.setTokenOptions);
      await CommandTypings(
        yargs.argv as Pick<
          ConfigurationOptions,
          'project' | 'namespace' | 'version' | 'typingsDir' | 'typingsEnv' | 'typingsGen' | 'typingsHost'
        >,
      );
    })
    .options(
      confOptions({
        ...projectOptions,
        typingsGen: {
          describe: 'Generation language',
          choices: ['Javascript', 'TypeScript'],
        },
        typingsHost: {
          describe: 'GraphQL Server address',
          type: 'string',
        },
        typingsDir: {
          describe: 'Path where to create generated files',
          type: 'string',
        },
        typingsEnv: {
          describe: 'Generation Environment',
          choices: ['browser', 'node'],
        },
      }),
    )
    .command('bootstrap', 'Bootstrap a new frontend or backend project', async (yargs) => {
      await CommandBootstrap(yargs.argv as Pick<ConfigurationOptions, 'project' | 'namespace' | 'version' | 'system'>);
    })
    .options(
      confOptions({
        ...projectOptions,
        system: {
          type: 'string',
          choices: ['backend', 'frontend'],
          describe: 'Choose the type of app you want to bootstrap',
        },
      }),
    )
    .command('resolver', 'Create resolver for your backend project', async (yargs) => {
      await CommandResolver(yargs.argv as Pick<ConfigurationOptions, 'project' | 'namespace' | 'version'>);
    })
    .options(confOptions({ ...projectOptions }))
    .command('models', 'Generate model files for your backend project', async (yargs) => {
      await CommandModels(yargs.argv as Pick<ConfigurationOptions, 'project' | 'namespace' | 'version'>);
    })
    .options(confOptions({ ...projectOptions }))
    .showHelpOnFail(true)
    .demandCommand()
    .epilog('Bye!').argv;
});
