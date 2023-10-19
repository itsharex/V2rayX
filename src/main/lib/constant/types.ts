import {
  MenuItemConstructorOptions,
  BrowserWindow,
  IpcMain as _IpcMain,
  Tray,
  MenuItem,
  Menu,
} from 'electron';

export const encryptMethods = [
  'none',
  'aes-128-gcm',
  'aes-192-gcm',
  'aes-256-gcm',
  'rc4',
  'rc4-md5',
  'aes-128-cfb',
  'aes-192-cfb',
  'aes-256-cfb',
  'aes-128-ctr',
  'aes-192-ctr',
  'aes-256-ctr',
  'bf-cfb',
  'camellia-128-cfb',
  'camellia-192-cfb',
  'camellia-256-cfb',
  'chacha20-ietf-poly1305',
  'xchacha20-ietf-poly1305',
  'salsa20',
  'chacha20',
  'chacha20-ietf',
] as const;

export interface Settings {
  selectedServer?: string | null;
  mode: Mode;
  verbose: boolean;
  localPort: number;
  pacPort: number;
  httpProxy: {
    enable: boolean;
    port: number;
  };
  loadBalance: {
    enable: boolean;
    count: number;
  };
  acl: {
    enable: boolean;
    url: string;
  };
  gfwListUrl: string;
  autoLaunch: boolean;
}

export type Encryption = (typeof encryptMethods)[number];
export type Mode = 'PAC' | 'Global' | 'Manual';

export interface Status {
  connected: boolean;
  loading: boolean;
  delay: number | null | '';
}

export interface Service {}

export interface TransparentWindowType {
  icon: string;
  url: string;
  win: null | BrowserWindow;
  width: number;
  height: number;
  create: (params: { fillRect: RectPoint[] }) => Promise<any>;
  destroy: () => void;
}

export interface IpcMainWindowType {
  win: null | BrowserWindow;
  tray: null | Tray;
  icon: string;
  trayIcon: string;
  trayMenu: Menu | null;
  menus: (MenuItem | MenuItemConstructorOptions)[];
  width: number;
  height: number;
  url: string;
  quitting: boolean;
  resizable: boolean;
  create: () => Promise<any>;
  createTray: () => Promise<any>;
  setLocaleTrayMenu: () => void;
  show: () => void;
  quit: () => void;
  hide: () => void;
  beforeQuitting: () => void;
}

export type ServiceResult = {
  code: number;
  result: any;
};

export interface MainService extends Service {
  [attr: string]: IpcMain | ServiceHandler | any;
  isConnected: () => Promise<ServiceResult>;
  startClient: (params: { config: Config; settings: Settings }) => Promise<ServiceResult>;
  stopClient: () => Promise<ServiceResult>;
  startCluster: (params: { configs: Config[]; settings: Settings }) => Promise<ServiceResult>;
  stopCluster: () => Promise<ServiceResult>;
  parseClipboardText: (params: { text: string; type: ClipboardParseType }) => Promise<ServiceResult>;
  generateUrlFromConfig: (params: Config) => Promise<ServiceResult>;
}

export interface DesktopService extends Service {
  [attr: string]: IpcMain | ServiceHandler | any;
  createTransparentWindow: (params: RectPoint[]) => Promise<ServiceResult>;
  reloadMainWindow: (params: any) => Promise<ServiceResult>;
  setStartupOnBoot: (on: boolean) => Promise<ServiceResult>;
  openLogDir: (params: Config) => Promise<ServiceResult>;
}

export interface ThemeService extends Service {
  listenForUpdate: () => Promise<ServiceResult>;
  unlistenForUpdate: () => Promise<ServiceResult>;
  getSystemThemeInfo: () => Promise<ServiceResult>;
}

export type ServiceHandler = (params: any) => Promise<ServiceResult>;

export interface IpcMainProcess {
  ipc: IpcMain;
  mainService: MainService;
  desktopService: DesktopService;
}

export type IpcMain = _IpcMain;

export const plugins = ['v2ray-plugin', 'kcptun', 'define'] as const;
export type Plugin = (typeof plugins)[number] | string;
export type ACL = boolean;
export type Config = SSConfig & SSRConfig;
export type OneOfConfig = SSConfig | SSRConfig;
export type MonoSubscription = MonoSubscriptionSS | MonoSubscriptionSSR;
export type SubscriptionParserStore = SubscriptionParserConfig[];
export type SubscriptionParserConfig = {
  name: string;
  test: RegExp;
  parse: (data: any) => OneOfConfig[];
};

