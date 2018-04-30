module.exports = {
  defaults: {
    System: ['OS', 'CPU', 'Memory', 'Container', 'Shell'],
    Binaries: ['Node', 'Yarn', 'npm', 'Watchman'],
    Virtualization: ['Docker', 'Parallels', 'VirtualBox', 'VMware Fusion'],
    SDKs: ['iOS SDK', 'Android SDK'],
    IDEs: ['Android Studio', 'Atom', 'VSCode', 'Sublime Text', 'Xcode'],
    Languages: ['Bash', 'Go', 'Elixir', 'PHP', 'Python', 'Ruby'],
    Browsers: [
      'Chrome',
      'Chrome Canary',
      'Firefox',
      'Firefox Developer Edition',
      'Firefox Nightly',
      'Safari',
      'Safari Technology Preview',
    ],
    npmPackages: null,
    npmGlobalPackages: null,
  },
  jest: {
    System: ['OS', 'CPU'],
    Binaries: ['Node', 'Yarn', 'npm'],
    npmPackages: ['jest'],
  },
  'react-native': {
    System: ['OS', 'CPU'],
    Binaries: ['Node', 'Yarn', 'npm', 'Watchman'],
    SDKs: ['iOS SDK', 'Android SDK'],
    IDEs: ['Android Studio', 'Xcode'],
    npmPackages: ['react', 'react-native'],
    npmGlobalPackages: ['react-native-cli'],
  },
  webpack: {
    System: ['OS', 'CPU'],
    Binaries: ['Node', 'Yarn', 'npm'],
    npmPackages: '*webpack*',
    npmGlobalPackages: ['webpack', 'webpack-cli'],
  },
  'styled-components': {
    System: ['OS', 'CPU'],
    Binaries: ['Node', 'Yarn', 'npm'],
    Browsers: ['Chrome', 'Firefox', 'Safari'],
    npmPackages: '*styled-components*',
  },
  'create-react-app': {
    System: ['OS', 'CPU'],
    Binaries: ['Node', 'npm', 'Yarn'],
    Browsers: ['Chrome', 'Edge', 'Internet Explorer', 'Firefox', 'Safari'],
    npmPackages: ['react', 'react-dom', 'react-scripts'],
    npmGlobalPackages: ['create-react-app'],
    options: {
      clipboard: true,
      duplicates: true,
      showNotFound: true,
    },
  },
};
