import type { PluginItem, TransformOptions } from '@babel/core';
import type { PluginOptions as RDTSPluginOptions } from '@storybook/react-docgen-typescript-plugin';

export type Preset = string | { name: string };

export interface PluginOptions {
  /**
   * Optionally set the package name of a react-scripts fork.
   * In most cases, the package is located automatically by this preset.
   */
  scriptsPackageName?: string;

  /**
   * Overrides for Create React App's Webpack configuration.
   */
  craOverrides?: {
    fileLoaderExcludes?: string[];
  };

  // TODO: Expose these from Storybook, will require Storybook 6.
  configDir: string;
  babelOptions: {
    extends: string | null;
    plugins: PluginItem[] | null;
    presets: PluginItem[] | null;
    overrides: TransformOptions[] | null;
  };
  presetsList: Preset[];
  packageJson: {
    version: string;
  };
  // This always exists from Storybook 6, but not for older versions.
  typescriptOptions?: {
    reactDocgen: 'react-docgen-typescript' | 'react-docgen' | false;
    reactDocgenTypescriptOptions: RDTSPluginOptions;
  };

  presets: {
    apply<T>(preset: Preset): Promise<T>;
  };
}

export interface CoreConfig {
  builder: {
    options?: {
      fsCache?: boolean;
      lazyCompilation?: boolean;
    };
  };
}