export interface SubscriptionResult {
  name: string;
  server: MonoSubscription[];
  version: number;
}

export interface MonoSubscriptionSSR {
  id: string;
  remarks: string;
  name: string;
  server: string;
  server_port: number;
  password: string;
  method: string;
  protocol: string;
  protocol_param: string;
  obfs: string;
  obfs_param: string;
}

export interface MonoSubscriptionSS {
  id: string;
  remarks: string;
  name: string;
  server: string;
  server_port: number;
  password: string;
  method: string;
}

export type ClipboardParseType = 'url' | 'subscription';

export const obfs = ['plain', 'http_simple', 'http_post', 'tls1.2_ticket_auth'];

export const protocols = [
  'origin',
  'verify_deflate',
  'auth_sha1_v4',
  'auth_aes128_md5',
  'auth_aes128_sha1',
  'auth_chain_a',
  'auth_chain_b',
  'auth_chain_c',
  'auth_chain_d',
];

interface CommonConfig {
  definedPlugin?: string;
  definedPluginOpts?: string;
  definedPluginSIP003?: string;
  definedPluginOptsSIP003?: string;
}

export interface SSConfig extends CommonConfig {
  id: string;
  type?: string;
  remark?: string;
  serverHost: string;
  serverPort: number;
  password: string;
  encryptMethod: Encryption | string;
  timeout?: number;
  acl?: ACL;
  fastOpen?: boolean;
  noDelay?: boolean;
  maxOpenFile?: number;
  udp?: boolean;
  plugin?: Plugin;
  pluginOpts?: string;
}

export interface SSRConfig extends CommonConfig {
  id: string;
  type?: string;
  remark?: string;
  serverHost: string;
  serverPort: number;
  password: string;
  encryptMethod: Encryption | string;
  protocol: (typeof protocols)[number];
  protocolParam: string;
  obfs: (typeof obfs)[number];
  obfsParam: string;
  timeout?: number;
  acl?: ACL;
  fastOpen?: boolean;
  noDelay?: boolean;
  maxOpenFile?: number;
  udp?: boolean;
  plugin?: Plugin;
  pluginOpts?: string;
}

export type ProxyStatus = 'off' | 'on';

export type platform = 'win32' | 'darwin' | 'linux';

export type RectPoint = { x: number; y: number; width: number; height: number };

export type WindowInfo = {
  devicePixelRatio: number;
  width: number;
  height: number;
  types: string[];
};

export type InnerCallback = (params: Error | null) => void;

export type contextAction = {
  label: string;
  action: string;
  accelerator: string;
};

export interface DefinedPluginProps {
  name: string;
  args: string;
  path: string;
}

type Log = {
  error: string;
  loglevel: string;
  access: string;
};

type Inbound = {
  listen: string;
  protocol: string;
  settings: {
    udp: boolean;
    auth: string;
    timeout?: number;
  };
  port: number;
};

type Outbound = {
  mux?: {
    enabled: boolean;
    concurrency: number;
  };
  protocol: string;
  streamSettings: {
    network: string;
    tcpSettings: {
      header: {
        type: string;
      };
    };
    security: string;
  };
  tag: string;
  settings: {
    vnext: {
      address: string;
      users: {
        id: string;
        alterId: number;
        level: number;
        security: string;
      }[];
      port: number;
    }[];
  };
};

type DNS = Record<string, any>; // Placeholder for the actual DNS configuration type

type Routing = {
  settings: {
    domainStrategy: string;
    rules: any[]; // Placeholder for the actual rules type
  };
};

type Transport = Record<string, any>; // Placeholder for the actual transport configuration type

export type VmessObjConfiguration = {
  log: Log;
  inbounds: Inbound[];
  outbounds: Outbound[];
  dns: DNS;
  routing: Routing;
  transport: Transport;
  other: Record<string, any>;
};

export type Server = {
  id: string;
  ps: string;
  link: string;
  config: VmessObjConfiguration;
};

export type Servers = Server[];
