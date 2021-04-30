'use strict';

var require$$0 = require('electron');
var EventEmitter = require('events');
var require$$0$1 = require('timers');
var net = require('net');
var obsidian = require('obsidian');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
var EventEmitter__default = /*#__PURE__*/_interopDefaultLegacy(EventEmitter);
var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
var net__default = /*#__PURE__*/_interopDefaultLegacy(net);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var _nodeResolve_empty = {};

var _nodeResolve_empty$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    'default': _nodeResolve_empty
});

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function getAugmentedNamespace(n) {
	if (n.__esModule) return n;
	var a = Object.defineProperty({}, '__esModule', {value: true});
	Object.keys(n).forEach(function (k) {
		var d = Object.getOwnPropertyDescriptor(n, k);
		Object.defineProperty(a, k, d.get ? d : {
			enumerable: true,
			get: function () {
				return n[k];
			}
		});
	});
	return a;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var require$$1 = /*@__PURE__*/getAugmentedNamespace(_nodeResolve_empty$1);

let register;
try {
  const { app } = require$$0__default['default'];
  register = app.setAsDefaultProtocolClient.bind(app);
} catch (err) {
  try {
    register = require$$1;
  } catch (e) {} // eslint-disable-line no-empty
}

if (typeof register !== 'function') {
  register = () => false;
}

function pid() {
  if (typeof process !== 'undefined') {
    return process.pid;
  }
  return null;
}

const uuid4122 = () => {
  let uuid = '';
  for (let i = 0; i < 32; i += 1) {
    if (i === 8 || i === 12 || i === 16 || i === 20) {
      uuid += '-';
    }
    let n;
    if (i === 12) {
      n = 4;
    } else {
      const random = Math.random() * 16 | 0;
      if (i === 16) {
        n = (random & 3) | 0;
      } else {
        n = random;
      }
    }
    uuid += n.toString(16);
  }
  return uuid;
};

var util = {
  pid,
  register,
  uuid: uuid4122,
};

var browser = createCommonjsModule(function (module, exports) {

// ref: https://github.com/tc39/proposal-global
var getGlobal = function () {
	// the only reliable means to get the global object is
	// `Function('return this')()`
	// However, this causes CSP violations in Chrome apps.
	if (typeof self !== 'undefined') { return self; }
	if (typeof window !== 'undefined') { return window; }
	if (typeof global !== 'undefined') { return global; }
	throw new Error('unable to locate global object');
};

var global = getGlobal();

module.exports = exports = global.fetch;

// Needed for TypeScript and Webpack.
if (global.fetch) {
	exports.default = global.fetch.bind(global);
}

exports.Headers = global.Headers;
exports.Request = global.Request;
exports.Response = global.Response;
});

const { uuid } = util;

const OPCodes = {
  HANDSHAKE: 0,
  FRAME: 1,
  CLOSE: 2,
  PING: 3,
  PONG: 4,
};

function getIPCPath(id) {
  if (process.platform === 'win32') {
    return `\\\\?\\pipe\\discord-ipc-${id}`;
  }
  const { env: { XDG_RUNTIME_DIR, TMPDIR, TMP, TEMP } } = process;
  const prefix = XDG_RUNTIME_DIR || TMPDIR || TMP || TEMP || '/tmp';
  return `${prefix.replace(/\/$/, '')}/discord-ipc-${id}`;
}

function getIPC(id = 0) {
  return new Promise((resolve, reject) => {
    const path = getIPCPath(id);
    const onerror = () => {
      if (id < 10) {
        resolve(getIPC(id + 1));
      } else {
        reject(new Error('Could not connect'));
      }
    };
    const sock = net__default['default'].createConnection(path, () => {
      sock.removeListener('error', onerror);
      resolve(sock);
    });
    sock.once('error', onerror);
  });
}

async function findEndpoint(tries = 0) {
  if (tries > 30) {
    throw new Error('Could not find endpoint');
  }
  const endpoint = `http://127.0.0.1:${6463 + (tries % 10)}`;
  try {
    const r = await browser(endpoint);
    if (r.status === 404) {
      return endpoint;
    }
    return findEndpoint(tries + 1);
  } catch (e) {
    return findEndpoint(tries + 1);
  }
}

function encode(op, data) {
  data = JSON.stringify(data);
  const len = Buffer.byteLength(data);
  const packet = Buffer.alloc(8 + len);
  packet.writeInt32LE(op, 0);
  packet.writeInt32LE(len, 4);
  packet.write(data, 8, len);
  return packet;
}

const working = {
  full: '',
  op: undefined,
};

function decode(socket, callback) {
  const packet = socket.read();
  if (!packet) {
    return;
  }

  let { op } = working;
  let raw;
  if (working.full === '') {
    op = working.op = packet.readInt32LE(0);
    const len = packet.readInt32LE(4);
    raw = packet.slice(8, len + 8);
  } else {
    raw = packet.toString();
  }

  try {
    const data = JSON.parse(working.full + raw);
    callback({ op, data }); // eslint-disable-line callback-return
    working.full = '';
    working.op = undefined;
  } catch (err) {
    working.full += raw;
  }

  decode(socket, callback);
}

class IPCTransport extends EventEmitter__default['default'] {
  constructor(client) {
    super();
    this.client = client;
    this.socket = null;
  }

  async connect() {
    const socket = this.socket = await getIPC();
    socket.on('close', this.onClose.bind(this));
    socket.on('error', this.onClose.bind(this));
    this.emit('open');
    socket.write(encode(OPCodes.HANDSHAKE, {
      v: 1,
      client_id: this.client.clientId,
    }));
    socket.pause();
    socket.on('readable', () => {
      decode(socket, ({ op, data }) => {
        switch (op) {
          case OPCodes.PING:
            this.send(data, OPCodes.PONG);
            break;
          case OPCodes.FRAME:
            if (!data) {
              return;
            }
            if (data.cmd === 'AUTHORIZE' && data.evt !== 'ERROR') {
              findEndpoint().then((endpoint) => {
                this.client.request.endpoint = endpoint;
              });
            }
            this.emit('message', data);
            break;
          case OPCodes.CLOSE:
            this.emit('close', data);
            break;
          default:
            break;
        }
      });
    });
  }

  onClose(e) {
    this.emit('close', e);
  }

  send(data, op = OPCodes.FRAME) {
    this.socket.write(encode(op, data));
  }

  close() {
    this.send({}, OPCodes.CLOSE);
    this.socket.end();
  }

  ping() {
    this.send(uuid(), OPCodes.PING);
  }
}

var ipc = IPCTransport;
var encode_1 = encode;
var decode_1 = decode;
ipc.encode = encode_1;
ipc.decode = decode_1;

function keyMirror(arr) {
  const tmp = {};
  for (const value of arr) {
    tmp[value] = value;
  }
  return tmp;
}


var browser$1 = typeof window !== 'undefined';

var RPCCommands = keyMirror([
  'DISPATCH',
  'AUTHORIZE',
  'AUTHENTICATE',
  'GET_GUILD',
  'GET_GUILDS',
  'GET_CHANNEL',
  'GET_CHANNELS',
  'CREATE_CHANNEL_INVITE',
  'GET_RELATIONSHIPS',
  'GET_USER',
  'SUBSCRIBE',
  'UNSUBSCRIBE',
  'SET_USER_VOICE_SETTINGS',
  'SET_USER_VOICE_SETTINGS_2',
  'SELECT_VOICE_CHANNEL',
  'GET_SELECTED_VOICE_CHANNEL',
  'SELECT_TEXT_CHANNEL',
  'GET_VOICE_SETTINGS',
  'SET_VOICE_SETTINGS_2',
  'SET_VOICE_SETTINGS',
  'CAPTURE_SHORTCUT',
  'SET_ACTIVITY',
  'SEND_ACTIVITY_JOIN_INVITE',
  'CLOSE_ACTIVITY_JOIN_REQUEST',
  'ACTIVITY_INVITE_USER',
  'ACCEPT_ACTIVITY_INVITE',
  'INVITE_BROWSER',
  'DEEP_LINK',
  'CONNECTIONS_CALLBACK',
  'BRAINTREE_POPUP_BRIDGE_CALLBACK',
  'GIFT_CODE_BROWSER',
  'GUILD_TEMPLATE_BROWSER',
  'OVERLAY',
  'BROWSER_HANDOFF',
  'SET_CERTIFIED_DEVICES',
  'GET_IMAGE',
  'CREATE_LOBBY',
  'UPDATE_LOBBY',
  'DELETE_LOBBY',
  'UPDATE_LOBBY_MEMBER',
  'CONNECT_TO_LOBBY',
  'DISCONNECT_FROM_LOBBY',
  'SEND_TO_LOBBY',
  'SEARCH_LOBBIES',
  'CONNECT_TO_LOBBY_VOICE',
  'DISCONNECT_FROM_LOBBY_VOICE',
  'SET_OVERLAY_LOCKED',
  'OPEN_OVERLAY_ACTIVITY_INVITE',
  'OPEN_OVERLAY_GUILD_INVITE',
  'OPEN_OVERLAY_VOICE_SETTINGS',
  'VALIDATE_APPLICATION',
  'GET_ENTITLEMENT_TICKET',
  'GET_APPLICATION_TICKET',
  'START_PURCHASE',
  'GET_SKUS',
  'GET_ENTITLEMENTS',
  'GET_NETWORKING_CONFIG',
  'NETWORKING_SYSTEM_METRICS',
  'NETWORKING_PEER_METRICS',
  'NETWORKING_CREATE_TOKEN',
  'SET_USER_ACHIEVEMENT',
  'GET_USER_ACHIEVEMENTS',
]);

var RPCEvents = keyMirror([
  'CURRENT_USER_UPDATE',
  'GUILD_STATUS',
  'GUILD_CREATE',
  'CHANNEL_CREATE',
  'RELATIONSHIP_UPDATE',
  'VOICE_CHANNEL_SELECT',
  'VOICE_STATE_CREATE',
  'VOICE_STATE_DELETE',
  'VOICE_STATE_UPDATE',
  'VOICE_SETTINGS_UPDATE',
  'VOICE_SETTINGS_UPDATE_2',
  'VOICE_CONNECTION_STATUS',
  'SPEAKING_START',
  'SPEAKING_STOP',
  'GAME_JOIN',
  'GAME_SPECTATE',
  'ACTIVITY_JOIN',
  'ACTIVITY_JOIN_REQUEST',
  'ACTIVITY_SPECTATE',
  'ACTIVITY_INVITE',
  'NOTIFICATION_CREATE',
  'MESSAGE_CREATE',
  'MESSAGE_UPDATE',
  'MESSAGE_DELETE',
  'LOBBY_DELETE',
  'LOBBY_UPDATE',
  'LOBBY_MEMBER_CONNECT',
  'LOBBY_MEMBER_DISCONNECT',
  'LOBBY_MEMBER_UPDATE',
  'LOBBY_MESSAGE',
  'CAPTURE_SHORTCUT_CHANGE',
  'OVERLAY',
  'OVERLAY_UPDATE',
  'ENTITLEMENT_CREATE',
  'ENTITLEMENT_DELETE',
  'USER_ACHIEVEMENT_UPDATE',
  'READY',
  'ERROR',
]);

var RPCErrors = {
  CAPTURE_SHORTCUT_ALREADY_LISTENING: 5004,
  GET_GUILD_TIMED_OUT: 5002,
  INVALID_ACTIVITY_JOIN_REQUEST: 4012,
  INVALID_ACTIVITY_SECRET: 5005,
  INVALID_CHANNEL: 4005,
  INVALID_CLIENTID: 4007,
  INVALID_COMMAND: 4002,
  INVALID_ENTITLEMENT: 4015,
  INVALID_EVENT: 4004,
  INVALID_GIFT_CODE: 4016,
  INVALID_GUILD: 4003,
  INVALID_INVITE: 4011,
  INVALID_LOBBY: 4013,
  INVALID_LOBBY_SECRET: 4014,
  INVALID_ORIGIN: 4008,
  INVALID_PAYLOAD: 4000,
  INVALID_PERMISSIONS: 4006,
  INVALID_TOKEN: 4009,
  INVALID_USER: 4010,
  LOBBY_FULL: 5007,
  NO_ELIGIBLE_ACTIVITY: 5006,
  OAUTH2_ERROR: 5000,
  PURCHASE_CANCELED: 5008,
  PURCHASE_ERROR: 5009,
  RATE_LIMITED: 5011,
  SELECT_CHANNEL_TIMED_OUT: 5001,
  SELECT_VOICE_FORCE_REQUIRED: 5003,
  SERVICE_UNAVAILABLE: 1001,
  TRANSACTION_ABORTED: 1002,
  UNAUTHORIZED_FOR_ACHIEVEMENT: 5010,
  UNKNOWN_ERROR: 1000,
};

var RPCCloseCodes = {
  CLOSE_NORMAL: 1000,
  CLOSE_UNSUPPORTED: 1003,
  CLOSE_ABNORMAL: 1006,
  INVALID_CLIENTID: 4000,
  INVALID_ORIGIN: 4001,
  RATELIMITED: 4002,
  TOKEN_REVOKED: 4003,
  INVALID_VERSION: 4004,
  INVALID_ENCODING: 4005,
};

var LobbyTypes = {
  PRIVATE: 1,
  PUBLIC: 2,
};

var RelationshipTypes = {
  NONE: 0,
  FRIEND: 1,
  BLOCKED: 2,
  PENDING_INCOMING: 3,
  PENDING_OUTGOING: 4,
  IMPLICIT: 5,
};

var constants = {
	browser: browser$1,
	RPCCommands: RPCCommands,
	RPCEvents: RPCEvents,
	RPCErrors: RPCErrors,
	RPCCloseCodes: RPCCloseCodes,
	LobbyTypes: LobbyTypes,
	RelationshipTypes: RelationshipTypes
};

const { browser: browser$2 } = constants;

// eslint-disable-next-line
const WebSocket = browser$2 ? window.WebSocket : require$$1;

const pack = (d) => JSON.stringify(d);
const unpack = (s) => JSON.parse(s);

class WebSocketTransport extends EventEmitter__default['default'] {
  constructor(client) {
    super();
    this.client = client;
    this.ws = null;
    this.tries = 0;
  }

  async connect(tries = this.tries) {
    if (this.connected) {
      return;
    }
    const port = 6463 + (tries % 10);
    this.hostAndPort = `127.0.0.1:${port}`;
    const ws = this.ws = new WebSocket(
      `ws://${this.hostAndPort}/?v=1&client_id=${this.client.clientId}`,
      {
        origin: this.client.options.origin,
      },
    );
    ws.onopen = this.onOpen.bind(this);
    ws.onclose = ws.onerror = this.onClose.bind(this);
    ws.onmessage = this.onMessage.bind(this);
  }

  send(data) {
    if (!this.ws) {
      return;
    }
    this.ws.send(pack(data));
  }

  close() {
    if (!this.ws) {
      return;
    }
    this.ws.close();
  }

  ping() {} // eslint-disable-line no-empty-function

  onMessage(event) {
    this.emit('message', unpack(event.data));
  }

  onOpen() {
    this.emit('open');
  }

  onClose(e) {
    try {
      this.ws.close();
    } catch (err) {} // eslint-disable-line no-empty
    const derr = e.code >= 4000 && e.code < 5000;
    if (!e.code || derr) {
      this.emit('close', e);
    }
    if (!derr) {
      // eslint-disable-next-line no-plusplus
      setTimeout(() => this.connect(e.code === 1006 ? ++this.tries : 0), 250);
    }
  }
}

var websocket = WebSocketTransport;

var transports = {
  ipc: ipc,
  websocket: websocket,
};

const { setTimeout: setTimeout$1, clearTimeout } = require$$0__default$1['default'];


const { RPCCommands: RPCCommands$1, RPCEvents: RPCEvents$1, RelationshipTypes: RelationshipTypes$1 } = constants;
const { pid: getPid, uuid: uuid$1 } = util;

function subKey(event, args) {
  return `${event}${JSON.stringify(args)}`;
}

/**
 * @typedef {RPCClientOptions}
 * @extends {ClientOptions}
 * @prop {string} transport RPC transport. one of `ipc` or `websocket`
 */

/**
 * The main hub for interacting with Discord RPC
 * @extends {BaseClient}
 */
class RPCClient extends EventEmitter__default['default'] {
  /**
   * @param {RPCClientOptions} [options] Options for the client.
   * You must provide a transport
   */
  constructor(options = {}) {
    super();

    this.options = options;

    this.accessToken = null;
    this.clientId = null;

    /**
     * Application used in this client
     * @type {?ClientApplication}
     */
    this.application = null;

    /**
     * User used in this application
     * @type {?User}
     */
    this.user = null;

    const Transport = transports[options.transport];
    if (!Transport) {
      throw new TypeError('RPC_INVALID_TRANSPORT', options.transport);
    }

    this.fetch = (method, path, { data, query } = {}) =>
      browser(`${this.fetch.endpoint}${path}${query ? new URLSearchParams(query) : ''}`, {
        method,
        body: data,
        headers: {
          Authorization: `Bearer ${this.accessToken}`,
        },
      }).then(async (r) => {
        const body = await r.json();
        if (!r.ok) {
          const e = new Error(r.status);
          e.body = body;
          throw e;
        }
        return body;
      });

    this.fetch.endpoint = 'https://discord.com/api';

    /**
     * Raw transport userd
     * @type {RPCTransport}
     * @private
     */
    this.transport = new Transport(this);
    this.transport.on('message', this._onRpcMessage.bind(this));

    /**
     * Map of nonces being expected from the transport
     * @type {Map}
     * @private
     */
    this._expecting = new Map();

    /**
     * Map of current subscriptions
     * @type {Map}
     * @private
     */
    this._subscriptions = new Map();

    this._connectPromise = undefined;
  }

  /**
   * Search and connect to RPC
   */
  connect(clientId) {
    if (this._connectPromise) {
      return this._connectPromise;
    }
    this._connectPromise = new Promise((resolve, reject) => {
      this.clientId = clientId;
      const timeout = setTimeout$1(() => reject(new Error('RPC_CONNECTION_TIMEOUT')), 10e3);
      timeout.unref();
      this.once('connected', () => {
        clearTimeout(timeout);
        resolve(this);
      });
      this.transport.once('close', () => {
        this._expecting.forEach((e) => {
          e.reject(new Error('connection closed'));
        });
        this.emit('disconnected');
        reject(new Error('connection closed'));
      });
      this.transport.connect().catch(reject);
    });
    return this._connectPromise;
  }

  /**
   * @typedef {RPCLoginOptions}
   * @param {string} clientId Client ID
   * @param {string} [clientSecret] Client secret
   * @param {string} [accessToken] Access token
   * @param {string} [rpcToken] RPC token
   * @param {string} [tokenEndpoint] Token endpoint
   * @param {string[]} [scopes] Scopes to authorize with
   */

  /**
   * Performs authentication flow. Automatically calls Client#connect if needed.
   * @param {RPCLoginOptions} options Options for authentication.
   * At least one property must be provided to perform login.
   * @example client.login({ clientId: '1234567', clientSecret: 'abcdef123' });
   * @returns {Promise<RPCClient>}
   */
  async login(options = {}) {
    let { clientId, accessToken } = options;
    await this.connect(clientId);
    if (!options.scopes) {
      this.emit('ready');
      return this;
    }
    if (!accessToken) {
      accessToken = await this.authorize(options);
    }
    return this.authenticate(accessToken);
  }

  /**
   * Request
   * @param {string} cmd Command
   * @param {Object} [args={}] Arguments
   * @param {string} [evt] Event
   * @returns {Promise}
   * @private
   */
  request(cmd, args, evt) {
    return new Promise((resolve, reject) => {
      const nonce = uuid$1();
      this.transport.send({ cmd, args, evt, nonce });
      this._expecting.set(nonce, { resolve, reject });
    });
  }

  /**
   * Message handler
   * @param {Object} message message
   * @private
   */
  _onRpcMessage(message) {
    if (message.cmd === RPCCommands$1.DISPATCH && message.evt === RPCEvents$1.READY) {
      if (message.data.user) {
        this.user = message.data.user;
      }
      this.emit('connected');
    } else if (this._expecting.has(message.nonce)) {
      const { resolve, reject } = this._expecting.get(message.nonce);
      if (message.evt === 'ERROR') {
        const e = new Error(message.data.message);
        e.code = message.data.code;
        e.data = message.data;
        reject(e);
      } else {
        resolve(message.data);
      }
      this._expecting.delete(message.nonce);
    } else {
      const subid = subKey(message.evt, message.args);
      if (!this._subscriptions.has(subid)) {
        return;
      }
      this._subscriptions.get(subid)(message.data);
    }
  }

  /**
   * Authorize
   * @param {Object} options options
   * @returns {Promise}
   * @private
   */
  async authorize({ scopes, clientSecret, rpcToken, redirectUri } = {}) {
    if (clientSecret && rpcToken === true) {
      const body = await this.fetch('POST', '/oauth2/token/rpc', {
        data: new URLSearchParams({
          client_id: this.clientId,
          client_secret: clientSecret,
        }),
      });
      rpcToken = body.rpc_token;
    }

    const { code } = await this.request('AUTHORIZE', {
      scopes,
      client_id: this.clientId,
      rpc_token: rpcToken,
    });

    const response = await this.fetch('POST', '/oauth2/token', {
      data: new URLSearchParams({
        client_id: this.clientId,
        client_secret: clientSecret,
        code,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri,
      }),
    });

    return response.access_token;
  }

  /**
   * Authenticate
   * @param {string} accessToken access token
   * @returns {Promise}
   * @private
   */
  authenticate(accessToken) {
    return this.request('AUTHENTICATE', { access_token: accessToken })
      .then(({ application, user }) => {
        this.accessToken = accessToken;
        this.application = application;
        this.user = user;
        this.emit('ready');
        return this;
      });
  }


  /**
   * Fetch a guild
   * @param {Snowflake} id Guild ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Guild>}
   */
  getGuild(id, timeout) {
    return this.request(RPCCommands$1.GET_GUILD, { guild_id: id, timeout });
  }

  /**
   * Fetch all guilds
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Collection<Snowflake, Guild>>}
   */
  getGuilds(timeout) {
    return this.request(RPCCommands$1.GET_GUILDS, { timeout });
  }

  /**
   * Get a channel
   * @param {Snowflake} id Channel ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Channel>}
   */
  getChannel(id, timeout) {
    return this.request(RPCCommands$1.GET_CHANNEL, { channel_id: id, timeout });
  }

  /**
   * Get all channels
   * @param {Snowflake} [id] Guild ID
   * @param {number} [timeout] Timeout request
   * @returns {Promise<Collection<Snowflake, Channel>>}
   */
  async getChannels(id, timeout) {
    const { channels } = await this.request(RPCCommands$1.GET_CHANNELS, {
      timeout,
      guild_id: id,
    });
    return channels;
  }

  /**
   * @typedef {CertifiedDevice}
   * @prop {string} type One of `AUDIO_INPUT`, `AUDIO_OUTPUT`, `VIDEO_INPUT`
   * @prop {string} uuid This device's Windows UUID
   * @prop {object} vendor Vendor information
   * @prop {string} vendor.name Vendor's name
   * @prop {string} vendor.url Vendor's url
   * @prop {object} model Model information
   * @prop {string} model.name Model's name
   * @prop {string} model.url Model's url
   * @prop {string[]} related Array of related product's Windows UUIDs
   * @prop {boolean} echoCancellation If the device has echo cancellation
   * @prop {boolean} noiseSuppression If the device has noise suppression
   * @prop {boolean} automaticGainControl If the device has automatic gain control
   * @prop {boolean} hardwareMute If the device has a hardware mute
   */

  /**
   * Tell discord which devices are certified
   * @param {CertifiedDevice[]} devices Certified devices to send to discord
   * @returns {Promise}
   */
  setCertifiedDevices(devices) {
    return this.request(RPCCommands$1.SET_CERTIFIED_DEVICES, {
      devices: devices.map((d) => ({
        type: d.type,
        id: d.uuid,
        vendor: d.vendor,
        model: d.model,
        related: d.related,
        echo_cancellation: d.echoCancellation,
        noise_suppression: d.noiseSuppression,
        automatic_gain_control: d.automaticGainControl,
        hardware_mute: d.hardwareMute,
      })),
    });
  }

  /**
   * @typedef {UserVoiceSettings}
   * @prop {Snowflake} id ID of the user these settings apply to
   * @prop {?Object} [pan] Pan settings, an object with `left` and `right` set between
   * 0.0 and 1.0, inclusive
   * @prop {?number} [volume=100] The volume
   * @prop {bool} [mute] If the user is muted
   */

  /**
   * Set the voice settings for a uer, by id
   * @param {Snowflake} id ID of the user to set
   * @param {UserVoiceSettings} settings Settings
   * @returns {Promise}
   */
  setUserVoiceSettings(id, settings) {
    return this.request(RPCCommands$1.SET_USER_VOICE_SETTINGS, {
      user_id: id,
      pan: settings.pan,
      mute: settings.mute,
      volume: settings.volume,
    });
  }

  /**
   * Move the user to a voice channel
   * @param {Snowflake} id ID of the voice channel
   * @param {Object} [options] Options
   * @param {number} [options.timeout] Timeout for the command
   * @param {boolean} [options.force] Force this move. This should only be done if you
   * have explicit permission from the user.
   * @returns {Promise}
   */
  selectVoiceChannel(id, { timeout, force = false } = {}) {
    return this.request(RPCCommands$1.SELECT_VOICE_CHANNEL, { channel_id: id, timeout, force });
  }

  /**
   * Move the user to a text channel
   * @param {Snowflake} id ID of the voice channel
   * @param {Object} [options] Options
   * @param {number} [options.timeout] Timeout for the command
   * @param {boolean} [options.force] Force this move. This should only be done if you
   * have explicit permission from the user.
   * @returns {Promise}
   */
  selectTextChannel(id, { timeout, force = false } = {}) {
    return this.request(RPCCommands$1.SELECT_TEXT_CHANNEL, { channel_id: id, timeout, force });
  }

  /**
   * Get current voice settings
   * @returns {Promise}
   */
  getVoiceSettings() {
    return this.request(RPCCommands$1.GET_VOICE_SETTINGS)
      .then((s) => ({
        automaticGainControl: s.automatic_gain_control,
        echoCancellation: s.echo_cancellation,
        noiseSuppression: s.noise_suppression,
        qos: s.qos,
        silenceWarning: s.silence_warning,
        deaf: s.deaf,
        mute: s.mute,
        input: {
          availableDevices: s.input.available_devices,
          device: s.input.device_id,
          volume: s.input.volume,
        },
        output: {
          availableDevices: s.output.available_devices,
          device: s.output.device_id,
          volume: s.output.volume,
        },
        mode: {
          type: s.mode.type,
          autoThreshold: s.mode.auto_threshold,
          threshold: s.mode.threshold,
          shortcut: s.mode.shortcut,
          delay: s.mode.delay,
        },
      }));
  }

  /**
   * Set current voice settings, overriding the current settings until this session disconnects.
   * This also locks the settings for any other rpc sessions which may be connected.
   * @param {Object} args Settings
   * @returns {Promise}
   */
  setVoiceSettings(args) {
    return this.request(RPCCommands$1.SET_VOICE_SETTINGS, {
      automatic_gain_control: args.automaticGainControl,
      echo_cancellation: args.echoCancellation,
      noise_suppression: args.noiseSuppression,
      qos: args.qos,
      silence_warning: args.silenceWarning,
      deaf: args.deaf,
      mute: args.mute,
      input: args.input ? {
        device_id: args.input.device,
        volume: args.input.volume,
      } : undefined,
      output: args.output ? {
        device_id: args.output.device,
        volume: args.output.volume,
      } : undefined,
      mode: args.mode ? {
        mode: args.mode.type,
        auto_threshold: args.mode.autoThreshold,
        threshold: args.mode.threshold,
        shortcut: args.mode.shortcut,
        delay: args.mode.delay,
      } : undefined,
    });
  }

  /**
   * Capture a shortcut using the client
   * The callback takes (key, stop) where `stop` is a function that will stop capturing.
   * This `stop` function must be called before disconnecting or else the user will have
   * to restart their client.
   * @param {Function} callback Callback handling keys
   * @returns {Promise<Function>}
   */
  captureShortcut(callback) {
    const subid = subKey(RPCEvents$1.CAPTURE_SHORTCUT_CHANGE);
    const stop = () => {
      this._subscriptions.delete(subid);
      return this.request(RPCCommands$1.CAPTURE_SHORTCUT, { action: 'STOP' });
    };
    this._subscriptions.set(subid, ({ shortcut }) => {
      callback(shortcut, stop);
    });
    return this.request(RPCCommands$1.CAPTURE_SHORTCUT, { action: 'START' })
      .then(() => stop);
  }

  /**
   * Sets the presence for the logged in user.
   * @param {object} args The rich presence to pass.
   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
   * @returns {Promise}
   */
  setActivity(args = {}, pid = getPid()) {
    let timestamps;
    let assets;
    let party;
    let secrets;
    if (args.startTimestamp || args.endTimestamp) {
      timestamps = {
        start: args.startTimestamp,
        end: args.endTimestamp,
      };
      if (timestamps.start instanceof Date) {
        timestamps.start = Math.round(timestamps.start.getTime());
      }
      if (timestamps.end instanceof Date) {
        timestamps.end = Math.round(timestamps.end.getTime());
      }
      if (timestamps.start > 2147483647000) {
        throw new RangeError('timestamps.start must fit into a unix timestamp');
      }
      if (timestamps.end > 2147483647000) {
        throw new RangeError('timestamps.end must fit into a unix timestamp');
      }
    }
    if (
      args.largeImageKey || args.largeImageText
      || args.smallImageKey || args.smallImageText
    ) {
      assets = {
        large_image: args.largeImageKey,
        large_text: args.largeImageText,
        small_image: args.smallImageKey,
        small_text: args.smallImageText,
      };
    }
    if (args.partySize || args.partyId || args.partyMax) {
      party = { id: args.partyId };
      if (args.partySize || args.partyMax) {
        party.size = [args.partySize, args.partyMax];
      }
    }
    if (args.matchSecret || args.joinSecret || args.spectateSecret) {
      secrets = {
        match: args.matchSecret,
        join: args.joinSecret,
        spectate: args.spectateSecret,
      };
    }

    return this.request(RPCCommands$1.SET_ACTIVITY, {
      pid,
      activity: {
        state: args.state,
        details: args.details,
        timestamps,
        assets,
        party,
        secrets,
        instance: !!args.instance,
      },
    });
  }

  /**
   * Clears the currently set presence, if any. This will hide the "Playing X" message
   * displayed below the user's name.
   * @param {number} [pid] The application's process ID. Defaults to the executing process' PID.
   * @returns {Promise}
   */
  clearActivity(pid = getPid()) {
    return this.request(RPCCommands$1.SET_ACTIVITY, {
      pid,
    });
  }

  /**
   * Invite a user to join the game the RPC user is currently playing
   * @param {User} user The user to invite
   * @returns {Promise}
   */
  sendJoinInvite(user) {
    return this.request(RPCCommands$1.SEND_ACTIVITY_JOIN_INVITE, {
      user_id: user.id || user,
    });
  }

  /**
   * Request to join the game the user is playing
   * @param {User} user The user whose game you want to request to join
   * @returns {Promise}
   */
  sendJoinRequest(user) {
    return this.request(RPCCommands$1.SEND_ACTIVITY_JOIN_REQUEST, {
      user_id: user.id || user,
    });
  }

  /**
   * Reject a join request from a user
   * @param {User} user The user whose request you wish to reject
   * @returns {Promise}
   */
  closeJoinRequest(user) {
    return this.request(RPCCommands$1.CLOSE_ACTIVITY_JOIN_REQUEST, {
      user_id: user.id || user,
    });
  }

  createLobby(type, capacity, metadata) {
    return this.request(RPCCommands$1.CREATE_LOBBY, {
      type,
      capacity,
      metadata,
    });
  }

  updateLobby(lobby, { type, owner, capacity, metadata } = {}) {
    return this.request(RPCCommands$1.UPDATE_LOBBY, {
      id: lobby.id || lobby,
      type,
      owner_id: (owner && owner.id) || owner,
      capacity,
      metadata,
    });
  }

  deleteLobby(lobby) {
    return this.request(RPCCommands$1.DELETE_LOBBY, {
      id: lobby.id || lobby,
    });
  }

  connectToLobby(id, secret) {
    return this.request(RPCCommands$1.CONNECT_TO_LOBBY, {
      id,
      secret,
    });
  }

  sendToLobby(lobby, data) {
    return this.request(RPCCommands$1.SEND_TO_LOBBY, {
      id: lobby.id || lobby,
      data,
    });
  }

  disconnectFromLobby(lobby) {
    return this.request(RPCCommands$1.DISCONNECT_FROM_LOBBY, {
      id: lobby.id || lobby,
    });
  }

  updateLobbyMember(lobby, user, metadata) {
    return this.request(RPCCommands$1.UPDATE_LOBBY_MEMBER, {
      lobby_id: lobby.id || lobby,
      user_id: user.id || user,
      metadata,
    });
  }

  getRelationships() {
    const types = Object.keys(RelationshipTypes$1);
    return this.request(RPCCommands$1.GET_RELATIONSHIPS)
      .then((o) => o.relationships.map((r) => ({
        ...r,
        type: types[r.type],
      })));
  }

  /**
   * Subscribe to an event
   * @param {string} event Name of event e.g. `MESSAGE_CREATE`
   * @param {Object} [args] Args for event e.g. `{ channel_id: '1234' }`
   * @param {Function} callback Callback when an event for the subscription is triggered
   * @returns {Promise<Object>}
   */
  subscribe(event, args, callback) {
    if (!callback && typeof args === 'function') {
      callback = args;
      args = undefined;
    }
    return this.request(RPCCommands$1.SUBSCRIBE, args, event).then(() => {
      const subid = subKey(event, args);
      this._subscriptions.set(subid, callback);
      return {
        unsubscribe: () => this.request(RPCCommands$1.UNSUBSCRIBE, args, event)
          .then(() => this._subscriptions.delete(subid)),
      };
    });
  }

  /**
   * Destroy the client
   */
  async destroy() {
    this.transport.close();
  }
}

var client = RPCClient;

var src = {
  Client: client,
  register(id) {
    return util.register(`discord-${id}`);
  },
};

var Logger = /** @class */ (function () {
    function Logger() {
        this.plugin = this.plugin;
    }
    Logger.prototype.log = function (message, showPopups) {
        if (showPopups) {
            new obsidian.Notice(message);
        }
        console.log("discordrpc: " + message);
    };
    Logger.prototype.logIgnoreNoNotice = function (message) {
        new obsidian.Notice(message);
        console.log("discordrpc: " + message);
    };
    return Logger;
}());

var DiscordRPCSettings = /** @class */ (function () {
    function DiscordRPCSettings() {
        this.showVaultName = true;
        this.showCurrentFileName = true;
        this.showPopups = true;
        this.customVaultName = "";
        this.showFileExtension = false;
        this.useLoadedTime = false;
    }
    return DiscordRPCSettings;
}());
var PluginState;
(function (PluginState) {
    PluginState[PluginState["connected"] = 0] = "connected";
    PluginState[PluginState["connecting"] = 1] = "connecting";
    PluginState[PluginState["disconnected"] = 2] = "disconnected";
})(PluginState || (PluginState = {}));

var DiscordRPCSettingsTab = /** @class */ (function (_super) {
    __extends(DiscordRPCSettingsTab, _super);
    function DiscordRPCSettingsTab() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logger = new Logger();
        return _this;
    }
    DiscordRPCSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Discord Rich Presence Settings" });
        containerEl.createEl("h3", { text: "Vault Name Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show Vault Name")
            .setDesc("Enable this to show the name of the vault you are working with.")
            .addToggle(function (boolean) {
            return boolean.setValue(plugin.settings.showVaultName).onChange(function (value) {
                plugin.settings.showVaultName = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("Vault Name is now Visable");
                }
                else {
                    _this.logger.logIgnoreNoNotice("Vault Name is no longer Visable");
                }
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Set Custom Vault Name")
            .setDesc("Change the vault name shown publicly. Leave blank to use your actual vault name.")
            .addText(function (text) {
            return text.setValue(plugin.settings.customVaultName).onChange(function (value) {
                plugin.settings.customVaultName = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "File Name Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show Current File Name")
            .setDesc("Enable this to show the name of the file you are working on.")
            .addToggle(function (boolean) {
            return boolean
                .setValue(plugin.settings.showCurrentFileName)
                .onChange(function (value) {
                plugin.settings.showCurrentFileName = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("File Name is now Visable");
                }
                else {
                    _this.logger.logIgnoreNoNotice("File Name is no longer Visable");
                }
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Show File Extension")
            .setDesc("Enable this to show file extension.")
            .addToggle(function (boolean) {
            return boolean
                .setValue(plugin.settings.showFileExtension)
                .onChange(function (value) {
                plugin.settings.showFileExtension = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "Time Settings" });
        new obsidian.Setting(containerEl)
            .setName("Use Obsidian Total Time")
            .setDesc("Enable to use the total time you have been using Obsidian, instead of the time spent editing a single file.")
            .addToggle(function (boolean) {
            boolean.setValue(plugin.settings.useLoadedTime).onChange(function (value) {
                plugin.settings.useLoadedTime = value;
                plugin.saveData(plugin.settings);
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
        containerEl.createEl("h3", { text: "Notice Settings" });
        new obsidian.Setting(containerEl)
            .setName("Show Notices")
            .setDesc("Enable this to show connection Notices.")
            .addToggle(function (boolean) {
            return boolean.setValue(plugin.settings.showPopups).onChange(function (value) {
                plugin.settings.showPopups = value;
                plugin.saveData(plugin.settings);
                if (boolean.getValue()) {
                    _this.logger.logIgnoreNoNotice("Notices Enabled");
                }
                else {
                    _this.logger.logIgnoreNoNotice("Notices Disabled");
                }
                plugin.setActivity(_this.app.vault.getName(), plugin.currentFile.basename, plugin.currentFile.extension);
            });
        });
    };
    return DiscordRPCSettingsTab;
}(obsidian.PluginSettingTab));

var StatusBar = /** @class */ (function () {
    function StatusBar(statusBarEl) {
        this.statusBarEl = statusBarEl;
    }
    StatusBar.prototype.displayState = function (state) {
        switch (state) {
            case PluginState.connected:
                this.displayConnected(10000);
                break;
            case PluginState.connecting:
                this.statusBarEl.setText("Connecting to Discord...");
                break;
            case PluginState.disconnected:
                this.statusBarEl.setText("\uD83D\uDDD8 Reconnect to Discord");
                break;
        }
    };
    StatusBar.prototype.displayConnected = function (timeout) {
        var _this = this;
        this.statusBarEl.setText("\uD83C\uDF0D Connected to Discord");
        if (timeout && timeout > 0) {
            window.setTimeout(function () {
                _this.statusBarEl.setText("");
            }, timeout);
        }
    };
    return StatusBar;
}());

var ObsidianDiscordRPC = /** @class */ (function (_super) {
    __extends(ObsidianDiscordRPC, _super);
    function ObsidianDiscordRPC() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.logger = new Logger();
        return _this;
    }
    ObsidianDiscordRPC.prototype.setState = function (state) {
        this.state = state;
    };
    ObsidianDiscordRPC.prototype.getState = function () {
        return this.state;
    };
    ObsidianDiscordRPC.prototype.getApp = function () {
        return this.app;
    };
    ObsidianDiscordRPC.prototype.getPluginManifest = function () {
        return this.manifest;
    };
    ObsidianDiscordRPC.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var statusBarEl, _a, activeLeaf, files;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        this.loadedTime = new Date();
                        statusBarEl = this.addStatusBarItem();
                        this.statusBar = new StatusBar(statusBarEl);
                        _a = this;
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = (_b.sent()) || new DiscordRPCSettings();
                        this.registerEvent(this.app.workspace.on("file-open", this.onFileOpen, this));
                        this.registerDomEvent(statusBarEl, "click", function () { return __awaiter(_this, void 0, void 0, function () {
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        if (!(this.getState() == PluginState.disconnected)) return [3 /*break*/, 2];
                                        return [4 /*yield*/, this.connectDiscord()];
                                    case 1:
                                        _a.sent();
                                        _a.label = 2;
                                    case 2: return [2 /*return*/];
                                }
                            });
                        }); });
                        this.addSettingTab(new DiscordRPCSettingsTab(this.app, this));
                        this.addCommand({
                            id: "reconnect-discord",
                            name: "Reconnect to Discord",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.connectDiscord()];
                                    case 1: return [2 /*return*/, _a.sent()];
                                }
                            }); }); },
                        });
                        return [4 /*yield*/, this.connectDiscord()];
                    case 2:
                        _b.sent();
                        activeLeaf = this.app.workspace.activeLeaf;
                        files = this.app.vault.getMarkdownFiles();
                        files.forEach(function (file) {
                            if (file.basename === activeLeaf.getDisplayText()) {
                                _this.onFileOpen(file);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.onFileOpen = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.currentFile = file;
                        if (!(this.getState() === PluginState.connected)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.setActivity(this.app.vault.getName(), file.basename, file.extension)];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        this.rpc.clearActivity();
                        this.rpc.destroy();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.connectDiscord = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.rpc = new src.Client({
                            transport: "ipc",
                        });
                        this.setState(PluginState.connecting);
                        this.statusBar.displayState(this.getState());
                        this.rpc.once("ready", function () {
                            _this.setState(PluginState.connected);
                            _this.statusBar.displayState(_this.getState());
                            _this.logger.log("Connected to Discord", _this.settings.showPopups);
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 4, , 5]);
                        return [4 /*yield*/, this.rpc.login({
                                clientId: "763813185022197831",
                            })];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.setActivity(this.app.vault.getName(), "...", "")];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 4:
                        _a.sent();
                        this.setState(PluginState.disconnected);
                        this.statusBar.displayState(this.getState());
                        this.logger.log("Failed to connect to Discord", this.settings.showPopups);
                        return [3 /*break*/, 5];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianDiscordRPC.prototype.setActivity = function (vaultName, fileName, fileExtension) {
        return __awaiter(this, void 0, void 0, function () {
            var vault, file, date;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.getState() === PluginState.connected)) return [3 /*break*/, 8];
                        vault = void 0;
                        if (this.settings.customVaultName === "") {
                            vault = vaultName;
                        }
                        else {
                            vault = this.settings.customVaultName;
                        }
                        file = void 0;
                        if (this.settings.showFileExtension) {
                            file = fileName + "." + fileExtension;
                        }
                        else {
                            file = fileName;
                        }
                        date = void 0;
                        if (this.settings.useLoadedTime) {
                            date = this.loadedTime;
                        }
                        else {
                            date = new Date();
                        }
                        if (!(this.settings.showVaultName && this.settings.showCurrentFileName)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.rpc.setActivity({
                                details: "Editing " + file,
                                state: "Vault: " + vault,
                                startTimestamp: date,
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 1:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 2:
                        if (!this.settings.showVaultName) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.rpc.setActivity({
                                state: "Vault: " + vault,
                                startTimestamp: date,
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 3:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 4:
                        if (!this.settings.showCurrentFileName) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.rpc.setActivity({
                                details: "Editing " + file,
                                startTimestamp: date,
                                largeImageKey: "logo",
                                largeImageText: "Obsidian",
                            })];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 6: return [4 /*yield*/, this.rpc.setActivity({
                            startTimestamp: date,
                            largeImageKey: "logo",
                            largeImageText: "Obsidian",
                        })];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return ObsidianDiscordRPC;
}(obsidian.Plugin));

module.exports = ObsidianDiscordRPC;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL25vZGVfbW9kdWxlcy9kaXNjb3JkLXJwYy9zcmMvdXRpbC5qcyIsIi4uL25vZGVfbW9kdWxlcy9ub2RlLWZldGNoL2Jyb3dzZXIuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL3RyYW5zcG9ydHMvaXBjLmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy9jb25zdGFudHMuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL3RyYW5zcG9ydHMvd2Vic29ja2V0LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy90cmFuc3BvcnRzL2luZGV4LmpzIiwiLi4vbm9kZV9tb2R1bGVzL2Rpc2NvcmQtcnBjL3NyYy9jbGllbnQuanMiLCIuLi9ub2RlX21vZHVsZXMvZGlzY29yZC1ycGMvc3JjL2luZGV4LmpzIiwiLi4vc3JjL2xvZ2dlci50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5ncy50cyIsIi4uL3NyYy9zZXR0aW5ncy9zZXR0aW5ncy10YWIudHMiLCIuLi9zcmMvc3RhdHVzLWJhci50cyIsIi4uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHByaXZhdGVNYXApIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBnZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcHJpdmF0ZU1hcC5nZXQocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZFNldChyZWNlaXZlciwgcHJpdmF0ZU1hcCwgdmFsdWUpIHtcclxuICAgIGlmICghcHJpdmF0ZU1hcC5oYXMocmVjZWl2ZXIpKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImF0dGVtcHRlZCB0byBzZXQgcHJpdmF0ZSBmaWVsZCBvbiBub24taW5zdGFuY2VcIik7XHJcbiAgICB9XHJcbiAgICBwcml2YXRlTWFwLnNldChyZWNlaXZlciwgdmFsdWUpO1xyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcblxubGV0IHJlZ2lzdGVyO1xudHJ5IHtcbiAgY29uc3QgeyBhcHAgfSA9IHJlcXVpcmUoJ2VsZWN0cm9uJyk7XG4gIHJlZ2lzdGVyID0gYXBwLnNldEFzRGVmYXVsdFByb3RvY29sQ2xpZW50LmJpbmQoYXBwKTtcbn0gY2F0Y2ggKGVycikge1xuICB0cnkge1xuICAgIHJlZ2lzdGVyID0gcmVxdWlyZSgncmVnaXN0ZXItc2NoZW1lJyk7XG4gIH0gY2F0Y2ggKGUpIHt9IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZW1wdHlcbn1cblxuaWYgKHR5cGVvZiByZWdpc3RlciAhPT0gJ2Z1bmN0aW9uJykge1xuICByZWdpc3RlciA9ICgpID0+IGZhbHNlO1xufVxuXG5mdW5jdGlvbiBwaWQoKSB7XG4gIGlmICh0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5waWQ7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59XG5cbmNvbnN0IHV1aWQ0MTIyID0gKCkgPT4ge1xuICBsZXQgdXVpZCA9ICcnO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IDMyOyBpICs9IDEpIHtcbiAgICBpZiAoaSA9PT0gOCB8fCBpID09PSAxMiB8fCBpID09PSAxNiB8fCBpID09PSAyMCkge1xuICAgICAgdXVpZCArPSAnLSc7XG4gICAgfVxuICAgIGxldCBuO1xuICAgIGlmIChpID09PSAxMikge1xuICAgICAgbiA9IDQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IHJhbmRvbSA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDA7XG4gICAgICBpZiAoaSA9PT0gMTYpIHtcbiAgICAgICAgbiA9IChyYW5kb20gJiAzKSB8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuID0gcmFuZG9tO1xuICAgICAgfVxuICAgIH1cbiAgICB1dWlkICs9IG4udG9TdHJpbmcoMTYpO1xuICB9XG4gIHJldHVybiB1dWlkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBpZCxcbiAgcmVnaXN0ZXIsXG4gIHV1aWQ6IHV1aWQ0MTIyLFxufTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyByZWY6IGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLWdsb2JhbFxudmFyIGdldEdsb2JhbCA9IGZ1bmN0aW9uICgpIHtcblx0Ly8gdGhlIG9ubHkgcmVsaWFibGUgbWVhbnMgdG8gZ2V0IHRoZSBnbG9iYWwgb2JqZWN0IGlzXG5cdC8vIGBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpYFxuXHQvLyBIb3dldmVyLCB0aGlzIGNhdXNlcyBDU1AgdmlvbGF0aW9ucyBpbiBDaHJvbWUgYXBwcy5cblx0aWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykgeyByZXR1cm4gc2VsZjsgfVxuXHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIHdpbmRvdzsgfVxuXHRpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHsgcmV0dXJuIGdsb2JhbDsgfVxuXHR0aHJvdyBuZXcgRXJyb3IoJ3VuYWJsZSB0byBsb2NhdGUgZ2xvYmFsIG9iamVjdCcpO1xufVxuXG52YXIgZ2xvYmFsID0gZ2V0R2xvYmFsKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cyA9IGdsb2JhbC5mZXRjaDtcblxuLy8gTmVlZGVkIGZvciBUeXBlU2NyaXB0IGFuZCBXZWJwYWNrLlxuaWYgKGdsb2JhbC5mZXRjaCkge1xuXHRleHBvcnRzLmRlZmF1bHQgPSBnbG9iYWwuZmV0Y2guYmluZChnbG9iYWwpO1xufVxuXG5leHBvcnRzLkhlYWRlcnMgPSBnbG9iYWwuSGVhZGVycztcbmV4cG9ydHMuUmVxdWVzdCA9IGdsb2JhbC5SZXF1ZXN0O1xuZXhwb3J0cy5SZXNwb25zZSA9IGdsb2JhbC5SZXNwb25zZTsiLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IG5ldCA9IHJlcXVpcmUoJ25ldCcpO1xuY29uc3QgRXZlbnRFbWl0dGVyID0gcmVxdWlyZSgnZXZlbnRzJyk7XG5jb25zdCBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcbmNvbnN0IHsgdXVpZCB9ID0gcmVxdWlyZSgnLi4vdXRpbCcpO1xuXG5jb25zdCBPUENvZGVzID0ge1xuICBIQU5EU0hBS0U6IDAsXG4gIEZSQU1FOiAxLFxuICBDTE9TRTogMixcbiAgUElORzogMyxcbiAgUE9ORzogNCxcbn07XG5cbmZ1bmN0aW9uIGdldElQQ1BhdGgoaWQpIHtcbiAgaWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcbiAgICByZXR1cm4gYFxcXFxcXFxcP1xcXFxwaXBlXFxcXGRpc2NvcmQtaXBjLSR7aWR9YDtcbiAgfVxuICBjb25zdCB7IGVudjogeyBYREdfUlVOVElNRV9ESVIsIFRNUERJUiwgVE1QLCBURU1QIH0gfSA9IHByb2Nlc3M7XG4gIGNvbnN0IHByZWZpeCA9IFhER19SVU5USU1FX0RJUiB8fCBUTVBESVIgfHwgVE1QIHx8IFRFTVAgfHwgJy90bXAnO1xuICByZXR1cm4gYCR7cHJlZml4LnJlcGxhY2UoL1xcLyQvLCAnJyl9L2Rpc2NvcmQtaXBjLSR7aWR9YDtcbn1cblxuZnVuY3Rpb24gZ2V0SVBDKGlkID0gMCkge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIGNvbnN0IHBhdGggPSBnZXRJUENQYXRoKGlkKTtcbiAgICBjb25zdCBvbmVycm9yID0gKCkgPT4ge1xuICAgICAgaWYgKGlkIDwgMTApIHtcbiAgICAgICAgcmVzb2x2ZShnZXRJUEMoaWQgKyAxKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZWplY3QobmV3IEVycm9yKCdDb3VsZCBub3QgY29ubmVjdCcpKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNvbnN0IHNvY2sgPSBuZXQuY3JlYXRlQ29ubmVjdGlvbihwYXRoLCAoKSA9PiB7XG4gICAgICBzb2NrLnJlbW92ZUxpc3RlbmVyKCdlcnJvcicsIG9uZXJyb3IpO1xuICAgICAgcmVzb2x2ZShzb2NrKTtcbiAgICB9KTtcbiAgICBzb2NrLm9uY2UoJ2Vycm9yJywgb25lcnJvcik7XG4gIH0pO1xufVxuXG5hc3luYyBmdW5jdGlvbiBmaW5kRW5kcG9pbnQodHJpZXMgPSAwKSB7XG4gIGlmICh0cmllcyA+IDMwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBlbmRwb2ludCcpO1xuICB9XG4gIGNvbnN0IGVuZHBvaW50ID0gYGh0dHA6Ly8xMjcuMC4wLjE6JHs2NDYzICsgKHRyaWVzICUgMTApfWA7XG4gIHRyeSB7XG4gICAgY29uc3QgciA9IGF3YWl0IGZldGNoKGVuZHBvaW50KTtcbiAgICBpZiAoci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgcmV0dXJuIGVuZHBvaW50O1xuICAgIH1cbiAgICByZXR1cm4gZmluZEVuZHBvaW50KHRyaWVzICsgMSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZmluZEVuZHBvaW50KHRyaWVzICsgMSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZW5jb2RlKG9wLCBkYXRhKSB7XG4gIGRhdGEgPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcbiAgY29uc3QgbGVuID0gQnVmZmVyLmJ5dGVMZW5ndGgoZGF0YSk7XG4gIGNvbnN0IHBhY2tldCA9IEJ1ZmZlci5hbGxvYyg4ICsgbGVuKTtcbiAgcGFja2V0LndyaXRlSW50MzJMRShvcCwgMCk7XG4gIHBhY2tldC53cml0ZUludDMyTEUobGVuLCA0KTtcbiAgcGFja2V0LndyaXRlKGRhdGEsIDgsIGxlbik7XG4gIHJldHVybiBwYWNrZXQ7XG59XG5cbmNvbnN0IHdvcmtpbmcgPSB7XG4gIGZ1bGw6ICcnLFxuICBvcDogdW5kZWZpbmVkLFxufTtcblxuZnVuY3Rpb24gZGVjb2RlKHNvY2tldCwgY2FsbGJhY2spIHtcbiAgY29uc3QgcGFja2V0ID0gc29ja2V0LnJlYWQoKTtcbiAgaWYgKCFwYWNrZXQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgeyBvcCB9ID0gd29ya2luZztcbiAgbGV0IHJhdztcbiAgaWYgKHdvcmtpbmcuZnVsbCA9PT0gJycpIHtcbiAgICBvcCA9IHdvcmtpbmcub3AgPSBwYWNrZXQucmVhZEludDMyTEUoMCk7XG4gICAgY29uc3QgbGVuID0gcGFja2V0LnJlYWRJbnQzMkxFKDQpO1xuICAgIHJhdyA9IHBhY2tldC5zbGljZSg4LCBsZW4gKyA4KTtcbiAgfSBlbHNlIHtcbiAgICByYXcgPSBwYWNrZXQudG9TdHJpbmcoKTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZGF0YSA9IEpTT04ucGFyc2Uod29ya2luZy5mdWxsICsgcmF3KTtcbiAgICBjYWxsYmFjayh7IG9wLCBkYXRhIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIGNhbGxiYWNrLXJldHVyblxuICAgIHdvcmtpbmcuZnVsbCA9ICcnO1xuICAgIHdvcmtpbmcub3AgPSB1bmRlZmluZWQ7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIHdvcmtpbmcuZnVsbCArPSByYXc7XG4gIH1cblxuICBkZWNvZGUoc29ja2V0LCBjYWxsYmFjayk7XG59XG5cbmNsYXNzIElQQ1RyYW5zcG9ydCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5zb2NrZXQgPSBudWxsO1xuICB9XG5cbiAgYXN5bmMgY29ubmVjdCgpIHtcbiAgICBjb25zdCBzb2NrZXQgPSB0aGlzLnNvY2tldCA9IGF3YWl0IGdldElQQygpO1xuICAgIHNvY2tldC5vbignY2xvc2UnLCB0aGlzLm9uQ2xvc2UuYmluZCh0aGlzKSk7XG4gICAgc29ja2V0Lm9uKCdlcnJvcicsIHRoaXMub25DbG9zZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmVtaXQoJ29wZW4nKTtcbiAgICBzb2NrZXQud3JpdGUoZW5jb2RlKE9QQ29kZXMuSEFORFNIQUtFLCB7XG4gICAgICB2OiAxLFxuICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudC5jbGllbnRJZCxcbiAgICB9KSk7XG4gICAgc29ja2V0LnBhdXNlKCk7XG4gICAgc29ja2V0Lm9uKCdyZWFkYWJsZScsICgpID0+IHtcbiAgICAgIGRlY29kZShzb2NrZXQsICh7IG9wLCBkYXRhIH0pID0+IHtcbiAgICAgICAgc3dpdGNoIChvcCkge1xuICAgICAgICAgIGNhc2UgT1BDb2Rlcy5QSU5HOlxuICAgICAgICAgICAgdGhpcy5zZW5kKGRhdGEsIE9QQ29kZXMuUE9ORyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIE9QQ29kZXMuRlJBTUU6XG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRhdGEuY21kID09PSAnQVVUSE9SSVpFJyAmJiBkYXRhLmV2dCAhPT0gJ0VSUk9SJykge1xuICAgICAgICAgICAgICBmaW5kRW5kcG9pbnQoKS50aGVuKChlbmRwb2ludCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xpZW50LnJlcXVlc3QuZW5kcG9pbnQgPSBlbmRwb2ludDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVtaXQoJ21lc3NhZ2UnLCBkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgT1BDb2Rlcy5DTE9TRTpcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY2xvc2UnLCBkYXRhKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBvbkNsb3NlKGUpIHtcbiAgICB0aGlzLmVtaXQoJ2Nsb3NlJywgZSk7XG4gIH1cblxuICBzZW5kKGRhdGEsIG9wID0gT1BDb2Rlcy5GUkFNRSkge1xuICAgIHRoaXMuc29ja2V0LndyaXRlKGVuY29kZShvcCwgZGF0YSkpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgdGhpcy5zZW5kKHt9LCBPUENvZGVzLkNMT1NFKTtcbiAgICB0aGlzLnNvY2tldC5lbmQoKTtcbiAgfVxuXG4gIHBpbmcoKSB7XG4gICAgdGhpcy5zZW5kKHV1aWQoKSwgT1BDb2Rlcy5QSU5HKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IElQQ1RyYW5zcG9ydDtcbm1vZHVsZS5leHBvcnRzLmVuY29kZSA9IGVuY29kZTtcbm1vZHVsZS5leHBvcnRzLmRlY29kZSA9IGRlY29kZTtcbiIsIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24ga2V5TWlycm9yKGFycikge1xuICBjb25zdCB0bXAgPSB7fTtcbiAgZm9yIChjb25zdCB2YWx1ZSBvZiBhcnIpIHtcbiAgICB0bXBbdmFsdWVdID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHRtcDtcbn1cblxuXG5leHBvcnRzLmJyb3dzZXIgPSB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJztcblxuZXhwb3J0cy5SUENDb21tYW5kcyA9IGtleU1pcnJvcihbXG4gICdESVNQQVRDSCcsXG4gICdBVVRIT1JJWkUnLFxuICAnQVVUSEVOVElDQVRFJyxcbiAgJ0dFVF9HVUlMRCcsXG4gICdHRVRfR1VJTERTJyxcbiAgJ0dFVF9DSEFOTkVMJyxcbiAgJ0dFVF9DSEFOTkVMUycsXG4gICdDUkVBVEVfQ0hBTk5FTF9JTlZJVEUnLFxuICAnR0VUX1JFTEFUSU9OU0hJUFMnLFxuICAnR0VUX1VTRVInLFxuICAnU1VCU0NSSUJFJyxcbiAgJ1VOU1VCU0NSSUJFJyxcbiAgJ1NFVF9VU0VSX1ZPSUNFX1NFVFRJTkdTJyxcbiAgJ1NFVF9VU0VSX1ZPSUNFX1NFVFRJTkdTXzInLFxuICAnU0VMRUNUX1ZPSUNFX0NIQU5ORUwnLFxuICAnR0VUX1NFTEVDVEVEX1ZPSUNFX0NIQU5ORUwnLFxuICAnU0VMRUNUX1RFWFRfQ0hBTk5FTCcsXG4gICdHRVRfVk9JQ0VfU0VUVElOR1MnLFxuICAnU0VUX1ZPSUNFX1NFVFRJTkdTXzInLFxuICAnU0VUX1ZPSUNFX1NFVFRJTkdTJyxcbiAgJ0NBUFRVUkVfU0hPUlRDVVQnLFxuICAnU0VUX0FDVElWSVRZJyxcbiAgJ1NFTkRfQUNUSVZJVFlfSk9JTl9JTlZJVEUnLFxuICAnQ0xPU0VfQUNUSVZJVFlfSk9JTl9SRVFVRVNUJyxcbiAgJ0FDVElWSVRZX0lOVklURV9VU0VSJyxcbiAgJ0FDQ0VQVF9BQ1RJVklUWV9JTlZJVEUnLFxuICAnSU5WSVRFX0JST1dTRVInLFxuICAnREVFUF9MSU5LJyxcbiAgJ0NPTk5FQ1RJT05TX0NBTExCQUNLJyxcbiAgJ0JSQUlOVFJFRV9QT1BVUF9CUklER0VfQ0FMTEJBQ0snLFxuICAnR0lGVF9DT0RFX0JST1dTRVInLFxuICAnR1VJTERfVEVNUExBVEVfQlJPV1NFUicsXG4gICdPVkVSTEFZJyxcbiAgJ0JST1dTRVJfSEFORE9GRicsXG4gICdTRVRfQ0VSVElGSUVEX0RFVklDRVMnLFxuICAnR0VUX0lNQUdFJyxcbiAgJ0NSRUFURV9MT0JCWScsXG4gICdVUERBVEVfTE9CQlknLFxuICAnREVMRVRFX0xPQkJZJyxcbiAgJ1VQREFURV9MT0JCWV9NRU1CRVInLFxuICAnQ09OTkVDVF9UT19MT0JCWScsXG4gICdESVNDT05ORUNUX0ZST01fTE9CQlknLFxuICAnU0VORF9UT19MT0JCWScsXG4gICdTRUFSQ0hfTE9CQklFUycsXG4gICdDT05ORUNUX1RPX0xPQkJZX1ZPSUNFJyxcbiAgJ0RJU0NPTk5FQ1RfRlJPTV9MT0JCWV9WT0lDRScsXG4gICdTRVRfT1ZFUkxBWV9MT0NLRUQnLFxuICAnT1BFTl9PVkVSTEFZX0FDVElWSVRZX0lOVklURScsXG4gICdPUEVOX09WRVJMQVlfR1VJTERfSU5WSVRFJyxcbiAgJ09QRU5fT1ZFUkxBWV9WT0lDRV9TRVRUSU5HUycsXG4gICdWQUxJREFURV9BUFBMSUNBVElPTicsXG4gICdHRVRfRU5USVRMRU1FTlRfVElDS0VUJyxcbiAgJ0dFVF9BUFBMSUNBVElPTl9USUNLRVQnLFxuICAnU1RBUlRfUFVSQ0hBU0UnLFxuICAnR0VUX1NLVVMnLFxuICAnR0VUX0VOVElUTEVNRU5UUycsXG4gICdHRVRfTkVUV09SS0lOR19DT05GSUcnLFxuICAnTkVUV09SS0lOR19TWVNURU1fTUVUUklDUycsXG4gICdORVRXT1JLSU5HX1BFRVJfTUVUUklDUycsXG4gICdORVRXT1JLSU5HX0NSRUFURV9UT0tFTicsXG4gICdTRVRfVVNFUl9BQ0hJRVZFTUVOVCcsXG4gICdHRVRfVVNFUl9BQ0hJRVZFTUVOVFMnLFxuXSk7XG5cbmV4cG9ydHMuUlBDRXZlbnRzID0ga2V5TWlycm9yKFtcbiAgJ0NVUlJFTlRfVVNFUl9VUERBVEUnLFxuICAnR1VJTERfU1RBVFVTJyxcbiAgJ0dVSUxEX0NSRUFURScsXG4gICdDSEFOTkVMX0NSRUFURScsXG4gICdSRUxBVElPTlNISVBfVVBEQVRFJyxcbiAgJ1ZPSUNFX0NIQU5ORUxfU0VMRUNUJyxcbiAgJ1ZPSUNFX1NUQVRFX0NSRUFURScsXG4gICdWT0lDRV9TVEFURV9ERUxFVEUnLFxuICAnVk9JQ0VfU1RBVEVfVVBEQVRFJyxcbiAgJ1ZPSUNFX1NFVFRJTkdTX1VQREFURScsXG4gICdWT0lDRV9TRVRUSU5HU19VUERBVEVfMicsXG4gICdWT0lDRV9DT05ORUNUSU9OX1NUQVRVUycsXG4gICdTUEVBS0lOR19TVEFSVCcsXG4gICdTUEVBS0lOR19TVE9QJyxcbiAgJ0dBTUVfSk9JTicsXG4gICdHQU1FX1NQRUNUQVRFJyxcbiAgJ0FDVElWSVRZX0pPSU4nLFxuICAnQUNUSVZJVFlfSk9JTl9SRVFVRVNUJyxcbiAgJ0FDVElWSVRZX1NQRUNUQVRFJyxcbiAgJ0FDVElWSVRZX0lOVklURScsXG4gICdOT1RJRklDQVRJT05fQ1JFQVRFJyxcbiAgJ01FU1NBR0VfQ1JFQVRFJyxcbiAgJ01FU1NBR0VfVVBEQVRFJyxcbiAgJ01FU1NBR0VfREVMRVRFJyxcbiAgJ0xPQkJZX0RFTEVURScsXG4gICdMT0JCWV9VUERBVEUnLFxuICAnTE9CQllfTUVNQkVSX0NPTk5FQ1QnLFxuICAnTE9CQllfTUVNQkVSX0RJU0NPTk5FQ1QnLFxuICAnTE9CQllfTUVNQkVSX1VQREFURScsXG4gICdMT0JCWV9NRVNTQUdFJyxcbiAgJ0NBUFRVUkVfU0hPUlRDVVRfQ0hBTkdFJyxcbiAgJ09WRVJMQVknLFxuICAnT1ZFUkxBWV9VUERBVEUnLFxuICAnRU5USVRMRU1FTlRfQ1JFQVRFJyxcbiAgJ0VOVElUTEVNRU5UX0RFTEVURScsXG4gICdVU0VSX0FDSElFVkVNRU5UX1VQREFURScsXG4gICdSRUFEWScsXG4gICdFUlJPUicsXG5dKTtcblxuZXhwb3J0cy5SUENFcnJvcnMgPSB7XG4gIENBUFRVUkVfU0hPUlRDVVRfQUxSRUFEWV9MSVNURU5JTkc6IDUwMDQsXG4gIEdFVF9HVUlMRF9USU1FRF9PVVQ6IDUwMDIsXG4gIElOVkFMSURfQUNUSVZJVFlfSk9JTl9SRVFVRVNUOiA0MDEyLFxuICBJTlZBTElEX0FDVElWSVRZX1NFQ1JFVDogNTAwNSxcbiAgSU5WQUxJRF9DSEFOTkVMOiA0MDA1LFxuICBJTlZBTElEX0NMSUVOVElEOiA0MDA3LFxuICBJTlZBTElEX0NPTU1BTkQ6IDQwMDIsXG4gIElOVkFMSURfRU5USVRMRU1FTlQ6IDQwMTUsXG4gIElOVkFMSURfRVZFTlQ6IDQwMDQsXG4gIElOVkFMSURfR0lGVF9DT0RFOiA0MDE2LFxuICBJTlZBTElEX0dVSUxEOiA0MDAzLFxuICBJTlZBTElEX0lOVklURTogNDAxMSxcbiAgSU5WQUxJRF9MT0JCWTogNDAxMyxcbiAgSU5WQUxJRF9MT0JCWV9TRUNSRVQ6IDQwMTQsXG4gIElOVkFMSURfT1JJR0lOOiA0MDA4LFxuICBJTlZBTElEX1BBWUxPQUQ6IDQwMDAsXG4gIElOVkFMSURfUEVSTUlTU0lPTlM6IDQwMDYsXG4gIElOVkFMSURfVE9LRU46IDQwMDksXG4gIElOVkFMSURfVVNFUjogNDAxMCxcbiAgTE9CQllfRlVMTDogNTAwNyxcbiAgTk9fRUxJR0lCTEVfQUNUSVZJVFk6IDUwMDYsXG4gIE9BVVRIMl9FUlJPUjogNTAwMCxcbiAgUFVSQ0hBU0VfQ0FOQ0VMRUQ6IDUwMDgsXG4gIFBVUkNIQVNFX0VSUk9SOiA1MDA5LFxuICBSQVRFX0xJTUlURUQ6IDUwMTEsXG4gIFNFTEVDVF9DSEFOTkVMX1RJTUVEX09VVDogNTAwMSxcbiAgU0VMRUNUX1ZPSUNFX0ZPUkNFX1JFUVVJUkVEOiA1MDAzLFxuICBTRVJWSUNFX1VOQVZBSUxBQkxFOiAxMDAxLFxuICBUUkFOU0FDVElPTl9BQk9SVEVEOiAxMDAyLFxuICBVTkFVVEhPUklaRURfRk9SX0FDSElFVkVNRU5UOiA1MDEwLFxuICBVTktOT1dOX0VSUk9SOiAxMDAwLFxufTtcblxuZXhwb3J0cy5SUENDbG9zZUNvZGVzID0ge1xuICBDTE9TRV9OT1JNQUw6IDEwMDAsXG4gIENMT1NFX1VOU1VQUE9SVEVEOiAxMDAzLFxuICBDTE9TRV9BQk5PUk1BTDogMTAwNixcbiAgSU5WQUxJRF9DTElFTlRJRDogNDAwMCxcbiAgSU5WQUxJRF9PUklHSU46IDQwMDEsXG4gIFJBVEVMSU1JVEVEOiA0MDAyLFxuICBUT0tFTl9SRVZPS0VEOiA0MDAzLFxuICBJTlZBTElEX1ZFUlNJT046IDQwMDQsXG4gIElOVkFMSURfRU5DT0RJTkc6IDQwMDUsXG59O1xuXG5leHBvcnRzLkxvYmJ5VHlwZXMgPSB7XG4gIFBSSVZBVEU6IDEsXG4gIFBVQkxJQzogMixcbn07XG5cbmV4cG9ydHMuUmVsYXRpb25zaGlwVHlwZXMgPSB7XG4gIE5PTkU6IDAsXG4gIEZSSUVORDogMSxcbiAgQkxPQ0tFRDogMixcbiAgUEVORElOR19JTkNPTUlORzogMyxcbiAgUEVORElOR19PVVRHT0lORzogNCxcbiAgSU1QTElDSVQ6IDUsXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IHsgYnJvd3NlciB9ID0gcmVxdWlyZSgnLi4vY29uc3RhbnRzJyk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuY29uc3QgV2ViU29ja2V0ID0gYnJvd3NlciA/IHdpbmRvdy5XZWJTb2NrZXQgOiByZXF1aXJlKCd3cycpO1xuXG5jb25zdCBwYWNrID0gKGQpID0+IEpTT04uc3RyaW5naWZ5KGQpO1xuY29uc3QgdW5wYWNrID0gKHMpID0+IEpTT04ucGFyc2Uocyk7XG5cbmNsYXNzIFdlYlNvY2tldFRyYW5zcG9ydCBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy53cyA9IG51bGw7XG4gICAgdGhpcy50cmllcyA9IDA7XG4gIH1cblxuICBhc3luYyBjb25uZWN0KHRyaWVzID0gdGhpcy50cmllcykge1xuICAgIGlmICh0aGlzLmNvbm5lY3RlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBwb3J0ID0gNjQ2MyArICh0cmllcyAlIDEwKTtcbiAgICB0aGlzLmhvc3RBbmRQb3J0ID0gYDEyNy4wLjAuMToke3BvcnR9YDtcbiAgICBjb25zdCB3cyA9IHRoaXMud3MgPSBuZXcgV2ViU29ja2V0KFxuICAgICAgYHdzOi8vJHt0aGlzLmhvc3RBbmRQb3J0fS8/dj0xJmNsaWVudF9pZD0ke3RoaXMuY2xpZW50LmNsaWVudElkfWAsXG4gICAgICB7XG4gICAgICAgIG9yaWdpbjogdGhpcy5jbGllbnQub3B0aW9ucy5vcmlnaW4sXG4gICAgICB9LFxuICAgICk7XG4gICAgd3Mub25vcGVuID0gdGhpcy5vbk9wZW4uYmluZCh0aGlzKTtcbiAgICB3cy5vbmNsb3NlID0gd3Mub25lcnJvciA9IHRoaXMub25DbG9zZS5iaW5kKHRoaXMpO1xuICAgIHdzLm9ubWVzc2FnZSA9IHRoaXMub25NZXNzYWdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBzZW5kKGRhdGEpIHtcbiAgICBpZiAoIXRoaXMud3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy53cy5zZW5kKHBhY2soZGF0YSkpO1xuICB9XG5cbiAgY2xvc2UoKSB7XG4gICAgaWYgKCF0aGlzLndzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMud3MuY2xvc2UoKTtcbiAgfVxuXG4gIHBpbmcoKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5LWZ1bmN0aW9uXG5cbiAgb25NZXNzYWdlKGV2ZW50KSB7XG4gICAgdGhpcy5lbWl0KCdtZXNzYWdlJywgdW5wYWNrKGV2ZW50LmRhdGEpKTtcbiAgfVxuXG4gIG9uT3BlbigpIHtcbiAgICB0aGlzLmVtaXQoJ29wZW4nKTtcbiAgfVxuXG4gIG9uQ2xvc2UoZSkge1xuICAgIHRyeSB7XG4gICAgICB0aGlzLndzLmNsb3NlKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7fSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLWVtcHR5XG4gICAgY29uc3QgZGVyciA9IGUuY29kZSA+PSA0MDAwICYmIGUuY29kZSA8IDUwMDA7XG4gICAgaWYgKCFlLmNvZGUgfHwgZGVycikge1xuICAgICAgdGhpcy5lbWl0KCdjbG9zZScsIGUpO1xuICAgIH1cbiAgICBpZiAoIWRlcnIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wbHVzcGx1c1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmNvbm5lY3QoZS5jb2RlID09PSAxMDA2ID8gKyt0aGlzLnRyaWVzIDogMCksIDI1MCk7XG4gICAgfVxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gV2ViU29ja2V0VHJhbnNwb3J0O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgaXBjOiByZXF1aXJlKCcuL2lwYycpLFxuICB3ZWJzb2NrZXQ6IHJlcXVpcmUoJy4vd2Vic29ja2V0JyksXG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKCdldmVudHMnKTtcbmNvbnN0IHsgc2V0VGltZW91dCwgY2xlYXJUaW1lb3V0IH0gPSByZXF1aXJlKCd0aW1lcnMnKTtcbmNvbnN0IGZldGNoID0gcmVxdWlyZSgnbm9kZS1mZXRjaCcpO1xuY29uc3QgdHJhbnNwb3J0cyA9IHJlcXVpcmUoJy4vdHJhbnNwb3J0cycpO1xuY29uc3QgeyBSUENDb21tYW5kcywgUlBDRXZlbnRzLCBSZWxhdGlvbnNoaXBUeXBlcyB9ID0gcmVxdWlyZSgnLi9jb25zdGFudHMnKTtcbmNvbnN0IHsgcGlkOiBnZXRQaWQsIHV1aWQgfSA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5mdW5jdGlvbiBzdWJLZXkoZXZlbnQsIGFyZ3MpIHtcbiAgcmV0dXJuIGAke2V2ZW50fSR7SlNPTi5zdHJpbmdpZnkoYXJncyl9YDtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7UlBDQ2xpZW50T3B0aW9uc31cbiAqIEBleHRlbmRzIHtDbGllbnRPcHRpb25zfVxuICogQHByb3Age3N0cmluZ30gdHJhbnNwb3J0IFJQQyB0cmFuc3BvcnQuIG9uZSBvZiBgaXBjYCBvciBgd2Vic29ja2V0YFxuICovXG5cbi8qKlxuICogVGhlIG1haW4gaHViIGZvciBpbnRlcmFjdGluZyB3aXRoIERpc2NvcmQgUlBDXG4gKiBAZXh0ZW5kcyB7QmFzZUNsaWVudH1cbiAqL1xuY2xhc3MgUlBDQ2xpZW50IGV4dGVuZHMgRXZlbnRFbWl0dGVyIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7UlBDQ2xpZW50T3B0aW9uc30gW29wdGlvbnNdIE9wdGlvbnMgZm9yIHRoZSBjbGllbnQuXG4gICAqIFlvdSBtdXN0IHByb3ZpZGUgYSB0cmFuc3BvcnRcbiAgICovXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IG51bGw7XG4gICAgdGhpcy5jbGllbnRJZCA9IG51bGw7XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWNhdGlvbiB1c2VkIGluIHRoaXMgY2xpZW50XG4gICAgICogQHR5cGUgez9DbGllbnRBcHBsaWNhdGlvbn1cbiAgICAgKi9cbiAgICB0aGlzLmFwcGxpY2F0aW9uID0gbnVsbDtcblxuICAgIC8qKlxuICAgICAqIFVzZXIgdXNlZCBpbiB0aGlzIGFwcGxpY2F0aW9uXG4gICAgICogQHR5cGUgez9Vc2VyfVxuICAgICAqL1xuICAgIHRoaXMudXNlciA9IG51bGw7XG5cbiAgICBjb25zdCBUcmFuc3BvcnQgPSB0cmFuc3BvcnRzW29wdGlvbnMudHJhbnNwb3J0XTtcbiAgICBpZiAoIVRyYW5zcG9ydCkge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUlBDX0lOVkFMSURfVFJBTlNQT1JUJywgb3B0aW9ucy50cmFuc3BvcnQpO1xuICAgIH1cblxuICAgIHRoaXMuZmV0Y2ggPSAobWV0aG9kLCBwYXRoLCB7IGRhdGEsIHF1ZXJ5IH0gPSB7fSkgPT5cbiAgICAgIGZldGNoKGAke3RoaXMuZmV0Y2guZW5kcG9pbnR9JHtwYXRofSR7cXVlcnkgPyBuZXcgVVJMU2VhcmNoUGFyYW1zKHF1ZXJ5KSA6ICcnfWAsIHtcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3RoaXMuYWNjZXNzVG9rZW59YCxcbiAgICAgICAgfSxcbiAgICAgIH0pLnRoZW4oYXN5bmMgKHIpID0+IHtcbiAgICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHIuanNvbigpO1xuICAgICAgICBpZiAoIXIub2spIHtcbiAgICAgICAgICBjb25zdCBlID0gbmV3IEVycm9yKHIuc3RhdHVzKTtcbiAgICAgICAgICBlLmJvZHkgPSBib2R5O1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuZmV0Y2guZW5kcG9pbnQgPSAnaHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGknO1xuXG4gICAgLyoqXG4gICAgICogUmF3IHRyYW5zcG9ydCB1c2VyZFxuICAgICAqIEB0eXBlIHtSUENUcmFuc3BvcnR9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLnRyYW5zcG9ydCA9IG5ldyBUcmFuc3BvcnQodGhpcyk7XG4gICAgdGhpcy50cmFuc3BvcnQub24oJ21lc3NhZ2UnLCB0aGlzLl9vblJwY01lc3NhZ2UuYmluZCh0aGlzKSk7XG5cbiAgICAvKipcbiAgICAgKiBNYXAgb2Ygbm9uY2VzIGJlaW5nIGV4cGVjdGVkIGZyb20gdGhlIHRyYW5zcG9ydFxuICAgICAqIEB0eXBlIHtNYXB9XG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICB0aGlzLl9leHBlY3RpbmcgPSBuZXcgTWFwKCk7XG5cbiAgICAvKipcbiAgICAgKiBNYXAgb2YgY3VycmVudCBzdWJzY3JpcHRpb25zXG4gICAgICogQHR5cGUge01hcH1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMgPSBuZXcgTWFwKCk7XG5cbiAgICB0aGlzLl9jb25uZWN0UHJvbWlzZSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBTZWFyY2ggYW5kIGNvbm5lY3QgdG8gUlBDXG4gICAqL1xuICBjb25uZWN0KGNsaWVudElkKSB7XG4gICAgaWYgKHRoaXMuX2Nvbm5lY3RQcm9taXNlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fY29ubmVjdFByb21pc2U7XG4gICAgfVxuICAgIHRoaXMuX2Nvbm5lY3RQcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jbGllbnRJZCA9IGNsaWVudElkO1xuICAgICAgY29uc3QgdGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KG5ldyBFcnJvcignUlBDX0NPTk5FQ1RJT05fVElNRU9VVCcpKSwgMTBlMyk7XG4gICAgICB0aW1lb3V0LnVucmVmKCk7XG4gICAgICB0aGlzLm9uY2UoJ2Nvbm5lY3RlZCcsICgpID0+IHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICByZXNvbHZlKHRoaXMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5vbmNlKCdjbG9zZScsICgpID0+IHtcbiAgICAgICAgdGhpcy5fZXhwZWN0aW5nLmZvckVhY2goKGUpID0+IHtcbiAgICAgICAgICBlLnJlamVjdChuZXcgRXJyb3IoJ2Nvbm5lY3Rpb24gY2xvc2VkJykpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbWl0KCdkaXNjb25uZWN0ZWQnKTtcbiAgICAgICAgcmVqZWN0KG5ldyBFcnJvcignY29ubmVjdGlvbiBjbG9zZWQnKSk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMudHJhbnNwb3J0LmNvbm5lY3QoKS5jYXRjaChyZWplY3QpO1xuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLl9jb25uZWN0UHJvbWlzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7UlBDTG9naW5PcHRpb25zfVxuICAgKiBAcGFyYW0ge3N0cmluZ30gY2xpZW50SWQgQ2xpZW50IElEXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbY2xpZW50U2VjcmV0XSBDbGllbnQgc2VjcmV0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbYWNjZXNzVG9rZW5dIEFjY2VzcyB0b2tlblxuICAgKiBAcGFyYW0ge3N0cmluZ30gW3JwY1Rva2VuXSBSUEMgdG9rZW5cbiAgICogQHBhcmFtIHtzdHJpbmd9IFt0b2tlbkVuZHBvaW50XSBUb2tlbiBlbmRwb2ludFxuICAgKiBAcGFyYW0ge3N0cmluZ1tdfSBbc2NvcGVzXSBTY29wZXMgdG8gYXV0aG9yaXplIHdpdGhcbiAgICovXG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGF1dGhlbnRpY2F0aW9uIGZsb3cuIEF1dG9tYXRpY2FsbHkgY2FsbHMgQ2xpZW50I2Nvbm5lY3QgaWYgbmVlZGVkLlxuICAgKiBAcGFyYW0ge1JQQ0xvZ2luT3B0aW9uc30gb3B0aW9ucyBPcHRpb25zIGZvciBhdXRoZW50aWNhdGlvbi5cbiAgICogQXQgbGVhc3Qgb25lIHByb3BlcnR5IG11c3QgYmUgcHJvdmlkZWQgdG8gcGVyZm9ybSBsb2dpbi5cbiAgICogQGV4YW1wbGUgY2xpZW50LmxvZ2luKHsgY2xpZW50SWQ6ICcxMjM0NTY3JywgY2xpZW50U2VjcmV0OiAnYWJjZGVmMTIzJyB9KTtcbiAgICogQHJldHVybnMge1Byb21pc2U8UlBDQ2xpZW50Pn1cbiAgICovXG4gIGFzeW5jIGxvZ2luKG9wdGlvbnMgPSB7fSkge1xuICAgIGxldCB7IGNsaWVudElkLCBhY2Nlc3NUb2tlbiB9ID0gb3B0aW9ucztcbiAgICBhd2FpdCB0aGlzLmNvbm5lY3QoY2xpZW50SWQpO1xuICAgIGlmICghb3B0aW9ucy5zY29wZXMpIHtcbiAgICAgIHRoaXMuZW1pdCgncmVhZHknKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpZiAoIWFjY2Vzc1Rva2VuKSB7XG4gICAgICBhY2Nlc3NUb2tlbiA9IGF3YWl0IHRoaXMuYXV0aG9yaXplKG9wdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5hdXRoZW50aWNhdGUoYWNjZXNzVG9rZW4pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3RcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNtZCBDb21tYW5kXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbYXJncz17fV0gQXJndW1lbnRzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBbZXZ0XSBFdmVudFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIHJlcXVlc3QoY21kLCBhcmdzLCBldnQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgY29uc3Qgbm9uY2UgPSB1dWlkKCk7XG4gICAgICB0aGlzLnRyYW5zcG9ydC5zZW5kKHsgY21kLCBhcmdzLCBldnQsIG5vbmNlIH0pO1xuICAgICAgdGhpcy5fZXhwZWN0aW5nLnNldChub25jZSwgeyByZXNvbHZlLCByZWplY3QgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogTWVzc2FnZSBoYW5kbGVyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBtZXNzYWdlIG1lc3NhZ2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vblJwY01lc3NhZ2UobWVzc2FnZSkge1xuICAgIGlmIChtZXNzYWdlLmNtZCA9PT0gUlBDQ29tbWFuZHMuRElTUEFUQ0ggJiYgbWVzc2FnZS5ldnQgPT09IFJQQ0V2ZW50cy5SRUFEWSkge1xuICAgICAgaWYgKG1lc3NhZ2UuZGF0YS51c2VyKSB7XG4gICAgICAgIHRoaXMudXNlciA9IG1lc3NhZ2UuZGF0YS51c2VyO1xuICAgICAgfVxuICAgICAgdGhpcy5lbWl0KCdjb25uZWN0ZWQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2V4cGVjdGluZy5oYXMobWVzc2FnZS5ub25jZSkpIHtcbiAgICAgIGNvbnN0IHsgcmVzb2x2ZSwgcmVqZWN0IH0gPSB0aGlzLl9leHBlY3RpbmcuZ2V0KG1lc3NhZ2Uubm9uY2UpO1xuICAgICAgaWYgKG1lc3NhZ2UuZXZ0ID09PSAnRVJST1InKSB7XG4gICAgICAgIGNvbnN0IGUgPSBuZXcgRXJyb3IobWVzc2FnZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICBlLmNvZGUgPSBtZXNzYWdlLmRhdGEuY29kZTtcbiAgICAgICAgZS5kYXRhID0gbWVzc2FnZS5kYXRhO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXNvbHZlKG1lc3NhZ2UuZGF0YSk7XG4gICAgICB9XG4gICAgICB0aGlzLl9leHBlY3RpbmcuZGVsZXRlKG1lc3NhZ2Uubm9uY2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBzdWJpZCA9IHN1YktleShtZXNzYWdlLmV2dCwgbWVzc2FnZS5hcmdzKTtcbiAgICAgIGlmICghdGhpcy5fc3Vic2NyaXB0aW9ucy5oYXMoc3ViaWQpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZ2V0KHN1YmlkKShtZXNzYWdlLmRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBdXRob3JpemVcbiAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgb3B0aW9uc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGFzeW5jIGF1dGhvcml6ZSh7IHNjb3BlcywgY2xpZW50U2VjcmV0LCBycGNUb2tlbiwgcmVkaXJlY3RVcmkgfSA9IHt9KSB7XG4gICAgaWYgKGNsaWVudFNlY3JldCAmJiBycGNUb2tlbiA9PT0gdHJ1ZSkge1xuICAgICAgY29uc3QgYm9keSA9IGF3YWl0IHRoaXMuZmV0Y2goJ1BPU1QnLCAnL29hdXRoMi90b2tlbi9ycGMnLCB7XG4gICAgICAgIGRhdGE6IG5ldyBVUkxTZWFyY2hQYXJhbXMoe1xuICAgICAgICAgIGNsaWVudF9pZDogdGhpcy5jbGllbnRJZCxcbiAgICAgICAgICBjbGllbnRfc2VjcmV0OiBjbGllbnRTZWNyZXQsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG4gICAgICBycGNUb2tlbiA9IGJvZHkucnBjX3Rva2VuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgY29kZSB9ID0gYXdhaXQgdGhpcy5yZXF1ZXN0KCdBVVRIT1JJWkUnLCB7XG4gICAgICBzY29wZXMsXG4gICAgICBjbGllbnRfaWQ6IHRoaXMuY2xpZW50SWQsXG4gICAgICBycGNfdG9rZW46IHJwY1Rva2VuLFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmZldGNoKCdQT1NUJywgJy9vYXV0aDIvdG9rZW4nLCB7XG4gICAgICBkYXRhOiBuZXcgVVJMU2VhcmNoUGFyYW1zKHtcbiAgICAgICAgY2xpZW50X2lkOiB0aGlzLmNsaWVudElkLFxuICAgICAgICBjbGllbnRfc2VjcmV0OiBjbGllbnRTZWNyZXQsXG4gICAgICAgIGNvZGUsXG4gICAgICAgIGdyYW50X3R5cGU6ICdhdXRob3JpemF0aW9uX2NvZGUnLFxuICAgICAgICByZWRpcmVjdF91cmk6IHJlZGlyZWN0VXJpLFxuICAgICAgfSksXG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzcG9uc2UuYWNjZXNzX3Rva2VuO1xuICB9XG5cbiAgLyoqXG4gICAqIEF1dGhlbnRpY2F0ZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gYWNjZXNzVG9rZW4gYWNjZXNzIHRva2VuXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYXV0aGVudGljYXRlKGFjY2Vzc1Rva2VuKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdCgnQVVUSEVOVElDQVRFJywgeyBhY2Nlc3NfdG9rZW46IGFjY2Vzc1Rva2VuIH0pXG4gICAgICAudGhlbigoeyBhcHBsaWNhdGlvbiwgdXNlciB9KSA9PiB7XG4gICAgICAgIHRoaXMuYWNjZXNzVG9rZW4gPSBhY2Nlc3NUb2tlbjtcbiAgICAgICAgdGhpcy5hcHBsaWNhdGlvbiA9IGFwcGxpY2F0aW9uO1xuICAgICAgICB0aGlzLnVzZXIgPSB1c2VyO1xuICAgICAgICB0aGlzLmVtaXQoJ3JlYWR5Jyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfSk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBGZXRjaCBhIGd1aWxkXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBpZCBHdWlsZCBJRFxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVvdXRdIFRpbWVvdXQgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxHdWlsZD59XG4gICAqL1xuICBnZXRHdWlsZChpZCwgdGltZW91dCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuR0VUX0dVSUxELCB7IGd1aWxkX2lkOiBpZCwgdGltZW91dCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGZXRjaCBhbGwgZ3VpbGRzXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZW91dF0gVGltZW91dCByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENvbGxlY3Rpb248U25vd2ZsYWtlLCBHdWlsZD4+fVxuICAgKi9cbiAgZ2V0R3VpbGRzKHRpbWVvdXQpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkdFVF9HVUlMRFMsIHsgdGltZW91dCB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYSBjaGFubmVsXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBpZCBDaGFubmVsIElEXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBbdGltZW91dF0gVGltZW91dCByZXF1ZXN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlPENoYW5uZWw+fVxuICAgKi9cbiAgZ2V0Q2hhbm5lbChpZCwgdGltZW91dCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuR0VUX0NIQU5ORUwsIHsgY2hhbm5lbF9pZDogaWQsIHRpbWVvdXQgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGFsbCBjaGFubmVsc1xuICAgKiBAcGFyYW0ge1Nub3dmbGFrZX0gW2lkXSBHdWlsZCBJRFxuICAgKiBAcGFyYW0ge251bWJlcn0gW3RpbWVvdXRdIFRpbWVvdXQgcmVxdWVzdFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxDb2xsZWN0aW9uPFNub3dmbGFrZSwgQ2hhbm5lbD4+fVxuICAgKi9cbiAgYXN5bmMgZ2V0Q2hhbm5lbHMoaWQsIHRpbWVvdXQpIHtcbiAgICBjb25zdCB7IGNoYW5uZWxzIH0gPSBhd2FpdCB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuR0VUX0NIQU5ORUxTLCB7XG4gICAgICB0aW1lb3V0LFxuICAgICAgZ3VpbGRfaWQ6IGlkLFxuICAgIH0pO1xuICAgIHJldHVybiBjaGFubmVscztcbiAgfVxuXG4gIC8qKlxuICAgKiBAdHlwZWRlZiB7Q2VydGlmaWVkRGV2aWNlfVxuICAgKiBAcHJvcCB7c3RyaW5nfSB0eXBlIE9uZSBvZiBgQVVESU9fSU5QVVRgLCBgQVVESU9fT1VUUFVUYCwgYFZJREVPX0lOUFVUYFxuICAgKiBAcHJvcCB7c3RyaW5nfSB1dWlkIFRoaXMgZGV2aWNlJ3MgV2luZG93cyBVVUlEXG4gICAqIEBwcm9wIHtvYmplY3R9IHZlbmRvciBWZW5kb3IgaW5mb3JtYXRpb25cbiAgICogQHByb3Age3N0cmluZ30gdmVuZG9yLm5hbWUgVmVuZG9yJ3MgbmFtZVxuICAgKiBAcHJvcCB7c3RyaW5nfSB2ZW5kb3IudXJsIFZlbmRvcidzIHVybFxuICAgKiBAcHJvcCB7b2JqZWN0fSBtb2RlbCBNb2RlbCBpbmZvcm1hdGlvblxuICAgKiBAcHJvcCB7c3RyaW5nfSBtb2RlbC5uYW1lIE1vZGVsJ3MgbmFtZVxuICAgKiBAcHJvcCB7c3RyaW5nfSBtb2RlbC51cmwgTW9kZWwncyB1cmxcbiAgICogQHByb3Age3N0cmluZ1tdfSByZWxhdGVkIEFycmF5IG9mIHJlbGF0ZWQgcHJvZHVjdCdzIFdpbmRvd3MgVVVJRHNcbiAgICogQHByb3Age2Jvb2xlYW59IGVjaG9DYW5jZWxsYXRpb24gSWYgdGhlIGRldmljZSBoYXMgZWNobyBjYW5jZWxsYXRpb25cbiAgICogQHByb3Age2Jvb2xlYW59IG5vaXNlU3VwcHJlc3Npb24gSWYgdGhlIGRldmljZSBoYXMgbm9pc2Ugc3VwcHJlc3Npb25cbiAgICogQHByb3Age2Jvb2xlYW59IGF1dG9tYXRpY0dhaW5Db250cm9sIElmIHRoZSBkZXZpY2UgaGFzIGF1dG9tYXRpYyBnYWluIGNvbnRyb2xcbiAgICogQHByb3Age2Jvb2xlYW59IGhhcmR3YXJlTXV0ZSBJZiB0aGUgZGV2aWNlIGhhcyBhIGhhcmR3YXJlIG11dGVcbiAgICovXG5cbiAgLyoqXG4gICAqIFRlbGwgZGlzY29yZCB3aGljaCBkZXZpY2VzIGFyZSBjZXJ0aWZpZWRcbiAgICogQHBhcmFtIHtDZXJ0aWZpZWREZXZpY2VbXX0gZGV2aWNlcyBDZXJ0aWZpZWQgZGV2aWNlcyB0byBzZW5kIHRvIGRpc2NvcmRcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRDZXJ0aWZpZWREZXZpY2VzKGRldmljZXMpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFVF9DRVJUSUZJRURfREVWSUNFUywge1xuICAgICAgZGV2aWNlczogZGV2aWNlcy5tYXAoKGQpID0+ICh7XG4gICAgICAgIHR5cGU6IGQudHlwZSxcbiAgICAgICAgaWQ6IGQudXVpZCxcbiAgICAgICAgdmVuZG9yOiBkLnZlbmRvcixcbiAgICAgICAgbW9kZWw6IGQubW9kZWwsXG4gICAgICAgIHJlbGF0ZWQ6IGQucmVsYXRlZCxcbiAgICAgICAgZWNob19jYW5jZWxsYXRpb246IGQuZWNob0NhbmNlbGxhdGlvbixcbiAgICAgICAgbm9pc2Vfc3VwcHJlc3Npb246IGQubm9pc2VTdXBwcmVzc2lvbixcbiAgICAgICAgYXV0b21hdGljX2dhaW5fY29udHJvbDogZC5hdXRvbWF0aWNHYWluQ29udHJvbCxcbiAgICAgICAgaGFyZHdhcmVfbXV0ZTogZC5oYXJkd2FyZU11dGUsXG4gICAgICB9KSksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHR5cGVkZWYge1VzZXJWb2ljZVNldHRpbmdzfVxuICAgKiBAcHJvcCB7U25vd2ZsYWtlfSBpZCBJRCBvZiB0aGUgdXNlciB0aGVzZSBzZXR0aW5ncyBhcHBseSB0b1xuICAgKiBAcHJvcCB7P09iamVjdH0gW3Bhbl0gUGFuIHNldHRpbmdzLCBhbiBvYmplY3Qgd2l0aCBgbGVmdGAgYW5kIGByaWdodGAgc2V0IGJldHdlZW5cbiAgICogMC4wIGFuZCAxLjAsIGluY2x1c2l2ZVxuICAgKiBAcHJvcCB7P251bWJlcn0gW3ZvbHVtZT0xMDBdIFRoZSB2b2x1bWVcbiAgICogQHByb3Age2Jvb2x9IFttdXRlXSBJZiB0aGUgdXNlciBpcyBtdXRlZFxuICAgKi9cblxuICAvKipcbiAgICogU2V0IHRoZSB2b2ljZSBzZXR0aW5ncyBmb3IgYSB1ZXIsIGJ5IGlkXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBpZCBJRCBvZiB0aGUgdXNlciB0byBzZXRcbiAgICogQHBhcmFtIHtVc2VyVm9pY2VTZXR0aW5nc30gc2V0dGluZ3MgU2V0dGluZ3NcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZXRVc2VyVm9pY2VTZXR0aW5ncyhpZCwgc2V0dGluZ3MpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFVF9VU0VSX1ZPSUNFX1NFVFRJTkdTLCB7XG4gICAgICB1c2VyX2lkOiBpZCxcbiAgICAgIHBhbjogc2V0dGluZ3MucGFuLFxuICAgICAgbXV0ZTogc2V0dGluZ3MubXV0ZSxcbiAgICAgIHZvbHVtZTogc2V0dGluZ3Mudm9sdW1lLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmUgdGhlIHVzZXIgdG8gYSB2b2ljZSBjaGFubmVsXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBpZCBJRCBvZiB0aGUgdm9pY2UgY2hhbm5lbFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVvdXRdIFRpbWVvdXQgZm9yIHRoZSBjb21tYW5kXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZm9yY2VdIEZvcmNlIHRoaXMgbW92ZS4gVGhpcyBzaG91bGQgb25seSBiZSBkb25lIGlmIHlvdVxuICAgKiBoYXZlIGV4cGxpY2l0IHBlcm1pc3Npb24gZnJvbSB0aGUgdXNlci5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZWxlY3RWb2ljZUNoYW5uZWwoaWQsIHsgdGltZW91dCwgZm9yY2UgPSBmYWxzZSB9ID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFTEVDVF9WT0lDRV9DSEFOTkVMLCB7IGNoYW5uZWxfaWQ6IGlkLCB0aW1lb3V0LCBmb3JjZSB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZlIHRoZSB1c2VyIHRvIGEgdGV4dCBjaGFubmVsXG4gICAqIEBwYXJhbSB7U25vd2ZsYWtlfSBpZCBJRCBvZiB0aGUgdm9pY2UgY2hhbm5lbFxuICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIE9wdGlvbnNcbiAgICogQHBhcmFtIHtudW1iZXJ9IFtvcHRpb25zLnRpbWVvdXRdIFRpbWVvdXQgZm9yIHRoZSBjb21tYW5kXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZm9yY2VdIEZvcmNlIHRoaXMgbW92ZS4gVGhpcyBzaG91bGQgb25seSBiZSBkb25lIGlmIHlvdVxuICAgKiBoYXZlIGV4cGxpY2l0IHBlcm1pc3Npb24gZnJvbSB0aGUgdXNlci5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZWxlY3RUZXh0Q2hhbm5lbChpZCwgeyB0aW1lb3V0LCBmb3JjZSA9IGZhbHNlIH0gPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VMRUNUX1RFWFRfQ0hBTk5FTCwgeyBjaGFubmVsX2lkOiBpZCwgdGltZW91dCwgZm9yY2UgfSk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGN1cnJlbnQgdm9pY2Ugc2V0dGluZ3NcbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBnZXRWb2ljZVNldHRpbmdzKCkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuR0VUX1ZPSUNFX1NFVFRJTkdTKVxuICAgICAgLnRoZW4oKHMpID0+ICh7XG4gICAgICAgIGF1dG9tYXRpY0dhaW5Db250cm9sOiBzLmF1dG9tYXRpY19nYWluX2NvbnRyb2wsXG4gICAgICAgIGVjaG9DYW5jZWxsYXRpb246IHMuZWNob19jYW5jZWxsYXRpb24sXG4gICAgICAgIG5vaXNlU3VwcHJlc3Npb246IHMubm9pc2Vfc3VwcHJlc3Npb24sXG4gICAgICAgIHFvczogcy5xb3MsXG4gICAgICAgIHNpbGVuY2VXYXJuaW5nOiBzLnNpbGVuY2Vfd2FybmluZyxcbiAgICAgICAgZGVhZjogcy5kZWFmLFxuICAgICAgICBtdXRlOiBzLm11dGUsXG4gICAgICAgIGlucHV0OiB7XG4gICAgICAgICAgYXZhaWxhYmxlRGV2aWNlczogcy5pbnB1dC5hdmFpbGFibGVfZGV2aWNlcyxcbiAgICAgICAgICBkZXZpY2U6IHMuaW5wdXQuZGV2aWNlX2lkLFxuICAgICAgICAgIHZvbHVtZTogcy5pbnB1dC52b2x1bWUsXG4gICAgICAgIH0sXG4gICAgICAgIG91dHB1dDoge1xuICAgICAgICAgIGF2YWlsYWJsZURldmljZXM6IHMub3V0cHV0LmF2YWlsYWJsZV9kZXZpY2VzLFxuICAgICAgICAgIGRldmljZTogcy5vdXRwdXQuZGV2aWNlX2lkLFxuICAgICAgICAgIHZvbHVtZTogcy5vdXRwdXQudm9sdW1lLFxuICAgICAgICB9LFxuICAgICAgICBtb2RlOiB7XG4gICAgICAgICAgdHlwZTogcy5tb2RlLnR5cGUsXG4gICAgICAgICAgYXV0b1RocmVzaG9sZDogcy5tb2RlLmF1dG9fdGhyZXNob2xkLFxuICAgICAgICAgIHRocmVzaG9sZDogcy5tb2RlLnRocmVzaG9sZCxcbiAgICAgICAgICBzaG9ydGN1dDogcy5tb2RlLnNob3J0Y3V0LFxuICAgICAgICAgIGRlbGF5OiBzLm1vZGUuZGVsYXksXG4gICAgICAgIH0sXG4gICAgICB9KSk7XG4gIH1cblxuICAvKipcbiAgICogU2V0IGN1cnJlbnQgdm9pY2Ugc2V0dGluZ3MsIG92ZXJyaWRpbmcgdGhlIGN1cnJlbnQgc2V0dGluZ3MgdW50aWwgdGhpcyBzZXNzaW9uIGRpc2Nvbm5lY3RzLlxuICAgKiBUaGlzIGFsc28gbG9ja3MgdGhlIHNldHRpbmdzIGZvciBhbnkgb3RoZXIgcnBjIHNlc3Npb25zIHdoaWNoIG1heSBiZSBjb25uZWN0ZWQuXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBhcmdzIFNldHRpbmdzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgc2V0Vm9pY2VTZXR0aW5ncyhhcmdzKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRVRfVk9JQ0VfU0VUVElOR1MsIHtcbiAgICAgIGF1dG9tYXRpY19nYWluX2NvbnRyb2w6IGFyZ3MuYXV0b21hdGljR2FpbkNvbnRyb2wsXG4gICAgICBlY2hvX2NhbmNlbGxhdGlvbjogYXJncy5lY2hvQ2FuY2VsbGF0aW9uLFxuICAgICAgbm9pc2Vfc3VwcHJlc3Npb246IGFyZ3Mubm9pc2VTdXBwcmVzc2lvbixcbiAgICAgIHFvczogYXJncy5xb3MsXG4gICAgICBzaWxlbmNlX3dhcm5pbmc6IGFyZ3Muc2lsZW5jZVdhcm5pbmcsXG4gICAgICBkZWFmOiBhcmdzLmRlYWYsXG4gICAgICBtdXRlOiBhcmdzLm11dGUsXG4gICAgICBpbnB1dDogYXJncy5pbnB1dCA/IHtcbiAgICAgICAgZGV2aWNlX2lkOiBhcmdzLmlucHV0LmRldmljZSxcbiAgICAgICAgdm9sdW1lOiBhcmdzLmlucHV0LnZvbHVtZSxcbiAgICAgIH0gOiB1bmRlZmluZWQsXG4gICAgICBvdXRwdXQ6IGFyZ3Mub3V0cHV0ID8ge1xuICAgICAgICBkZXZpY2VfaWQ6IGFyZ3Mub3V0cHV0LmRldmljZSxcbiAgICAgICAgdm9sdW1lOiBhcmdzLm91dHB1dC52b2x1bWUsXG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgICAgbW9kZTogYXJncy5tb2RlID8ge1xuICAgICAgICBtb2RlOiBhcmdzLm1vZGUudHlwZSxcbiAgICAgICAgYXV0b190aHJlc2hvbGQ6IGFyZ3MubW9kZS5hdXRvVGhyZXNob2xkLFxuICAgICAgICB0aHJlc2hvbGQ6IGFyZ3MubW9kZS50aHJlc2hvbGQsXG4gICAgICAgIHNob3J0Y3V0OiBhcmdzLm1vZGUuc2hvcnRjdXQsXG4gICAgICAgIGRlbGF5OiBhcmdzLm1vZGUuZGVsYXksXG4gICAgICB9IDogdW5kZWZpbmVkLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIENhcHR1cmUgYSBzaG9ydGN1dCB1c2luZyB0aGUgY2xpZW50XG4gICAqIFRoZSBjYWxsYmFjayB0YWtlcyAoa2V5LCBzdG9wKSB3aGVyZSBgc3RvcGAgaXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgc3RvcCBjYXB0dXJpbmcuXG4gICAqIFRoaXMgYHN0b3BgIGZ1bmN0aW9uIG11c3QgYmUgY2FsbGVkIGJlZm9yZSBkaXNjb25uZWN0aW5nIG9yIGVsc2UgdGhlIHVzZXIgd2lsbCBoYXZlXG4gICAqIHRvIHJlc3RhcnQgdGhlaXIgY2xpZW50LlxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayBoYW5kbGluZyBrZXlzXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPEZ1bmN0aW9uPn1cbiAgICovXG4gIGNhcHR1cmVTaG9ydGN1dChjYWxsYmFjaykge1xuICAgIGNvbnN0IHN1YmlkID0gc3ViS2V5KFJQQ0V2ZW50cy5DQVBUVVJFX1NIT1JUQ1VUX0NIQU5HRSk7XG4gICAgY29uc3Qgc3RvcCA9ICgpID0+IHtcbiAgICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuZGVsZXRlKHN1YmlkKTtcbiAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuQ0FQVFVSRV9TSE9SVENVVCwgeyBhY3Rpb246ICdTVE9QJyB9KTtcbiAgICB9O1xuICAgIHRoaXMuX3N1YnNjcmlwdGlvbnMuc2V0KHN1YmlkLCAoeyBzaG9ydGN1dCB9KSA9PiB7XG4gICAgICBjYWxsYmFjayhzaG9ydGN1dCwgc3RvcCk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5DQVBUVVJFX1NIT1JUQ1VULCB7IGFjdGlvbjogJ1NUQVJUJyB9KVxuICAgICAgLnRoZW4oKCkgPT4gc3RvcCk7XG4gIH1cblxuICAvKipcbiAgICogU2V0cyB0aGUgcHJlc2VuY2UgZm9yIHRoZSBsb2dnZWQgaW4gdXNlci5cbiAgICogQHBhcmFtIHtvYmplY3R9IGFyZ3MgVGhlIHJpY2ggcHJlc2VuY2UgdG8gcGFzcy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwaWRdIFRoZSBhcHBsaWNhdGlvbidzIHByb2Nlc3MgSUQuIERlZmF1bHRzIHRvIHRoZSBleGVjdXRpbmcgcHJvY2VzcycgUElELlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNldEFjdGl2aXR5KGFyZ3MgPSB7fSwgcGlkID0gZ2V0UGlkKCkpIHtcbiAgICBsZXQgdGltZXN0YW1wcztcbiAgICBsZXQgYXNzZXRzO1xuICAgIGxldCBwYXJ0eTtcbiAgICBsZXQgc2VjcmV0cztcbiAgICBpZiAoYXJncy5zdGFydFRpbWVzdGFtcCB8fCBhcmdzLmVuZFRpbWVzdGFtcCkge1xuICAgICAgdGltZXN0YW1wcyA9IHtcbiAgICAgICAgc3RhcnQ6IGFyZ3Muc3RhcnRUaW1lc3RhbXAsXG4gICAgICAgIGVuZDogYXJncy5lbmRUaW1lc3RhbXAsXG4gICAgICB9O1xuICAgICAgaWYgKHRpbWVzdGFtcHMuc3RhcnQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHRpbWVzdGFtcHMuc3RhcnQgPSBNYXRoLnJvdW5kKHRpbWVzdGFtcHMuc3RhcnQuZ2V0VGltZSgpKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aW1lc3RhbXBzLmVuZCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgdGltZXN0YW1wcy5lbmQgPSBNYXRoLnJvdW5kKHRpbWVzdGFtcHMuZW5kLmdldFRpbWUoKSk7XG4gICAgICB9XG4gICAgICBpZiAodGltZXN0YW1wcy5zdGFydCA+IDIxNDc0ODM2NDcwMDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3RpbWVzdGFtcHMuc3RhcnQgbXVzdCBmaXQgaW50byBhIHVuaXggdGltZXN0YW1wJyk7XG4gICAgICB9XG4gICAgICBpZiAodGltZXN0YW1wcy5lbmQgPiAyMTQ3NDgzNjQ3MDAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCd0aW1lc3RhbXBzLmVuZCBtdXN0IGZpdCBpbnRvIGEgdW5peCB0aW1lc3RhbXAnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgYXJncy5sYXJnZUltYWdlS2V5IHx8IGFyZ3MubGFyZ2VJbWFnZVRleHRcbiAgICAgIHx8IGFyZ3Muc21hbGxJbWFnZUtleSB8fCBhcmdzLnNtYWxsSW1hZ2VUZXh0XG4gICAgKSB7XG4gICAgICBhc3NldHMgPSB7XG4gICAgICAgIGxhcmdlX2ltYWdlOiBhcmdzLmxhcmdlSW1hZ2VLZXksXG4gICAgICAgIGxhcmdlX3RleHQ6IGFyZ3MubGFyZ2VJbWFnZVRleHQsXG4gICAgICAgIHNtYWxsX2ltYWdlOiBhcmdzLnNtYWxsSW1hZ2VLZXksXG4gICAgICAgIHNtYWxsX3RleHQ6IGFyZ3Muc21hbGxJbWFnZVRleHQsXG4gICAgICB9O1xuICAgIH1cbiAgICBpZiAoYXJncy5wYXJ0eVNpemUgfHwgYXJncy5wYXJ0eUlkIHx8IGFyZ3MucGFydHlNYXgpIHtcbiAgICAgIHBhcnR5ID0geyBpZDogYXJncy5wYXJ0eUlkIH07XG4gICAgICBpZiAoYXJncy5wYXJ0eVNpemUgfHwgYXJncy5wYXJ0eU1heCkge1xuICAgICAgICBwYXJ0eS5zaXplID0gW2FyZ3MucGFydHlTaXplLCBhcmdzLnBhcnR5TWF4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGFyZ3MubWF0Y2hTZWNyZXQgfHwgYXJncy5qb2luU2VjcmV0IHx8IGFyZ3Muc3BlY3RhdGVTZWNyZXQpIHtcbiAgICAgIHNlY3JldHMgPSB7XG4gICAgICAgIG1hdGNoOiBhcmdzLm1hdGNoU2VjcmV0LFxuICAgICAgICBqb2luOiBhcmdzLmpvaW5TZWNyZXQsXG4gICAgICAgIHNwZWN0YXRlOiBhcmdzLnNwZWN0YXRlU2VjcmV0LFxuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFVF9BQ1RJVklUWSwge1xuICAgICAgcGlkLFxuICAgICAgYWN0aXZpdHk6IHtcbiAgICAgICAgc3RhdGU6IGFyZ3Muc3RhdGUsXG4gICAgICAgIGRldGFpbHM6IGFyZ3MuZGV0YWlscyxcbiAgICAgICAgdGltZXN0YW1wcyxcbiAgICAgICAgYXNzZXRzLFxuICAgICAgICBwYXJ0eSxcbiAgICAgICAgc2VjcmV0cyxcbiAgICAgICAgaW5zdGFuY2U6ICEhYXJncy5pbnN0YW5jZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2xlYXJzIHRoZSBjdXJyZW50bHkgc2V0IHByZXNlbmNlLCBpZiBhbnkuIFRoaXMgd2lsbCBoaWRlIHRoZSBcIlBsYXlpbmcgWFwiIG1lc3NhZ2VcbiAgICogZGlzcGxheWVkIGJlbG93IHRoZSB1c2VyJ3MgbmFtZS5cbiAgICogQHBhcmFtIHtudW1iZXJ9IFtwaWRdIFRoZSBhcHBsaWNhdGlvbidzIHByb2Nlc3MgSUQuIERlZmF1bHRzIHRvIHRoZSBleGVjdXRpbmcgcHJvY2VzcycgUElELlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIGNsZWFyQWN0aXZpdHkocGlkID0gZ2V0UGlkKCkpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFVF9BQ1RJVklUWSwge1xuICAgICAgcGlkLFxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEludml0ZSBhIHVzZXIgdG8gam9pbiB0aGUgZ2FtZSB0aGUgUlBDIHVzZXIgaXMgY3VycmVudGx5IHBsYXlpbmdcbiAgICogQHBhcmFtIHtVc2VyfSB1c2VyIFRoZSB1c2VyIHRvIGludml0ZVxuICAgKiBAcmV0dXJucyB7UHJvbWlzZX1cbiAgICovXG4gIHNlbmRKb2luSW52aXRlKHVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlNFTkRfQUNUSVZJVFlfSk9JTl9JTlZJVEUsIHtcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXF1ZXN0IHRvIGpvaW4gdGhlIGdhbWUgdGhlIHVzZXIgaXMgcGxheWluZ1xuICAgKiBAcGFyYW0ge1VzZXJ9IHVzZXIgVGhlIHVzZXIgd2hvc2UgZ2FtZSB5b3Ugd2FudCB0byByZXF1ZXN0IHRvIGpvaW5cbiAgICogQHJldHVybnMge1Byb21pc2V9XG4gICAqL1xuICBzZW5kSm9pblJlcXVlc3QodXNlcikge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU0VORF9BQ1RJVklUWV9KT0lOX1JFUVVFU1QsIHtcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWplY3QgYSBqb2luIHJlcXVlc3QgZnJvbSBhIHVzZXJcbiAgICogQHBhcmFtIHtVc2VyfSB1c2VyIFRoZSB1c2VyIHdob3NlIHJlcXVlc3QgeW91IHdpc2ggdG8gcmVqZWN0XG4gICAqIEByZXR1cm5zIHtQcm9taXNlfVxuICAgKi9cbiAgY2xvc2VKb2luUmVxdWVzdCh1c2VyKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5DTE9TRV9BQ1RJVklUWV9KT0lOX1JFUVVFU1QsIHtcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZUxvYmJ5KHR5cGUsIGNhcGFjaXR5LCBtZXRhZGF0YSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuQ1JFQVRFX0xPQkJZLCB7XG4gICAgICB0eXBlLFxuICAgICAgY2FwYWNpdHksXG4gICAgICBtZXRhZGF0YSxcbiAgICB9KTtcbiAgfVxuXG4gIHVwZGF0ZUxvYmJ5KGxvYmJ5LCB7IHR5cGUsIG93bmVyLCBjYXBhY2l0eSwgbWV0YWRhdGEgfSA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5VUERBVEVfTE9CQlksIHtcbiAgICAgIGlkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICAgIHR5cGUsXG4gICAgICBvd25lcl9pZDogKG93bmVyICYmIG93bmVyLmlkKSB8fCBvd25lcixcbiAgICAgIGNhcGFjaXR5LFxuICAgICAgbWV0YWRhdGEsXG4gICAgfSk7XG4gIH1cblxuICBkZWxldGVMb2JieShsb2JieSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuREVMRVRFX0xPQkJZLCB7XG4gICAgICBpZDogbG9iYnkuaWQgfHwgbG9iYnksXG4gICAgfSk7XG4gIH1cblxuICBjb25uZWN0VG9Mb2JieShpZCwgc2VjcmV0KSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5DT05ORUNUX1RPX0xPQkJZLCB7XG4gICAgICBpZCxcbiAgICAgIHNlY3JldCxcbiAgICB9KTtcbiAgfVxuXG4gIHNlbmRUb0xvYmJ5KGxvYmJ5LCBkYXRhKSB7XG4gICAgcmV0dXJuIHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5TRU5EX1RPX0xPQkJZLCB7XG4gICAgICBpZDogbG9iYnkuaWQgfHwgbG9iYnksXG4gICAgICBkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgZGlzY29ubmVjdEZyb21Mb2JieShsb2JieSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuRElTQ09OTkVDVF9GUk9NX0xPQkJZLCB7XG4gICAgICBpZDogbG9iYnkuaWQgfHwgbG9iYnksXG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVMb2JieU1lbWJlcihsb2JieSwgdXNlciwgbWV0YWRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLlVQREFURV9MT0JCWV9NRU1CRVIsIHtcbiAgICAgIGxvYmJ5X2lkOiBsb2JieS5pZCB8fCBsb2JieSxcbiAgICAgIHVzZXJfaWQ6IHVzZXIuaWQgfHwgdXNlcixcbiAgICAgIG1ldGFkYXRhLFxuICAgIH0pO1xuICB9XG5cbiAgZ2V0UmVsYXRpb25zaGlwcygpIHtcbiAgICBjb25zdCB0eXBlcyA9IE9iamVjdC5rZXlzKFJlbGF0aW9uc2hpcFR5cGVzKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KFJQQ0NvbW1hbmRzLkdFVF9SRUxBVElPTlNISVBTKVxuICAgICAgLnRoZW4oKG8pID0+IG8ucmVsYXRpb25zaGlwcy5tYXAoKHIpID0+ICh7XG4gICAgICAgIC4uLnIsXG4gICAgICAgIHR5cGU6IHR5cGVzW3IudHlwZV0sXG4gICAgICB9KSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0byBhbiBldmVudFxuICAgKiBAcGFyYW0ge3N0cmluZ30gZXZlbnQgTmFtZSBvZiBldmVudCBlLmcuIGBNRVNTQUdFX0NSRUFURWBcbiAgICogQHBhcmFtIHtPYmplY3R9IFthcmdzXSBBcmdzIGZvciBldmVudCBlLmcuIGB7IGNoYW5uZWxfaWQ6ICcxMjM0JyB9YFxuICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFjayBDYWxsYmFjayB3aGVuIGFuIGV2ZW50IGZvciB0aGUgc3Vic2NyaXB0aW9uIGlzIHRyaWdnZXJlZFxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxPYmplY3Q+fVxuICAgKi9cbiAgc3Vic2NyaWJlKGV2ZW50LCBhcmdzLCBjYWxsYmFjaykge1xuICAgIGlmICghY2FsbGJhY2sgJiYgdHlwZW9mIGFyZ3MgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNhbGxiYWNrID0gYXJncztcbiAgICAgIGFyZ3MgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoUlBDQ29tbWFuZHMuU1VCU0NSSUJFLCBhcmdzLCBldmVudCkudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBzdWJpZCA9IHN1YktleShldmVudCwgYXJncyk7XG4gICAgICB0aGlzLl9zdWJzY3JpcHRpb25zLnNldChzdWJpZCwgY2FsbGJhY2spO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgdW5zdWJzY3JpYmU6ICgpID0+IHRoaXMucmVxdWVzdChSUENDb21tYW5kcy5VTlNVQlNDUklCRSwgYXJncywgZXZlbnQpXG4gICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fc3Vic2NyaXB0aW9ucy5kZWxldGUoc3ViaWQpKSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRGVzdHJveSB0aGUgY2xpZW50XG4gICAqL1xuICBhc3luYyBkZXN0cm95KCkge1xuICAgIHRoaXMudHJhbnNwb3J0LmNsb3NlKCk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBSUENDbGllbnQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHV0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIENsaWVudDogcmVxdWlyZSgnLi9jbGllbnQnKSxcbiAgcmVnaXN0ZXIoaWQpIHtcbiAgICByZXR1cm4gdXRpbC5yZWdpc3RlcihgZGlzY29yZC0ke2lkfWApO1xuICB9LFxufTtcbiIsImltcG9ydCB7IE5vdGljZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IE9ic2lkaWFuRGlzY29yZFJQQyBmcm9tIFwiLi9tYWluXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dnZXIge1xuICBwbHVnaW46IE9ic2lkaWFuRGlzY29yZFJQQyA9ICh0aGlzIGFzIGFueSkucGx1Z2luO1xuXG4gIGxvZyhtZXNzYWdlOiBzdHJpbmcsIHNob3dQb3B1cHM6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoc2hvd1BvcHVwcykge1xuICAgICAgbmV3IE5vdGljZShtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZyhgZGlzY29yZHJwYzogJHttZXNzYWdlfWApO1xuICB9XG5cbiAgbG9nSWdub3JlTm9Ob3RpY2UobWVzc2FnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbmV3IE5vdGljZShtZXNzYWdlKTtcbiAgICBjb25zb2xlLmxvZyhgZGlzY29yZHJwYzogJHttZXNzYWdlfWApO1xuICB9XG59XG4iLCJleHBvcnQgY2xhc3MgRGlzY29yZFJQQ1NldHRpbmdzIHtcbiAgc2hvd1ZhdWx0TmFtZTogYm9vbGVhbiA9IHRydWU7XG4gIHNob3dDdXJyZW50RmlsZU5hbWU6IGJvb2xlYW4gPSB0cnVlO1xuICBzaG93UG9wdXBzOiBib29sZWFuID0gdHJ1ZTtcbiAgY3VzdG9tVmF1bHROYW1lOiBzdHJpbmcgPSBcIlwiO1xuICBzaG93RmlsZUV4dGVuc2lvbjogYm9vbGVhbiA9IGZhbHNlO1xuICB1c2VMb2FkZWRUaW1lOiBib29sZWFuID0gZmFsc2U7XG59XG5cbmV4cG9ydCBlbnVtIFBsdWdpblN0YXRlIHtcbiAgY29ubmVjdGVkLFxuICBjb25uZWN0aW5nLFxuICBkaXNjb25uZWN0ZWQsXG59XG4iLCJpbXBvcnQgeyBQbHVnaW5TZXR0aW5nVGFiLCBTZXR0aW5nLCBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSBcInNyYy9sb2dnZXJcIjtcbmltcG9ydCBPYnNpZGlhbkRpc2NvcmRSUEMgZnJvbSBcInNyYy9tYWluXCI7XG5cbmV4cG9ydCBjbGFzcyBEaXNjb3JkUlBDU2V0dGluZ3NUYWIgZXh0ZW5kcyBQbHVnaW5TZXR0aW5nVGFiIHtcbiAgcHVibGljIGxvZ2dlcjogTG9nZ2VyID0gbmV3IExvZ2dlcigpO1xuXG4gIGRpc3BsYXkoKTogdm9pZCB7XG4gICAgbGV0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgY29uc3QgcGx1Z2luOiBPYnNpZGlhbkRpc2NvcmRSUEMgPSAodGhpcyBhcyBhbnkpLnBsdWdpbjtcblxuICAgIGNvbnRhaW5lckVsLmVtcHR5KCk7XG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoMlwiLCB7IHRleHQ6IFwiRGlzY29yZCBSaWNoIFByZXNlbmNlIFNldHRpbmdzXCIgfSk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogXCJWYXVsdCBOYW1lIFNldHRpbmdzXCIgfSk7XG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlNob3cgVmF1bHQgTmFtZVwiKVxuICAgICAgLnNldERlc2MoXG4gICAgICAgIFwiRW5hYmxlIHRoaXMgdG8gc2hvdyB0aGUgbmFtZSBvZiB0aGUgdmF1bHQgeW91IGFyZSB3b3JraW5nIHdpdGguXCJcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+XG4gICAgICAgIGJvb2xlYW4uc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnNob3dWYXVsdE5hbWUpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5zaG93VmF1bHROYW1lID0gdmFsdWU7XG4gICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XG5cbiAgICAgICAgICBpZiAoYm9vbGVhbi5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dJZ25vcmVOb05vdGljZShcIlZhdWx0IE5hbWUgaXMgbm93IFZpc2FibGVcIik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0lnbm9yZU5vTm90aWNlKFwiVmF1bHQgTmFtZSBpcyBubyBsb25nZXIgVmlzYWJsZVwiKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwbHVnaW4uc2V0QWN0aXZpdHkoXG4gICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuZXh0ZW5zaW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiU2V0IEN1c3RvbSBWYXVsdCBOYW1lXCIpXG4gICAgICAuc2V0RGVzYyhcbiAgICAgICAgXCJDaGFuZ2UgdGhlIHZhdWx0IG5hbWUgc2hvd24gcHVibGljbHkuIExlYXZlIGJsYW5rIHRvIHVzZSB5b3VyIGFjdHVhbCB2YXVsdCBuYW1lLlwiXG4gICAgICApXG4gICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgdGV4dC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuY3VzdG9tVmF1bHROYW1lKS5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY3VzdG9tVmF1bHROYW1lID0gdmFsdWU7XG4gICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XG5cbiAgICAgICAgICBwbHVnaW4uc2V0QWN0aXZpdHkoXG4gICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuZXh0ZW5zaW9uXG4gICAgICAgICAgKTtcbiAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgzXCIsIHsgdGV4dDogXCJGaWxlIE5hbWUgU2V0dGluZ3NcIiB9KTtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiU2hvdyBDdXJyZW50IEZpbGUgTmFtZVwiKVxuICAgICAgLnNldERlc2MoXCJFbmFibGUgdGhpcyB0byBzaG93IHRoZSBuYW1lIG9mIHRoZSBmaWxlIHlvdSBhcmUgd29ya2luZyBvbi5cIilcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+XG4gICAgICAgIGJvb2xlYW5cbiAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnNob3dDdXJyZW50RmlsZU5hbWUpXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnNob3dDdXJyZW50RmlsZU5hbWUgPSB2YWx1ZTtcbiAgICAgICAgICAgIHBsdWdpbi5zYXZlRGF0YShwbHVnaW4uc2V0dGluZ3MpO1xuXG4gICAgICAgICAgICBpZiAoYm9vbGVhbi5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgICAgIHRoaXMubG9nZ2VyLmxvZ0lnbm9yZU5vTm90aWNlKFwiRmlsZSBOYW1lIGlzIG5vdyBWaXNhYmxlXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nSWdub3JlTm9Ob3RpY2UoXCJGaWxlIE5hbWUgaXMgbm8gbG9uZ2VyIFZpc2FibGVcIik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eShcbiAgICAgICAgICAgICAgdGhpcy5hcHAudmF1bHQuZ2V0TmFtZSgpLFxuICAgICAgICAgICAgICBwbHVnaW4uY3VycmVudEZpbGUuYmFzZW5hbWUsXG4gICAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5leHRlbnNpb25cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSlcbiAgICAgICk7XG5cbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiU2hvdyBGaWxlIEV4dGVuc2lvblwiKVxuICAgICAgLnNldERlc2MoXCJFbmFibGUgdGhpcyB0byBzaG93IGZpbGUgZXh0ZW5zaW9uLlwiKVxuICAgICAgLmFkZFRvZ2dsZSgoYm9vbGVhbikgPT5cbiAgICAgICAgYm9vbGVhblxuICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3Muc2hvd0ZpbGVFeHRlbnNpb24pXG4gICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnNob3dGaWxlRXh0ZW5zaW9uID0gdmFsdWU7XG4gICAgICAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcblxuICAgICAgICAgICAgcGx1Z2luLnNldEFjdGl2aXR5KFxuICAgICAgICAgICAgICB0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksXG4gICAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcbiAgICAgICAgICAgICAgcGx1Z2luLmN1cnJlbnRGaWxlLmV4dGVuc2lvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KVxuICAgICAgKTtcblxuICAgIGNvbnRhaW5lckVsLmNyZWF0ZUVsKFwiaDNcIiwgeyB0ZXh0OiBcIlRpbWUgU2V0dGluZ3NcIiB9KTtcbiAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgIC5zZXROYW1lKFwiVXNlIE9ic2lkaWFuIFRvdGFsIFRpbWVcIilcbiAgICAgIC5zZXREZXNjKFxuICAgICAgICBcIkVuYWJsZSB0byB1c2UgdGhlIHRvdGFsIHRpbWUgeW91IGhhdmUgYmVlbiB1c2luZyBPYnNpZGlhbiwgaW5zdGVhZCBvZiB0aGUgdGltZSBzcGVudCBlZGl0aW5nIGEgc2luZ2xlIGZpbGUuXCJcbiAgICAgIClcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+IHtcbiAgICAgICAgYm9vbGVhbi5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MudXNlTG9hZGVkVGltZSkub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgcGx1Z2luLnNldHRpbmdzLnVzZUxvYWRlZFRpbWUgPSB2YWx1ZTtcbiAgICAgICAgICBwbHVnaW4uc2F2ZURhdGEocGx1Z2luLnNldHRpbmdzKTtcblxuICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eShcbiAgICAgICAgICAgIHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5leHRlbnNpb25cbiAgICAgICAgICApO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgY29udGFpbmVyRWwuY3JlYXRlRWwoXCJoM1wiLCB7IHRleHQ6IFwiTm90aWNlIFNldHRpbmdzXCIgfSk7XG4gICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAuc2V0TmFtZShcIlNob3cgTm90aWNlc1wiKVxuICAgICAgLnNldERlc2MoXCJFbmFibGUgdGhpcyB0byBzaG93IGNvbm5lY3Rpb24gTm90aWNlcy5cIilcbiAgICAgIC5hZGRUb2dnbGUoKGJvb2xlYW4pID0+XG4gICAgICAgIGJvb2xlYW4uc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnNob3dQb3B1cHMpLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5zaG93UG9wdXBzID0gdmFsdWU7XG4gICAgICAgICAgcGx1Z2luLnNhdmVEYXRhKHBsdWdpbi5zZXR0aW5ncyk7XG5cbiAgICAgICAgICBpZiAoYm9vbGVhbi5nZXRWYWx1ZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmxvZ2dlci5sb2dJZ25vcmVOb05vdGljZShcIk5vdGljZXMgRW5hYmxlZFwiKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5sb2dnZXIubG9nSWdub3JlTm9Ob3RpY2UoXCJOb3RpY2VzIERpc2FibGVkXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHBsdWdpbi5zZXRBY3Rpdml0eShcbiAgICAgICAgICAgIHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSxcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5iYXNlbmFtZSxcbiAgICAgICAgICAgIHBsdWdpbi5jdXJyZW50RmlsZS5leHRlbnNpb25cbiAgICAgICAgICApO1xuICAgICAgICB9KVxuICAgICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGx1Z2luU3RhdGUgfSBmcm9tIFwiLi9zZXR0aW5ncy9zZXR0aW5nc1wiO1xuXG5leHBvcnQgY2xhc3MgU3RhdHVzQmFyIHtcbiAgcHJpdmF0ZSBzdGF0dXNCYXJFbDogSFRNTEVsZW1lbnQ7XG5cbiAgY29uc3RydWN0b3Ioc3RhdHVzQmFyRWw6IEhUTUxFbGVtZW50KSB7XG4gICAgdGhpcy5zdGF0dXNCYXJFbCA9IHN0YXR1c0JhckVsO1xuICB9XG5cbiAgZGlzcGxheVN0YXRlKHN0YXRlOiBQbHVnaW5TdGF0ZSkge1xuICAgIHN3aXRjaCAoc3RhdGUpIHtcbiAgICAgIGNhc2UgUGx1Z2luU3RhdGUuY29ubmVjdGVkOlxuICAgICAgICB0aGlzLmRpc3BsYXlDb25uZWN0ZWQoMTAwMDApO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgUGx1Z2luU3RhdGUuY29ubmVjdGluZzpcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KGBDb25uZWN0aW5nIHRvIERpc2NvcmQuLi5gKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFBsdWdpblN0YXRlLmRpc2Nvbm5lY3RlZDpcbiAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KGBcXHV7MUY1RDh9IFJlY29ubmVjdCB0byBEaXNjb3JkYCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGRpc3BsYXlDb25uZWN0ZWQodGltZW91dDogbnVtYmVyKSB7XG4gICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KGBcXHV7MUYzMER9IENvbm5lY3RlZCB0byBEaXNjb3JkYCk7XG5cbiAgICBpZiAodGltZW91dCAmJiB0aW1lb3V0ID4gMCkge1xuICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJcIik7XG4gICAgICB9LCB0aW1lb3V0KTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENsaWVudCB9IGZyb20gXCJkaXNjb3JkLXJwY1wiO1xyXG5pbXBvcnQgeyBQbHVnaW4sIFBsdWdpbk1hbmlmZXN0LCBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xyXG5pbXBvcnQgeyBMb2dnZXIgfSBmcm9tIFwiLi9sb2dnZXJcIjtcclxuaW1wb3J0IHsgRGlzY29yZFJQQ1NldHRpbmdzLCBQbHVnaW5TdGF0ZSB9IGZyb20gXCIuL3NldHRpbmdzL3NldHRpbmdzXCI7XHJcbmltcG9ydCB7IERpc2NvcmRSUENTZXR0aW5nc1RhYiB9IGZyb20gXCIuL3NldHRpbmdzL3NldHRpbmdzLXRhYlwiO1xyXG5pbXBvcnQgeyBTdGF0dXNCYXIgfSBmcm9tIFwiLi9zdGF0dXMtYmFyXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNpZGlhbkRpc2NvcmRSUEMgZXh0ZW5kcyBQbHVnaW4ge1xyXG4gIHB1YmxpYyBzdGF0ZTogUGx1Z2luU3RhdGU7XHJcbiAgcHVibGljIHNldHRpbmdzOiBEaXNjb3JkUlBDU2V0dGluZ3M7XHJcbiAgcHVibGljIHN0YXR1c0JhcjogU3RhdHVzQmFyO1xyXG4gIHB1YmxpYyBycGM6IENsaWVudDtcclxuICBwdWJsaWMgbG9nZ2VyOiBMb2dnZXIgPSBuZXcgTG9nZ2VyKCk7XHJcbiAgcHVibGljIGN1cnJlbnRGaWxlOiBURmlsZTtcclxuICBwdWJsaWMgbG9hZGVkVGltZTogRGF0ZTtcclxuXHJcbiAgc2V0U3RhdGUoc3RhdGU6IFBsdWdpblN0YXRlKSB7XHJcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XHJcbiAgfVxyXG5cclxuICBnZXRTdGF0ZSgpOiBQbHVnaW5TdGF0ZSB7XHJcbiAgICByZXR1cm4gdGhpcy5zdGF0ZTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRBcHAoKTogYW55IHtcclxuICAgIHJldHVybiB0aGlzLmFwcDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBnZXRQbHVnaW5NYW5pZmVzdCgpOiBQbHVnaW5NYW5pZmVzdCB7XHJcbiAgICByZXR1cm4gdGhpcy5tYW5pZmVzdDtcclxuICB9XHJcblxyXG4gIGFzeW5jIG9ubG9hZCgpIHtcclxuICAgIHRoaXMubG9hZGVkVGltZSA9IG5ldyBEYXRlKCk7XHJcbiAgICBsZXQgc3RhdHVzQmFyRWwgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKTtcclxuICAgIHRoaXMuc3RhdHVzQmFyID0gbmV3IFN0YXR1c0JhcihzdGF0dXNCYXJFbCk7XHJcblxyXG4gICAgdGhpcy5zZXR0aW5ncyA9IChhd2FpdCB0aGlzLmxvYWREYXRhKCkpIHx8IG5ldyBEaXNjb3JkUlBDU2V0dGluZ3MoKTtcclxuXHJcbiAgICB0aGlzLnJlZ2lzdGVyRXZlbnQoXHJcbiAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vbihcImZpbGUtb3BlblwiLCB0aGlzLm9uRmlsZU9wZW4sIHRoaXMpXHJcbiAgICApO1xyXG5cclxuICAgIHRoaXMucmVnaXN0ZXJEb21FdmVudChzdGF0dXNCYXJFbCwgXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmdldFN0YXRlKCkgPT0gUGx1Z2luU3RhdGUuZGlzY29ubmVjdGVkKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5jb25uZWN0RGlzY29yZCgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmFkZFNldHRpbmdUYWIobmV3IERpc2NvcmRSUENTZXR0aW5nc1RhYih0aGlzLmFwcCwgdGhpcykpO1xyXG5cclxuICAgIHRoaXMuYWRkQ29tbWFuZCh7XHJcbiAgICAgIGlkOiBcInJlY29ubmVjdC1kaXNjb3JkXCIsXHJcbiAgICAgIG5hbWU6IFwiUmVjb25uZWN0IHRvIERpc2NvcmRcIixcclxuICAgICAgY2FsbGJhY2s6IGFzeW5jICgpID0+IGF3YWl0IHRoaXMuY29ubmVjdERpc2NvcmQoKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGF3YWl0IHRoaXMuY29ubmVjdERpc2NvcmQoKTtcclxuXHJcbiAgICBsZXQgYWN0aXZlTGVhZiA9IHRoaXMuYXBwLndvcmtzcGFjZS5hY3RpdmVMZWFmO1xyXG4gICAgbGV0IGZpbGVzOiBURmlsZVtdID0gdGhpcy5hcHAudmF1bHQuZ2V0TWFya2Rvd25GaWxlcygpO1xyXG5cclxuICAgIGZpbGVzLmZvckVhY2goKGZpbGUpID0+IHtcclxuICAgICAgaWYgKGZpbGUuYmFzZW5hbWUgPT09IGFjdGl2ZUxlYWYuZ2V0RGlzcGxheVRleHQoKSkge1xyXG4gICAgICAgIHRoaXMub25GaWxlT3BlbihmaWxlKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbkZpbGVPcGVuKGZpbGU6IFRGaWxlKSB7XHJcbiAgICB0aGlzLmN1cnJlbnRGaWxlID0gZmlsZTtcclxuICAgIGlmICh0aGlzLmdldFN0YXRlKCkgPT09IFBsdWdpblN0YXRlLmNvbm5lY3RlZCkge1xyXG4gICAgICBhd2FpdCB0aGlzLnNldEFjdGl2aXR5KFxyXG4gICAgICAgIHRoaXMuYXBwLnZhdWx0LmdldE5hbWUoKSxcclxuICAgICAgICBmaWxlLmJhc2VuYW1lLFxyXG4gICAgICAgIGZpbGUuZXh0ZW5zaW9uXHJcbiAgICAgICk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbnVubG9hZCgpIHtcclxuICAgIGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XHJcbiAgICB0aGlzLnJwYy5jbGVhckFjdGl2aXR5KCk7XHJcbiAgICB0aGlzLnJwYy5kZXN0cm95KCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjb25uZWN0RGlzY29yZCgpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIHRoaXMucnBjID0gbmV3IENsaWVudCh7XHJcbiAgICAgIHRyYW5zcG9ydDogXCJpcGNcIixcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuY29ubmVjdGluZyk7XHJcbiAgICB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5U3RhdGUodGhpcy5nZXRTdGF0ZSgpKTtcclxuXHJcbiAgICB0aGlzLnJwYy5vbmNlKFwicmVhZHlcIiwgKCkgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmNvbm5lY3RlZCk7XHJcbiAgICAgIHRoaXMuc3RhdHVzQmFyLmRpc3BsYXlTdGF0ZSh0aGlzLmdldFN0YXRlKCkpO1xyXG4gICAgICB0aGlzLmxvZ2dlci5sb2coXCJDb25uZWN0ZWQgdG8gRGlzY29yZFwiLCB0aGlzLnNldHRpbmdzLnNob3dQb3B1cHMpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgdGhpcy5ycGMubG9naW4oe1xyXG4gICAgICAgIGNsaWVudElkOiBcIjc2MzgxMzE4NTAyMjE5NzgzMVwiLFxyXG4gICAgICB9KTtcclxuICAgICAgYXdhaXQgdGhpcy5zZXRBY3Rpdml0eSh0aGlzLmFwcC52YXVsdC5nZXROYW1lKCksIFwiLi4uXCIsIFwiXCIpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5kaXNjb25uZWN0ZWQpO1xyXG4gICAgICB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5U3RhdGUodGhpcy5nZXRTdGF0ZSgpKTtcclxuICAgICAgdGhpcy5sb2dnZXIubG9nKFwiRmFpbGVkIHRvIGNvbm5lY3QgdG8gRGlzY29yZFwiLCB0aGlzLnNldHRpbmdzLnNob3dQb3B1cHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgc2V0QWN0aXZpdHkoXHJcbiAgICB2YXVsdE5hbWU6IHN0cmluZyxcclxuICAgIGZpbGVOYW1lOiBzdHJpbmcsXHJcbiAgICBmaWxlRXh0ZW5zaW9uOiBzdHJpbmdcclxuICApOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgIGlmICh0aGlzLmdldFN0YXRlKCkgPT09IFBsdWdpblN0YXRlLmNvbm5lY3RlZCkge1xyXG4gICAgICBsZXQgdmF1bHQ6IHN0cmluZztcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY3VzdG9tVmF1bHROYW1lID09PSBcIlwiKSB7XHJcbiAgICAgICAgdmF1bHQgPSB2YXVsdE5hbWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmF1bHQgPSB0aGlzLnNldHRpbmdzLmN1c3RvbVZhdWx0TmFtZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGZpbGU6IHN0cmluZztcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3Muc2hvd0ZpbGVFeHRlbnNpb24pIHtcclxuICAgICAgICBmaWxlID0gZmlsZU5hbWUgKyBcIi5cIiArIGZpbGVFeHRlbnNpb247XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZmlsZSA9IGZpbGVOYW1lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgZGF0ZTogRGF0ZTtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3MudXNlTG9hZGVkVGltZSkge1xyXG4gICAgICAgIGRhdGUgPSB0aGlzLmxvYWRlZFRpbWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzLnNob3dWYXVsdE5hbWUgJiYgdGhpcy5zZXR0aW5ncy5zaG93Q3VycmVudEZpbGVOYW1lKSB7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ycGMuc2V0QWN0aXZpdHkoe1xyXG4gICAgICAgICAgZGV0YWlsczogYEVkaXRpbmcgJHtmaWxlfWAsXHJcbiAgICAgICAgICBzdGF0ZTogYFZhdWx0OiAke3ZhdWx0fWAsXHJcbiAgICAgICAgICBzdGFydFRpbWVzdGFtcDogZGF0ZSxcclxuICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwibG9nb1wiLFxyXG4gICAgICAgICAgbGFyZ2VJbWFnZVRleHQ6IFwiT2JzaWRpYW5cIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnNob3dWYXVsdE5hbWUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnJwYy5zZXRBY3Rpdml0eSh7XHJcbiAgICAgICAgICBzdGF0ZTogYFZhdWx0OiAke3ZhdWx0fWAsXHJcbiAgICAgICAgICBzdGFydFRpbWVzdGFtcDogZGF0ZSxcclxuICAgICAgICAgIGxhcmdlSW1hZ2VLZXk6IFwibG9nb1wiLFxyXG4gICAgICAgICAgbGFyZ2VJbWFnZVRleHQ6IFwiT2JzaWRpYW5cIixcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnNob3dDdXJyZW50RmlsZU5hbWUpIHtcclxuICAgICAgICBhd2FpdCB0aGlzLnJwYy5zZXRBY3Rpdml0eSh7XHJcbiAgICAgICAgICBkZXRhaWxzOiBgRWRpdGluZyAke2ZpbGV9YCxcclxuICAgICAgICAgIHN0YXJ0VGltZXN0YW1wOiBkYXRlLFxyXG4gICAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJsb2dvXCIsXHJcbiAgICAgICAgICBsYXJnZUltYWdlVGV4dDogXCJPYnNpZGlhblwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGF3YWl0IHRoaXMucnBjLnNldEFjdGl2aXR5KHtcclxuICAgICAgICAgIHN0YXJ0VGltZXN0YW1wOiBkYXRlLFxyXG4gICAgICAgICAgbGFyZ2VJbWFnZUtleTogXCJsb2dvXCIsXHJcbiAgICAgICAgICBsYXJnZUltYWdlVGV4dDogXCJPYnNpZGlhblwiLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdLCJuYW1lcyI6WyJyZXF1aXJlJCQwIiwibmV0IiwiZmV0Y2giLCJFdmVudEVtaXR0ZXIiLCJicm93c2VyIiwicmVxdWlyZSQkMSIsInNldFRpbWVvdXQiLCJSUENDb21tYW5kcyIsIlJQQ0V2ZW50cyIsIlJlbGF0aW9uc2hpcFR5cGVzIiwidXVpZCIsInJlcXVpcmUkJDIiLCJOb3RpY2UiLCJTZXR0aW5nIiwiUGx1Z2luU2V0dGluZ1RhYiIsIkNsaWVudCIsIlBsdWdpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUM3SixJQUFJLFNBQVMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLE9BQU8sVUFBVSxDQUFDLEVBQUUsRUFBRSxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO0FBQ3RFLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRSxFQUFFO0FBQ3RCLFFBQVEsSUFBSSxDQUFDLEVBQUUsTUFBTSxJQUFJLFNBQVMsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDO0FBQ3RFLFFBQVEsT0FBTyxDQUFDLEVBQUUsSUFBSTtBQUN0QixZQUFZLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0FBQ3pLLFlBQVksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwRCxZQUFZLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztBQUN6QixnQkFBZ0IsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTTtBQUM5QyxnQkFBZ0IsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO0FBQ3hFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQixLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxTQUFTO0FBQ2pFLGdCQUFnQjtBQUNoQixvQkFBb0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRTtBQUNoSSxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRTtBQUMxRyxvQkFBb0IsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFL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
