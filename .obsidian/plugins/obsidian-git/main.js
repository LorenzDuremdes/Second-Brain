'use strict';

var child_process_1 = require('child_process');
var obsidian = require('obsidian');
var fs_1 = require('fs');
var tty = require('tty');
var util$1 = require('util');
var os = require('os');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var child_process_1__default = /*#__PURE__*/_interopDefaultLegacy(child_process_1);
var fs_1__default = /*#__PURE__*/_interopDefaultLegacy(fs_1);
var tty__default = /*#__PURE__*/_interopDefaultLegacy(tty);
var util__default = /*#__PURE__*/_interopDefaultLegacy(util$1);
var os__default = /*#__PURE__*/_interopDefaultLegacy(os);

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

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn, basedir, module) {
	return module = {
		path: basedir,
		exports: {},
		require: function (path, base) {
			return commonjsRequire(path, (base === undefined || base === null) ? module.path : base);
		}
	}, fn(module, module.exports), module.exports;
}

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by @rollup/plugin-commonjs');
}

var gitError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitError = void 0;
/**
 * The `GitError` is thrown when the underlying `git` process throws a
 * fatal exception (eg an `ENOENT` exception when attempting to use a
 * non-writable directory as the root for your repo), and acts as the
 * base class for more specific errors thrown by the parsing of the
 * git response or errors in the configuration of the task about to
 * be run.
 *
 * When an exception is thrown, pending tasks in the same instance will
 * not be executed. The recommended way to run a series of tasks that
 * can independently fail without needing to prevent future tasks from
 * running is to catch them individually:
 *
 * ```typescript
 import { gitP, SimpleGit, GitError, PullResult } from 'simple-git';

 function catchTask (e: GitError) {
   return e.
 }

 const git = gitP(repoWorkingDir);
 const pulled: PullResult | GitError = await git.pull().catch(catchTask);
 const pushed: string | GitError = await git.pushTags().catch(catchTask);
 ```
 */
class GitError extends Error {
    constructor(task, message) {
        super(message);
        this.task = task;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.GitError = GitError;
//# sourceMappingURL=git-error.js.map
});

var gitResponseError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitResponseError = void 0;

/**
 * The `GitResponseError` is the wrapper for a parsed response that is treated as
 * a fatal error, for example attempting a `merge` can leave the repo in a corrupted
 * state when there are conflicts so the task will reject rather than resolve.
 *
 * For example, catching the merge conflict exception:
 *
 * ```typescript
 import { gitP, SimpleGit, GitResponseError, MergeSummary } from 'simple-git';

 const git = gitP(repoRoot);
 const mergeOptions: string[] = ['--no-ff', 'other-branch'];
 const mergeSummary: MergeSummary = await git.merge(mergeOptions)
      .catch((e: GitResponseError<MergeSummary>) => e.git);

 if (mergeSummary.failed) {
   // deal with the error
 }
 ```
 */
class GitResponseError extends gitError.GitError {
    constructor(
    /**
     * `.git` access the parsed response that is treated as being an error
     */
    git, message) {
        super(undefined, message || String(git));
        this.git = git;
    }
}
exports.GitResponseError = GitResponseError;
//# sourceMappingURL=git-response-error.js.map
});

var gitConstructError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitConstructError = void 0;

/**
 * The `GitConstructError` is thrown when an error occurs in the constructor
 * of the `simple-git` instance itself. Most commonly as a result of using
 * a `baseDir` option that points to a folder that either does not exist,
 * or cannot be read by the user the node script is running as.
 *
 * Check the `.message` property for more detail including the properties
 * passed to the constructor.
 */
class GitConstructError extends gitError.GitError {
    constructor(config, message) {
        super(undefined, message);
        this.config = config;
    }
}
exports.GitConstructError = GitConstructError;
//# sourceMappingURL=git-construct-error.js.map
});

var gitPluginError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitPluginError = void 0;

class GitPluginError extends gitError.GitError {
    constructor(task, plugin, message) {
        super(task, message);
        this.task = task;
        this.plugin = plugin;
        Object.setPrototypeOf(this, new.target.prototype);
    }
}
exports.GitPluginError = GitPluginError;
//# sourceMappingURL=git-plugin-error.js.map
});

var taskConfigurationError = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskConfigurationError = void 0;

/**
 * The `TaskConfigurationError` is thrown when a command was incorrectly
 * configured. An error of this kind means that no attempt was made to
 * run your command through the underlying `git` binary.
 *
 * Check the `.message` property for more detail on why your configuration
 * resulted in an error.
 */
class TaskConfigurationError extends gitError.GitError {
    constructor(message) {
        super(undefined, message);
    }
}
exports.TaskConfigurationError = TaskConfigurationError;
//# sourceMappingURL=task-configuration-error.js.map
});

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var w = d * 7;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

var ms = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isFinite(val)) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'weeks':
    case 'week':
    case 'w':
      return n * w;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (msAbs >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (msAbs >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (msAbs >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  var msAbs = Math.abs(ms);
  if (msAbs >= d) {
    return plural(ms, msAbs, d, 'day');
  }
  if (msAbs >= h) {
    return plural(ms, msAbs, h, 'hour');
  }
  if (msAbs >= m) {
    return plural(ms, msAbs, m, 'minute');
  }
  if (msAbs >= s) {
    return plural(ms, msAbs, s, 'second');
  }
  return ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, msAbs, n, name) {
  var isPlural = msAbs >= n * 1.5;
  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
}

/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 */

function setup(env) {
	createDebug.debug = createDebug;
	createDebug.default = createDebug;
	createDebug.coerce = coerce;
	createDebug.disable = disable;
	createDebug.enable = enable;
	createDebug.enabled = enabled;
	createDebug.humanize = ms;
	createDebug.destroy = destroy;

	Object.keys(env).forEach(key => {
		createDebug[key] = env[key];
	});

	/**
	* The currently active debug mode names, and names to skip.
	*/

	createDebug.names = [];
	createDebug.skips = [];

	/**
	* Map of special "%n" handling functions, for the debug "format" argument.
	*
	* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
	*/
	createDebug.formatters = {};

	/**
	* Selects a color for a debug namespace
	* @param {String} namespace The namespace string for the for the debug instance to be colored
	* @return {Number|String} An ANSI color code for the given namespace
	* @api private
	*/
	function selectColor(namespace) {
		let hash = 0;

		for (let i = 0; i < namespace.length; i++) {
			hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
			hash |= 0; // Convert to 32bit integer
		}

		return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
	}
	createDebug.selectColor = selectColor;

	/**
	* Create a debugger with the given `namespace`.
	*
	* @param {String} namespace
	* @return {Function}
	* @api public
	*/
	function createDebug(namespace) {
		let prevTime;
		let enableOverride = null;
		let namespacesCache;
		let enabledCache;

		function debug(...args) {
			// Disabled?
			if (!debug.enabled) {
				return;
			}

			const self = debug;

			// Set `diff` timestamp
			const curr = Number(new Date());
			const ms = curr - (prevTime || curr);
			self.diff = ms;
			self.prev = prevTime;
			self.curr = curr;
			prevTime = curr;

			args[0] = createDebug.coerce(args[0]);

			if (typeof args[0] !== 'string') {
				// Anything else let's inspect with %O
				args.unshift('%O');
			}

			// Apply any `formatters` transformations
			let index = 0;
			args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
				// If we encounter an escaped % then don't increase the array index
				if (match === '%%') {
					return '%';
				}
				index++;
				const formatter = createDebug.formatters[format];
				if (typeof formatter === 'function') {
					const val = args[index];
					match = formatter.call(self, val);

					// Now we need to remove `args[index]` since it's inlined in the `format`
					args.splice(index, 1);
					index--;
				}
				return match;
			});

			// Apply env-specific formatting (colors, etc.)
			createDebug.formatArgs.call(self, args);

			const logFn = self.log || createDebug.log;
			logFn.apply(self, args);
		}

		debug.namespace = namespace;
		debug.useColors = createDebug.useColors();
		debug.color = createDebug.selectColor(namespace);
		debug.extend = extend;
		debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

		Object.defineProperty(debug, 'enabled', {
			enumerable: true,
			configurable: false,
			get: () => {
				if (enableOverride !== null) {
					return enableOverride;
				}
				if (namespacesCache !== createDebug.namespaces) {
					namespacesCache = createDebug.namespaces;
					enabledCache = createDebug.enabled(namespace);
				}

				return enabledCache;
			},
			set: v => {
				enableOverride = v;
			}
		});

		// Env-specific initialization logic for debug instances
		if (typeof createDebug.init === 'function') {
			createDebug.init(debug);
		}

		return debug;
	}

	function extend(namespace, delimiter) {
		const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
		newDebug.log = this.log;
		return newDebug;
	}

	/**
	* Enables a debug mode by namespaces. This can include modes
	* separated by a colon and wildcards.
	*
	* @param {String} namespaces
	* @api public
	*/
	function enable(namespaces) {
		createDebug.save(namespaces);
		createDebug.namespaces = namespaces;

		createDebug.names = [];
		createDebug.skips = [];

		let i;
		const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
		const len = split.length;

		for (i = 0; i < len; i++) {
			if (!split[i]) {
				// ignore empty strings
				continue;
			}

			namespaces = split[i].replace(/\*/g, '.*?');

			if (namespaces[0] === '-') {
				createDebug.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
			} else {
				createDebug.names.push(new RegExp('^' + namespaces + '$'));
			}
		}
	}

	/**
	* Disable debug output.
	*
	* @return {String} namespaces
	* @api public
	*/
	function disable() {
		const namespaces = [
			...createDebug.names.map(toNamespace),
			...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
		].join(',');
		createDebug.enable('');
		return namespaces;
	}

	/**
	* Returns true if the given mode name is enabled, false otherwise.
	*
	* @param {String} name
	* @return {Boolean}
	* @api public
	*/
	function enabled(name) {
		if (name[name.length - 1] === '*') {
			return true;
		}

		let i;
		let len;

		for (i = 0, len = createDebug.skips.length; i < len; i++) {
			if (createDebug.skips[i].test(name)) {
				return false;
			}
		}

		for (i = 0, len = createDebug.names.length; i < len; i++) {
			if (createDebug.names[i].test(name)) {
				return true;
			}
		}

		return false;
	}

	/**
	* Convert regexp to namespace
	*
	* @param {RegExp} regxep
	* @return {String} namespace
	* @api private
	*/
	function toNamespace(regexp) {
		return regexp.toString()
			.substring(2, regexp.toString().length - 2)
			.replace(/\.\*\?$/, '*');
	}

	/**
	* Coerce `val`.
	*
	* @param {Mixed} val
	* @return {Mixed}
	* @api private
	*/
	function coerce(val) {
		if (val instanceof Error) {
			return val.stack || val.message;
		}
		return val;
	}

	/**
	* XXX DO NOT USE. This is a temporary stub function.
	* XXX It WILL be removed in the next major release.
	*/
	function destroy() {
		console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
	}

	createDebug.enable(createDebug.load());

	return createDebug;
}

var common = setup;

var browser = createCommonjsModule(function (module, exports) {
/* eslint-env browser */

/**
 * This is the web browser implementation of `debug()`.
 */

exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = localstorage();
exports.destroy = (() => {
	let warned = false;

	return () => {
		if (!warned) {
			warned = true;
			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
		}
	};
})();

/**
 * Colors.
 */

exports.colors = [
	'#0000CC',
	'#0000FF',
	'#0033CC',
	'#0033FF',
	'#0066CC',
	'#0066FF',
	'#0099CC',
	'#0099FF',
	'#00CC00',
	'#00CC33',
	'#00CC66',
	'#00CC99',
	'#00CCCC',
	'#00CCFF',
	'#3300CC',
	'#3300FF',
	'#3333CC',
	'#3333FF',
	'#3366CC',
	'#3366FF',
	'#3399CC',
	'#3399FF',
	'#33CC00',
	'#33CC33',
	'#33CC66',
	'#33CC99',
	'#33CCCC',
	'#33CCFF',
	'#6600CC',
	'#6600FF',
	'#6633CC',
	'#6633FF',
	'#66CC00',
	'#66CC33',
	'#9900CC',
	'#9900FF',
	'#9933CC',
	'#9933FF',
	'#99CC00',
	'#99CC33',
	'#CC0000',
	'#CC0033',
	'#CC0066',
	'#CC0099',
	'#CC00CC',
	'#CC00FF',
	'#CC3300',
	'#CC3333',
	'#CC3366',
	'#CC3399',
	'#CC33CC',
	'#CC33FF',
	'#CC6600',
	'#CC6633',
	'#CC9900',
	'#CC9933',
	'#CCCC00',
	'#CCCC33',
	'#FF0000',
	'#FF0033',
	'#FF0066',
	'#FF0099',
	'#FF00CC',
	'#FF00FF',
	'#FF3300',
	'#FF3333',
	'#FF3366',
	'#FF3399',
	'#FF33CC',
	'#FF33FF',
	'#FF6600',
	'#FF6633',
	'#FF9900',
	'#FF9933',
	'#FFCC00',
	'#FFCC33'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

// eslint-disable-next-line complexity
function useColors() {
	// NB: In an Electron preload script, document will be defined but not fully
	// initialized. Since we know we're in Chrome, we'll just detect this case
	// explicitly
	if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
		return true;
	}

	// Internet Explorer and Edge do not support colors.
	if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
		return false;
	}

	// Is webkit? http://stackoverflow.com/a/16459606/376773
	// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
	return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
		// Is firebug? http://stackoverflow.com/a/398120/376773
		(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
		// Is firefox >= v31?
		// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
		// Double check webkit in userAgent just in case we are in a worker
		(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	args[0] = (this.useColors ? '%c' : '') +
		this.namespace +
		(this.useColors ? ' %c' : ' ') +
		args[0] +
		(this.useColors ? '%c ' : ' ') +
		'+' + module.exports.humanize(this.diff);

	if (!this.useColors) {
		return;
	}

	const c = 'color: ' + this.color;
	args.splice(1, 0, c, 'color: inherit');

	// The final "%c" is somewhat tricky, because there could be other
	// arguments passed either before or after the %c, so we need to
	// figure out the correct index to insert the CSS into
	let index = 0;
	let lastC = 0;
	args[0].replace(/%[a-zA-Z%]/g, match => {
		if (match === '%%') {
			return;
		}
		index++;
		if (match === '%c') {
			// We only are interested in the *last* %c
			// (the user may have provided their own)
			lastC = index;
		}
	});

	args.splice(lastC, 0, c);
}

/**
 * Invokes `console.debug()` when available.
 * No-op when `console.debug` is not a "function".
 * If `console.debug` is not available, falls back
 * to `console.log`.
 *
 * @api public
 */
exports.log = console.debug || console.log || (() => {});

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	try {
		if (namespaces) {
			exports.storage.setItem('debug', namespaces);
		} else {
			exports.storage.removeItem('debug');
		}
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */
function load() {
	let r;
	try {
		r = exports.storage.getItem('debug');
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}

	// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
	if (!r && typeof process !== 'undefined' && 'env' in process) {
		r = process.env.DEBUG;
	}

	return r;
}

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
	try {
		// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
		// The Browser also has localStorage in the global context.
		return localStorage;
	} catch (error) {
		// Swallow
		// XXX (@Qix-) should we be logging these?
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

formatters.j = function (v) {
	try {
		return JSON.stringify(v);
	} catch (error) {
		return '[UnexpectedJSONParseError]: ' + error.message;
	}
};
});

var hasFlag = (flag, argv = process.argv) => {
	const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
	const position = argv.indexOf(prefix + flag);
	const terminatorPosition = argv.indexOf('--');
	return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
};

const {env} = process;

let forceColor;
if (hasFlag('no-color') ||
	hasFlag('no-colors') ||
	hasFlag('color=false') ||
	hasFlag('color=never')) {
	forceColor = 0;
} else if (hasFlag('color') ||
	hasFlag('colors') ||
	hasFlag('color=true') ||
	hasFlag('color=always')) {
	forceColor = 1;
}

if ('FORCE_COLOR' in env) {
	if (env.FORCE_COLOR === 'true') {
		forceColor = 1;
	} else if (env.FORCE_COLOR === 'false') {
		forceColor = 0;
	} else {
		forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
	}
}

function translateLevel(level) {
	if (level === 0) {
		return false;
	}

	return {
		level,
		hasBasic: true,
		has256: level >= 2,
		has16m: level >= 3
	};
}

function supportsColor(haveStream, streamIsTTY) {
	if (forceColor === 0) {
		return 0;
	}

	if (hasFlag('color=16m') ||
		hasFlag('color=full') ||
		hasFlag('color=truecolor')) {
		return 3;
	}

	if (hasFlag('color=256')) {
		return 2;
	}

	if (haveStream && !streamIsTTY && forceColor === undefined) {
		return 0;
	}

	const min = forceColor || 0;

	if (env.TERM === 'dumb') {
		return min;
	}

	if (process.platform === 'win32') {
		// Windows 10 build 10586 is the first Windows release that supports 256 colors.
		// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
		const osRelease = os__default['default'].release().split('.');
		if (
			Number(osRelease[0]) >= 10 &&
			Number(osRelease[2]) >= 10586
		) {
			return Number(osRelease[2]) >= 14931 ? 3 : 2;
		}

		return 1;
	}

	if ('CI' in env) {
		if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
			return 1;
		}

		return min;
	}

	if ('TEAMCITY_VERSION' in env) {
		return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
	}

	if (env.COLORTERM === 'truecolor') {
		return 3;
	}

	if ('TERM_PROGRAM' in env) {
		const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

		switch (env.TERM_PROGRAM) {
			case 'iTerm.app':
				return version >= 3 ? 3 : 2;
			case 'Apple_Terminal':
				return 2;
			// No default
		}
	}

	if (/-256(color)?$/i.test(env.TERM)) {
		return 2;
	}

	if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
		return 1;
	}

	if ('COLORTERM' in env) {
		return 1;
	}

	return min;
}

function getSupportLevel(stream) {
	const level = supportsColor(stream, stream && stream.isTTY);
	return translateLevel(level);
}

var supportsColor_1 = {
	supportsColor: getSupportLevel,
	stdout: translateLevel(supportsColor(true, tty__default['default'].isatty(1))),
	stderr: translateLevel(supportsColor(true, tty__default['default'].isatty(2)))
};

var node = createCommonjsModule(function (module, exports) {
/**
 * Module dependencies.
 */




/**
 * This is the Node.js implementation of `debug()`.
 */

exports.init = init;
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.destroy = util__default['default'].deprecate(
	() => {},
	'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
);

/**
 * Colors.
 */

exports.colors = [6, 2, 3, 4, 5, 1];

try {
	// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
	// eslint-disable-next-line import/no-extraneous-dependencies
	const supportsColor = supportsColor_1;

	if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
		exports.colors = [
			20,
			21,
			26,
			27,
			32,
			33,
			38,
			39,
			40,
			41,
			42,
			43,
			44,
			45,
			56,
			57,
			62,
			63,
			68,
			69,
			74,
			75,
			76,
			77,
			78,
			79,
			80,
			81,
			92,
			93,
			98,
			99,
			112,
			113,
			128,
			129,
			134,
			135,
			148,
			149,
			160,
			161,
			162,
			163,
			164,
			165,
			166,
			167,
			168,
			169,
			170,
			171,
			172,
			173,
			178,
			179,
			184,
			185,
			196,
			197,
			198,
			199,
			200,
			201,
			202,
			203,
			204,
			205,
			206,
			207,
			208,
			209,
			214,
			215,
			220,
			221
		];
	}
} catch (error) {
	// Swallow - we only care if `supports-color` is available; it doesn't have to be.
}

/**
 * Build up the default `inspectOpts` object from the environment variables.
 *
 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
 */

exports.inspectOpts = Object.keys(process.env).filter(key => {
	return /^debug_/i.test(key);
}).reduce((obj, key) => {
	// Camel-case
	const prop = key
		.substring(6)
		.toLowerCase()
		.replace(/_([a-z])/g, (_, k) => {
			return k.toUpperCase();
		});

	// Coerce string value into JS value
	let val = process.env[key];
	if (/^(yes|on|true|enabled)$/i.test(val)) {
		val = true;
	} else if (/^(no|off|false|disabled)$/i.test(val)) {
		val = false;
	} else if (val === 'null') {
		val = null;
	} else {
		val = Number(val);
	}

	obj[prop] = val;
	return obj;
}, {});

/**
 * Is stdout a TTY? Colored output is enabled when `true`.
 */

function useColors() {
	return 'colors' in exports.inspectOpts ?
		Boolean(exports.inspectOpts.colors) :
		tty__default['default'].isatty(process.stderr.fd);
}

/**
 * Adds ANSI color escape codes if enabled.
 *
 * @api public
 */

function formatArgs(args) {
	const {namespace: name, useColors} = this;

	if (useColors) {
		const c = this.color;
		const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
		const prefix = `  ${colorCode};1m${name} \u001B[0m`;

		args[0] = prefix + args[0].split('\n').join('\n' + prefix);
		args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
	} else {
		args[0] = getDate() + name + ' ' + args[0];
	}
}

function getDate() {
	if (exports.inspectOpts.hideDate) {
		return '';
	}
	return new Date().toISOString() + ' ';
}

/**
 * Invokes `util.format()` with the specified arguments and writes to stderr.
 */

function log(...args) {
	return process.stderr.write(util__default['default'].format(...args) + '\n');
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */
function save(namespaces) {
	if (namespaces) {
		process.env.DEBUG = namespaces;
	} else {
		// If you set a process.env field to null or undefined, it gets cast to the
		// string 'null' or 'undefined'. Just delete instead.
		delete process.env.DEBUG;
	}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
	return process.env.DEBUG;
}

/**
 * Init logic for `debug` instances.
 *
 * Create a new `inspectOpts` object in case `useColors` is set
 * differently for a particular `debug` instance.
 */

function init(debug) {
	debug.inspectOpts = {};

	const keys = Object.keys(exports.inspectOpts);
	for (let i = 0; i < keys.length; i++) {
		debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
	}
}

module.exports = common(exports);

const {formatters} = module.exports;

/**
 * Map %o to `util.inspect()`, all on a single line.
 */

formatters.o = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util__default['default'].inspect(v, this.inspectOpts)
		.split('\n')
		.map(str => str.trim())
		.join(' ');
};

/**
 * Map %O to `util.inspect()`, allowing multiple lines if needed.
 */

formatters.O = function (v) {
	this.inspectOpts.colors = this.useColors;
	return util__default['default'].inspect(v, this.inspectOpts);
};
});

var src$2 = createCommonjsModule(function (module) {
/**
 * Detect Electron renderer / nwjs process, which is node, but we should
 * treat as a browser.
 */

if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
	module.exports = browser;
} else {
	module.exports = node;
}
});

var src$1 = createCommonjsModule(function (module, exports) {
var __importDefault = (commonjsGlobal && commonjsGlobal.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });

const debug_1 = __importDefault(src$2);
const log = debug_1.default('@kwsites/file-exists');
function check(path, isFile, isDirectory) {
    log(`checking %s`, path);
    try {
        const stat = fs_1__default['default'].statSync(path);
        if (stat.isFile() && isFile) {
            log(`[OK] path represents a file`);
            return true;
        }
        if (stat.isDirectory() && isDirectory) {
            log(`[OK] path represents a directory`);
            return true;
        }
        log(`[FAIL] path represents something other than a file or directory`);
        return false;
    }
    catch (e) {
        if (e.code === 'ENOENT') {
            log(`[FAIL] path is not accessible: %o`, e);
            return false;
        }
        log(`[FATAL] %o`, e);
        throw e;
    }
}
/**
 * Synchronous validation of a path existing either as a file or as a directory.
 *
 * @param {string} path The path to check
 * @param {number} type One or both of the exported numeric constants
 */
function exists(path, type = exports.READABLE) {
    return check(path, (type & exports.FILE) > 0, (type & exports.FOLDER) > 0);
}
exports.exists = exists;
/**
 * Constant representing a file
 */
exports.FILE = 1;
/**
 * Constant representing a folder
 */
exports.FOLDER = 2;
/**
 * Constant representing either a file or a folder
 */
exports.READABLE = exports.FILE + exports.FOLDER;
//# sourceMappingURL=index.js.map
});

var dist$1 = createCommonjsModule(function (module, exports) {
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
__export(src$1);
//# sourceMappingURL=index.js.map
});

var util = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferToString = exports.prefixedArray = exports.asNumber = exports.asStringArray = exports.asArray = exports.objectToString = exports.remove = exports.including = exports.append = exports.folderExists = exports.forEachLineWithContent = exports.toLinesWithContent = exports.last = exports.first = exports.splitOn = exports.isUserFunction = exports.asFunction = exports.NOOP = void 0;

const NOOP = () => {
};
exports.NOOP = NOOP;
/**
 * Returns either the source argument when it is a `Function`, or the default
 * `NOOP` function constant
 */
function asFunction(source) {
    return typeof source === 'function' ? source : exports.NOOP;
}
exports.asFunction = asFunction;
/**
 * Determines whether the supplied argument is both a function, and is not
 * the `NOOP` function.
 */
function isUserFunction(source) {
    return (typeof source === 'function' && source !== exports.NOOP);
}
exports.isUserFunction = isUserFunction;
function splitOn(input, char) {
    const index = input.indexOf(char);
    if (index <= 0) {
        return [input, ''];
    }
    return [
        input.substr(0, index),
        input.substr(index + 1),
    ];
}
exports.splitOn = splitOn;
function first(input, offset = 0) {
    return isArrayLike(input) && input.length > offset ? input[offset] : undefined;
}
exports.first = first;
function last(input, offset = 0) {
    if (isArrayLike(input) && input.length > offset) {
        return input[input.length - 1 - offset];
    }
}
exports.last = last;
function isArrayLike(input) {
    return !!(input && typeof input.length === 'number');
}
function toLinesWithContent(input, trimmed = true, separator = '\n') {
    return input.split(separator)
        .reduce((output, line) => {
        const lineContent = trimmed ? line.trim() : line;
        if (lineContent) {
            output.push(lineContent);
        }
        return output;
    }, []);
}
exports.toLinesWithContent = toLinesWithContent;
function forEachLineWithContent(input, callback) {
    return toLinesWithContent(input, true).map(line => callback(line));
}
exports.forEachLineWithContent = forEachLineWithContent;
function folderExists(path) {
    return dist$1.exists(path, dist$1.FOLDER);
}
exports.folderExists = folderExists;
/**
 * Adds `item` into the `target` `Array` or `Set` when it is not already present and returns the `item`.
 */
function append(target, item) {
    if (Array.isArray(target)) {
        if (!target.includes(item)) {
            target.push(item);
        }
    }
    else {
        target.add(item);
    }
    return item;
}
exports.append = append;
/**
 * Adds `item` into the `target` `Array` when it is not already present and returns the `target`.
 */
function including(target, item) {
    if (Array.isArray(target) && !target.includes(item)) {
        target.push(item);
    }
    return target;
}
exports.including = including;
function remove(target, item) {
    if (Array.isArray(target)) {
        const index = target.indexOf(item);
        if (index >= 0) {
            target.splice(index, 1);
        }
    }
    else {
        target.delete(item);
    }
    return item;
}
exports.remove = remove;
exports.objectToString = Object.prototype.toString.call.bind(Object.prototype.toString);
function asArray(source) {
    return Array.isArray(source) ? source : [source];
}
exports.asArray = asArray;
function asStringArray(source) {
    return asArray(source).map(String);
}
exports.asStringArray = asStringArray;
function asNumber(source, onNaN = 0) {
    if (source == null) {
        return onNaN;
    }
    const num = parseInt(source, 10);
    return isNaN(num) ? onNaN : num;
}
exports.asNumber = asNumber;
function prefixedArray(input, prefix) {
    const output = [];
    for (let i = 0, max = input.length; i < max; i++) {
        output.push(prefix, input[i]);
    }
    return output;
}
exports.prefixedArray = prefixedArray;
function bufferToString(input) {
    return (Array.isArray(input) ? Buffer.concat(input) : input).toString('utf-8');
}
exports.bufferToString = bufferToString;
//# sourceMappingURL=util.js.map
});

var argumentFilters = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterHasLength = exports.filterFunction = exports.filterPlainObject = exports.filterStringOrStringArray = exports.filterStringArray = exports.filterString = exports.filterPrimitives = exports.filterArray = exports.filterType = void 0;

function filterType(input, filter, def) {
    if (filter(input)) {
        return input;
    }
    return (arguments.length > 2) ? def : undefined;
}
exports.filterType = filterType;
const filterArray = (input) => {
    return Array.isArray(input);
};
exports.filterArray = filterArray;
function filterPrimitives(input, omit) {
    return /number|string|boolean/.test(typeof input) && (!omit || !omit.includes((typeof input)));
}
exports.filterPrimitives = filterPrimitives;
const filterString = (input) => {
    return typeof input === 'string';
};
exports.filterString = filterString;
const filterStringArray = (input) => {
    return Array.isArray(input) && input.every(exports.filterString);
};
exports.filterStringArray = filterStringArray;
const filterStringOrStringArray = (input) => {
    return exports.filterString(input) || (Array.isArray(input) && input.every(exports.filterString));
};
exports.filterStringOrStringArray = filterStringOrStringArray;
function filterPlainObject(input) {
    return !!input && util.objectToString(input) === '[object Object]';
}
exports.filterPlainObject = filterPlainObject;
function filterFunction(input) {
    return typeof input === 'function';
}
exports.filterFunction = filterFunction;
const filterHasLength = (input) => {
    if (input == null || 'number|boolean|function'.includes(typeof input)) {
        return false;
    }
    return Array.isArray(input) || typeof input === 'string' || typeof input.length === 'number';
};
exports.filterHasLength = filterHasLength;
//# sourceMappingURL=argument-filters.js.map
});

var exitCodes = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExitCodes = void 0;
(function (ExitCodes) {
    ExitCodes[ExitCodes["SUCCESS"] = 0] = "SUCCESS";
    ExitCodes[ExitCodes["ERROR"] = 1] = "ERROR";
    ExitCodes[ExitCodes["UNCLEAN"] = 128] = "UNCLEAN";
})(exports.ExitCodes || (exports.ExitCodes = {}));
//# sourceMappingURL=exit-codes.js.map
});

var gitOutputStreams = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitOutputStreams = void 0;
class GitOutputStreams {
    constructor(stdOut, stdErr) {
        this.stdOut = stdOut;
        this.stdErr = stdErr;
    }
    asStrings() {
        return new GitOutputStreams(this.stdOut.toString('utf8'), this.stdErr.toString('utf8'));
    }
}
exports.GitOutputStreams = GitOutputStreams;
//# sourceMappingURL=git-output-streams.js.map
});

var lineParser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteLineParser = exports.LineParser = void 0;
class LineParser {
    constructor(regExp, useMatches) {
        this.matches = [];
        this.parse = (line, target) => {
            this.resetMatches();
            if (!this._regExp.every((reg, index) => this.addMatch(reg, index, line(index)))) {
                return false;
            }
            return this.useMatches(target, this.prepareMatches()) !== false;
        };
        this._regExp = Array.isArray(regExp) ? regExp : [regExp];
        if (useMatches) {
            this.useMatches = useMatches;
        }
    }
    // @ts-ignore
    useMatches(target, match) {
        throw new Error(`LineParser:useMatches not implemented`);
    }
    resetMatches() {
        this.matches.length = 0;
    }
    prepareMatches() {
        return this.matches;
    }
    addMatch(reg, index, line) {
        const matched = line && reg.exec(line);
        if (matched) {
            this.pushMatch(index, matched);
        }
        return !!matched;
    }
    pushMatch(_index, matched) {
        this.matches.push(...matched.slice(1));
    }
}
exports.LineParser = LineParser;
class RemoteLineParser extends LineParser {
    addMatch(reg, index, line) {
        return /^remote:\s/.test(String(line)) && super.addMatch(reg, index, line);
    }
    pushMatch(index, matched) {
        if (index > 0 || matched.length > 1) {
            super.pushMatch(index, matched);
        }
    }
}
exports.RemoteLineParser = RemoteLineParser;
//# sourceMappingURL=line-parser.js.map
});

var simpleGitOptions = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createInstanceConfig = void 0;
const defaultOptions = {
    binary: 'git',
    maxConcurrentProcesses: 5,
    config: [],
};
function createInstanceConfig(...options) {
    const baseDir = process.cwd();
    const config = Object.assign(Object.assign({ baseDir }, defaultOptions), ...(options.filter(o => typeof o === 'object' && o)));
    config.baseDir = config.baseDir || baseDir;
    return config;
}
exports.createInstanceConfig = createInstanceConfig;
//# sourceMappingURL=simple-git-options.js.map
});

var taskOptions = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.trailingFunctionArgument = exports.trailingOptionsArgument = exports.getTrailingOptions = exports.appendTaskOptions = void 0;


function appendTaskOptions(options, commands = []) {
    if (!argumentFilters.filterPlainObject(options)) {
        return commands;
    }
    return Object.keys(options).reduce((commands, key) => {
        const value = options[key];
        if (argumentFilters.filterPrimitives(value, ['boolean'])) {
            commands.push(key + '=' + value);
        }
        else {
            commands.push(key);
        }
        return commands;
    }, commands);
}
exports.appendTaskOptions = appendTaskOptions;
function getTrailingOptions(args, initialPrimitive = 0, objectOnly = false) {
    const command = [];
    for (let i = 0, max = initialPrimitive < 0 ? args.length : initialPrimitive; i < max; i++) {
        if ('string|number'.includes(typeof args[i])) {
            command.push(String(args[i]));
        }
    }
    appendTaskOptions(trailingOptionsArgument(args), command);
    if (!objectOnly) {
        command.push(...trailingArrayArgument(args));
    }
    return command;
}
exports.getTrailingOptions = getTrailingOptions;
function trailingArrayArgument(args) {
    const hasTrailingCallback = typeof util.last(args) === 'function';
    return argumentFilters.filterType(util.last(args, hasTrailingCallback ? 1 : 0), argumentFilters.filterArray, []);
}
/**
 * Given any number of arguments, returns the trailing options argument, ignoring a trailing function argument
 * if there is one. When not found, the return value is null.
 */
function trailingOptionsArgument(args) {
    const hasTrailingCallback = argumentFilters.filterFunction(util.last(args));
    return argumentFilters.filterType(util.last(args, hasTrailingCallback ? 1 : 0), argumentFilters.filterPlainObject);
}
exports.trailingOptionsArgument = trailingOptionsArgument;
/**
 * Returns either the source argument when it is a `Function`, or the default
 * `NOOP` function constant
 */
function trailingFunctionArgument(args, includeNoop = true) {
    const callback = util.asFunction(util.last(args));
    return includeNoop || util.isUserFunction(callback) ? callback : undefined;
}
exports.trailingFunctionArgument = trailingFunctionArgument;
//# sourceMappingURL=task-options.js.map
});

var taskParser = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStringResponse = exports.callTaskParser = void 0;

function callTaskParser(parser, streams) {
    return parser(streams.stdOut, streams.stdErr);
}
exports.callTaskParser = callTaskParser;
function parseStringResponse(result, parsers, ...texts) {
    texts.forEach(text => {
        for (let lines = util.toLinesWithContent(text), i = 0, max = lines.length; i < max; i++) {
            const line = (offset = 0) => {
                if ((i + offset) >= max) {
                    return;
                }
                return lines[i + offset];
            };
            parsers.some(({ parse }) => parse(line, result));
        }
    });
    return result;
}
exports.parseStringResponse = parseStringResponse;
//# sourceMappingURL=task-parser.js.map
});

var utils = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(argumentFilters, exports);
__exportStar(exitCodes, exports);
__exportStar(gitOutputStreams, exports);
__exportStar(lineParser, exports);
__exportStar(simpleGitOptions, exports);
__exportStar(taskOptions, exports);
__exportStar(taskParser, exports);
__exportStar(util, exports);
//# sourceMappingURL=index.js.map
});

var checkIsRepo = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIsBareRepoTask = exports.checkIsRepoRootTask = exports.checkIsRepoTask = exports.CheckRepoActions = void 0;

var CheckRepoActions;
(function (CheckRepoActions) {
    CheckRepoActions["BARE"] = "bare";
    CheckRepoActions["IN_TREE"] = "tree";
    CheckRepoActions["IS_REPO_ROOT"] = "root";
})(CheckRepoActions = exports.CheckRepoActions || (exports.CheckRepoActions = {}));
const onError = ({ exitCode }, error, done, fail) => {
    if (exitCode === utils.ExitCodes.UNCLEAN && isNotRepoMessage(error)) {
        return done(Buffer.from('false'));
    }
    fail(error);
};
const parser = (text) => {
    return text.trim() === 'true';
};
function checkIsRepoTask(action) {
    switch (action) {
        case CheckRepoActions.BARE:
            return checkIsBareRepoTask();
        case CheckRepoActions.IS_REPO_ROOT:
            return checkIsRepoRootTask();
    }
    const commands = ['rev-parse', '--is-inside-work-tree'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser,
    };
}
exports.checkIsRepoTask = checkIsRepoTask;
function checkIsRepoRootTask() {
    const commands = ['rev-parse', '--git-dir'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser(path) {
            return /^\.(git)?$/.test(path.trim());
        },
    };
}
exports.checkIsRepoRootTask = checkIsRepoRootTask;
function checkIsBareRepoTask() {
    const commands = ['rev-parse', '--is-bare-repository'];
    return {
        commands,
        format: 'utf-8',
        onError,
        parser,
    };
}
exports.checkIsBareRepoTask = checkIsBareRepoTask;
function isNotRepoMessage(error) {
    return /(Not a git repository|Kein Git-Repository)/i.test(String(error));
}
//# sourceMappingURL=check-is-repo.js.map
});

var CleanSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.cleanSummaryParser = exports.CleanResponse = void 0;

class CleanResponse {
    constructor(dryRun) {
        this.dryRun = dryRun;
        this.paths = [];
        this.files = [];
        this.folders = [];
    }
}
exports.CleanResponse = CleanResponse;
const removalRegexp = /^[a-z]+\s*/i;
const dryRunRemovalRegexp = /^[a-z]+\s+[a-z]+\s*/i;
const isFolderRegexp = /\/$/;
function cleanSummaryParser(dryRun, text) {
    const summary = new CleanResponse(dryRun);
    const regexp = dryRun ? dryRunRemovalRegexp : removalRegexp;
    utils.toLinesWithContent(text).forEach(line => {
        const removed = line.replace(regexp, '');
        summary.paths.push(removed);
        (isFolderRegexp.test(removed) ? summary.folders : summary.files).push(removed);
    });
    return summary;
}
exports.cleanSummaryParser = cleanSummaryParser;
//# sourceMappingURL=CleanSummary.js.map
});

var task = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmptyTask = exports.isBufferTask = exports.straightThroughBufferTask = exports.straightThroughStringTask = exports.configurationErrorTask = exports.adhocExecTask = exports.EMPTY_COMMANDS = void 0;

exports.EMPTY_COMMANDS = [];
function adhocExecTask(parser) {
    return {
        commands: exports.EMPTY_COMMANDS,
        format: 'utf-8',
        parser,
    };
}
exports.adhocExecTask = adhocExecTask;
function configurationErrorTask(error) {
    return {
        commands: exports.EMPTY_COMMANDS,
        format: 'utf-8',
        parser() {
            throw typeof error === 'string' ? new taskConfigurationError.TaskConfigurationError(error) : error;
        }
    };
}
exports.configurationErrorTask = configurationErrorTask;
function straightThroughStringTask(commands, trimmed = false) {
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return trimmed ? String(text).trim() : text;
        },
    };
}
exports.straightThroughStringTask = straightThroughStringTask;
function straightThroughBufferTask(commands) {
    return {
        commands,
        format: 'buffer',
        parser(buffer) {
            return buffer;
        },
    };
}
exports.straightThroughBufferTask = straightThroughBufferTask;
function isBufferTask(task) {
    return task.format === 'buffer';
}
exports.isBufferTask = isBufferTask;
function isEmptyTask(task) {
    return !task.commands.length;
}
exports.isEmptyTask = isEmptyTask;
//# sourceMappingURL=task.js.map
});

var clean = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCleanOptionsArray = exports.cleanTask = exports.cleanWithOptionsTask = exports.CleanOptions = exports.CONFIG_ERROR_UNKNOWN_OPTION = exports.CONFIG_ERROR_MODE_REQUIRED = exports.CONFIG_ERROR_INTERACTIVE_MODE = void 0;



exports.CONFIG_ERROR_INTERACTIVE_MODE = 'Git clean interactive mode is not supported';
exports.CONFIG_ERROR_MODE_REQUIRED = 'Git clean mode parameter ("n" or "f") is required';
exports.CONFIG_ERROR_UNKNOWN_OPTION = 'Git clean unknown option found in: ';
/**
 * All supported option switches available for use in a `git.clean` operation
 */
var CleanOptions;
(function (CleanOptions) {
    CleanOptions["DRY_RUN"] = "n";
    CleanOptions["FORCE"] = "f";
    CleanOptions["IGNORED_INCLUDED"] = "x";
    CleanOptions["IGNORED_ONLY"] = "X";
    CleanOptions["EXCLUDING"] = "e";
    CleanOptions["QUIET"] = "q";
    CleanOptions["RECURSIVE"] = "d";
})(CleanOptions = exports.CleanOptions || (exports.CleanOptions = {}));
const CleanOptionValues = new Set(['i', ...utils.asStringArray(Object.values(CleanOptions))]);
function cleanWithOptionsTask(mode, customArgs) {
    const { cleanMode, options, valid } = getCleanOptions(mode);
    if (!cleanMode) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_MODE_REQUIRED);
    }
    if (!valid.options) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_UNKNOWN_OPTION + JSON.stringify(mode));
    }
    options.push(...customArgs);
    if (options.some(isInteractiveMode)) {
        return task.configurationErrorTask(exports.CONFIG_ERROR_INTERACTIVE_MODE);
    }
    return cleanTask(cleanMode, options);
}
exports.cleanWithOptionsTask = cleanWithOptionsTask;
function cleanTask(mode, customArgs) {
    const commands = ['clean', `-${mode}`, ...customArgs];
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return CleanSummary.cleanSummaryParser(mode === CleanOptions.DRY_RUN, text);
        }
    };
}
exports.cleanTask = cleanTask;
function isCleanOptionsArray(input) {
    return Array.isArray(input) && input.every(test => CleanOptionValues.has(test));
}
exports.isCleanOptionsArray = isCleanOptionsArray;
function getCleanOptions(input) {
    let cleanMode;
    let options = [];
    let valid = { cleanMode: false, options: true };
    input.replace(/[^a-z]i/g, '').split('').forEach(char => {
        if (isCleanMode(char)) {
            cleanMode = char;
            valid.cleanMode = true;
        }
        else {
            valid.options = valid.options && isKnownOption(options[options.length] = (`-${char}`));
        }
    });
    return {
        cleanMode,
        options,
        valid,
    };
}
function isCleanMode(cleanMode) {
    return cleanMode === CleanOptions.FORCE || cleanMode === CleanOptions.DRY_RUN;
}
function isKnownOption(option) {
    return /^-[a-z]$/i.test(option) && CleanOptionValues.has(option.charAt(1));
}
function isInteractiveMode(option) {
    if (/^-[^\-]/.test(option)) {
        return option.indexOf('i') > 0;
    }
    return option === '--interactive';
}
//# sourceMappingURL=clean.js.map
});

var reset = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.getResetMode = exports.resetTask = exports.ResetMode = void 0;

var ResetMode;
(function (ResetMode) {
    ResetMode["MIXED"] = "mixed";
    ResetMode["SOFT"] = "soft";
    ResetMode["HARD"] = "hard";
    ResetMode["MERGE"] = "merge";
    ResetMode["KEEP"] = "keep";
})(ResetMode = exports.ResetMode || (exports.ResetMode = {}));
const ResetModes = Array.from(Object.values(ResetMode));
function resetTask(mode, customArgs) {
    const commands = ['reset'];
    if (isValidResetMode(mode)) {
        commands.push(`--${mode}`);
    }
    commands.push(...customArgs);
    return task.straightThroughStringTask(commands);
}
exports.resetTask = resetTask;
function getResetMode(mode) {
    if (isValidResetMode(mode)) {
        return mode;
    }
    switch (typeof mode) {
        case 'string':
        case 'undefined':
            return ResetMode.SOFT;
    }
    return;
}
exports.getResetMode = getResetMode;
function isValidResetMode(mode) {
    return ResetModes.includes(mode);
}
//# sourceMappingURL=reset.js.map
});

var api_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });








const api = {
    CheckRepoActions: checkIsRepo.CheckRepoActions,
    CleanOptions: clean.CleanOptions,
    GitConstructError: gitConstructError.GitConstructError,
    GitError: gitError.GitError,
    GitPluginError: gitPluginError.GitPluginError,
    GitResponseError: gitResponseError.GitResponseError,
    ResetMode: reset.ResetMode,
    TaskConfigurationError: taskConfigurationError.TaskConfigurationError,
};
exports.default = api;
//# sourceMappingURL=api.js.map
});

var commandConfigPrefixingPlugin_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.commandConfigPrefixingPlugin = void 0;

function commandConfigPrefixingPlugin(configuration) {
    const prefix = utils.prefixedArray(configuration, '-c');
    return {
        type: 'spawn.args',
        action(data) {
            return [...prefix, ...data];
        },
    };
}
exports.commandConfigPrefixingPlugin = commandConfigPrefixingPlugin;
//# sourceMappingURL=command-config-prefixing-plugin.js.map
});

var errorDetection_plugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorDetectionPlugin = exports.errorDetectionHandler = void 0;

function isTaskError(result) {
    return !!(result.exitCode && result.stdErr.length);
}
function getErrorMessage(result) {
    return Buffer.concat([...result.stdOut, ...result.stdErr]);
}
function errorDetectionHandler(overwrite = false, isError = isTaskError, errorMessage = getErrorMessage) {
    return (error, result) => {
        if ((!overwrite && error) || !isError(result)) {
            return error;
        }
        return errorMessage(result);
    };
}
exports.errorDetectionHandler = errorDetectionHandler;
function errorDetectionPlugin(config) {
    return {
        type: 'task.error',
        action(data, context) {
            const error = config(data.error, {
                stdErr: context.stdErr,
                stdOut: context.stdOut,
                exitCode: context.exitCode
            });
            if (Buffer.isBuffer(error)) {
                return { error: new gitError.GitError(undefined, error.toString('utf-8')) };
            }
            return {
                error
            };
        },
    };
}
exports.errorDetectionPlugin = errorDetectionPlugin;
//# sourceMappingURL=error-detection.plugin.js.map
});

var pluginStore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginStore = void 0;

class PluginStore {
    constructor() {
        this.plugins = new Set();
    }
    add(plugin) {
        const plugins = [];
        utils.asArray(plugin).forEach(plugin => plugin && this.plugins.add(utils.append(plugins, plugin)));
        return () => {
            plugins.forEach(plugin => this.plugins.delete(plugin));
        };
    }
    exec(type, data, context) {
        let output = data;
        const contextual = Object.freeze(Object.create(context));
        for (const plugin of this.plugins) {
            if (plugin.type === type) {
                output = plugin.action(output, contextual);
            }
        }
        return output;
    }
}
exports.PluginStore = PluginStore;
//# sourceMappingURL=plugin-store.js.map
});

var progressMonitorPlugin_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.progressMonitorPlugin = void 0;

function progressMonitorPlugin(progress) {
    const progressCommand = '--progress';
    const progressMethods = ['checkout', 'clone', 'fetch', 'pull', 'push'];
    const onProgress = {
        type: 'spawn.after',
        action(_data, context) {
            var _a;
            if (!context.commands.includes(progressCommand)) {
                return;
            }
            (_a = context.spawned.stderr) === null || _a === void 0 ? void 0 : _a.on('data', (chunk) => {
                const message = /^([a-zA-Z ]+):\s*(\d+)% \((\d+)\/(\d+)\)/.exec(chunk.toString('utf8'));
                if (!message) {
                    return;
                }
                progress({
                    method: context.method,
                    stage: progressEventStage(message[1]),
                    progress: utils.asNumber(message[2]),
                    processed: utils.asNumber(message[3]),
                    total: utils.asNumber(message[4]),
                });
            });
        }
    };
    const onArgs = {
        type: 'spawn.args',
        action(args, context) {
            if (!progressMethods.includes(context.method)) {
                return args;
            }
            return utils.including(args, progressCommand);
        }
    };
    return [onArgs, onProgress];
}
exports.progressMonitorPlugin = progressMonitorPlugin;
function progressEventStage(input) {
    return String(input.toLowerCase().split(' ', 1)) || 'unknown';
}
//# sourceMappingURL=progress-monitor-plugin.js.map
});

var simpleGitPlugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
//# sourceMappingURL=simple-git-plugin.js.map
});

var timoutPlugin = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.timeoutPlugin = void 0;

function timeoutPlugin({ block }) {
    if (block > 0) {
        return {
            type: 'spawn.after',
            action(_data, context) {
                var _a, _b;
                let timeout;
                function wait() {
                    timeout && clearTimeout(timeout);
                    timeout = setTimeout(kill, block);
                }
                function stop() {
                    var _a, _b;
                    (_a = context.spawned.stdout) === null || _a === void 0 ? void 0 : _a.off('data', wait);
                    (_b = context.spawned.stderr) === null || _b === void 0 ? void 0 : _b.off('data', wait);
                    context.spawned.off('exit', stop);
                    context.spawned.off('close', stop);
                }
                function kill() {
                    stop();
                    context.kill(new gitPluginError.GitPluginError(undefined, 'timeout', `block timeout reached`));
                }
                (_a = context.spawned.stdout) === null || _a === void 0 ? void 0 : _a.on('data', wait);
                (_b = context.spawned.stderr) === null || _b === void 0 ? void 0 : _b.on('data', wait);
                context.spawned.on('exit', stop);
                context.spawned.on('close', stop);
                wait();
            }
        };
    }
}
exports.timeoutPlugin = timeoutPlugin;
//# sourceMappingURL=timout-plugin.js.map
});

var plugins = createCommonjsModule(function (module, exports) {
var __createBinding = (commonjsGlobal && commonjsGlobal.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (commonjsGlobal && commonjsGlobal.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(commandConfigPrefixingPlugin_1, exports);
__exportStar(errorDetection_plugin, exports);
__exportStar(pluginStore, exports);
__exportStar(progressMonitorPlugin_1, exports);
__exportStar(simpleGitPlugin, exports);
__exportStar(timoutPlugin, exports);
//# sourceMappingURL=index.js.map
});

var gitLogger = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitLogger = exports.createLogger = exports.log = void 0;


src$2.default.formatters.L = (value) => String(utils.filterHasLength(value) ? value.length : '-');
src$2.default.formatters.B = (value) => {
    if (Buffer.isBuffer(value)) {
        return value.toString('utf8');
    }
    return utils.objectToString(value);
};
/**
 * The shared debug logging instance
 */
exports.log = src$2.default('simple-git');
function prefixedLogger(to, prefix, forward) {
    if (!prefix || !String(prefix).replace(/\s*/, '')) {
        return !forward ? to : (message, ...args) => {
            to(message, ...args);
            forward(message, ...args);
        };
    }
    return (message, ...args) => {
        to(`%s ${message}`, prefix, ...args);
        if (forward) {
            forward(message, ...args);
        }
    };
}
function childLoggerName(name, childDebugger, { namespace: parentNamespace }) {
    if (typeof name === 'string') {
        return name;
    }
    const childNamespace = childDebugger && childDebugger.namespace || '';
    if (childNamespace.startsWith(parentNamespace)) {
        return childNamespace.substr(parentNamespace.length + 1);
    }
    return childNamespace || parentNamespace;
}
function createLogger(label, verbose, initialStep, infoDebugger = exports.log) {
    const labelPrefix = label && `[${label}]` || '';
    const spawned = [];
    const debugDebugger = (typeof verbose === 'string') ? infoDebugger.extend(verbose) : verbose;
    const key = childLoggerName(utils.filterType(verbose, utils.filterString), debugDebugger, infoDebugger);
    return step(initialStep);
    function child(name) {
        return utils.append(spawned, createLogger(label, debugDebugger && debugDebugger.extend(name) || name));
    }
    function sibling(name, initial) {
        return utils.append(spawned, createLogger(label, key.replace(/^[^:]+/, name), initial, infoDebugger));
    }
    function step(phase) {
        const stepPrefix = phase && `[${phase}]` || '';
        const debug = debugDebugger && prefixedLogger(debugDebugger, stepPrefix) || utils.NOOP;
        const info = prefixedLogger(infoDebugger, `${labelPrefix} ${stepPrefix}`, debug);
        return Object.assign(debugDebugger ? debug : info, {
            key,
            label,
            child,
            sibling,
            debug,
            info,
            step,
        });
    }
}
exports.createLogger = createLogger;
/**
 * The `GitLogger` is used by the main `SimpleGit` runner to handle logging
 * any warnings or errors.
 */
class GitLogger {
    constructor(_out = exports.log) {
        this._out = _out;
        this.error = prefixedLogger(_out, '[ERROR]');
        this.warn = prefixedLogger(_out, '[WARN]');
    }
    silent(silence = false) {
        if (silence !== this._out.enabled) {
            return;
        }
        const { namespace } = this._out;
        const env = (process.env.DEBUG || '').split(',').filter(s => !!s);
        const hasOn = env.includes(namespace);
        const hasOff = env.includes(`-${namespace}`);
        // enabling the log
        if (!silence) {
            if (hasOff) {
                utils.remove(env, `-${namespace}`);
            }
            else {
                env.push(namespace);
            }
        }
        else {
            if (hasOn) {
                utils.remove(env, namespace);
            }
            else {
                env.push(`-${namespace}`);
            }
        }
        src$2.default.enable(env.join(','));
    }
}
exports.GitLogger = GitLogger;
//# sourceMappingURL=git-logger.js.map
});

var tasksPendingQueue = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksPendingQueue = void 0;


class TasksPendingQueue {
    constructor(logLabel = 'GitExecutor') {
        this.logLabel = logLabel;
        this._queue = new Map();
    }
    withProgress(task) {
        return this._queue.get(task);
    }
    createProgress(task) {
        const name = TasksPendingQueue.getName(task.commands[0]);
        const logger = gitLogger.createLogger(this.logLabel, name);
        return {
            task,
            logger,
            name,
        };
    }
    push(task) {
        const progress = this.createProgress(task);
        progress.logger('Adding task to the queue, commands = %o', task.commands);
        this._queue.set(task, progress);
        return progress;
    }
    fatal(err) {
        for (const [task, { logger }] of Array.from(this._queue.entries())) {
            if (task === err.task) {
                logger.info(`Failed %o`, err);
                logger(`Fatal exception, any as-yet un-started tasks run through this executor will not be attempted`);
            }
            else {
                logger.info(`A fatal exception occurred in a previous task, the queue has been purged: %o`, err.message);
            }
            this.complete(task);
        }
        if (this._queue.size !== 0) {
            throw new Error(`Queue size should be zero after fatal: ${this._queue.size}`);
        }
    }
    complete(task) {
        const progress = this.withProgress(task);
        if (progress) {
            this._queue.delete(task);
        }
    }
    attempt(task) {
        const progress = this.withProgress(task);
        if (!progress) {
            throw new gitError.GitError(undefined, 'TasksPendingQueue: attempt called for an unknown task');
        }
        progress.logger('Starting task');
        return progress;
    }
    static getName(name = 'empty') {
        return `task:${name}:${++TasksPendingQueue.counter}`;
    }
}
exports.TasksPendingQueue = TasksPendingQueue;
TasksPendingQueue.counter = 0;
//# sourceMappingURL=tasks-pending-queue.js.map
});

var gitExecutorChain = createCommonjsModule(function (module, exports) {
var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitExecutorChain = void 0;





class GitExecutorChain {
    constructor(_executor, _scheduler, _plugins) {
        this._executor = _executor;
        this._scheduler = _scheduler;
        this._plugins = _plugins;
        this._chain = Promise.resolve();
        this._queue = new tasksPendingQueue.TasksPendingQueue();
    }
    get binary() {
        return this._executor.binary;
    }
    get cwd() {
        return this._executor.cwd;
    }
    get env() {
        return this._executor.env;
    }
    get outputHandler() {
        return this._executor.outputHandler;
    }
    chain() {
        return this;
    }
    push(task) {
        this._queue.push(task);
        return this._chain = this._chain.then(() => this.attemptTask(task));
    }
    attemptTask(task$1) {
        return __awaiter(this, void 0, void 0, function* () {
            const onScheduleComplete = yield this._scheduler.next();
            const onQueueComplete = () => this._queue.complete(task$1);
            try {
                const { logger } = this._queue.attempt(task$1);
                return yield (task.isEmptyTask(task$1)
                    ? this.attemptEmptyTask(task$1, logger)
                    : this.attemptRemoteTask(task$1, logger));
            }
            catch (e) {
                throw this.onFatalException(task$1, e);
            }
            finally {
                onQueueComplete();
                onScheduleComplete();
            }
        });
    }
    onFatalException(task, e) {
        const gitError$1 = (e instanceof gitError.GitError) ? Object.assign(e, { task }) : new gitError.GitError(task, e && String(e));
        this._chain = Promise.resolve();
        this._queue.fatal(gitError$1);
        return gitError$1;
    }
    attemptRemoteTask(task$1, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            const args = this._plugins.exec('spawn.args', [...task$1.commands], pluginContext(task$1, task$1.commands));
            const raw = yield this.gitResponse(task$1, this.binary, args, this.outputHandler, logger.step('SPAWN'));
            const outputStreams = yield this.handleTaskData(task$1, args, raw, logger.step('HANDLE'));
            logger(`passing response to task's parser as a %s`, task$1.format);
            if (task.isBufferTask(task$1)) {
                return utils.callTaskParser(task$1.parser, outputStreams);
            }
            return utils.callTaskParser(task$1.parser, outputStreams.asStrings());
        });
    }
    attemptEmptyTask(task, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            logger(`empty task bypassing child process to call to task's parser`);
            return task.parser();
        });
    }
    handleTaskData(task, args, result, logger) {
        const { exitCode, rejection, stdOut, stdErr } = result;
        return new Promise((done, fail) => {
            logger(`Preparing to handle process response exitCode=%d stdOut=`, exitCode);
            const { error } = this._plugins.exec('task.error', { error: rejection }, Object.assign(Object.assign({}, pluginContext(task, args)), result));
            if (error && task.onError) {
                logger.info(`exitCode=%s handling with custom error handler`);
                return task.onError(result, error, (newStdOut) => {
                    logger.info(`custom error handler treated as success`);
                    logger(`custom error returned a %s`, utils.objectToString(newStdOut));
                    done(new utils.GitOutputStreams(Array.isArray(newStdOut) ? Buffer.concat(newStdOut) : newStdOut, Buffer.concat(stdErr)));
                }, fail);
            }
            if (error) {
                logger.info(`handling as error: exitCode=%s stdErr=%s rejection=%o`, exitCode, stdErr.length, rejection);
                return fail(error);
            }
            logger.info(`retrieving task output complete`);
            done(new utils.GitOutputStreams(Buffer.concat(stdOut), Buffer.concat(stdErr)));
        });
    }
    gitResponse(task, command, args, outputHandler, logger) {
        return __awaiter(this, void 0, void 0, function* () {
            const outputLogger = logger.sibling('output');
            const spawnOptions = {
                cwd: this.cwd,
                env: this.env,
                windowsHide: true,
            };
            return new Promise((done) => {
                const stdOut = [];
                const stdErr = [];
                let attempted = false;
                let rejection;
                function attemptClose(exitCode, event = 'retry') {
                    // closing when there is content, terminate immediately
                    if (attempted || stdErr.length || stdOut.length) {
                        logger.info(`exitCode=%s event=%s rejection=%o`, exitCode, event, rejection);
                        done({
                            stdOut,
                            stdErr,
                            exitCode,
                            rejection,
                        });
                        attempted = true;
                    }
                    // first attempt at closing but no content yet, wait briefly for the close/exit that may follow
                    if (!attempted) {
                        attempted = true;
                        setTimeout(() => attemptClose(exitCode, 'deferred'), 50);
                        logger('received %s event before content on stdOut/stdErr', event);
                    }
                }
                logger.info(`%s %o`, command, args);
                logger('%O', spawnOptions);
                const spawned = child_process_1__default['default'].spawn(command, args, spawnOptions);
                spawned.stdout.on('data', onDataReceived(stdOut, 'stdOut', logger, outputLogger.step('stdOut')));
                spawned.stderr.on('data', onDataReceived(stdErr, 'stdErr', logger, outputLogger.step('stdErr')));
                spawned.on('error', onErrorReceived(stdErr, logger));
                spawned.on('close', (code) => attemptClose(code, 'close'));
                spawned.on('exit', (code) => attemptClose(code, 'exit'));
                if (outputHandler) {
                    logger(`Passing child process stdOut/stdErr to custom outputHandler`);
                    outputHandler(command, spawned.stdout, spawned.stderr, [...args]);
                }
                this._plugins.exec('spawn.after', undefined, Object.assign(Object.assign({}, pluginContext(task, args)), { spawned, kill(reason) {
                        if (spawned.killed) {
                            return;
                        }
                        rejection = reason;
                        spawned.kill('SIGINT');
                    } }));
            });
        });
    }
}
exports.GitExecutorChain = GitExecutorChain;
function pluginContext(task, commands) {
    return {
        method: utils.first(task.commands) || '',
        commands,
    };
}
function onErrorReceived(target, logger) {
    return (err) => {
        logger(`[ERROR] child process exception %o`, err);
        target.push(Buffer.from(String(err.stack), 'ascii'));
    };
}
function onDataReceived(target, name, logger, output) {
    return (buffer) => {
        logger(`%s received %L bytes`, name, buffer);
        output(`%B`, buffer);
        target.push(buffer);
    };
}
//# sourceMappingURL=git-executor-chain.js.map
});

var gitExecutor = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.GitExecutor = void 0;

class GitExecutor {
    constructor(binary = 'git', cwd, _scheduler, _plugins) {
        this.binary = binary;
        this.cwd = cwd;
        this._scheduler = _scheduler;
        this._plugins = _plugins;
        this._chain = new gitExecutorChain.GitExecutorChain(this, this._scheduler, this._plugins);
    }
    chain() {
        return new gitExecutorChain.GitExecutorChain(this, this._scheduler, this._plugins);
    }
    push(task) {
        return this._chain.push(task);
    }
}
exports.GitExecutor = GitExecutor;
//# sourceMappingURL=git-executor.js.map
});

var taskCallback_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.taskCallback = void 0;


function taskCallback(task, response, callback = utils.NOOP) {
    const onSuccess = (data) => {
        callback(null, data);
    };
    const onError = (err) => {
        if ((err === null || err === void 0 ? void 0 : err.task) === task) {
            if (err instanceof gitResponseError.GitResponseError) {
                return callback(addDeprecationNoticeToError(err));
            }
            callback(err);
        }
    };
    response.then(onSuccess, onError);
}
exports.taskCallback = taskCallback;
function addDeprecationNoticeToError(err) {
    let log = (name) => {
        console.warn(`simple-git deprecation notice: accessing GitResponseError.${name} should be GitResponseError.git.${name}, this will no longer be available in version 3`);
        log = utils.NOOP;
    };
    return Object.create(err, Object.getOwnPropertyNames(err.git).reduce(descriptorReducer, {}));
    function descriptorReducer(all, name) {
        if (name in err) {
            return all;
        }
        all[name] = {
            enumerable: false,
            configurable: false,
            get() {
                log(name);
                return err.git[name];
            },
        };
        return all;
    }
}
//# sourceMappingURL=task-callback.js.map
});

var parseRemoteObjects = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.remoteMessagesObjectParsers = void 0;

function objectEnumerationResult(remoteMessages) {
    return (remoteMessages.objects = remoteMessages.objects || {
        compressing: 0,
        counting: 0,
        enumerating: 0,
        packReused: 0,
        reused: { count: 0, delta: 0 },
        total: { count: 0, delta: 0 }
    });
}
function asObjectCount(source) {
    const count = /^\s*(\d+)/.exec(source);
    const delta = /delta (\d+)/i.exec(source);
    return {
        count: utils.asNumber(count && count[1] || '0'),
        delta: utils.asNumber(delta && delta[1] || '0'),
    };
}
exports.remoteMessagesObjectParsers = [
    new utils.RemoteLineParser(/^remote:\s*(enumerating|counting|compressing) objects: (\d+),/i, (result, [action, count]) => {
        const key = action.toLowerCase();
        const enumeration = objectEnumerationResult(result.remoteMessages);
        Object.assign(enumeration, { [key]: utils.asNumber(count) });
    }),
    new utils.RemoteLineParser(/^remote:\s*(enumerating|counting|compressing) objects: \d+% \(\d+\/(\d+)\),/i, (result, [action, count]) => {
        const key = action.toLowerCase();
        const enumeration = objectEnumerationResult(result.remoteMessages);
        Object.assign(enumeration, { [key]: utils.asNumber(count) });
    }),
    new utils.RemoteLineParser(/total ([^,]+), reused ([^,]+), pack-reused (\d+)/i, (result, [total, reused, packReused]) => {
        const objects = objectEnumerationResult(result.remoteMessages);
        objects.total = asObjectCount(total);
        objects.reused = asObjectCount(reused);
        objects.packReused = utils.asNumber(packReused);
    }),
];
//# sourceMappingURL=parse-remote-objects.js.map
});

var parseRemoteMessages_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoteMessageSummary = exports.parseRemoteMessages = void 0;


const parsers = [
    new utils.RemoteLineParser(/^remote:\s*(.+)$/, (result, [text]) => {
        result.remoteMessages.all.push(text.trim());
        return false;
    }),
    ...parseRemoteObjects.remoteMessagesObjectParsers,
    new utils.RemoteLineParser([/create a (?:pull|merge) request/i, /\s(https?:\/\/\S+)$/], (result, [pullRequestUrl]) => {
        result.remoteMessages.pullRequestUrl = pullRequestUrl;
    }),
    new utils.RemoteLineParser([/found (\d+) vulnerabilities.+\(([^)]+)\)/i, /\s(https?:\/\/\S+)$/], (result, [count, summary, url]) => {
        result.remoteMessages.vulnerabilities = {
            count: utils.asNumber(count),
            summary,
            url,
        };
    }),
];
function parseRemoteMessages(_stdOut, stdErr) {
    return utils.parseStringResponse({ remoteMessages: new RemoteMessageSummary() }, parsers, stdErr);
}
exports.parseRemoteMessages = parseRemoteMessages;
class RemoteMessageSummary {
    constructor() {
        this.all = [];
    }
}
exports.RemoteMessageSummary = RemoteMessageSummary;
//# sourceMappingURL=parse-remote-messages.js.map
});

var parsePush = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePushDetail = exports.parsePushResult = void 0;


function pushResultPushedItem(local, remote, status) {
    const deleted = status.includes('deleted');
    const tag = status.includes('tag') || /^refs\/tags/.test(local);
    const alreadyUpdated = !status.includes('new');
    return {
        deleted,
        tag,
        branch: !tag,
        new: !alreadyUpdated,
        alreadyUpdated,
        local,
        remote,
    };
}
const parsers = [
    new utils.LineParser(/^Pushing to (.+)$/, (result, [repo]) => {
        result.repo = repo;
    }),
    new utils.LineParser(/^updating local tracking ref '(.+)'/, (result, [local]) => {
        result.ref = Object.assign(Object.assign({}, (result.ref || {})), { local });
    }),
    new utils.LineParser(/^[*-=]\s+([^:]+):(\S+)\s+\[(.+)]$/, (result, [local, remote, type]) => {
        result.pushed.push(pushResultPushedItem(local, remote, type));
    }),
    new utils.LineParser(/^Branch '([^']+)' set up to track remote branch '([^']+)' from '([^']+)'/, (result, [local, remote, remoteName]) => {
        result.branch = Object.assign(Object.assign({}, (result.branch || {})), { local,
            remote,
            remoteName });
    }),
    new utils.LineParser(/^([^:]+):(\S+)\s+([a-z0-9]+)\.\.([a-z0-9]+)$/, (result, [local, remote, from, to]) => {
        result.update = {
            head: {
                local,
                remote,
            },
            hash: {
                from,
                to,
            },
        };
    }),
];
const parsePushResult = (stdOut, stdErr) => {
    const pushDetail = exports.parsePushDetail(stdOut, stdErr);
    const responseDetail = parseRemoteMessages_1.parseRemoteMessages(stdOut, stdErr);
    return Object.assign(Object.assign({}, pushDetail), responseDetail);
};
exports.parsePushResult = parsePushResult;
const parsePushDetail = (stdOut, stdErr) => {
    return utils.parseStringResponse({ pushed: [] }, parsers, stdOut, stdErr);
};
exports.parsePushDetail = parsePushDetail;
//# sourceMappingURL=parse-push.js.map
});

var push = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushTask = exports.pushTagsTask = void 0;


function pushTagsTask(ref = {}, customArgs) {
    utils.append(customArgs, '--tags');
    return pushTask(ref, customArgs);
}
exports.pushTagsTask = pushTagsTask;
function pushTask(ref = {}, customArgs) {
    const commands = ['push', ...customArgs];
    if (ref.branch) {
        commands.splice(1, 0, ref.branch);
    }
    if (ref.remote) {
        commands.splice(1, 0, ref.remote);
    }
    utils.remove(commands, '-v');
    utils.append(commands, '--verbose');
    utils.append(commands, '--porcelain');
    return {
        commands,
        format: 'utf-8',
        parser: parsePush.parsePushResult,
    };
}
exports.pushTask = pushTask;
//# sourceMappingURL=push.js.map
});

var simpleGitApi = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleGitApi = void 0;




class SimpleGitApi {
    constructor(_executor) {
        this._executor = _executor;
    }
    _runTask(task, then) {
        const chain = this._executor.chain();
        const promise = chain.push(task);
        if (then) {
            taskCallback_1.taskCallback(task, promise, then);
        }
        return Object.create(this, {
            then: { value: promise.then.bind(promise) },
            catch: { value: promise.catch.bind(promise) },
            _executor: { value: chain },
        });
    }
    add(files) {
        return this._runTask(task.straightThroughStringTask(['add', ...utils.asArray(files)]), utils.trailingFunctionArgument(arguments));
    }
    push() {
        const task = push.pushTask({
            remote: utils.filterType(arguments[0], utils.filterString),
            branch: utils.filterType(arguments[1], utils.filterString),
        }, utils.getTrailingOptions(arguments));
        return this._runTask(task, utils.trailingFunctionArgument(arguments));
    }
}
exports.SimpleGitApi = SimpleGitApi;
//# sourceMappingURL=simple-git-api.js.map
});

var dist = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDeferred = exports.deferred = void 0;
/**
 * Creates a new `DeferredPromise`
 *
 * ```typescript
 import {deferred} from '@kwsites/promise-deferred`;
 ```
 */
function deferred() {
    let done;
    let fail;
    let status = 'pending';
    const promise = new Promise((_done, _fail) => {
        done = _done;
        fail = _fail;
    });
    return {
        promise,
        done(result) {
            if (status === 'pending') {
                status = 'resolved';
                done(result);
            }
        },
        fail(error) {
            if (status === 'pending') {
                status = 'rejected';
                fail(error);
            }
        },
        get fulfilled() {
            return status !== 'pending';
        },
        get status() {
            return status;
        },
    };
}
exports.deferred = deferred;
/**
 * Alias of the exported `deferred` function, to help consumers wanting to use `deferred` as the
 * local variable name rather than the factory import name, without needing to rename on import.
 *
 * ```typescript
 import {createDeferred} from '@kwsites/promise-deferred`;
 ```
 */
exports.createDeferred = deferred;
/**
 * Default export allows use as:
 *
 * ```typescript
 import deferred from '@kwsites/promise-deferred`;
 ```
 */
exports.default = deferred;
//# sourceMappingURL=index.js.map
});

var scheduler = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.Scheduler = void 0;



const logger = gitLogger.createLogger('', 'scheduler');
const createScheduledTask = (() => {
    let id = 0;
    return () => {
        id++;
        const { promise, done } = dist.createDeferred();
        return {
            promise,
            done,
            id,
        };
    };
})();
class Scheduler {
    constructor(concurrency = 2) {
        this.concurrency = concurrency;
        this.pending = [];
        this.running = [];
        logger(`Constructed, concurrency=%s`, concurrency);
    }
    schedule() {
        if (!this.pending.length || this.running.length >= this.concurrency) {
            logger(`Schedule attempt ignored, pending=%s running=%s concurrency=%s`, this.pending.length, this.running.length, this.concurrency);
            return;
        }
        const task = utils.append(this.running, this.pending.shift());
        logger(`Attempting id=%s`, task.id);
        task.done(() => {
            logger(`Completing id=`, task.id);
            utils.remove(this.running, task);
            this.schedule();
        });
    }
    next() {
        const { promise, id } = utils.append(this.pending, createScheduledTask());
        logger(`Scheduling id=%s`, id);
        this.schedule();
        return promise;
    }
}
exports.Scheduler = Scheduler;
//# sourceMappingURL=scheduler.js.map
});

var applyPatch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyPatchTask = void 0;

function applyPatchTask(patches, customArgs) {
    return task.straightThroughStringTask(['apply', ...customArgs, ...patches]);
}
exports.applyPatchTask = applyPatchTask;
//# sourceMappingURL=apply-patch.js.map
});

var BranchDeleteSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.isSingleBranchDeleteFailure = exports.branchDeletionFailure = exports.branchDeletionSuccess = exports.BranchDeletionBatch = void 0;
class BranchDeletionBatch {
    constructor() {
        this.all = [];
        this.branches = {};
        this.errors = [];
    }
    get success() {
        return !this.errors.length;
    }
}
exports.BranchDeletionBatch = BranchDeletionBatch;
function branchDeletionSuccess(branch, hash) {
    return {
        branch, hash, success: true,
    };
}
exports.branchDeletionSuccess = branchDeletionSuccess;
function branchDeletionFailure(branch) {
    return {
        branch, hash: null, success: false,
    };
}
exports.branchDeletionFailure = branchDeletionFailure;
function isSingleBranchDeleteFailure(test) {
    return test.success;
}
exports.isSingleBranchDeleteFailure = isSingleBranchDeleteFailure;
//# sourceMappingURL=BranchDeleteSummary.js.map
});

var parseBranchDelete = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasBranchDeletionError = exports.parseBranchDeletions = void 0;


const deleteSuccessRegex = /(\S+)\s+\(\S+\s([^)]+)\)/;
const deleteErrorRegex = /^error[^']+'([^']+)'/m;
const parsers = [
    new utils.LineParser(deleteSuccessRegex, (result, [branch, hash]) => {
        const deletion = BranchDeleteSummary.branchDeletionSuccess(branch, hash);
        result.all.push(deletion);
        result.branches[branch] = deletion;
    }),
    new utils.LineParser(deleteErrorRegex, (result, [branch]) => {
        const deletion = BranchDeleteSummary.branchDeletionFailure(branch);
        result.errors.push(deletion);
        result.all.push(deletion);
        result.branches[branch] = deletion;
    }),
];
const parseBranchDeletions = (stdOut, stdErr) => {
    return utils.parseStringResponse(new BranchDeleteSummary.BranchDeletionBatch(), parsers, stdOut, stdErr);
};
exports.parseBranchDeletions = parseBranchDeletions;
function hasBranchDeletionError(data, processExitCode) {
    return processExitCode === utils.ExitCodes.ERROR && deleteErrorRegex.test(data);
}
exports.hasBranchDeletionError = hasBranchDeletionError;
//# sourceMappingURL=parse-branch-delete.js.map
});

var BranchSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.BranchSummaryResult = void 0;
class BranchSummaryResult {
    constructor() {
        this.all = [];
        this.branches = {};
        this.current = '';
        this.detached = false;
    }
    push(current, detached, name, commit, label) {
        if (current) {
            this.detached = detached;
            this.current = name;
        }
        this.all.push(name);
        this.branches[name] = {
            current: current,
            name: name,
            commit: commit,
            label: label
        };
    }
}
exports.BranchSummaryResult = BranchSummaryResult;
//# sourceMappingURL=BranchSummary.js.map
});

var parseBranch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseBranchSummary = void 0;


const parsers = [
    new utils.LineParser(/^(\*\s)?\((?:HEAD )?detached (?:from|at) (\S+)\)\s+([a-z0-9]+)\s(.*)$/, (result, [current, name, commit, label]) => {
        result.push(!!current, true, name, commit, label);
    }),
    new utils.LineParser(/^(\*\s)?(\S+)\s+([a-z0-9]+)\s(.*)$/s, (result, [current, name, commit, label]) => {
        result.push(!!current, false, name, commit, label);
    })
];
function parseBranchSummary(stdOut) {
    return utils.parseStringResponse(new BranchSummary.BranchSummaryResult(), parsers, stdOut);
}
exports.parseBranchSummary = parseBranchSummary;
//# sourceMappingURL=parse-branch.js.map
});

var branch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBranchTask = exports.deleteBranchesTask = exports.branchLocalTask = exports.branchTask = exports.containsDeleteBranchCommand = void 0;




function containsDeleteBranchCommand(commands) {
    const deleteCommands = ['-d', '-D', '--delete'];
    return commands.some(command => deleteCommands.includes(command));
}
exports.containsDeleteBranchCommand = containsDeleteBranchCommand;
function branchTask(customArgs) {
    const isDelete = containsDeleteBranchCommand(customArgs);
    const commands = ['branch', ...customArgs];
    if (commands.length === 1) {
        commands.push('-a');
    }
    if (!commands.includes('-v')) {
        commands.splice(1, 0, '-v');
    }
    return {
        format: 'utf-8',
        commands,
        parser(stdOut, stdErr) {
            if (isDelete) {
                return parseBranchDelete.parseBranchDeletions(stdOut, stdErr).all[0];
            }
            return parseBranch.parseBranchSummary(stdOut);
        },
    };
}
exports.branchTask = branchTask;
function branchLocalTask() {
    const parser = parseBranch.parseBranchSummary;
    return {
        format: 'utf-8',
        commands: ['branch', '-v'],
        parser,
    };
}
exports.branchLocalTask = branchLocalTask;
function deleteBranchesTask(branches, forceDelete = false) {
    return {
        format: 'utf-8',
        commands: ['branch', '-v', forceDelete ? '-D' : '-d', ...branches],
        parser(stdOut, stdErr) {
            return parseBranchDelete.parseBranchDeletions(stdOut, stdErr);
        },
        onError({ exitCode, stdOut }, error, done, fail) {
            if (!parseBranchDelete.hasBranchDeletionError(String(error), exitCode)) {
                return fail(error);
            }
            done(stdOut);
        },
    };
}
exports.deleteBranchesTask = deleteBranchesTask;
function deleteBranchTask(branch, forceDelete = false) {
    const task = {
        format: 'utf-8',
        commands: ['branch', '-v', forceDelete ? '-D' : '-d', branch],
        parser(stdOut, stdErr) {
            return parseBranchDelete.parseBranchDeletions(stdOut, stdErr).branches[branch];
        },
        onError({ exitCode, stdErr, stdOut }, error, _, fail) {
            if (!parseBranchDelete.hasBranchDeletionError(String(error), exitCode)) {
                return fail(error);
            }
            throw new gitResponseError.GitResponseError(task.parser(utils.bufferToString(stdOut), utils.bufferToString(stdErr)), String(error));
        },
    };
    return task;
}
exports.deleteBranchTask = deleteBranchTask;
//# sourceMappingURL=branch.js.map
});

var CheckIgnore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCheckIgnore = void 0;
/**
 * Parser for the `check-ignore` command - returns each file as a string array
 */
const parseCheckIgnore = (text) => {
    return text.split(/\n/g)
        .map(line => line.trim())
        .filter(file => !!file);
};
exports.parseCheckIgnore = parseCheckIgnore;
//# sourceMappingURL=CheckIgnore.js.map
});

var checkIgnore = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIgnoreTask = void 0;

function checkIgnoreTask(paths) {
    return {
        commands: ['check-ignore', ...paths],
        format: 'utf-8',
        parser: CheckIgnore.parseCheckIgnore,
    };
}
exports.checkIgnoreTask = checkIgnoreTask;
//# sourceMappingURL=check-ignore.js.map
});

var clone = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneMirrorTask = exports.cloneTask = void 0;


function cloneTask(repo, directory, customArgs) {
    const commands = ['clone', ...customArgs];
    if (typeof repo === 'string') {
        commands.push(repo);
    }
    if (typeof directory === 'string') {
        commands.push(directory);
    }
    return task.straightThroughStringTask(commands);
}
exports.cloneTask = cloneTask;
function cloneMirrorTask(repo, directory, customArgs) {
    utils.append(customArgs, '--mirror');
    return cloneTask(repo, directory, customArgs);
}
exports.cloneMirrorTask = cloneMirrorTask;
//# sourceMappingURL=clone.js.map
});

var ConfigList_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.configListParser = exports.ConfigList = void 0;

class ConfigList {
    constructor() {
        this.files = [];
        this.values = Object.create(null);
    }
    get all() {
        if (!this._all) {
            this._all = this.files.reduce((all, file) => {
                return Object.assign(all, this.values[file]);
            }, {});
        }
        return this._all;
    }
    addFile(file) {
        if (!(file in this.values)) {
            const latest = utils.last(this.files);
            this.values[file] = latest ? Object.create(this.values[latest]) : {};
            this.files.push(file);
        }
        return this.values[file];
    }
    addValue(file, key, value) {
        const values = this.addFile(file);
        if (!values.hasOwnProperty(key)) {
            values[key] = value;
        }
        else if (Array.isArray(values[key])) {
            values[key].push(value);
        }
        else {
            values[key] = [values[key], value];
        }
        this._all = undefined;
    }
}
exports.ConfigList = ConfigList;
function configListParser(text) {
    const config = new ConfigList();
    const lines = text.split('\0');
    for (let i = 0, max = lines.length - 1; i < max;) {
        const file = configFilePath(lines[i++]);
        const [key, value] = utils.splitOn(lines[i++], '\n');
        config.addValue(file, key, value);
    }
    return config;
}
exports.configListParser = configListParser;
function configFilePath(filePath) {
    return filePath.replace(/^(file):/, '');
}
//# sourceMappingURL=ConfigList.js.map
});

var config = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.listConfigTask = exports.addConfigTask = void 0;

function addConfigTask(key, value, append = false) {
    const commands = ['config', '--local'];
    if (append) {
        commands.push('--add');
    }
    commands.push(key, value);
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return text;
        }
    };
}
exports.addConfigTask = addConfigTask;
function listConfigTask() {
    return {
        commands: ['config', '--list', '--show-origin', '--null'],
        format: 'utf-8',
        parser(text) {
            return ConfigList_1.configListParser(text);
        },
    };
}
exports.listConfigTask = listConfigTask;
//# sourceMappingURL=config.js.map
});

var parseCommit = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseCommitResult = void 0;

const parsers = [
    new utils.LineParser(/\[([^\s]+)( \([^)]+\))? ([^\]]+)/, (result, [branch, root, commit]) => {
        result.branch = branch;
        result.commit = commit;
        result.root = !!root;
    }),
    new utils.LineParser(/\s*Author:\s(.+)/i, (result, [author]) => {
        const parts = author.split('<');
        const email = parts.pop();
        if (!email || !email.includes('@')) {
            return;
        }
        result.author = {
            email: email.substr(0, email.length - 1),
            name: parts.join('<').trim()
        };
    }),
    new utils.LineParser(/(\d+)[^,]*(?:,\s*(\d+)[^,]*)(?:,\s*(\d+))/g, (result, [changes, insertions, deletions]) => {
        result.summary.changes = parseInt(changes, 10) || 0;
        result.summary.insertions = parseInt(insertions, 10) || 0;
        result.summary.deletions = parseInt(deletions, 10) || 0;
    }),
    new utils.LineParser(/^(\d+)[^,]*(?:,\s*(\d+)[^(]+\(([+-]))?/, (result, [changes, lines, direction]) => {
        result.summary.changes = parseInt(changes, 10) || 0;
        const count = parseInt(lines, 10) || 0;
        if (direction === '-') {
            result.summary.deletions = count;
        }
        else if (direction === '+') {
            result.summary.insertions = count;
        }
    }),
];
function parseCommitResult(stdOut) {
    const result = {
        author: null,
        branch: '',
        commit: '',
        root: false,
        summary: {
            changes: 0,
            insertions: 0,
            deletions: 0,
        },
    };
    return utils.parseStringResponse(result, parsers, stdOut);
}
exports.parseCommitResult = parseCommitResult;
//# sourceMappingURL=parse-commit.js.map
});

var commit = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.commitTask = void 0;

function commitTask(message, files, customArgs) {
    const commands = ['commit'];
    message.forEach((m) => commands.push('-m', m));
    commands.push(...files, ...customArgs);
    return {
        commands,
        format: 'utf-8',
        parser: parseCommit.parseCommitResult,
    };
}
exports.commitTask = commitTask;
//# sourceMappingURL=commit.js.map
});

var DiffSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.DiffSummary = void 0;
/***
 * The DiffSummary is returned as a response to getting `git().status()`
 */
class DiffSummary {
    constructor() {
        this.changed = 0;
        this.deletions = 0;
        this.insertions = 0;
        this.files = [];
    }
}
exports.DiffSummary = DiffSummary;
//# sourceMappingURL=DiffSummary.js.map
});

var parseDiffSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDiffResult = void 0;

function parseDiffResult(stdOut) {
    const lines = stdOut.trim().split('\n');
    const status = new DiffSummary_1.DiffSummary();
    readSummaryLine(status, lines.pop());
    for (let i = 0, max = lines.length; i < max; i++) {
        const line = lines[i];
        textFileChange(line, status) || binaryFileChange(line, status);
    }
    return status;
}
exports.parseDiffResult = parseDiffResult;
function readSummaryLine(status, summary) {
    (summary || '')
        .trim()
        .split(', ')
        .forEach(function (text) {
        const summary = /(\d+)\s([a-z]+)/.exec(text);
        if (!summary) {
            return;
        }
        summaryType(status, summary[2], parseInt(summary[1], 10));
    });
}
function summaryType(status, key, value) {
    const match = (/([a-z]+?)s?\b/.exec(key));
    if (!match || !statusUpdate[match[1]]) {
        return;
    }
    statusUpdate[match[1]](status, value);
}
const statusUpdate = {
    file(status, value) {
        status.changed = value;
    },
    deletion(status, value) {
        status.deletions = value;
    },
    insertion(status, value) {
        status.insertions = value;
    }
};
function textFileChange(input, { files }) {
    const line = input.trim().match(/^(.+)\s+\|\s+(\d+)(\s+[+\-]+)?$/);
    if (line) {
        var alterations = (line[3] || '').trim();
        files.push({
            file: line[1].trim(),
            changes: parseInt(line[2], 10),
            insertions: alterations.replace(/-/g, '').length,
            deletions: alterations.replace(/\+/g, '').length,
            binary: false
        });
        return true;
    }
    return false;
}
function binaryFileChange(input, { files }) {
    const line = input.match(/^(.+) \|\s+Bin ([0-9.]+) -> ([0-9.]+) ([a-z]+)$/);
    if (line) {
        files.push({
            file: line[1].trim(),
            before: +line[2],
            after: +line[3],
            binary: true
        });
        return true;
    }
    return false;
}
//# sourceMappingURL=parse-diff-summary.js.map
});

var diff = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffSummaryTask = void 0;

function diffSummaryTask(customArgs) {
    return {
        commands: ['diff', '--stat=4096', ...customArgs],
        format: 'utf-8',
        parser(stdOut) {
            return parseDiffSummary.parseDiffResult(stdOut);
        }
    };
}
exports.diffSummaryTask = diffSummaryTask;
//# sourceMappingURL=diff.js.map
});

var parseFetch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFetchResult = void 0;

const parsers = [
    new utils.LineParser(/From (.+)$/, (result, [remote]) => {
        result.remote = remote;
    }),
    new utils.LineParser(/\* \[new branch]\s+(\S+)\s*-> (.+)$/, (result, [name, tracking]) => {
        result.branches.push({
            name,
            tracking,
        });
    }),
    new utils.LineParser(/\* \[new tag]\s+(\S+)\s*-> (.+)$/, (result, [name, tracking]) => {
        result.tags.push({
            name,
            tracking,
        });
    })
];
function parseFetchResult(stdOut, stdErr) {
    const result = {
        raw: stdOut,
        remote: null,
        branches: [],
        tags: [],
    };
    return utils.parseStringResponse(result, parsers, stdOut, stdErr);
}
exports.parseFetchResult = parseFetchResult;
//# sourceMappingURL=parse-fetch.js.map
});

var fetch = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchTask = void 0;

function fetchTask(remote, branch, customArgs) {
    const commands = ['fetch', ...customArgs];
    if (remote && branch) {
        commands.push(remote, branch);
    }
    return {
        commands,
        format: 'utf-8',
        parser: parseFetch.parseFetchResult,
    };
}
exports.fetchTask = fetchTask;
//# sourceMappingURL=fetch.js.map
});

var hashObject = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashObjectTask = void 0;

/**
 * Task used by `git.hashObject`
 */
function hashObjectTask(filePath, write) {
    const commands = ['hash-object', filePath];
    if (write) {
        commands.push('-w');
    }
    return task.straightThroughStringTask(commands, true);
}
exports.hashObjectTask = hashObjectTask;
//# sourceMappingURL=hash-object.js.map
});

var InitSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseInit = exports.InitSummary = void 0;
class InitSummary {
    constructor(bare, path, existing, gitDir) {
        this.bare = bare;
        this.path = path;
        this.existing = existing;
        this.gitDir = gitDir;
    }
}
exports.InitSummary = InitSummary;
const initResponseRegex = /^Init.+ repository in (.+)$/;
const reInitResponseRegex = /^Rein.+ in (.+)$/;
function parseInit(bare, path, text) {
    const response = String(text).trim();
    let result;
    if ((result = initResponseRegex.exec(response))) {
        return new InitSummary(bare, path, false, result[1]);
    }
    if ((result = reInitResponseRegex.exec(response))) {
        return new InitSummary(bare, path, true, result[1]);
    }
    let gitDir = '';
    const tokens = response.split(' ');
    while (tokens.length) {
        const token = tokens.shift();
        if (token === 'in') {
            gitDir = tokens.join(' ');
            break;
        }
    }
    return new InitSummary(bare, path, /^re/i.test(response), gitDir);
}
exports.parseInit = parseInit;
//# sourceMappingURL=InitSummary.js.map
});

var init = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTask = void 0;

const bareCommand = '--bare';
function hasBareCommand(command) {
    return command.includes(bareCommand);
}
function initTask(bare = false, path, customArgs) {
    const commands = ['init', ...customArgs];
    if (bare && !hasBareCommand(commands)) {
        commands.splice(1, 0, bareCommand);
    }
    return {
        commands,
        format: 'utf-8',
        parser(text) {
            return InitSummary_1.parseInit(commands.includes('--bare'), path, text);
        }
    };
}
exports.initTask = initTask;
//# sourceMappingURL=init.js.map
});

var parseListLogSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.createListLogSummaryParser = exports.SPLITTER = exports.COMMIT_BOUNDARY = exports.START_BOUNDARY = void 0;


exports.START_BOUNDARY = 'òòòòòò ';
exports.COMMIT_BOUNDARY = ' òò';
exports.SPLITTER = ' ò ';
const defaultFieldNames = ['hash', 'date', 'message', 'refs', 'author_name', 'author_email'];
function lineBuilder(tokens, fields) {
    return fields.reduce((line, field, index) => {
        line[field] = tokens[index] || '';
        return line;
    }, Object.create({ diff: null }));
}
function createListLogSummaryParser(splitter = exports.SPLITTER, fields = defaultFieldNames) {
    return function (stdOut) {
        const all = utils.toLinesWithContent(stdOut, true, exports.START_BOUNDARY)
            .map(function (item) {
            const lineDetail = item.trim().split(exports.COMMIT_BOUNDARY);
            const listLogLine = lineBuilder(lineDetail[0].trim().split(splitter), fields);
            if (lineDetail.length > 1 && !!lineDetail[1].trim()) {
                listLogLine.diff = parseDiffSummary.parseDiffResult(lineDetail[1]);
            }
            return listLogLine;
        });
        return {
            all,
            latest: all.length && all[0] || null,
            total: all.length,
        };
    };
}
exports.createListLogSummaryParser = createListLogSummaryParser;
//# sourceMappingURL=parse-list-log-summary.js.map
});

var log = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.logTask = exports.parseLogOptions = void 0;


var excludeOptions;
(function (excludeOptions) {
    excludeOptions[excludeOptions["--pretty"] = 0] = "--pretty";
    excludeOptions[excludeOptions["max-count"] = 1] = "max-count";
    excludeOptions[excludeOptions["maxCount"] = 2] = "maxCount";
    excludeOptions[excludeOptions["n"] = 3] = "n";
    excludeOptions[excludeOptions["file"] = 4] = "file";
    excludeOptions[excludeOptions["format"] = 5] = "format";
    excludeOptions[excludeOptions["from"] = 6] = "from";
    excludeOptions[excludeOptions["to"] = 7] = "to";
    excludeOptions[excludeOptions["splitter"] = 8] = "splitter";
    excludeOptions[excludeOptions["symmetric"] = 9] = "symmetric";
    excludeOptions[excludeOptions["multiLine"] = 10] = "multiLine";
    excludeOptions[excludeOptions["strictDate"] = 11] = "strictDate";
})(excludeOptions || (excludeOptions = {}));
function prettyFormat(format, splitter) {
    const fields = [];
    const formatStr = [];
    Object.keys(format).forEach((field) => {
        fields.push(field);
        formatStr.push(String(format[field]));
    });
    return [
        fields, formatStr.join(splitter)
    ];
}
function userOptions(input) {
    const output = Object.assign({}, input);
    Object.keys(input).forEach(key => {
        if (key in excludeOptions) {
            delete output[key];
        }
    });
    return output;
}
function parseLogOptions(opt = {}, customArgs = []) {
    const splitter = opt.splitter || parseListLogSummary.SPLITTER;
    const format = opt.format || {
        hash: '%H',
        date: opt.strictDate === false ? '%ai' : '%aI',
        message: '%s',
        refs: '%D',
        body: opt.multiLine ? '%B' : '%b',
        author_name: '%aN',
        author_email: '%ae'
    };
    const [fields, formatStr] = prettyFormat(format, splitter);
    const suffix = [];
    const command = [
        `--pretty=format:${parseListLogSummary.START_BOUNDARY}${formatStr}${parseListLogSummary.COMMIT_BOUNDARY}`,
        ...customArgs,
    ];
    const maxCount = opt.n || opt['max-count'] || opt.maxCount;
    if (maxCount) {
        command.push(`--max-count=${maxCount}`);
    }
    if (opt.from && opt.to) {
        const rangeOperator = (opt.symmetric !== false) ? '...' : '..';
        suffix.push(`${opt.from}${rangeOperator}${opt.to}`);
    }
    if (opt.file) {
        suffix.push('--follow', opt.file);
    }
    utils.appendTaskOptions(userOptions(opt), command);
    return {
        fields,
        splitter,
        commands: [
            ...command,
            ...suffix,
        ],
    };
}
exports.parseLogOptions = parseLogOptions;
function logTask(splitter, fields, customArgs) {
    return {
        commands: ['log', ...customArgs],
        format: 'utf-8',
        parser: parseListLogSummary.createListLogSummaryParser(splitter, fields),
    };
}
exports.logTask = logTask;
//# sourceMappingURL=log.js.map
});

var MergeSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.MergeSummaryDetail = exports.MergeSummaryConflict = void 0;
class MergeSummaryConflict {
    constructor(reason, file = null, meta) {
        this.reason = reason;
        this.file = file;
        this.meta = meta;
    }
    toString() {
        return `${this.file}:${this.reason}`;
    }
}
exports.MergeSummaryConflict = MergeSummaryConflict;
class MergeSummaryDetail {
    constructor() {
        this.conflicts = [];
        this.merges = [];
        this.result = 'success';
    }
    get failed() {
        return this.conflicts.length > 0;
    }
    get reason() {
        return this.result;
    }
    toString() {
        if (this.conflicts.length) {
            return `CONFLICTS: ${this.conflicts.join(', ')}`;
        }
        return 'OK';
    }
}
exports.MergeSummaryDetail = MergeSummaryDetail;
//# sourceMappingURL=MergeSummary.js.map
});

var PullSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.PullSummary = void 0;
class PullSummary {
    constructor() {
        this.remoteMessages = {
            all: [],
        };
        this.created = [];
        this.deleted = [];
        this.files = [];
        this.deletions = {};
        this.insertions = {};
        this.summary = {
            changes: 0,
            deletions: 0,
            insertions: 0,
        };
    }
}
exports.PullSummary = PullSummary;
//# sourceMappingURL=PullSummary.js.map
});

var parsePull = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parsePullResult = exports.parsePullDetail = void 0;



const FILE_UPDATE_REGEX = /^\s*(.+?)\s+\|\s+\d+\s*(\+*)(-*)/;
const SUMMARY_REGEX = /(\d+)\D+((\d+)\D+\(\+\))?(\D+(\d+)\D+\(-\))?/;
const ACTION_REGEX = /^(create|delete) mode \d+ (.+)/;
const parsers = [
    new utils.LineParser(FILE_UPDATE_REGEX, (result, [file, insertions, deletions]) => {
        result.files.push(file);
        if (insertions) {
            result.insertions[file] = insertions.length;
        }
        if (deletions) {
            result.deletions[file] = deletions.length;
        }
    }),
    new utils.LineParser(SUMMARY_REGEX, (result, [changes, , insertions, , deletions]) => {
        if (insertions !== undefined || deletions !== undefined) {
            result.summary.changes = +changes || 0;
            result.summary.insertions = +insertions || 0;
            result.summary.deletions = +deletions || 0;
            return true;
        }
        return false;
    }),
    new utils.LineParser(ACTION_REGEX, (result, [action, file]) => {
        utils.append(result.files, file);
        utils.append((action === 'create') ? result.created : result.deleted, file);
    }),
];
const parsePullDetail = (stdOut, stdErr) => {
    return utils.parseStringResponse(new PullSummary_1.PullSummary(), parsers, stdOut, stdErr);
};
exports.parsePullDetail = parsePullDetail;
const parsePullResult = (stdOut, stdErr) => {
    return Object.assign(new PullSummary_1.PullSummary(), exports.parsePullDetail(stdOut, stdErr), parseRemoteMessages_1.parseRemoteMessages(stdOut, stdErr));
};
exports.parsePullResult = parsePullResult;
//# sourceMappingURL=parse-pull.js.map
});

var parseMerge = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMergeDetail = exports.parseMergeResult = void 0;



const parsers = [
    new utils.LineParser(/^Auto-merging\s+(.+)$/, (summary, [autoMerge]) => {
        summary.merges.push(autoMerge);
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+)\): Merge conflict in (.+)$/, (summary, [reason, file]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, file));
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+\/delete)\): (.+) deleted in (.+) and/, (summary, [reason, file, deleteRef]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, file, { deleteRef }));
    }),
    new utils.LineParser(/^CONFLICT\s+\((.+)\):/, (summary, [reason]) => {
        summary.conflicts.push(new MergeSummary.MergeSummaryConflict(reason, null));
    }),
    new utils.LineParser(/^Automatic merge failed;\s+(.+)$/, (summary, [result]) => {
        summary.result = result;
    }),
];
/**
 * Parse the complete response from `git.merge`
 */
const parseMergeResult = (stdOut, stdErr) => {
    return Object.assign(exports.parseMergeDetail(stdOut, stdErr), parsePull.parsePullResult(stdOut, stdErr));
};
exports.parseMergeResult = parseMergeResult;
/**
 * Parse the merge specific detail (ie: not the content also available in the pull detail) from `git.mnerge`
 * @param stdOut
 */
const parseMergeDetail = (stdOut) => {
    return utils.parseStringResponse(new MergeSummary.MergeSummaryDetail(), parsers, stdOut);
};
exports.parseMergeDetail = parseMergeDetail;
//# sourceMappingURL=parse-merge.js.map
});

var merge = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeTask = void 0;



function mergeTask(customArgs) {
    if (!customArgs.length) {
        return task.configurationErrorTask('Git.merge requires at least one option');
    }
    return {
        commands: ['merge', ...customArgs],
        format: 'utf-8',
        parser(stdOut, stdErr) {
            const merge = parseMerge.parseMergeResult(stdOut, stdErr);
            if (merge.failed) {
                throw new gitResponseError.GitResponseError(merge);
            }
            return merge;
        }
    };
}
exports.mergeTask = mergeTask;
//# sourceMappingURL=merge.js.map
});

var parseMove = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseMoveResult = void 0;

const parsers = [
    new utils.LineParser(/^Renaming (.+) to (.+)$/, (result, [from, to]) => {
        result.moves.push({ from, to });
    }),
];
function parseMoveResult(stdOut) {
    return utils.parseStringResponse({ moves: [] }, parsers, stdOut);
}
exports.parseMoveResult = parseMoveResult;
//# sourceMappingURL=parse-move.js.map
});

var move = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveTask = void 0;


function moveTask(from, to) {
    return {
        commands: ['mv', '-v', ...utils.asArray(from), to],
        format: 'utf-8',
        parser: parseMove.parseMoveResult,
    };
}
exports.moveTask = moveTask;
//# sourceMappingURL=move.js.map
});

var pull = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.pullTask = void 0;

function pullTask(remote, branch, customArgs) {
    const commands = ['pull', ...customArgs];
    if (remote && branch) {
        commands.splice(1, 0, remote, branch);
    }
    return {
        commands,
        format: 'utf-8',
        parser(stdOut, stdErr) {
            return parsePull.parsePullResult(stdOut, stdErr);
        }
    };
}
exports.pullTask = pullTask;
//# sourceMappingURL=pull.js.map
});

var GetRemoteSummary = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseGetRemotesVerbose = exports.parseGetRemotes = void 0;

function parseGetRemotes(text) {
    const remotes = {};
    forEach(text, ([name]) => remotes[name] = { name });
    return Object.values(remotes);
}
exports.parseGetRemotes = parseGetRemotes;
function parseGetRemotesVerbose(text) {
    const remotes = {};
    forEach(text, ([name, url, purpose]) => {
        if (!remotes.hasOwnProperty(name)) {
            remotes[name] = {
                name: name,
                refs: { fetch: '', push: '' },
            };
        }
        if (purpose && url) {
            remotes[name].refs[purpose.replace(/[^a-z]/g, '')] = url;
        }
    });
    return Object.values(remotes);
}
exports.parseGetRemotesVerbose = parseGetRemotesVerbose;
function forEach(text, handler) {
    utils.forEachLineWithContent(text, (line) => handler(line.split(/\s+/)));
}
//# sourceMappingURL=GetRemoteSummary.js.map
});

var remote = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeRemoteTask = exports.remoteTask = exports.listRemotesTask = exports.getRemotesTask = exports.addRemoteTask = void 0;


function addRemoteTask(remoteName, remoteRepo, customArgs = []) {
    return task.straightThroughStringTask(['remote', 'add', ...customArgs, remoteName, remoteRepo]);
}
exports.addRemoteTask = addRemoteTask;
function getRemotesTask(verbose) {
    const commands = ['remote'];
    if (verbose) {
        commands.push('-v');
    }
    return {
        commands,
        format: 'utf-8',
        parser: verbose ? GetRemoteSummary.parseGetRemotesVerbose : GetRemoteSummary.parseGetRemotes,
    };
}
exports.getRemotesTask = getRemotesTask;
function listRemotesTask(customArgs = []) {
    const commands = [...customArgs];
    if (commands[0] !== 'ls-remote') {
        commands.unshift('ls-remote');
    }
    return task.straightThroughStringTask(commands);
}
exports.listRemotesTask = listRemotesTask;
function remoteTask(customArgs = []) {
    const commands = [...customArgs];
    if (commands[0] !== 'remote') {
        commands.unshift('remote');
    }
    return task.straightThroughStringTask(commands);
}
exports.remoteTask = remoteTask;
function removeRemoteTask(remoteName) {
    return task.straightThroughStringTask(['remote', 'remove', remoteName]);
}
exports.removeRemoteTask = removeRemoteTask;
//# sourceMappingURL=remote.js.map
});

var stashList = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.stashListTask = void 0;


function stashListTask(opt = {}, customArgs) {
    const options = log.parseLogOptions(opt);
    const parser = parseListLogSummary.createListLogSummaryParser(options.splitter, options.fields);
    return {
        commands: ['stash', 'list', ...options.commands, ...customArgs],
        format: 'utf-8',
        parser,
    };
}
exports.stashListTask = stashListTask;
//# sourceMappingURL=stash-list.js.map
});

var FileStatusSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileStatusSummary = exports.fromPathRegex = void 0;
exports.fromPathRegex = /^(.+) -> (.+)$/;
class FileStatusSummary {
    constructor(path, index, working_dir) {
        this.path = path;
        this.index = index;
        this.working_dir = working_dir;
        if ('R' === (index + working_dir)) {
            const detail = exports.fromPathRegex.exec(path) || [null, path, path];
            this.from = detail[1] || '';
            this.path = detail[2] || '';
        }
    }
}
exports.FileStatusSummary = FileStatusSummary;
//# sourceMappingURL=FileStatusSummary.js.map
});

var StatusSummary_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseStatusSummary = exports.StatusSummary = void 0;


/**
 * The StatusSummary is returned as a response to getting `git().status()`
 */
class StatusSummary {
    constructor() {
        this.not_added = [];
        this.conflicted = [];
        this.created = [];
        this.deleted = [];
        this.modified = [];
        this.renamed = [];
        /**
         * All files represented as an array of objects containing the `path` and status in `index` and
         * in the `working_dir`.
         */
        this.files = [];
        this.staged = [];
        /**
         * Number of commits ahead of the tracked branch
         */
        this.ahead = 0;
        /**
         *Number of commits behind the tracked branch
         */
        this.behind = 0;
        /**
         * Name of the current branch
         */
        this.current = null;
        /**
         * Name of the branch being tracked
         */
        this.tracking = null;
    }
    /**
     * Gets whether this StatusSummary represents a clean working branch.
     */
    isClean() {
        return !this.files.length;
    }
}
exports.StatusSummary = StatusSummary;
var PorcelainFileStatus;
(function (PorcelainFileStatus) {
    PorcelainFileStatus["ADDED"] = "A";
    PorcelainFileStatus["DELETED"] = "D";
    PorcelainFileStatus["MODIFIED"] = "M";
    PorcelainFileStatus["RENAMED"] = "R";
    PorcelainFileStatus["COPIED"] = "C";
    PorcelainFileStatus["UNMERGED"] = "U";
    PorcelainFileStatus["UNTRACKED"] = "?";
    PorcelainFileStatus["IGNORED"] = "!";
    PorcelainFileStatus["NONE"] = " ";
})(PorcelainFileStatus || (PorcelainFileStatus = {}));
function renamedFile(line) {
    const detail = /^(.+) -> (.+)$/.exec(line);
    if (!detail) {
        return {
            from: line, to: line
        };
    }
    return {
        from: String(detail[1]),
        to: String(detail[2]),
    };
}
function parser(indexX, indexY, handler) {
    return [`${indexX}${indexY}`, handler];
}
function conflicts(indexX, ...indexY) {
    return indexY.map(y => parser(indexX, y, (result, file) => utils.append(result.conflicted, file)));
}
const parsers = new Map([
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.ADDED, (result, file) => utils.append(result.created, file)),
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.DELETED, (result, file) => utils.append(result.deleted, file)),
    parser(PorcelainFileStatus.NONE, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.modified, file)),
    parser(PorcelainFileStatus.ADDED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.created, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.ADDED, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.created, file) && utils.append(result.staged, file) && utils.append(result.modified, file)),
    parser(PorcelainFileStatus.DELETED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.deleted, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.MODIFIED, PorcelainFileStatus.NONE, (result, file) => utils.append(result.modified, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.MODIFIED, PorcelainFileStatus.MODIFIED, (result, file) => utils.append(result.modified, file) && utils.append(result.staged, file)),
    parser(PorcelainFileStatus.RENAMED, PorcelainFileStatus.NONE, (result, file) => {
        utils.append(result.renamed, renamedFile(file));
    }),
    parser(PorcelainFileStatus.RENAMED, PorcelainFileStatus.MODIFIED, (result, file) => {
        const renamed = renamedFile(file);
        utils.append(result.renamed, renamed);
        utils.append(result.modified, renamed.to);
    }),
    parser(PorcelainFileStatus.UNTRACKED, PorcelainFileStatus.UNTRACKED, (result, file) => utils.append(result.not_added, file)),
    ...conflicts(PorcelainFileStatus.ADDED, PorcelainFileStatus.ADDED, PorcelainFileStatus.UNMERGED),
    ...conflicts(PorcelainFileStatus.DELETED, PorcelainFileStatus.DELETED, PorcelainFileStatus.UNMERGED),
    ...conflicts(PorcelainFileStatus.UNMERGED, PorcelainFileStatus.ADDED, PorcelainFileStatus.DELETED, PorcelainFileStatus.UNMERGED),
    ['##', (result, line) => {
            const aheadReg = /ahead (\d+)/;
            const behindReg = /behind (\d+)/;
            const currentReg = /^(.+?(?=(?:\.{3}|\s|$)))/;
            const trackingReg = /\.{3}(\S*)/;
            const onEmptyBranchReg = /\son\s([\S]+)$/;
            let regexResult;
            regexResult = aheadReg.exec(line);
            result.ahead = regexResult && +regexResult[1] || 0;
            regexResult = behindReg.exec(line);
            result.behind = regexResult && +regexResult[1] || 0;
            regexResult = currentReg.exec(line);
            result.current = regexResult && regexResult[1];
            regexResult = trackingReg.exec(line);
            result.tracking = regexResult && regexResult[1];
            regexResult = onEmptyBranchReg.exec(line);
            result.current = regexResult && regexResult[1] || result.current;
        }]
]);
const parseStatusSummary = function (text) {
    const lines = text.trim().split('\n');
    const status = new StatusSummary();
    for (let i = 0, l = lines.length; i < l; i++) {
        splitLine(status, lines[i]);
    }
    return status;
};
exports.parseStatusSummary = parseStatusSummary;
function splitLine(result, lineStr) {
    const trimmed = lineStr.trim();
    switch (' ') {
        case trimmed.charAt(2):
            return data(trimmed.charAt(0), trimmed.charAt(1), trimmed.substr(3));
        case trimmed.charAt(1):
            return data(PorcelainFileStatus.NONE, trimmed.charAt(0), trimmed.substr(2));
        default:
            return;
    }
    function data(index, workingDir, path) {
        const raw = `${index}${workingDir}`;
        const handler = parsers.get(raw);
        if (handler) {
            handler(result, path);
        }
        if (raw !== '##') {
            result.files.push(new FileStatusSummary_1.FileStatusSummary(path, index, workingDir));
        }
    }
}
//# sourceMappingURL=StatusSummary.js.map
});

var status = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.statusTask = void 0;

function statusTask(customArgs) {
    return {
        format: 'utf-8',
        commands: ['status', '--porcelain', '-b', '-u', ...customArgs],
        parser(text) {
            return StatusSummary_1.parseStatusSummary(text);
        }
    };
}
exports.statusTask = statusTask;
//# sourceMappingURL=status.js.map
});

var subModule = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSubModuleTask = exports.subModuleTask = exports.initSubModuleTask = exports.addSubModuleTask = void 0;

function addSubModuleTask(repo, path) {
    return subModuleTask(['add', repo, path]);
}
exports.addSubModuleTask = addSubModuleTask;
function initSubModuleTask(customArgs) {
    return subModuleTask(['init', ...customArgs]);
}
exports.initSubModuleTask = initSubModuleTask;
function subModuleTask(customArgs) {
    const commands = [...customArgs];
    if (commands[0] !== 'submodule') {
        commands.unshift('submodule');
    }
    return task.straightThroughStringTask(commands);
}
exports.subModuleTask = subModuleTask;
function updateSubModuleTask(customArgs) {
    return subModuleTask(['update', ...customArgs]);
}
exports.updateSubModuleTask = updateSubModuleTask;
//# sourceMappingURL=sub-module.js.map
});

var TagList_1 = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseTagList = exports.TagList = void 0;
class TagList {
    constructor(all, latest) {
        this.all = all;
        this.latest = latest;
    }
}
exports.TagList = TagList;
const parseTagList = function (data, customSort = false) {
    const tags = data
        .split('\n')
        .map(trimmed)
        .filter(Boolean);
    if (!customSort) {
        tags.sort(function (tagA, tagB) {
            const partsA = tagA.split('.');
            const partsB = tagB.split('.');
            if (partsA.length === 1 || partsB.length === 1) {
                return singleSorted(toNumber(partsA[0]), toNumber(partsB[0]));
            }
            for (let i = 0, l = Math.max(partsA.length, partsB.length); i < l; i++) {
                const diff = sorted(toNumber(partsA[i]), toNumber(partsB[i]));
                if (diff) {
                    return diff;
                }
            }
            return 0;
        });
    }
    const latest = customSort ? tags[0] : [...tags].reverse().find((tag) => tag.indexOf('.') >= 0);
    return new TagList(tags, latest);
};
exports.parseTagList = parseTagList;
function singleSorted(a, b) {
    const aIsNum = isNaN(a);
    const bIsNum = isNaN(b);
    if (aIsNum !== bIsNum) {
        return aIsNum ? 1 : -1;
    }
    return aIsNum ? sorted(a, b) : 0;
}
function sorted(a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
}
function trimmed(input) {
    return input.trim();
}
function toNumber(input) {
    if (typeof input === 'string') {
        return parseInt(input.replace(/^\D+/g, ''), 10) || 0;
    }
    return 0;
}
//# sourceMappingURL=TagList.js.map
});

var tag = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.addAnnotatedTagTask = exports.addTagTask = exports.tagListTask = void 0;

/**
 * Task used by `git.tags`
 */
function tagListTask(customArgs = []) {
    const hasCustomSort = customArgs.some((option) => /^--sort=/.test(option));
    return {
        format: 'utf-8',
        commands: ['tag', '-l', ...customArgs],
        parser(text) {
            return TagList_1.parseTagList(text, hasCustomSort);
        },
    };
}
exports.tagListTask = tagListTask;
/**
 * Task used by `git.addTag`
 */
function addTagTask(name) {
    return {
        format: 'utf-8',
        commands: ['tag', name],
        parser() {
            return { name };
        }
    };
}
exports.addTagTask = addTagTask;
/**
 * Task used by `git.addTag`
 */
function addAnnotatedTagTask(name, tagMessage) {
    return {
        format: 'utf-8',
        commands: ['tag', '-a', '-m', tagMessage, name],
        parser() {
            return { name };
        }
    };
}
exports.addAnnotatedTagTask = addAnnotatedTagTask;
//# sourceMappingURL=tag.js.map
});

const {GitExecutor} = gitExecutor;
const {SimpleGitApi} = simpleGitApi;

const {Scheduler} = scheduler;
const {GitLogger} = gitLogger;
const {adhocExecTask, configurationErrorTask} = task;
const {
   NOOP,
   asArray,
   filterArray,
   filterPrimitives,
   filterString,
   filterStringOrStringArray,
   filterType,
   folderExists,
   getTrailingOptions,
   trailingFunctionArgument,
   trailingOptionsArgument
} = utils;
const {applyPatchTask} = applyPatch;
const {branchTask, branchLocalTask, deleteBranchesTask, deleteBranchTask} = branch;
const {checkIgnoreTask} = checkIgnore;
const {checkIsRepoTask} = checkIsRepo;
const {cloneTask, cloneMirrorTask} = clone;
const {addConfigTask, listConfigTask} = config;
const {cleanWithOptionsTask, isCleanOptionsArray} = clean;
const {commitTask} = commit;
const {diffSummaryTask} = diff;
const {fetchTask} = fetch;
const {hashObjectTask} = hashObject;
const {initTask} = init;
const {logTask, parseLogOptions} = log;
const {mergeTask} = merge;
const {moveTask} = move;
const {pullTask} = pull;
const {pushTagsTask} = push;
const {addRemoteTask, getRemotesTask, listRemotesTask, remoteTask, removeRemoteTask} = remote;
const {getResetMode, resetTask} = reset;
const {stashListTask} = stashList;
const {statusTask} = status;
const {addSubModuleTask, initSubModuleTask, subModuleTask, updateSubModuleTask} = subModule;
const {addAnnotatedTagTask, addTagTask, tagListTask} = tag;
const {straightThroughBufferTask, straightThroughStringTask} = task;

function Git (options, plugins) {
   this._executor = new GitExecutor(
      options.binary, options.baseDir,
      new Scheduler(options.maxConcurrentProcesses), plugins,
   );
   this._logger = new GitLogger();
}

(Git.prototype = Object.create(SimpleGitApi.prototype)).constructor = Git;

/**
 * Logging utility for printing out info or error messages to the user
 * @type {GitLogger}
 * @private
 */
Git.prototype._logger = null;

/**
 * Sets the path to a custom git binary, should either be `git` when there is an installation of git available on
 * the system path, or a fully qualified path to the executable.
 *
 * @param {string} command
 * @returns {Git}
 */
Git.prototype.customBinary = function (command) {
   this._executor.binary = command;
   return this;
};

/**
 * Sets an environment variable for the spawned child process, either supply both a name and value as strings or
 * a single object to entirely replace the current environment variables.
 *
 * @param {string|Object} name
 * @param {string} [value]
 * @returns {Git}
 */
Git.prototype.env = function (name, value) {
   if (arguments.length === 1 && typeof name === 'object') {
      this._executor.env = name;
   } else {
      (this._executor.env = this._executor.env || {})[name] = value;
   }

   return this;
};

/**
 * Sets the working directory of the subsequent commands.
 */
Git.prototype.cwd = function (workingDirectory) {
   const task = (typeof workingDirectory !== 'string')
      ? configurationErrorTask('Git.cwd: workingDirectory must be supplied as a string')
      : adhocExecTask(() => {
         if (!folderExists(workingDirectory)) {
            throw new Error(`Git.cwd: cannot change to non-directory "${ workingDirectory }"`);
         }

         return (this._executor.cwd = workingDirectory);
      });

   return this._runTask(task, trailingFunctionArgument(arguments) || NOOP);
};

/**
 * Sets a handler function to be called whenever a new child process is created, the handler function will be called
 * with the name of the command being run and the stdout & stderr streams used by the ChildProcess.
 *
 * @example
 * require('simple-git')
 *    .outputHandler(function (command, stdout, stderr) {
 *       stdout.pipe(process.stdout);
 *    })
 *    .checkout('https://github.com/user/repo.git');
 *
 * @see https://nodejs.org/api/child_process.html#child_process_class_childprocess
 * @see https://nodejs.org/api/stream.html#stream_class_stream_readable
 * @param {Function} outputHandler
 * @returns {Git}
 */
Git.prototype.outputHandler = function (outputHandler) {
   this._executor.outputHandler = outputHandler;
   return this;
};

/**
 * Initialize a git repo
 *
 * @param {Boolean} [bare=false]
 * @param {Function} [then]
 */
Git.prototype.init = function (bare, then) {
   return this._runTask(
      initTask(bare === true, this._executor.cwd, getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Check the status of the local repo
 */
Git.prototype.status = function () {
   return this._runTask(
      statusTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * List the stash(s) of the local repo
 */
Git.prototype.stashList = function (options) {
   return this._runTask(
      stashListTask(
         trailingOptionsArgument(arguments) || {},
         filterArray(options) && options || []
      ),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Stash the local repo
 *
 * @param {Object|Array} [options]
 * @param {Function} [then]
 */
Git.prototype.stash = function (options, then) {
   return this._runTask(
      straightThroughStringTask(['stash', ...getTrailingOptions(arguments)]),
      trailingFunctionArgument(arguments),
   );
};

function createCloneTask (api, task, repoPath, localPath) {
   if (typeof repoPath !== 'string') {
      return configurationErrorTask(`git.${ api }() requires a string 'repoPath'`);
   }

   return task(repoPath, filterType(localPath, filterString), getTrailingOptions(arguments));
}


/**
 * Clone a git repo
 */
Git.prototype.clone = function () {
   return this._runTask(
      createCloneTask('clone', cloneTask, ...arguments),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Mirror a git repo
 */
Git.prototype.mirror = function () {
   return this._runTask(
      createCloneTask('mirror', cloneMirrorTask, ...arguments),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Moves one or more files to a new destination.
 *
 * @see https://git-scm.com/docs/git-mv
 *
 * @param {string|string[]} from
 * @param {string} to
 */
Git.prototype.mv = function (from, to) {
   return this._runTask(moveTask(from, to), trailingFunctionArgument(arguments));
};

/**
 * Internally uses pull and tags to get the list of tags then checks out the latest tag.
 *
 * @param {Function} [then]
 */
Git.prototype.checkoutLatestTag = function (then) {
   var git = this;
   return this.pull(function () {
      git.tags(function (err, tags) {
         git.checkout(tags.latest, then);
      });
   });
};

/**
 * Commits changes in the current working directory - when specific file paths are supplied, only changes on those
 * files will be committed.
 *
 * @param {string|string[]} message
 * @param {string|string[]} [files]
 * @param {Object} [options]
 * @param {Function} [then]
 */
Git.prototype.commit = function (message, files, options, then) {
   const next = trailingFunctionArgument(arguments);
   const messages = [];

   if (filterStringOrStringArray(message)) {
      messages.push(...asArray(message));
   } else {
      console.warn('simple-git deprecation notice: git.commit: requires the commit message to be supplied as a string/string[], this will be an error in version 3');
   }

   return this._runTask(
      commitTask(
         messages,
         asArray(filterType(files, filterStringOrStringArray, [])),
         [...filterType(options, filterArray, []), ...getTrailingOptions(arguments, 0, true)]
      ),
      next
   );
};

/**
 * Pull the updated contents of the current repo
 */
Git.prototype.pull = function (remote, branch, options, then) {
   return this._runTask(
      pullTask(filterType(remote, filterString), filterType(branch, filterString), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Fetch the updated contents of the current repo.
 *
 * @example
 *   .fetch('upstream', 'master') // fetches from master on remote named upstream
 *   .fetch(function () {}) // runs fetch against default remote and branch and calls function
 *
 * @param {string} [remote]
 * @param {string} [branch]
 */
Git.prototype.fetch = function (remote, branch) {
   return this._runTask(
      fetchTask(filterType(remote, filterString), filterType(branch, filterString), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Disables/enables the use of the console for printing warnings and errors, by default messages are not shown in
 * a production environment.
 *
 * @param {boolean} silence
 * @returns {Git}
 */
Git.prototype.silent = function (silence) {
   console.warn('simple-git deprecation notice: git.silent: logging should be configured using the `debug` library / `DEBUG` environment variable, this will be an error in version 3');
   this._logger.silent(!!silence);
   return this;
};

/**
 * List all tags. When using git 2.7.0 or above, include an options object with `"--sort": "property-name"` to
 * sort the tags by that property instead of using the default semantic versioning sort.
 *
 * Note, supplying this option when it is not supported by your Git version will cause the operation to fail.
 *
 * @param {Object} [options]
 * @param {Function} [then]
 */
Git.prototype.tags = function (options, then) {
   return this._runTask(
      tagListTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Rebases the current working copy. Options can be supplied either as an array of string parameters
 * to be sent to the `git rebase` command, or a standard options object.
 */
Git.prototype.rebase = function () {
   return this._runTask(
      straightThroughStringTask(['rebase', ...getTrailingOptions(arguments)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Reset a repo
 */
Git.prototype.reset = function (mode) {
   return this._runTask(
      resetTask(getResetMode(mode), getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Revert one or more commits in the local working copy
 */
Git.prototype.revert = function (commit) {
   const next = trailingFunctionArgument(arguments);

   if (typeof commit !== 'string') {
      return this._runTask(
         configurationErrorTask('Commit must be a string'),
         next,
      );
   }

   return this._runTask(
      straightThroughStringTask(['revert', ...getTrailingOptions(arguments, 0, true), commit]),
      next
   );
};

/**
 * Add a lightweight tag to the head of the current branch
 */
Git.prototype.addTag = function (name) {
   const task = (typeof name === 'string')
      ? addTagTask(name)
      : configurationErrorTask('Git.addTag requires a tag name');

   return this._runTask(task, trailingFunctionArgument(arguments));
};

/**
 * Add an annotated tag to the head of the current branch
 */
Git.prototype.addAnnotatedTag = function (tagName, tagMessage) {
   return this._runTask(
      addAnnotatedTagTask(tagName, tagMessage),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Check out a tag or revision, any number of additional arguments can be passed to the `git checkout` command
 * by supplying either a string or array of strings as the first argument.
 */
Git.prototype.checkout = function () {
   const commands = ['checkout', ...getTrailingOptions(arguments, true)];
   return this._runTask(
      straightThroughStringTask(commands),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Check out a remote branch
 *
 * @param {string} branchName name of branch
 * @param {string} startPoint (e.g origin/development)
 * @param {Function} [then]
 */
Git.prototype.checkoutBranch = function (branchName, startPoint, then) {
   return this.checkout(['-b', branchName, startPoint], trailingFunctionArgument(arguments));
};

/**
 * Check out a local branch
 */
Git.prototype.checkoutLocalBranch = function (branchName, then) {
   return this.checkout(['-b', branchName], trailingFunctionArgument(arguments));
};

/**
 * Delete a local branch
 */
Git.prototype.deleteLocalBranch = function (branchName, forceDelete, then) {
   return this._runTask(
      deleteBranchTask(branchName, typeof forceDelete === "boolean" ? forceDelete : false),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Delete one or more local branches
 */
Git.prototype.deleteLocalBranches = function (branchNames, forceDelete, then) {
   return this._runTask(
      deleteBranchesTask(branchNames, typeof forceDelete === "boolean" ? forceDelete : false),
      trailingFunctionArgument(arguments),
   );
};

/**
 * List all branches
 *
 * @param {Object | string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.branch = function (options, then) {
   return this._runTask(
      branchTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Return list of local branches
 *
 * @param {Function} [then]
 */
Git.prototype.branchLocal = function (then) {
   return this._runTask(
      branchLocalTask(),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Add config to local git instance
 *
 * @param {string} key configuration key (e.g user.name)
 * @param {string} value for the given key (e.g your name)
 * @param {boolean} [append=false] optionally append the key/value pair (equivalent of passing `--add` option).
 * @param {Function} [then]
 */
Git.prototype.addConfig = function (key, value, append, then) {
   return this._runTask(
      addConfigTask(key, value, typeof append === "boolean" ? append : false),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.listConfig = function () {
   return this._runTask(listConfigTask(), trailingFunctionArgument(arguments));
};

/**
 * Executes any command against the git binary.
 */
Git.prototype.raw = function (commands) {
   const createRestCommands = !Array.isArray(commands);
   const command = [].slice.call(createRestCommands ? arguments : commands, 0);

   for (let i = 0; i < command.length && createRestCommands; i++) {
      if (!filterPrimitives(command[i])) {
         command.splice(i, command.length - i);
         break;
      }
   }

   command.push(
      ...getTrailingOptions(arguments, 0, true),
   );

   var next = trailingFunctionArgument(arguments);

   if (!command.length) {
      return this._runTask(
         configurationErrorTask('Raw: must supply one or more command to execute'),
         next,
      );
   }

   return this._runTask(straightThroughStringTask(command), next);
};

Git.prototype.submoduleAdd = function (repo, path, then) {
   return this._runTask(
      addSubModuleTask(repo, path),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.submoduleUpdate = function (args, then) {
   return this._runTask(
      updateSubModuleTask(getTrailingOptions(arguments, true)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.submoduleInit = function (args, then) {
   return this._runTask(
      initSubModuleTask(getTrailingOptions(arguments, true)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.subModule = function (options, then) {
   return this._runTask(
      subModuleTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.listRemote = function () {
   return this._runTask(
      listRemotesTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Adds a remote to the list of remotes.
 */
Git.prototype.addRemote = function (remoteName, remoteRepo, then) {
   return this._runTask(
      addRemoteTask(remoteName, remoteRepo, getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Removes an entry by name from the list of remotes.
 */
Git.prototype.removeRemote = function (remoteName, then) {
   return this._runTask(
      removeRemoteTask(remoteName),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Gets the currently available remotes, setting the optional verbose argument to true includes additional
 * detail on the remotes themselves.
 */
Git.prototype.getRemotes = function (verbose, then) {
   return this._runTask(
      getRemotesTask(verbose === true),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Compute object ID from a file
 */
Git.prototype.hashObject = function (path, write) {
   return this._runTask(
      hashObjectTask(path, write === true),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Call any `git remote` function with arguments passed as an array of strings.
 *
 * @param {string[]} options
 * @param {Function} [then]
 */
Git.prototype.remote = function (options, then) {
   return this._runTask(
      remoteTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Merges from one branch to another, equivalent to running `git merge ${from} $[to}`, the `options` argument can
 * either be an array of additional parameters to pass to the command or null / omitted to be ignored.
 *
 * @param {string} from
 * @param {string} to
 */
Git.prototype.mergeFromTo = function (from, to) {
   if (!(filterString(from) && filterString(to))) {
      return this._runTask(configurationErrorTask(
         `Git.mergeFromTo requires that the 'from' and 'to' arguments are supplied as strings`
      ));
   }

   return this._runTask(
      mergeTask([from, to, ...getTrailingOptions(arguments)]),
      trailingFunctionArgument(arguments, false),
   );
};

/**
 * Runs a merge, `options` can be either an array of arguments
 * supported by the [`git merge`](https://git-scm.com/docs/git-merge)
 * or an options object.
 *
 * Conflicts during the merge result in an error response,
 * the response type whether it was an error or success will be a MergeSummary instance.
 * When successful, the MergeSummary has all detail from a the PullSummary
 *
 * @param {Object | string[]} [options]
 * @param {Function} [then]
 * @returns {*}
 *
 * @see ./responses/MergeSummary.js
 * @see ./responses/PullSummary.js
 */
Git.prototype.merge = function () {
   return this._runTask(
      mergeTask(getTrailingOptions(arguments)),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Call any `git tag` function with arguments passed as an array of strings.
 *
 * @param {string[]} options
 * @param {Function} [then]
 */
Git.prototype.tag = function (options, then) {
   const command = getTrailingOptions(arguments);

   if (command[0] !== 'tag') {
      command.unshift('tag');
   }

   return this._runTask(
      straightThroughStringTask(command),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Updates repository server info
 *
 * @param {Function} [then]
 */
Git.prototype.updateServerInfo = function (then) {
   return this._runTask(
      straightThroughStringTask(['update-server-info']),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Pushes the current tag changes to a remote which can be either a URL or named remote. When not specified uses the
 * default configured remote spec.
 *
 * @param {string} [remote]
 * @param {Function} [then]
 */
Git.prototype.pushTags = function (remote, then) {
   const task = pushTagsTask({remote: filterType(remote, filterString)}, getTrailingOptions(arguments));

   return this._runTask(task, trailingFunctionArgument(arguments));
};

/**
 * Removes the named files from source control.
 */
Git.prototype.rm = function (files) {
   return this._runTask(
      straightThroughStringTask(['rm', '-f', ...asArray(files)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Removes the named files from source control but keeps them on disk rather than deleting them entirely. To
 * completely remove the files, use `rm`.
 *
 * @param {string|string[]} files
 */
Git.prototype.rmKeepLocal = function (files) {
   return this._runTask(
      straightThroughStringTask(['rm', '--cached', ...asArray(files)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 * Returns a list of objects in a tree based on commit hash. Passing in an object hash returns the object's content,
 * size, and type.
 *
 * Passing "-p" will instruct cat-file to determine the object type, and display its formatted contents.
 *
 * @param {string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.catFile = function (options, then) {
   return this._catFile('utf-8', arguments);
};

Git.prototype.binaryCatFile = function () {
   return this._catFile('buffer', arguments);
};

Git.prototype._catFile = function (format, args) {
   var handler = trailingFunctionArgument(args);
   var command = ['cat-file'];
   var options = args[0];

   if (typeof options === 'string') {
      return this._runTask(
         configurationErrorTask('Git.catFile: options must be supplied as an array of strings'),
         handler,
      );
   }

   if (Array.isArray(options)) {
      command.push.apply(command, options);
   }

   const task = format === 'buffer'
      ? straightThroughBufferTask(command)
      : straightThroughStringTask(command);

   return this._runTask(task, handler);
};

Git.prototype.diff = function (options, then) {
   const command = ['diff', ...getTrailingOptions(arguments)];

   if (typeof options === 'string') {
      command.splice(1, 0, options);
      this._logger.warn('Git#diff: supplying options as a single string is now deprecated, switch to an array of strings');
   }

   return this._runTask(
      straightThroughStringTask(command),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.diffSummary = function () {
   return this._runTask(
      diffSummaryTask(getTrailingOptions(arguments, 1)),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.applyPatch = function (patches) {
   const task = !filterStringOrStringArray(patches)
      ? configurationErrorTask(`git.applyPatch requires one or more string patches as the first argument`)
      : applyPatchTask(asArray(patches), getTrailingOptions([].slice.call(arguments, 1)));

   return this._runTask(
      task,
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.revparse = function () {
   const commands = ['rev-parse', ...getTrailingOptions(arguments, true)];
   return this._runTask(
      straightThroughStringTask(commands, true),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Show various types of objects, for example the file at a certain commit
 *
 * @param {string[]} [options]
 * @param {Function} [then]
 */
Git.prototype.show = function (options, then) {
   return this._runTask(
      straightThroughStringTask(['show', ...getTrailingOptions(arguments, 1)]),
      trailingFunctionArgument(arguments)
   );
};

/**
 */
Git.prototype.clean = function (mode, options, then) {
   const usingCleanOptionsArray = isCleanOptionsArray(mode);
   const cleanMode = usingCleanOptionsArray && mode.join('') || filterType(mode, filterString) || '';
   const customArgs = getTrailingOptions([].slice.call(arguments, usingCleanOptionsArray ? 1 : 0));

   return this._runTask(
      cleanWithOptionsTask(cleanMode, customArgs),
      trailingFunctionArgument(arguments),
   );
};

/**
 * Call a simple function at the next step in the chain.
 * @param {Function} [then]
 */
Git.prototype.exec = function (then) {
   const task = {
      commands: [],
      format: 'utf-8',
      parser () {
         if (typeof then === 'function') {
            then();
         }
      }
   };

   return this._runTask(task);
};

/**
 * Show commit logs from `HEAD` to the first commit.
 * If provided between `options.from` and `options.to` tags or branch.
 *
 * Additionally you can provide options.file, which is the path to a file in your repository. Then only this file will be considered.
 *
 * To use a custom splitter in the log format, set `options.splitter` to be the string the log should be split on.
 *
 * Options can also be supplied as a standard options object for adding custom properties supported by the git log command.
 * For any other set of options, supply options as an array of strings to be appended to the git log command.
 */
Git.prototype.log = function (options) {
   const next = trailingFunctionArgument(arguments);

   if (filterString(arguments[0]) && filterString(arguments[1])) {
      return this._runTask(
         configurationErrorTask(`git.log(string, string) should be replaced with git.log({ from: string, to: string })`),
         next
      );
   }

   const parsedOptions = parseLogOptions(
      trailingOptionsArgument(arguments) || {},
      filterArray(options) && options || []
   );

   return this._runTask(
      logTask(parsedOptions.splitter, parsedOptions.fields, parsedOptions.commands),
      next,
   )
};

/**
 * Clears the queue of pending commands and returns the wrapper instance for chaining.
 *
 * @returns {Git}
 */
Git.prototype.clearQueue = function () {
   // TODO:
   // this._executor.clear();
   return this;
};

/**
 * Check if a pathname or pathnames are excluded by .gitignore
 *
 * @param {string|string[]} pathnames
 * @param {Function} [then]
 */
Git.prototype.checkIgnore = function (pathnames, then) {
   return this._runTask(
      checkIgnoreTask(asArray((filterType(pathnames, filterStringOrStringArray, [])))),
      trailingFunctionArgument(arguments),
   );
};

Git.prototype.checkIsRepo = function (checkType, then) {
   return this._runTask(
      checkIsRepoTask(filterType(checkType, filterString)),
      trailingFunctionArgument(arguments),
   );
};

var git = Git;

var gitFactory = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitInstanceFactory = exports.gitExportFactory = exports.esModuleFactory = void 0;




/**
 * Adds the necessary properties to the supplied object to enable it for use as
 * the default export of a module.
 *
 * Eg: `module.exports = esModuleFactory({ something () {} })`
 */
function esModuleFactory(defaultExport) {
    return Object.defineProperties(defaultExport, {
        __esModule: { value: true },
        default: { value: defaultExport },
    });
}
exports.esModuleFactory = esModuleFactory;
function gitExportFactory(factory, extra) {
    return Object.assign(function (...args) {
        return factory.apply(null, args);
    }, api_1.default, extra || {});
}
exports.gitExportFactory = gitExportFactory;
function gitInstanceFactory(baseDir, options) {
    const plugins$1 = new plugins.PluginStore();
    const config = utils.createInstanceConfig(baseDir && (typeof baseDir === 'string' ? { baseDir } : baseDir) || {}, options);
    if (!utils.folderExists(config.baseDir)) {
        throw new api_1.default.GitConstructError(config, `Cannot use simple-git on a directory that does not exist`);
    }
    if (Array.isArray(config.config)) {
        plugins$1.add(plugins.commandConfigPrefixingPlugin(config.config));
    }
    config.progress && plugins$1.add(plugins.progressMonitorPlugin(config.progress));
    config.timeout && plugins$1.add(plugins.timeoutPlugin(config.timeout));
    plugins$1.add(plugins.errorDetectionPlugin(plugins.errorDetectionHandler(true)));
    config.errors && plugins$1.add(plugins.errorDetectionPlugin(config.errors));
    return new git(config, plugins$1);
}
exports.gitInstanceFactory = gitInstanceFactory;
//# sourceMappingURL=git-factory.js.map
});

var promiseWrapped = createCommonjsModule(function (module, exports) {
Object.defineProperty(exports, "__esModule", { value: true });
exports.gitP = void 0;


const functionNamesBuilderApi = [
    'customBinary', 'env', 'outputHandler', 'silent',
];
const functionNamesPromiseApi = [
    'add',
    'addAnnotatedTag',
    'addConfig',
    'addRemote',
    'addTag',
    'applyPatch',
    'binaryCatFile',
    'branch',
    'branchLocal',
    'catFile',
    'checkIgnore',
    'checkIsRepo',
    'checkout',
    'checkoutBranch',
    'checkoutLatestTag',
    'checkoutLocalBranch',
    'clean',
    'clone',
    'commit',
    'cwd',
    'deleteLocalBranch',
    'deleteLocalBranches',
    'diff',
    'diffSummary',
    'exec',
    'fetch',
    'getRemotes',
    'init',
    'listConfig',
    'listRemote',
    'log',
    'merge',
    'mergeFromTo',
    'mirror',
    'mv',
    'pull',
    'push',
    'pushTags',
    'raw',
    'rebase',
    'remote',
    'removeRemote',
    'reset',
    'revert',
    'revparse',
    'rm',
    'rmKeepLocal',
    'show',
    'stash',
    'stashList',
    'status',
    'subModule',
    'submoduleAdd',
    'submoduleInit',
    'submoduleUpdate',
    'tag',
    'tags',
    'updateServerInfo'
];
function gitP(...args) {
    let git;
    let chain = Promise.resolve();
    try {
        git = gitFactory.gitInstanceFactory(...args);
    }
    catch (e) {
        chain = Promise.reject(e);
    }
    function builderReturn() {
        return promiseApi;
    }
    function chainReturn() {
        return chain;
    }
    const promiseApi = [...functionNamesBuilderApi, ...functionNamesPromiseApi].reduce((api, name) => {
        const isAsync = functionNamesPromiseApi.includes(name);
        const valid = isAsync ? asyncWrapper(name, git) : syncWrapper(name, git, api);
        const alternative = isAsync ? chainReturn : builderReturn;
        Object.defineProperty(api, name, {
            enumerable: false,
            configurable: false,
            value: git ? valid : alternative,
        });
        return api;
    }, {});
    return promiseApi;
    function asyncWrapper(fn, git) {
        return function (...args) {
            if (typeof args[args.length] === 'function') {
                throw new TypeError('Promise interface requires that handlers are not supplied inline, ' +
                    'trailing function not allowed in call to ' + fn);
            }
            return chain.then(function () {
                return new Promise(function (resolve, reject) {
                    const callback = (err, result) => {
                        if (err) {
                            return reject(toError(err));
                        }
                        resolve(result);
                    };
                    args.push(callback);
                    git[fn].apply(git, args);
                });
            });
        };
    }
    function syncWrapper(fn, git, api) {
        return (...args) => {
            git[fn](...args);
            return api;
        };
    }
}
exports.gitP = gitP;
function toError(error) {
    if (error instanceof Error) {
        return error;
    }
    if (typeof error === 'string') {
        return new Error(error);
    }
    return new gitResponseError.GitResponseError(error);
}
//# sourceMappingURL=promise-wrapped.js.map
});

const {gitP} = promiseWrapped;
const {esModuleFactory, gitInstanceFactory, gitExportFactory} = gitFactory;

var src = esModuleFactory(
   gitExportFactory(gitInstanceFactory, {gitP})
);

var PluginState;
(function (PluginState) {
    PluginState[PluginState["idle"] = 0] = "idle";
    PluginState[PluginState["status"] = 1] = "status";
    PluginState[PluginState["pull"] = 2] = "pull";
    PluginState[PluginState["add"] = 3] = "add";
    PluginState[PluginState["commit"] = 4] = "commit";
    PluginState[PluginState["push"] = 5] = "push";
    PluginState[PluginState["conflicted"] = 6] = "conflicted";
})(PluginState || (PluginState = {}));
var DEFAULT_SETTINGS = {
    commitMessage: "vault backup: {{date}}",
    commitDateFormat: "YYYY-MM-DD HH:mm:ss",
    autoSaveInterval: 0,
    autoPullInterval: 0,
    autoPullOnBoot: false,
    disablePush: false,
    pullBeforePush: true,
    disablePopups: false,
    listChangedFilesInMessageBody: false,
};
var ObsidianGit = /** @class */ (function (_super) {
    __extends(ObsidianGit, _super);
    function ObsidianGit() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.gitReady = false;
        _this.promiseQueue = new PromiseQueue();
        _this.conflictOutputFile = "conflict-files-obsidian-git.md";
        return _this;
        // endregion: displaying / formatting stuff
    }
    ObsidianGit.prototype.setState = function (state) {
        this.state = state;
        this.statusBar.display();
    };
    ObsidianGit.prototype.onload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var statusBarEl;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log('loading ' + this.manifest.name + " plugin");
                        return [4 /*yield*/, this.loadSettings()];
                    case 1:
                        _a.sent();
                        this.addSettingTab(new ObsidianGitSettingsTab(this.app, this));
                        this.addCommand({
                            id: "pull",
                            name: "Pull from remote repository",
                            callback: function () { return _this.promiseQueue.addTask(function () { return _this.pullChangesFromRemote(); }); },
                        });
                        this.addCommand({
                            id: "push",
                            name: "Commit *all* changes and push to remote repository",
                            callback: function () { return _this.promiseQueue.addTask(function () { return _this.createBackup(false); }); }
                        });
                        this.addCommand({
                            id: "commit-push-specified-message",
                            name: "Commit and push all changes with specified message",
                            callback: function () { return new CustomMessageModal(_this).open(); }
                        });
                        this.addCommand({
                            id: "list-changed-files",
                            name: "List changed files",
                            callback: function () { return __awaiter(_this, void 0, void 0, function () {
                                var status;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.git.status()];
                                        case 1:
                                            status = _a.sent();
                                            new ChangedFilesModal(this, status.files).open();
                                            return [2 /*return*/];
                                    }
                                });
                            }); }
                        });
                        statusBarEl = this.addStatusBarItem();
                        this.statusBar = new StatusBar(statusBarEl, this);
                        this.registerInterval(window.setInterval(function () { return _this.statusBar.display(); }, 1000));
                        this.init();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.onunload = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                console.log('unloading ' + this.manifest.name + " plugin");
                return [2 /*return*/];
            });
        });
    };
    ObsidianGit.prototype.loadSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, _b, _c, _d;
            return __generator(this, function (_e) {
                switch (_e.label) {
                    case 0:
                        _a = this;
                        _c = (_b = Object).assign;
                        _d = [{}, DEFAULT_SETTINGS];
                        return [4 /*yield*/, this.loadData()];
                    case 1:
                        _a.settings = _c.apply(_b, _d.concat([_e.sent()]));
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.saveSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.saveData(this.settings)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.init = function () {
        return __awaiter(this, void 0, void 0, function () {
            var adapter, path, isValidRepo, error_1;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.isGitInstalled()) {
                            this.displayError("Cannot run git command");
                            return [2 /*return*/];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        adapter = this.app.vault.adapter;
                        path = adapter.getBasePath();
                        this.git = src(path);
                        return [4 /*yield*/, this.git.checkIsRepo()];
                    case 2:
                        isValidRepo = _a.sent();
                        if (!isValidRepo) {
                            this.displayError("Valid git repository not found.");
                        }
                        else {
                            this.gitReady = true;
                            this.setState(PluginState.idle);
                            if (this.settings.autoPullOnBoot) {
                                this.promiseQueue.addTask(function () { return _this.pullChangesFromRemote(); });
                            }
                            if (this.settings.autoSaveInterval > 0) {
                                this.enableAutoBackup();
                            }
                            if (this.settings.autoPullInterval > 0) {
                                this.enableAutoPull();
                            }
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.displayError(error_1);
                        console.error(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.pullChangesFromRemote = function () {
        return __awaiter(this, void 0, void 0, function () {
            var filesUpdated, status;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.gitReady) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.gitReady)
                            return [2 /*return*/];
                        return [4 /*yield*/, this.pull()];
                    case 3:
                        filesUpdated = _a.sent();
                        if (filesUpdated > 0) {
                            this.displayMessage("Pulled new changes. " + filesUpdated + " files updated");
                        }
                        else {
                            this.displayMessage("Everything is up-to-date");
                        }
                        return [4 /*yield*/, this.git.status()];
                    case 4:
                        status = _a.sent();
                        if (status.conflicted.length > 0) {
                            this.displayError("You have " + status.conflicted.length + " conflict files");
                        }
                        this.lastUpdate = Date.now();
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.createBackup = function (fromAutoBackup, commitMessage) {
        return __awaiter(this, void 0, void 0, function () {
            var status, file, changedFiles, trackingBranch, currentBranch, remoteChangedFiles, pulledFilesLength, remoteChangedFiles_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.gitReady) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.init()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        if (!this.gitReady)
                            return [2 /*return*/];
                        this.setState(PluginState.status);
                        return [4 /*yield*/, this.git.status()];
                    case 3:
                        status = _a.sent();
                        if (!!fromAutoBackup) return [3 /*break*/, 5];
                        file = this.app.vault.getAbstractFileByPath(this.conflictOutputFile);
                        return [4 /*yield*/, this.app.vault.delete(file)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5:
                        // check for conflict files on auto backup
                        if (fromAutoBackup && status.conflicted.length > 0) {
                            this.setState(PluginState.idle);
                            this.displayError("Did not commit, because you have " + status.conflicted.length + " conflict files. Please resolve them and commit per command.");
                            this.handleConflict(status.conflicted);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.git.status()];
                    case 6:
                        changedFiles = (_a.sent()).files;
                        if (!(changedFiles.length !== 0)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.add()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.git.status()];
                    case 8:
                        status = _a.sent();
                        return [4 /*yield*/, this.commit(commitMessage)];
                    case 9:
                        _a.sent();
                        this.lastUpdate = Date.now();
                        this.displayMessage("Committed " + status.staged.length + " files");
                        return [3 /*break*/, 11];
                    case 10:
                        this.displayMessage("No changes to commit");
                        _a.label = 11;
                    case 11:
                        if (!!this.settings.disablePush) return [3 /*break*/, 21];
                        trackingBranch = status.tracking;
                        currentBranch = status.current;
                        if (!trackingBranch) {
                            this.displayError("Did not push. No upstream branch is set! See README for instructions", 10000);
                            this.setState(PluginState.idle);
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, this.git.diffSummary([currentBranch, trackingBranch])];
                    case 12:
                        remoteChangedFiles = (_a.sent()).changed;
                        if (!(remoteChangedFiles > 0)) return [3 /*break*/, 20];
                        if (!this.settings.pullBeforePush) return [3 /*break*/, 14];
                        return [4 /*yield*/, this.pull()];
                    case 13:
                        pulledFilesLength = _a.sent();
                        if (pulledFilesLength > 0) {
                            this.displayMessage("Pulled " + pulledFilesLength + " files from remote");
                        }
                        _a.label = 14;
                    case 14: return [4 /*yield*/, this.git.status()];
                    case 15:
                        // Refresh because of pull
                        status = _a.sent();
                        if (!(status.conflicted.length > 0)) return [3 /*break*/, 16];
                        this.displayError("Cannot push. You have " + status.conflicted.length + " conflict files");
                        this.handleConflict(status.conflicted);
                        return [2 /*return*/];
                    case 16: return [4 /*yield*/, this.git.diffSummary([currentBranch, trackingBranch])];
                    case 17:
                        remoteChangedFiles_1 = (_a.sent()).changed;
                        return [4 /*yield*/, this.push()];
                    case 18:
                        _a.sent();
                        this.displayMessage("Pushed " + remoteChangedFiles_1 + " files to remote");
                        _a.label = 19;
                    case 19: return [3 /*break*/, 21];
                    case 20:
                        this.displayMessage("No changes to push");
                        _a.label = 21;
                    case 21:
                        this.setState(PluginState.idle);
                        return [2 /*return*/];
                }
            });
        });
    };
    // region: main methods
    ObsidianGit.prototype.isGitInstalled = function () {
        // https://github.com/steveukx/git-js/issues/402
        var command = child_process_1.spawnSync('git', ['--version'], {
            stdio: 'ignore'
        });
        if (command.error) {
            console.error(command.error);
            return false;
        }
        return true;
    };
    ObsidianGit.prototype.add = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState(PluginState.add);
                        return [4 /*yield*/, this.git.add("./*", function (err) {
                                return err && _this.displayError("Cannot add files: " + err.message);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.commit = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var commitMessage, _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.setState(PluginState.commit);
                        if (!(message !== null && message !== void 0)) return [3 /*break*/, 1];
                        _a = message;
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, this.formatCommitMessage(this.settings.commitMessage)];
                    case 2:
                        _a = _c.sent();
                        _c.label = 3;
                    case 3:
                        commitMessage = _a;
                        if (!this.settings.listChangedFilesInMessageBody) return [3 /*break*/, 5];
                        _b = [commitMessage, "Affected files:"];
                        return [4 /*yield*/, this.git.status()];
                    case 4:
                        commitMessage = _b.concat([(_c.sent()).staged.join("\n")]);
                        _c.label = 5;
                    case 5: return [4 /*yield*/, this.git.commit(commitMessage)];
                    case 6:
                        _c.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.push = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState(PluginState.push);
                        return [4 /*yield*/, this.git.push(function (err) {
                                err && _this.displayError("Push failed " + err.message);
                            })];
                    case 1:
                        _a.sent();
                        this.lastUpdate = Date.now();
                        return [2 /*return*/];
                }
            });
        });
    };
    ObsidianGit.prototype.pull = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pullResult;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.setState(PluginState.pull);
                        return [4 /*yield*/, this.git.pull(["--no-rebase"], function (err) { return __awaiter(_this, void 0, void 0, function () {
                                var status_1;
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            if (!err) return [3 /*break*/, 2];
                                            this.displayError("Pull failed " + err.message);
                                            return [4 /*yield*/, this.git.status()];
                                        case 1:
                                            status_1 = _a.sent();
                                            if (status_1.conflicted.length > 0) {
                                                this.handleConflict(status_1.conflicted);
                                            }
                                            _a.label = 2;
                                        case 2: return [2 /*return*/];
                                    }
                                });
                            }); })];
                    case 1:
                        pullResult = _a.sent();
                        this.lastUpdate = Date.now();
                        return [2 /*return*/, pullResult.files.length];
                }
            });
        });
    };
    // endregion: main methods
    ObsidianGit.prototype.enableAutoBackup = function () {
        var _this = this;
        var minutes = this.settings.autoSaveInterval;
        this.intervalIDBackup = window.setInterval(function () { return _this.promiseQueue.addTask(function () { return _this.createBackup(true); }); }, minutes * 60000);
        this.registerInterval(this.intervalIDBackup);
    };
    ObsidianGit.prototype.enableAutoPull = function () {
        var _this = this;
        var minutes = this.settings.autoPullInterval;
        this.intervalIDPull = window.setInterval(function () { return _this.promiseQueue.addTask(function () { return _this.pullChangesFromRemote(); }); }, minutes * 60000);
        this.registerInterval(this.intervalIDPull);
    };
    ObsidianGit.prototype.disableAutoBackup = function () {
        if (this.intervalIDBackup) {
            clearInterval(this.intervalIDBackup);
            return true;
        }
        return false;
    };
    ObsidianGit.prototype.disableAutoPull = function () {
        if (this.intervalIDPull) {
            clearInterval(this.intervalIDPull);
            return true;
        }
        return false;
    };
    ObsidianGit.prototype.handleConflict = function (conflicted) {
        return __awaiter(this, void 0, void 0, function () {
            var lines;
            var _this = this;
            return __generator(this, function (_a) {
                this.setState(PluginState.conflicted);
                lines = __spreadArray([
                    "# Conflict files",
                    "Please resolve them and commit per command (This file will be deleted before the commit)."
                ], conflicted.map(function (e) {
                    var file = _this.app.vault.getAbstractFileByPath(e);
                    if (file instanceof obsidian.TFile) {
                        var link = _this.app.metadataCache.fileToLinktext(file, "/");
                        return "- [[" + link + "]]";
                    }
                    else {
                        return "- Not a file: " + e;
                    }
                }));
                this.writeAndOpenFile(lines.join("\n"));
                return [2 /*return*/];
            });
        });
    };
    ObsidianGit.prototype.writeAndOpenFile = function (text) {
        return __awaiter(this, void 0, void 0, function () {
            var fileIsAlreadyOpened;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.app.vault.adapter.write(this.conflictOutputFile, text)];
                    case 1:
                        _a.sent();
                        fileIsAlreadyOpened = false;
                        this.app.workspace.iterateAllLeaves(function (leaf) {
                            if (leaf.getDisplayText() != "" && _this.conflictOutputFile.startsWith(leaf.getDisplayText())) {
                                fileIsAlreadyOpened = true;
                            }
                        });
                        if (!fileIsAlreadyOpened) {
                            this.app.workspace.openLinkText(this.conflictOutputFile, "/", true);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    // region: displaying / formatting messages
    ObsidianGit.prototype.displayMessage = function (message, timeout) {
        if (timeout === void 0) { timeout = 4 * 1000; }
        this.statusBar.displayMessage(message.toLowerCase(), timeout);
        if (!this.settings.disablePopups) {
            new obsidian.Notice(message);
        }
        console.log("git obsidian message: " + message);
    };
    ObsidianGit.prototype.displayError = function (message, timeout) {
        if (timeout === void 0) { timeout = 0; }
        new obsidian.Notice(message);
        console.log("git obsidian error: " + message);
        this.statusBar.displayMessage(message.toLowerCase(), timeout);
    };
    ObsidianGit.prototype.formatCommitMessage = function (template) {
        return __awaiter(this, void 0, void 0, function () {
            var status_2, numFiles, status_3, changeset_1, chunks, _i, _a, _b, action, files_1, files, moment;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!template.includes("{{numFiles}}")) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.git.status()];
                    case 1:
                        status_2 = _c.sent();
                        numFiles = status_2.files.length;
                        template = template.replace("{{numFiles}}", String(numFiles));
                        _c.label = 2;
                    case 2:
                        if (!template.includes("{{files}}")) return [3 /*break*/, 4];
                        return [4 /*yield*/, this.git.status()];
                    case 3:
                        status_3 = _c.sent();
                        changeset_1 = {};
                        status_3.files.forEach(function (value) {
                            if (value.index in changeset_1) {
                                changeset_1[value.index].push(value.path);
                            }
                            else {
                                changeset_1[value.index] = [value.path];
                            }
                        });
                        chunks = [];
                        for (_i = 0, _a = Object.entries(changeset_1); _i < _a.length; _i++) {
                            _b = _a[_i], action = _b[0], files_1 = _b[1];
                            chunks.push(action + " " + files_1.join(" "));
                        }
                        files = chunks.join(", ");
                        template = template.replace("{{files}}", files);
                        _c.label = 4;
                    case 4:
                        moment = window.moment;
                        return [2 /*return*/, template.replace("{{date}}", moment().format(this.settings.commitDateFormat))];
                }
            });
        });
    };
    return ObsidianGit;
}(obsidian.Plugin));
var ObsidianGitSettingsTab = /** @class */ (function (_super) {
    __extends(ObsidianGitSettingsTab, _super);
    function ObsidianGitSettingsTab() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ObsidianGitSettingsTab.prototype.display = function () {
        var _this = this;
        var containerEl = this.containerEl;
        var plugin = this.plugin;
        containerEl.empty();
        containerEl.createEl("h2", { text: "Git Backup settings" });
        new obsidian.Setting(containerEl)
            .setName("Vault backup interval (minutes)")
            .setDesc("Commit and push changes every X minutes. To disable automatic backup, specify negative value or zero (default)")
            .addText(function (text) {
            return text
                .setValue(String(plugin.settings.autoSaveInterval))
                .onChange(function (value) {
                if (!isNaN(Number(value))) {
                    plugin.settings.autoSaveInterval = Number(value);
                    plugin.saveSettings();
                    if (plugin.settings.autoSaveInterval > 0) {
                        plugin.disableAutoBackup();
                        plugin.enableAutoBackup();
                        new obsidian.Notice("Automatic backup enabled! Every " + plugin.settings.autoSaveInterval + " minutes.");
                    }
                    else if (plugin.settings.autoSaveInterval <= 0 &&
                        plugin.intervalIDBackup) {
                        plugin.disableAutoBackup() &&
                            new obsidian.Notice("Automatic backup disabled!");
                    }
                }
                else {
                    new obsidian.Notice("Please specify a valid number.");
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Auto pull interval (minutes)")
            .setDesc("Pull changes every X minutes. To disable automatic pull, specify negative value or zero (default)")
            .addText(function (text) {
            return text
                .setValue(String(plugin.settings.autoPullInterval))
                .onChange(function (value) {
                if (!isNaN(Number(value))) {
                    plugin.settings.autoPullInterval = Number(value);
                    plugin.saveSettings();
                    if (plugin.settings.autoPullInterval > 0) {
                        plugin.disableAutoPull();
                        plugin.enableAutoPull();
                        new obsidian.Notice("Automatic pull enabled! Every " + plugin.settings.autoPullInterval + " minutes.");
                    }
                    else if (plugin.settings.autoPullInterval <= 0 &&
                        plugin.intervalIDPull) {
                        plugin.disableAutoPull() &&
                            new obsidian.Notice("Automatic pull disabled!");
                    }
                }
                else {
                    new obsidian.Notice("Please specify a valid number.");
                }
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Commit message")
            .setDesc("Specify custom commit message. Available placeholders: {{date}}" +
            " (see below) and {{numFiles}} (number of changed files in the commit)")
            .addText(function (text) {
            return text
                .setPlaceholder("vault backup")
                .setValue(plugin.settings.commitMessage
                ? plugin.settings.commitMessage
                : "")
                .onChange(function (value) {
                plugin.settings.commitMessage = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("{{date}} placeholder format")
            .setDesc('Specify custom date format. E.g. "YYYY-MM-DD HH:mm:ss"')
            .addText(function (text) {
            return text
                .setPlaceholder(plugin.settings.commitDateFormat)
                .setValue(plugin.settings.commitDateFormat)
                .onChange(function (value) { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            plugin.settings.commitDateFormat = value;
                            return [4 /*yield*/, plugin.saveSettings()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("Preview commit message")
            .addButton(function (button) {
            return button.setButtonText("Preview").onClick(function () { return __awaiter(_this, void 0, void 0, function () {
                var commitMessagePreview;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, plugin.formatCommitMessage(plugin.settings.commitMessage)];
                        case 1:
                            commitMessagePreview = _a.sent();
                            new obsidian.Notice("" + commitMessagePreview);
                            return [2 /*return*/];
                    }
                });
            }); });
        });
        new obsidian.Setting(containerEl)
            .setName("List filenames affected by commit in the commit body")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.listChangedFilesInMessageBody)
                .onChange(function (value) {
                plugin.settings.listChangedFilesInMessageBody = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Current branch")
            .setDesc("Switch to a different branch")
            .addDropdown(function (dropdown) { return __awaiter(_this, void 0, void 0, function () {
            var branchInfo, _i, _a, branch;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, plugin.git.branchLocal()];
                    case 1:
                        branchInfo = _b.sent();
                        for (_i = 0, _a = branchInfo.all; _i < _a.length; _i++) {
                            branch = _a[_i];
                            dropdown.addOption(branch, branch);
                        }
                        dropdown.setValue(branchInfo.current);
                        dropdown.onChange(function (option) { return __awaiter(_this, void 0, void 0, function () {
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, plugin.git.checkout(option, [], function (err) { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                if (err) {
                                                    new obsidian.Notice(err.message);
                                                    dropdown.setValue(branchInfo.current);
                                                }
                                                else {
                                                    new obsidian.Notice("Checked out to " + option);
                                                }
                                                return [2 /*return*/];
                                            });
                                        }); })];
                                    case 1:
                                        _a.sent();
                                        return [2 /*return*/];
                                }
                            });
                        }); });
                        return [2 /*return*/];
                }
            });
        }); });
        new obsidian.Setting(containerEl)
            .setName("Pull updates on startup")
            .setDesc("Automatically pull updates when Obsidian starts")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.autoPullOnBoot)
                .onChange(function (value) {
                plugin.settings.autoPullOnBoot = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Disable push")
            .setDesc("Do not push changes to the remote repository")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.disablePush)
                .onChange(function (value) {
                plugin.settings.disablePush = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Pull changes before push")
            .setDesc("Commit -> pull -> push (Only if pushing is enabled)")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.pullBeforePush)
                .onChange(function (value) {
                plugin.settings.pullBeforePush = value;
                plugin.saveSettings();
            });
        });
        new obsidian.Setting(containerEl)
            .setName("Disable notifications")
            .setDesc("Disable notifications for git operations to minimize distraction (refer to status bar for updates)")
            .addToggle(function (toggle) {
            return toggle
                .setValue(plugin.settings.disablePopups)
                .onChange(function (value) {
                plugin.settings.disablePopups = value;
                plugin.saveSettings();
            });
        });
    };
    return ObsidianGitSettingsTab;
}(obsidian.PluginSettingTab));
var StatusBar = /** @class */ (function () {
    function StatusBar(statusBarEl, plugin) {
        this.messages = [];
        this.statusBarEl = statusBarEl;
        this.plugin = plugin;
    }
    StatusBar.prototype.displayMessage = function (message, timeout) {
        this.messages.push({
            message: "git: " + message.slice(0, 100),
            timeout: timeout,
        });
        this.display();
    };
    StatusBar.prototype.display = function () {
        if (this.messages.length > 0 && !this.currentMessage) {
            this.currentMessage = this.messages.shift();
            this.statusBarEl.setText(this.currentMessage.message);
            this.lastMessageTimestamp = Date.now();
        }
        else if (this.currentMessage) {
            var messageAge = Date.now() - this.lastMessageTimestamp;
            if (messageAge >= this.currentMessage.timeout) {
                this.currentMessage = null;
                this.lastMessageTimestamp = null;
            }
        }
        else {
            this.displayState();
        }
    };
    StatusBar.prototype.displayState = function () {
        switch (this.plugin.state) {
            case PluginState.idle:
                this.displayFromNow(this.plugin.lastUpdate);
                break;
            case PluginState.status:
                this.statusBarEl.setText("git: checking repo status..");
                break;
            case PluginState.add:
                this.statusBarEl.setText("git: adding files to repo..");
                break;
            case PluginState.commit:
                this.statusBarEl.setText("git: committing changes..");
                break;
            case PluginState.push:
                this.statusBarEl.setText("git: pushing changes..");
                break;
            case PluginState.pull:
                this.statusBarEl.setText("git: pulling changes..");
                break;
            case PluginState.conflicted:
                this.statusBarEl.setText("git: you have conflict files..");
                break;
            default:
                this.statusBarEl.setText("git: failed on initialization!");
                break;
        }
    };
    StatusBar.prototype.displayFromNow = function (timestamp) {
        if (timestamp) {
            var moment_1 = window.moment;
            var fromNow = moment_1(timestamp).fromNow();
            this.statusBarEl.setText("git: last update " + fromNow + "..");
        }
        else {
            this.statusBarEl.setText("git: ready");
        }
    };
    return StatusBar;
}());
var CustomMessageModal = /** @class */ (function (_super) {
    __extends(CustomMessageModal, _super);
    function CustomMessageModal(plugin) {
        var _this = _super.call(this, plugin.app) || this;
        _this.plugin = plugin;
        _this.setPlaceholder("Type your message and select optional the version with the added date.");
        return _this;
    }
    CustomMessageModal.prototype.getSuggestions = function (query) {
        var date = window.moment().format(this.plugin.settings.commitDateFormat);
        if (query == "")
            query = "...";
        return [query, date + ": " + query, query + ": " + date];
    };
    CustomMessageModal.prototype.renderSuggestion = function (value, el) {
        el.innerText = value;
    };
    CustomMessageModal.prototype.onChooseSuggestion = function (item, _) {
        var _this = this;
        this.plugin.promiseQueue.addTask(function () { return _this.plugin.createBackup(false, item); });
    };
    return CustomMessageModal;
}(obsidian.SuggestModal));
var ChangedFilesModal = /** @class */ (function (_super) {
    __extends(ChangedFilesModal, _super);
    function ChangedFilesModal(plugin, changedFiles) {
        var _this = _super.call(this, plugin.app) || this;
        _this.plugin = plugin;
        _this.changedFiles = changedFiles;
        _this.setPlaceholder("Not supported files will be opened by default app!");
        return _this;
    }
    ChangedFilesModal.prototype.getItems = function () {
        return this.changedFiles;
    };
    ChangedFilesModal.prototype.getItemText = function (item) {
        if (item.index == "?" && item.working_dir == "?") {
            return "Untracked | " + item.path;
        }
        var working_dir = "";
        var index = "";
        if (item.working_dir != " ")
            working_dir = "Working dir: " + item.working_dir + " ";
        if (item.index != " ")
            index = "Index: " + item.index;
        return "" + working_dir + index + " | " + item.path;
    };
    ChangedFilesModal.prototype.onChooseItem = function (item, _) {
        if (this.plugin.app.metadataCache.getFirstLinkpathDest(item.path, "") == null) {
            this.app.openWithDefaultApp(item.path);
        }
        else {
            this.plugin.app.workspace.openLinkText(item.path, "/");
        }
    };
    return ChangedFilesModal;
}(obsidian.FuzzySuggestModal));
var PromiseQueue = /** @class */ (function () {
    function PromiseQueue() {
        this.tasks = [];
    }
    PromiseQueue.prototype.addTask = function (task) {
        this.tasks.push(task);
        if (this.tasks.length === 1) {
            this.handleTask();
        }
    };
    PromiseQueue.prototype.handleTask = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                if (this.tasks.length > 0) {
                    this.tasks[0]().finally(function () {
                        _this.tasks.shift();
                        _this.handleTask();
                    });
                }
                return [2 /*return*/];
            });
        });
    };
    return PromiseQueue;
}());

module.exports = ObsidianGit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZXJyb3JzL2dpdC1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZXJyb3JzL2dpdC1jb25zdHJ1Y3QtZXJyb3IuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL2Vycm9ycy9naXQtcGx1Z2luLWVycm9yLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9lcnJvcnMvdGFzay1jb25maWd1cmF0aW9uLWVycm9yLmpzIiwibm9kZV9tb2R1bGVzL21zL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2RlYnVnL3NyYy9jb21tb24uanMiLCJub2RlX21vZHVsZXMvZGVidWcvc3JjL2Jyb3dzZXIuanMiLCJub2RlX21vZHVsZXMvaGFzLWZsYWcvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc3VwcG9ydHMtY29sb3IvaW5kZXguanMiLCJub2RlX21vZHVsZXMvZGVidWcvc3JjL25vZGUuanMiLCJub2RlX21vZHVsZXMvZGVidWcvc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0Brd3NpdGVzL2ZpbGUtZXhpc3RzL2Rpc3Qvc3JjL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL0Brd3NpdGVzL2ZpbGUtZXhpc3RzL2Rpc3QvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL3V0aWwuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2FyZ3VtZW50LWZpbHRlcnMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2V4aXQtY29kZXMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL2dpdC1vdXRwdXQtc3RyZWFtcy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdXRpbHMvbGluZS1wYXJzZXIuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3V0aWxzL3NpbXBsZS1naXQtb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdXRpbHMvdGFzay1vcHRpb25zLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi91dGlscy90YXNrLXBhcnNlci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdXRpbHMvaW5kZXguanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2NoZWNrLWlzLXJlcG8uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9DbGVhblN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3Rhc2suanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2NsZWFuLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9yZXNldC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvYXBpLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wbHVnaW5zL2NvbW1hbmQtY29uZmlnLXByZWZpeGluZy1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvZXJyb3ItZGV0ZWN0aW9uLnBsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGx1Z2lucy9wbHVnaW4tc3RvcmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvcHJvZ3Jlc3MtbW9uaXRvci1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvc2ltcGxlLWdpdC1wbHVnaW4uanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BsdWdpbnMvdGltb3V0LXBsdWdpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGx1Z2lucy9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvZ2l0LWxvZ2dlci5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy90YXNrcy1wZW5kaW5nLXF1ZXVlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9ydW5uZXJzL2dpdC1leGVjdXRvci1jaGFpbi5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9naXQtZXhlY3V0b3IuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2stY2FsbGJhY2suanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtcmVtb3RlLW9iamVjdHMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtcmVtb3RlLW1lc3NhZ2VzLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLXB1c2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3B1c2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3NpbXBsZS1naXQtYXBpLmpzIiwibm9kZV9tb2R1bGVzL0Brd3NpdGVzL3Byb21pc2UtZGVmZXJyZWQvZGlzdC9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9zY2hlZHVsZXIuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2FwcGx5LXBhdGNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQnJhbmNoRGVsZXRlU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1icmFuY2gtZGVsZXRlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQnJhbmNoU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1icmFuY2guanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2JyYW5jaC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcmVzcG9uc2VzL0NoZWNrSWdub3JlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9jaGVjay1pZ25vcmUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvQ29uZmlnTGlzdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvY29uZmlnLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLWNvbW1pdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvY29tbWl0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvRGlmZlN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3BhcnNlcnMvcGFyc2UtZGlmZi1zdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9kaWZmLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLWZldGNoLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9mZXRjaC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvaGFzaC1vYmplY3QuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9Jbml0U3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvaW5pdC5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1saXN0LWxvZy1zdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9sb2cuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9NZXJnZVN1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9QdWxsU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1wdWxsLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9wYXJzZXJzL3BhcnNlLW1lcmdlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9tZXJnZS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcGFyc2Vycy9wYXJzZS1tb3ZlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9tb3ZlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9wdWxsLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvR2V0UmVtb3RlU3VtbWFyeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvdGFza3MvcmVtb3RlLmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9zdGFzaC1saXN0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9yZXNwb25zZXMvRmlsZVN0YXR1c1N1bW1hcnkuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9TdGF0dXNTdW1tYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy9zdGF0dXMuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Rhc2tzL3N1Yi1tb2R1bGUuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvbGliL3Jlc3BvbnNlcy9UYWdMaXN0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi90YXNrcy90YWcuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvZ2l0LmpzIiwibm9kZV9tb2R1bGVzL3NpbXBsZS1naXQvc3JjL2xpYi9naXQtZmFjdG9yeS5qcyIsIm5vZGVfbW9kdWxlcy9zaW1wbGUtZ2l0L3NyYy9saWIvcnVubmVycy9wcm9taXNlLXdyYXBwZWQuanMiLCJub2RlX21vZHVsZXMvc2ltcGxlLWdpdC9zcmMvaW5kZXguanMiLCJtYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi5cclxuXHJcblBlcm1pc3Npb24gdG8gdXNlLCBjb3B5LCBtb2RpZnksIGFuZC9vciBkaXN0cmlidXRlIHRoaXMgc29mdHdhcmUgZm9yIGFueVxyXG5wdXJwb3NlIHdpdGggb3Igd2l0aG91dCBmZWUgaXMgaGVyZWJ5IGdyYW50ZWQuXHJcblxyXG5USEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiIEFORCBUSEUgQVVUSE9SIERJU0NMQUlNUyBBTEwgV0FSUkFOVElFUyBXSVRIXHJcblJFR0FSRCBUTyBUSElTIFNPRlRXQVJFIElOQ0xVRElORyBBTEwgSU1QTElFRCBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWVxyXG5BTkQgRklUTkVTUy4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUiBCRSBMSUFCTEUgRk9SIEFOWSBTUEVDSUFMLCBESVJFQ1QsXHJcbklORElSRUNULCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgT1IgQU5ZIERBTUFHRVMgV0hBVFNPRVZFUiBSRVNVTFRJTkcgRlJPTVxyXG5MT1NTIE9GIFVTRSwgREFUQSBPUiBQUk9GSVRTLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgTkVHTElHRU5DRSBPUlxyXG5PVEhFUiBUT1JUSU9VUyBBQ1RJT04sIEFSSVNJTkcgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgVVNFIE9SXHJcblBFUkZPUk1BTkNFIE9GIFRISVMgU09GVFdBUkUuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgZnVuY3Rpb24gYWRvcHQodmFsdWUpIHsgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUCA/IHZhbHVlIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZSh2YWx1ZSk7IH0pOyB9XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fY3JlYXRlQmluZGluZyA9IE9iamVjdC5jcmVhdGUgPyAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XHJcbn0pIDogKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgb1trMl0gPSBtW2tdO1xyXG59KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgbykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkgX19jcmVhdGVCaW5kaW5nKG8sIG0sIHApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIHMgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yLCBtID0gcyAmJiBvW3NdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgaWYgKG8gJiYgdHlwZW9mIG8ubGVuZ3RoID09PSBcIm51bWJlclwiKSByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHMgPyBcIk9iamVjdCBpcyBub3QgaXRlcmFibGUuXCIgOiBcIlN5bWJvbC5pdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG4vKiogQGRlcHJlY2F0ZWQgKi9cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZEFycmF5KHRvLCBmcm9tKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMCwgaWwgPSBmcm9tLmxlbmd0aCwgaiA9IHRvLmxlbmd0aDsgaSA8IGlsOyBpKyssIGorKylcclxuICAgICAgICB0b1tqXSA9IGZyb21baV07XHJcbiAgICByZXR1cm4gdG87XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChrICE9PSBcImRlZmF1bHRcIiAmJiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9kLCBrKSkgX19jcmVhdGVCaW5kaW5nKHJlc3VsdCwgbW9kLCBrKTtcclxuICAgIF9fc2V0TW9kdWxlRGVmYXVsdChyZXN1bHQsIG1vZCk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnREZWZhdWx0KG1vZCkge1xyXG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBkZWZhdWx0OiBtb2QgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRHZXQocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XHJcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XHJcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufVxyXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0RXJyb3IgPSB2b2lkIDA7XG4vKipcbiAqIFRoZSBgR2l0RXJyb3JgIGlzIHRocm93biB3aGVuIHRoZSB1bmRlcmx5aW5nIGBnaXRgIHByb2Nlc3MgdGhyb3dzIGFcbiAqIGZhdGFsIGV4Y2VwdGlvbiAoZWcgYW4gYEVOT0VOVGAgZXhjZXB0aW9uIHdoZW4gYXR0ZW1wdGluZyB0byB1c2UgYVxuICogbm9uLXdyaXRhYmxlIGRpcmVjdG9yeSBhcyB0aGUgcm9vdCBmb3IgeW91ciByZXBvKSwgYW5kIGFjdHMgYXMgdGhlXG4gKiBiYXNlIGNsYXNzIGZvciBtb3JlIHNwZWNpZmljIGVycm9ycyB0aHJvd24gYnkgdGhlIHBhcnNpbmcgb2YgdGhlXG4gKiBnaXQgcmVzcG9uc2Ugb3IgZXJyb3JzIGluIHRoZSBjb25maWd1cmF0aW9uIG9mIHRoZSB0YXNrIGFib3V0IHRvXG4gKiBiZSBydW4uXG4gKlxuICogV2hlbiBhbiBleGNlcHRpb24gaXMgdGhyb3duLCBwZW5kaW5nIHRhc2tzIGluIHRoZSBzYW1lIGluc3RhbmNlIHdpbGxcbiAqIG5vdCBiZSBleGVjdXRlZC4gVGhlIHJlY29tbWVuZGVkIHdheSB0byBydW4gYSBzZXJpZXMgb2YgdGFza3MgdGhhdFxuICogY2FuIGluZGVwZW5kZW50bHkgZmFpbCB3aXRob3V0IG5lZWRpbmcgdG8gcHJldmVudCBmdXR1cmUgdGFza3MgZnJvbVxuICogcnVubmluZyBpcyB0byBjYXRjaCB0aGVtIGluZGl2aWR1YWxseTpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gaW1wb3J0IHsgZ2l0UCwgU2ltcGxlR2l0LCBHaXRFcnJvciwgUHVsbFJlc3VsdCB9IGZyb20gJ3NpbXBsZS1naXQnO1xuXG4gZnVuY3Rpb24gY2F0Y2hUYXNrIChlOiBHaXRFcnJvcikge1xuICAgcmV0dXJuIGUuXG4gfVxuXG4gY29uc3QgZ2l0ID0gZ2l0UChyZXBvV29ya2luZ0Rpcik7XG4gY29uc3QgcHVsbGVkOiBQdWxsUmVzdWx0IHwgR2l0RXJyb3IgPSBhd2FpdCBnaXQucHVsbCgpLmNhdGNoKGNhdGNoVGFzayk7XG4gY29uc3QgcHVzaGVkOiBzdHJpbmcgfCBHaXRFcnJvciA9IGF3YWl0IGdpdC5wdXNoVGFncygpLmNhdGNoKGNhdGNoVGFzayk7XG4gYGBgXG4gKi9cbmNsYXNzIEdpdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHRhc2ssIG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIobWVzc2FnZSk7XG4gICAgICAgIHRoaXMudGFzayA9IHRhc2s7XG4gICAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZih0aGlzLCBuZXcudGFyZ2V0LnByb3RvdHlwZSk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRFcnJvciA9IEdpdEVycm9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LWVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRSZXNwb25zZUVycm9yID0gdm9pZCAwO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi9naXQtZXJyb3JcIik7XG4vKipcbiAqIFRoZSBgR2l0UmVzcG9uc2VFcnJvcmAgaXMgdGhlIHdyYXBwZXIgZm9yIGEgcGFyc2VkIHJlc3BvbnNlIHRoYXQgaXMgdHJlYXRlZCBhc1xuICogYSBmYXRhbCBlcnJvciwgZm9yIGV4YW1wbGUgYXR0ZW1wdGluZyBhIGBtZXJnZWAgY2FuIGxlYXZlIHRoZSByZXBvIGluIGEgY29ycnVwdGVkXG4gKiBzdGF0ZSB3aGVuIHRoZXJlIGFyZSBjb25mbGljdHMgc28gdGhlIHRhc2sgd2lsbCByZWplY3QgcmF0aGVyIHRoYW4gcmVzb2x2ZS5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgY2F0Y2hpbmcgdGhlIG1lcmdlIGNvbmZsaWN0IGV4Y2VwdGlvbjpcbiAqXG4gKiBgYGB0eXBlc2NyaXB0XG4gaW1wb3J0IHsgZ2l0UCwgU2ltcGxlR2l0LCBHaXRSZXNwb25zZUVycm9yLCBNZXJnZVN1bW1hcnkgfSBmcm9tICdzaW1wbGUtZ2l0JztcblxuIGNvbnN0IGdpdCA9IGdpdFAocmVwb1Jvb3QpO1xuIGNvbnN0IG1lcmdlT3B0aW9uczogc3RyaW5nW10gPSBbJy0tbm8tZmYnLCAnb3RoZXItYnJhbmNoJ107XG4gY29uc3QgbWVyZ2VTdW1tYXJ5OiBNZXJnZVN1bW1hcnkgPSBhd2FpdCBnaXQubWVyZ2UobWVyZ2VPcHRpb25zKVxuICAgICAgLmNhdGNoKChlOiBHaXRSZXNwb25zZUVycm9yPE1lcmdlU3VtbWFyeT4pID0+IGUuZ2l0KTtcblxuIGlmIChtZXJnZVN1bW1hcnkuZmFpbGVkKSB7XG4gICAvLyBkZWFsIHdpdGggdGhlIGVycm9yXG4gfVxuIGBgYFxuICovXG5jbGFzcyBHaXRSZXNwb25zZUVycm9yIGV4dGVuZHMgZ2l0X2Vycm9yXzEuR2l0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKFxuICAgIC8qKlxuICAgICAqIGAuZ2l0YCBhY2Nlc3MgdGhlIHBhcnNlZCByZXNwb25zZSB0aGF0IGlzIHRyZWF0ZWQgYXMgYmVpbmcgYW4gZXJyb3JcbiAgICAgKi9cbiAgICBnaXQsIG1lc3NhZ2UpIHtcbiAgICAgICAgc3VwZXIodW5kZWZpbmVkLCBtZXNzYWdlIHx8IFN0cmluZyhnaXQpKTtcbiAgICAgICAgdGhpcy5naXQgPSBnaXQ7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRSZXNwb25zZUVycm9yID0gR2l0UmVzcG9uc2VFcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdpdC1yZXNwb25zZS1lcnJvci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0Q29uc3RydWN0RXJyb3IgPSB2b2lkIDA7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2dpdC1lcnJvclwiKTtcbi8qKlxuICogVGhlIGBHaXRDb25zdHJ1Y3RFcnJvcmAgaXMgdGhyb3duIHdoZW4gYW4gZXJyb3Igb2NjdXJzIGluIHRoZSBjb25zdHJ1Y3RvclxuICogb2YgdGhlIGBzaW1wbGUtZ2l0YCBpbnN0YW5jZSBpdHNlbGYuIE1vc3QgY29tbW9ubHkgYXMgYSByZXN1bHQgb2YgdXNpbmdcbiAqIGEgYGJhc2VEaXJgIG9wdGlvbiB0aGF0IHBvaW50cyB0byBhIGZvbGRlciB0aGF0IGVpdGhlciBkb2VzIG5vdCBleGlzdCxcbiAqIG9yIGNhbm5vdCBiZSByZWFkIGJ5IHRoZSB1c2VyIHRoZSBub2RlIHNjcmlwdCBpcyBydW5uaW5nIGFzLlxuICpcbiAqIENoZWNrIHRoZSBgLm1lc3NhZ2VgIHByb3BlcnR5IGZvciBtb3JlIGRldGFpbCBpbmNsdWRpbmcgdGhlIHByb3BlcnRpZXNcbiAqIHBhc3NlZCB0byB0aGUgY29uc3RydWN0b3IuXG4gKi9cbmNsYXNzIEdpdENvbnN0cnVjdEVycm9yIGV4dGVuZHMgZ2l0X2Vycm9yXzEuR2l0RXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZywgbWVzc2FnZSkge1xuICAgICAgICBzdXBlcih1bmRlZmluZWQsIG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICB9XG59XG5leHBvcnRzLkdpdENvbnN0cnVjdEVycm9yID0gR2l0Q29uc3RydWN0RXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtY29uc3RydWN0LWVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HaXRQbHVnaW5FcnJvciA9IHZvaWQgMDtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4vZ2l0LWVycm9yXCIpO1xuY2xhc3MgR2l0UGx1Z2luRXJyb3IgZXh0ZW5kcyBnaXRfZXJyb3JfMS5HaXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFzaywgcGx1Z2luLCBtZXNzYWdlKSB7XG4gICAgICAgIHN1cGVyKHRhc2ssIG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLnRhc2sgPSB0YXNrO1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKHRoaXMsIG5ldy50YXJnZXQucHJvdG90eXBlKTtcbiAgICB9XG59XG5leHBvcnRzLkdpdFBsdWdpbkVycm9yID0gR2l0UGx1Z2luRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtcGx1Z2luLWVycm9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UYXNrQ29uZmlndXJhdGlvbkVycm9yID0gdm9pZCAwO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi9naXQtZXJyb3JcIik7XG4vKipcbiAqIFRoZSBgVGFza0NvbmZpZ3VyYXRpb25FcnJvcmAgaXMgdGhyb3duIHdoZW4gYSBjb21tYW5kIHdhcyBpbmNvcnJlY3RseVxuICogY29uZmlndXJlZC4gQW4gZXJyb3Igb2YgdGhpcyBraW5kIG1lYW5zIHRoYXQgbm8gYXR0ZW1wdCB3YXMgbWFkZSB0b1xuICogcnVuIHlvdXIgY29tbWFuZCB0aHJvdWdoIHRoZSB1bmRlcmx5aW5nIGBnaXRgIGJpbmFyeS5cbiAqXG4gKiBDaGVjayB0aGUgYC5tZXNzYWdlYCBwcm9wZXJ0eSBmb3IgbW9yZSBkZXRhaWwgb24gd2h5IHlvdXIgY29uZmlndXJhdGlvblxuICogcmVzdWx0ZWQgaW4gYW4gZXJyb3IuXG4gKi9cbmNsYXNzIFRhc2tDb25maWd1cmF0aW9uRXJyb3IgZXh0ZW5kcyBnaXRfZXJyb3JfMS5HaXRFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgICAgICBzdXBlcih1bmRlZmluZWQsIG1lc3NhZ2UpO1xuICAgIH1cbn1cbmV4cG9ydHMuVGFza0NvbmZpZ3VyYXRpb25FcnJvciA9IFRhc2tDb25maWd1cmF0aW9uRXJyb3I7XG4vLyMgc291cmNlTWFwcGluZ1VSTD10YXNrLWNvbmZpZ3VyYXRpb24tZXJyb3IuanMubWFwIiwiLyoqXG4gKiBIZWxwZXJzLlxuICovXG5cbnZhciBzID0gMTAwMDtcbnZhciBtID0gcyAqIDYwO1xudmFyIGggPSBtICogNjA7XG52YXIgZCA9IGggKiAyNDtcbnZhciB3ID0gZCAqIDc7XG52YXIgeSA9IGQgKiAzNjUuMjU7XG5cbi8qKlxuICogUGFyc2Ugb3IgZm9ybWF0IHRoZSBnaXZlbiBgdmFsYC5cbiAqXG4gKiBPcHRpb25zOlxuICpcbiAqICAtIGBsb25nYCB2ZXJib3NlIGZvcm1hdHRpbmcgW2ZhbHNlXVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfE51bWJlcn0gdmFsXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAdGhyb3dzIHtFcnJvcn0gdGhyb3cgYW4gZXJyb3IgaWYgdmFsIGlzIG5vdCBhIG5vbi1lbXB0eSBzdHJpbmcgb3IgYSBudW1iZXJcbiAqIEByZXR1cm4ge1N0cmluZ3xOdW1iZXJ9XG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICB2YXIgdHlwZSA9IHR5cGVvZiB2YWw7XG4gIGlmICh0eXBlID09PSAnc3RyaW5nJyAmJiB2YWwubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiBwYXJzZSh2YWwpO1xuICB9IGVsc2UgaWYgKHR5cGUgPT09ICdudW1iZXInICYmIGlzRmluaXRlKHZhbCkpIHtcbiAgICByZXR1cm4gb3B0aW9ucy5sb25nID8gZm10TG9uZyh2YWwpIDogZm10U2hvcnQodmFsKTtcbiAgfVxuICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgJ3ZhbCBpcyBub3QgYSBub24tZW1wdHkgc3RyaW5nIG9yIGEgdmFsaWQgbnVtYmVyLiB2YWw9JyArXG4gICAgICBKU09OLnN0cmluZ2lmeSh2YWwpXG4gICk7XG59O1xuXG4vKipcbiAqIFBhcnNlIHRoZSBnaXZlbiBgc3RyYCBhbmQgcmV0dXJuIG1pbGxpc2Vjb25kcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuXG5mdW5jdGlvbiBwYXJzZShzdHIpIHtcbiAgc3RyID0gU3RyaW5nKHN0cik7XG4gIGlmIChzdHIubGVuZ3RoID4gMTAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBtYXRjaCA9IC9eKC0/KD86XFxkKyk/XFwuP1xcZCspICoobWlsbGlzZWNvbmRzP3xtc2Vjcz98bXN8c2Vjb25kcz98c2Vjcz98c3xtaW51dGVzP3xtaW5zP3xtfGhvdXJzP3xocnM/fGh8ZGF5cz98ZHx3ZWVrcz98d3x5ZWFycz98eXJzP3x5KT8kL2kuZXhlYyhcbiAgICBzdHJcbiAgKTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbiA9IHBhcnNlRmxvYXQobWF0Y2hbMV0pO1xuICB2YXIgdHlwZSA9IChtYXRjaFsyXSB8fCAnbXMnKS50b0xvd2VyQ2FzZSgpO1xuICBzd2l0Y2ggKHR5cGUpIHtcbiAgICBjYXNlICd5ZWFycyc6XG4gICAgY2FzZSAneWVhcic6XG4gICAgY2FzZSAneXJzJzpcbiAgICBjYXNlICd5cic6XG4gICAgY2FzZSAneSc6XG4gICAgICByZXR1cm4gbiAqIHk7XG4gICAgY2FzZSAnd2Vla3MnOlxuICAgIGNhc2UgJ3dlZWsnOlxuICAgIGNhc2UgJ3cnOlxuICAgICAgcmV0dXJuIG4gKiB3O1xuICAgIGNhc2UgJ2RheXMnOlxuICAgIGNhc2UgJ2RheSc6XG4gICAgY2FzZSAnZCc6XG4gICAgICByZXR1cm4gbiAqIGQ7XG4gICAgY2FzZSAnaG91cnMnOlxuICAgIGNhc2UgJ2hvdXInOlxuICAgIGNhc2UgJ2hycyc6XG4gICAgY2FzZSAnaHInOlxuICAgIGNhc2UgJ2gnOlxuICAgICAgcmV0dXJuIG4gKiBoO1xuICAgIGNhc2UgJ21pbnV0ZXMnOlxuICAgIGNhc2UgJ21pbnV0ZSc6XG4gICAgY2FzZSAnbWlucyc6XG4gICAgY2FzZSAnbWluJzpcbiAgICBjYXNlICdtJzpcbiAgICAgIHJldHVybiBuICogbTtcbiAgICBjYXNlICdzZWNvbmRzJzpcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgIGNhc2UgJ3NlY3MnOlxuICAgIGNhc2UgJ3NlYyc6XG4gICAgY2FzZSAncyc6XG4gICAgICByZXR1cm4gbiAqIHM7XG4gICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICBjYXNlICdtaWxsaXNlY29uZCc6XG4gICAgY2FzZSAnbXNlY3MnOlxuICAgIGNhc2UgJ21zZWMnOlxuICAgIGNhc2UgJ21zJzpcbiAgICAgIHJldHVybiBuO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG59XG5cbi8qKlxuICogU2hvcnQgZm9ybWF0IGZvciBgbXNgLlxuICpcbiAqIEBwYXJhbSB7TnVtYmVyfSBtc1xuICogQHJldHVybiB7U3RyaW5nfVxuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gZm10U2hvcnQobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gZCkgKyAnZCc7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChtcyAvIGgpICsgJ2gnO1xuICB9XG4gIGlmIChtc0FicyA+PSBtKSB7XG4gICAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBtKSArICdtJztcbiAgfVxuICBpZiAobXNBYnMgPj0gcykge1xuICAgIHJldHVybiBNYXRoLnJvdW5kKG1zIC8gcykgKyAncyc7XG4gIH1cbiAgcmV0dXJuIG1zICsgJ21zJztcbn1cblxuLyoqXG4gKiBMb25nIGZvcm1hdCBmb3IgYG1zYC5cbiAqXG4gKiBAcGFyYW0ge051bWJlcn0gbXNcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGZtdExvbmcobXMpIHtcbiAgdmFyIG1zQWJzID0gTWF0aC5hYnMobXMpO1xuICBpZiAobXNBYnMgPj0gZCkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBkLCAnZGF5Jyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IGgpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgaCwgJ2hvdXInKTtcbiAgfVxuICBpZiAobXNBYnMgPj0gbSkge1xuICAgIHJldHVybiBwbHVyYWwobXMsIG1zQWJzLCBtLCAnbWludXRlJyk7XG4gIH1cbiAgaWYgKG1zQWJzID49IHMpIHtcbiAgICByZXR1cm4gcGx1cmFsKG1zLCBtc0FicywgcywgJ3NlY29uZCcpO1xuICB9XG4gIHJldHVybiBtcyArICcgbXMnO1xufVxuXG4vKipcbiAqIFBsdXJhbGl6YXRpb24gaGVscGVyLlxuICovXG5cbmZ1bmN0aW9uIHBsdXJhbChtcywgbXNBYnMsIG4sIG5hbWUpIHtcbiAgdmFyIGlzUGx1cmFsID0gbXNBYnMgPj0gbiAqIDEuNTtcbiAgcmV0dXJuIE1hdGgucm91bmQobXMgLyBuKSArICcgJyArIG5hbWUgKyAoaXNQbHVyYWwgPyAncycgOiAnJyk7XG59XG4iLCJcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tbW9uIGxvZ2ljIGZvciBib3RoIHRoZSBOb2RlLmpzIGFuZCB3ZWIgYnJvd3NlclxuICogaW1wbGVtZW50YXRpb25zIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5mdW5jdGlvbiBzZXR1cChlbnYpIHtcblx0Y3JlYXRlRGVidWcuZGVidWcgPSBjcmVhdGVEZWJ1Zztcblx0Y3JlYXRlRGVidWcuZGVmYXVsdCA9IGNyZWF0ZURlYnVnO1xuXHRjcmVhdGVEZWJ1Zy5jb2VyY2UgPSBjb2VyY2U7XG5cdGNyZWF0ZURlYnVnLmRpc2FibGUgPSBkaXNhYmxlO1xuXHRjcmVhdGVEZWJ1Zy5lbmFibGUgPSBlbmFibGU7XG5cdGNyZWF0ZURlYnVnLmVuYWJsZWQgPSBlbmFibGVkO1xuXHRjcmVhdGVEZWJ1Zy5odW1hbml6ZSA9IHJlcXVpcmUoJ21zJyk7XG5cdGNyZWF0ZURlYnVnLmRlc3Ryb3kgPSBkZXN0cm95O1xuXG5cdE9iamVjdC5rZXlzKGVudikuZm9yRWFjaChrZXkgPT4ge1xuXHRcdGNyZWF0ZURlYnVnW2tleV0gPSBlbnZba2V5XTtcblx0fSk7XG5cblx0LyoqXG5cdCogVGhlIGN1cnJlbnRseSBhY3RpdmUgZGVidWcgbW9kZSBuYW1lcywgYW5kIG5hbWVzIHRvIHNraXAuXG5cdCovXG5cblx0Y3JlYXRlRGVidWcubmFtZXMgPSBbXTtcblx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHQvKipcblx0KiBNYXAgb2Ygc3BlY2lhbCBcIiVuXCIgaGFuZGxpbmcgZnVuY3Rpb25zLCBmb3IgdGhlIGRlYnVnIFwiZm9ybWF0XCIgYXJndW1lbnQuXG5cdCpcblx0KiBWYWxpZCBrZXkgbmFtZXMgYXJlIGEgc2luZ2xlLCBsb3dlciBvciB1cHBlci1jYXNlIGxldHRlciwgaS5lLiBcIm5cIiBhbmQgXCJOXCIuXG5cdCovXG5cdGNyZWF0ZURlYnVnLmZvcm1hdHRlcnMgPSB7fTtcblxuXHQvKipcblx0KiBTZWxlY3RzIGEgY29sb3IgZm9yIGEgZGVidWcgbmFtZXNwYWNlXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZSBUaGUgbmFtZXNwYWNlIHN0cmluZyBmb3IgdGhlIGZvciB0aGUgZGVidWcgaW5zdGFuY2UgdG8gYmUgY29sb3JlZFxuXHQqIEByZXR1cm4ge051bWJlcnxTdHJpbmd9IEFuIEFOU0kgY29sb3IgY29kZSBmb3IgdGhlIGdpdmVuIG5hbWVzcGFjZVxuXHQqIEBhcGkgcHJpdmF0ZVxuXHQqL1xuXHRmdW5jdGlvbiBzZWxlY3RDb2xvcihuYW1lc3BhY2UpIHtcblx0XHRsZXQgaGFzaCA9IDA7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IG5hbWVzcGFjZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0aGFzaCA9ICgoaGFzaCA8PCA1KSAtIGhhc2gpICsgbmFtZXNwYWNlLmNoYXJDb2RlQXQoaSk7XG5cdFx0XHRoYXNoIHw9IDA7IC8vIENvbnZlcnQgdG8gMzJiaXQgaW50ZWdlclxuXHRcdH1cblxuXHRcdHJldHVybiBjcmVhdGVEZWJ1Zy5jb2xvcnNbTWF0aC5hYnMoaGFzaCkgJSBjcmVhdGVEZWJ1Zy5jb2xvcnMubGVuZ3RoXTtcblx0fVxuXHRjcmVhdGVEZWJ1Zy5zZWxlY3RDb2xvciA9IHNlbGVjdENvbG9yO1xuXG5cdC8qKlxuXHQqIENyZWF0ZSBhIGRlYnVnZ2VyIHdpdGggdGhlIGdpdmVuIGBuYW1lc3BhY2VgLlxuXHQqXG5cdCogQHBhcmFtIHtTdHJpbmd9IG5hbWVzcGFjZVxuXHQqIEByZXR1cm4ge0Z1bmN0aW9ufVxuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGNyZWF0ZURlYnVnKG5hbWVzcGFjZSkge1xuXHRcdGxldCBwcmV2VGltZTtcblx0XHRsZXQgZW5hYmxlT3ZlcnJpZGUgPSBudWxsO1xuXHRcdGxldCBuYW1lc3BhY2VzQ2FjaGU7XG5cdFx0bGV0IGVuYWJsZWRDYWNoZTtcblxuXHRcdGZ1bmN0aW9uIGRlYnVnKC4uLmFyZ3MpIHtcblx0XHRcdC8vIERpc2FibGVkP1xuXHRcdFx0aWYgKCFkZWJ1Zy5lbmFibGVkKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3Qgc2VsZiA9IGRlYnVnO1xuXG5cdFx0XHQvLyBTZXQgYGRpZmZgIHRpbWVzdGFtcFxuXHRcdFx0Y29uc3QgY3VyciA9IE51bWJlcihuZXcgRGF0ZSgpKTtcblx0XHRcdGNvbnN0IG1zID0gY3VyciAtIChwcmV2VGltZSB8fCBjdXJyKTtcblx0XHRcdHNlbGYuZGlmZiA9IG1zO1xuXHRcdFx0c2VsZi5wcmV2ID0gcHJldlRpbWU7XG5cdFx0XHRzZWxmLmN1cnIgPSBjdXJyO1xuXHRcdFx0cHJldlRpbWUgPSBjdXJyO1xuXG5cdFx0XHRhcmdzWzBdID0gY3JlYXRlRGVidWcuY29lcmNlKGFyZ3NbMF0pO1xuXG5cdFx0XHRpZiAodHlwZW9mIGFyZ3NbMF0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdC8vIEFueXRoaW5nIGVsc2UgbGV0J3MgaW5zcGVjdCB3aXRoICVPXG5cdFx0XHRcdGFyZ3MudW5zaGlmdCgnJU8nKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQXBwbHkgYW55IGBmb3JtYXR0ZXJzYCB0cmFuc2Zvcm1hdGlvbnNcblx0XHRcdGxldCBpbmRleCA9IDA7XG5cdFx0XHRhcmdzWzBdID0gYXJnc1swXS5yZXBsYWNlKC8lKFthLXpBLVolXSkvZywgKG1hdGNoLCBmb3JtYXQpID0+IHtcblx0XHRcdFx0Ly8gSWYgd2UgZW5jb3VudGVyIGFuIGVzY2FwZWQgJSB0aGVuIGRvbid0IGluY3JlYXNlIHRoZSBhcnJheSBpbmRleFxuXHRcdFx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdFx0XHRyZXR1cm4gJyUnO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGluZGV4Kys7XG5cdFx0XHRcdGNvbnN0IGZvcm1hdHRlciA9IGNyZWF0ZURlYnVnLmZvcm1hdHRlcnNbZm9ybWF0XTtcblx0XHRcdFx0aWYgKHR5cGVvZiBmb3JtYXR0ZXIgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRjb25zdCB2YWwgPSBhcmdzW2luZGV4XTtcblx0XHRcdFx0XHRtYXRjaCA9IGZvcm1hdHRlci5jYWxsKHNlbGYsIHZhbCk7XG5cblx0XHRcdFx0XHQvLyBOb3cgd2UgbmVlZCB0byByZW1vdmUgYGFyZ3NbaW5kZXhdYCBzaW5jZSBpdCdzIGlubGluZWQgaW4gdGhlIGBmb3JtYXRgXG5cdFx0XHRcdFx0YXJncy5zcGxpY2UoaW5kZXgsIDEpO1xuXHRcdFx0XHRcdGluZGV4LS07XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdFx0fSk7XG5cblx0XHRcdC8vIEFwcGx5IGVudi1zcGVjaWZpYyBmb3JtYXR0aW5nIChjb2xvcnMsIGV0Yy4pXG5cdFx0XHRjcmVhdGVEZWJ1Zy5mb3JtYXRBcmdzLmNhbGwoc2VsZiwgYXJncyk7XG5cblx0XHRcdGNvbnN0IGxvZ0ZuID0gc2VsZi5sb2cgfHwgY3JlYXRlRGVidWcubG9nO1xuXHRcdFx0bG9nRm4uYXBwbHkoc2VsZiwgYXJncyk7XG5cdFx0fVxuXG5cdFx0ZGVidWcubmFtZXNwYWNlID0gbmFtZXNwYWNlO1xuXHRcdGRlYnVnLnVzZUNvbG9ycyA9IGNyZWF0ZURlYnVnLnVzZUNvbG9ycygpO1xuXHRcdGRlYnVnLmNvbG9yID0gY3JlYXRlRGVidWcuc2VsZWN0Q29sb3IobmFtZXNwYWNlKTtcblx0XHRkZWJ1Zy5leHRlbmQgPSBleHRlbmQ7XG5cdFx0ZGVidWcuZGVzdHJveSA9IGNyZWF0ZURlYnVnLmRlc3Ryb3k7IC8vIFhYWCBUZW1wb3JhcnkuIFdpbGwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGRlYnVnLCAnZW5hYmxlZCcsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuXHRcdFx0Z2V0OiAoKSA9PiB7XG5cdFx0XHRcdGlmIChlbmFibGVPdmVycmlkZSAhPT0gbnVsbCkge1xuXHRcdFx0XHRcdHJldHVybiBlbmFibGVPdmVycmlkZTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAobmFtZXNwYWNlc0NhY2hlICE9PSBjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzKSB7XG5cdFx0XHRcdFx0bmFtZXNwYWNlc0NhY2hlID0gY3JlYXRlRGVidWcubmFtZXNwYWNlcztcblx0XHRcdFx0XHRlbmFibGVkQ2FjaGUgPSBjcmVhdGVEZWJ1Zy5lbmFibGVkKG5hbWVzcGFjZSk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZW5hYmxlZENhY2hlO1xuXHRcdFx0fSxcblx0XHRcdHNldDogdiA9PiB7XG5cdFx0XHRcdGVuYWJsZU92ZXJyaWRlID0gdjtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEVudi1zcGVjaWZpYyBpbml0aWFsaXphdGlvbiBsb2dpYyBmb3IgZGVidWcgaW5zdGFuY2VzXG5cdFx0aWYgKHR5cGVvZiBjcmVhdGVEZWJ1Zy5pbml0ID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRjcmVhdGVEZWJ1Zy5pbml0KGRlYnVnKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVidWc7XG5cdH1cblxuXHRmdW5jdGlvbiBleHRlbmQobmFtZXNwYWNlLCBkZWxpbWl0ZXIpIHtcblx0XHRjb25zdCBuZXdEZWJ1ZyA9IGNyZWF0ZURlYnVnKHRoaXMubmFtZXNwYWNlICsgKHR5cGVvZiBkZWxpbWl0ZXIgPT09ICd1bmRlZmluZWQnID8gJzonIDogZGVsaW1pdGVyKSArIG5hbWVzcGFjZSk7XG5cdFx0bmV3RGVidWcubG9nID0gdGhpcy5sb2c7XG5cdFx0cmV0dXJuIG5ld0RlYnVnO1xuXHR9XG5cblx0LyoqXG5cdCogRW5hYmxlcyBhIGRlYnVnIG1vZGUgYnkgbmFtZXNwYWNlcy4gVGhpcyBjYW4gaW5jbHVkZSBtb2Rlc1xuXHQqIHNlcGFyYXRlZCBieSBhIGNvbG9uIGFuZCB3aWxkY2FyZHMuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGVuYWJsZShuYW1lc3BhY2VzKSB7XG5cdFx0Y3JlYXRlRGVidWcuc2F2ZShuYW1lc3BhY2VzKTtcblx0XHRjcmVhdGVEZWJ1Zy5uYW1lc3BhY2VzID0gbmFtZXNwYWNlcztcblxuXHRcdGNyZWF0ZURlYnVnLm5hbWVzID0gW107XG5cdFx0Y3JlYXRlRGVidWcuc2tpcHMgPSBbXTtcblxuXHRcdGxldCBpO1xuXHRcdGNvbnN0IHNwbGl0ID0gKHR5cGVvZiBuYW1lc3BhY2VzID09PSAnc3RyaW5nJyA/IG5hbWVzcGFjZXMgOiAnJykuc3BsaXQoL1tcXHMsXSsvKTtcblx0XHRjb25zdCBsZW4gPSBzcGxpdC5sZW5ndGg7XG5cblx0XHRmb3IgKGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmICghc3BsaXRbaV0pIHtcblx0XHRcdFx0Ly8gaWdub3JlIGVtcHR5IHN0cmluZ3Ncblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdG5hbWVzcGFjZXMgPSBzcGxpdFtpXS5yZXBsYWNlKC9cXCovZywgJy4qPycpO1xuXG5cdFx0XHRpZiAobmFtZXNwYWNlc1swXSA9PT0gJy0nKSB7XG5cdFx0XHRcdGNyZWF0ZURlYnVnLnNraXBzLnB1c2gobmV3IFJlZ0V4cCgnXicgKyBuYW1lc3BhY2VzLnN1YnN0cigxKSArICckJykpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3JlYXRlRGVidWcubmFtZXMucHVzaChuZXcgUmVnRXhwKCdeJyArIG5hbWVzcGFjZXMgKyAnJCcpKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvKipcblx0KiBEaXNhYmxlIGRlYnVnIG91dHB1dC5cblx0KlxuXHQqIEByZXR1cm4ge1N0cmluZ30gbmFtZXNwYWNlc1xuXHQqIEBhcGkgcHVibGljXG5cdCovXG5cdGZ1bmN0aW9uIGRpc2FibGUoKSB7XG5cdFx0Y29uc3QgbmFtZXNwYWNlcyA9IFtcblx0XHRcdC4uLmNyZWF0ZURlYnVnLm5hbWVzLm1hcCh0b05hbWVzcGFjZSksXG5cdFx0XHQuLi5jcmVhdGVEZWJ1Zy5za2lwcy5tYXAodG9OYW1lc3BhY2UpLm1hcChuYW1lc3BhY2UgPT4gJy0nICsgbmFtZXNwYWNlKVxuXHRcdF0uam9pbignLCcpO1xuXHRcdGNyZWF0ZURlYnVnLmVuYWJsZSgnJyk7XG5cdFx0cmV0dXJuIG5hbWVzcGFjZXM7XG5cdH1cblxuXHQvKipcblx0KiBSZXR1cm5zIHRydWUgaWYgdGhlIGdpdmVuIG1vZGUgbmFtZSBpcyBlbmFibGVkLCBmYWxzZSBvdGhlcndpc2UuXG5cdCpcblx0KiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuXHQqIEByZXR1cm4ge0Jvb2xlYW59XG5cdCogQGFwaSBwdWJsaWNcblx0Ki9cblx0ZnVuY3Rpb24gZW5hYmxlZChuYW1lKSB7XG5cdFx0aWYgKG5hbWVbbmFtZS5sZW5ndGggLSAxXSA9PT0gJyonKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHRsZXQgaTtcblx0XHRsZXQgbGVuO1xuXG5cdFx0Zm9yIChpID0gMCwgbGVuID0gY3JlYXRlRGVidWcuc2tpcHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcblx0XHRcdGlmIChjcmVhdGVEZWJ1Zy5za2lwc1tpXS50ZXN0KG5hbWUpKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRmb3IgKGkgPSAwLCBsZW4gPSBjcmVhdGVEZWJ1Zy5uYW1lcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuXHRcdFx0aWYgKGNyZWF0ZURlYnVnLm5hbWVzW2ldLnRlc3QobmFtZSkpIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCogQ29udmVydCByZWdleHAgdG8gbmFtZXNwYWNlXG5cdCpcblx0KiBAcGFyYW0ge1JlZ0V4cH0gcmVneGVwXG5cdCogQHJldHVybiB7U3RyaW5nfSBuYW1lc3BhY2Vcblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gdG9OYW1lc3BhY2UocmVnZXhwKSB7XG5cdFx0cmV0dXJuIHJlZ2V4cC50b1N0cmluZygpXG5cdFx0XHQuc3Vic3RyaW5nKDIsIHJlZ2V4cC50b1N0cmluZygpLmxlbmd0aCAtIDIpXG5cdFx0XHQucmVwbGFjZSgvXFwuXFwqXFw/JC8sICcqJyk7XG5cdH1cblxuXHQvKipcblx0KiBDb2VyY2UgYHZhbGAuXG5cdCpcblx0KiBAcGFyYW0ge01peGVkfSB2YWxcblx0KiBAcmV0dXJuIHtNaXhlZH1cblx0KiBAYXBpIHByaXZhdGVcblx0Ki9cblx0ZnVuY3Rpb24gY29lcmNlKHZhbCkge1xuXHRcdGlmICh2YWwgaW5zdGFuY2VvZiBFcnJvcikge1xuXHRcdFx0cmV0dXJuIHZhbC5zdGFjayB8fCB2YWwubWVzc2FnZTtcblx0XHR9XG5cdFx0cmV0dXJuIHZhbDtcblx0fVxuXG5cdC8qKlxuXHQqIFhYWCBETyBOT1QgVVNFLiBUaGlzIGlzIGEgdGVtcG9yYXJ5IHN0dWIgZnVuY3Rpb24uXG5cdCogWFhYIEl0IFdJTEwgYmUgcmVtb3ZlZCBpbiB0aGUgbmV4dCBtYWpvciByZWxlYXNlLlxuXHQqL1xuXHRmdW5jdGlvbiBkZXN0cm95KCkge1xuXHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHR9XG5cblx0Y3JlYXRlRGVidWcuZW5hYmxlKGNyZWF0ZURlYnVnLmxvYWQoKSk7XG5cblx0cmV0dXJuIGNyZWF0ZURlYnVnO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldHVwO1xuIiwiLyogZXNsaW50LWVudiBicm93c2VyICovXG5cbi8qKlxuICogVGhpcyBpcyB0aGUgd2ViIGJyb3dzZXIgaW1wbGVtZW50YXRpb24gb2YgYGRlYnVnKClgLlxuICovXG5cbmV4cG9ydHMuZm9ybWF0QXJncyA9IGZvcm1hdEFyZ3M7XG5leHBvcnRzLnNhdmUgPSBzYXZlO1xuZXhwb3J0cy5sb2FkID0gbG9hZDtcbmV4cG9ydHMudXNlQ29sb3JzID0gdXNlQ29sb3JzO1xuZXhwb3J0cy5zdG9yYWdlID0gbG9jYWxzdG9yYWdlKCk7XG5leHBvcnRzLmRlc3Ryb3kgPSAoKCkgPT4ge1xuXHRsZXQgd2FybmVkID0gZmFsc2U7XG5cblx0cmV0dXJuICgpID0+IHtcblx0XHRpZiAoIXdhcm5lZCkge1xuXHRcdFx0d2FybmVkID0gdHJ1ZTtcblx0XHRcdGNvbnNvbGUud2FybignSW5zdGFuY2UgbWV0aG9kIGBkZWJ1Zy5kZXN0cm95KClgIGlzIGRlcHJlY2F0ZWQgYW5kIG5vIGxvbmdlciBkb2VzIGFueXRoaW5nLiBJdCB3aWxsIGJlIHJlbW92ZWQgaW4gdGhlIG5leHQgbWFqb3IgdmVyc2lvbiBvZiBgZGVidWdgLicpO1xuXHRcdH1cblx0fTtcbn0pKCk7XG5cbi8qKlxuICogQ29sb3JzLlxuICovXG5cbmV4cG9ydHMuY29sb3JzID0gW1xuXHQnIzAwMDBDQycsXG5cdCcjMDAwMEZGJyxcblx0JyMwMDMzQ0MnLFxuXHQnIzAwMzNGRicsXG5cdCcjMDA2NkNDJyxcblx0JyMwMDY2RkYnLFxuXHQnIzAwOTlDQycsXG5cdCcjMDA5OUZGJyxcblx0JyMwMENDMDAnLFxuXHQnIzAwQ0MzMycsXG5cdCcjMDBDQzY2Jyxcblx0JyMwMENDOTknLFxuXHQnIzAwQ0NDQycsXG5cdCcjMDBDQ0ZGJyxcblx0JyMzMzAwQ0MnLFxuXHQnIzMzMDBGRicsXG5cdCcjMzMzM0NDJyxcblx0JyMzMzMzRkYnLFxuXHQnIzMzNjZDQycsXG5cdCcjMzM2NkZGJyxcblx0JyMzMzk5Q0MnLFxuXHQnIzMzOTlGRicsXG5cdCcjMzNDQzAwJyxcblx0JyMzM0NDMzMnLFxuXHQnIzMzQ0M2NicsXG5cdCcjMzNDQzk5Jyxcblx0JyMzM0NDQ0MnLFxuXHQnIzMzQ0NGRicsXG5cdCcjNjYwMENDJyxcblx0JyM2NjAwRkYnLFxuXHQnIzY2MzNDQycsXG5cdCcjNjYzM0ZGJyxcblx0JyM2NkNDMDAnLFxuXHQnIzY2Q0MzMycsXG5cdCcjOTkwMENDJyxcblx0JyM5OTAwRkYnLFxuXHQnIzk5MzNDQycsXG5cdCcjOTkzM0ZGJyxcblx0JyM5OUNDMDAnLFxuXHQnIzk5Q0MzMycsXG5cdCcjQ0MwMDAwJyxcblx0JyNDQzAwMzMnLFxuXHQnI0NDMDA2NicsXG5cdCcjQ0MwMDk5Jyxcblx0JyNDQzAwQ0MnLFxuXHQnI0NDMDBGRicsXG5cdCcjQ0MzMzAwJyxcblx0JyNDQzMzMzMnLFxuXHQnI0NDMzM2NicsXG5cdCcjQ0MzMzk5Jyxcblx0JyNDQzMzQ0MnLFxuXHQnI0NDMzNGRicsXG5cdCcjQ0M2NjAwJyxcblx0JyNDQzY2MzMnLFxuXHQnI0NDOTkwMCcsXG5cdCcjQ0M5OTMzJyxcblx0JyNDQ0NDMDAnLFxuXHQnI0NDQ0MzMycsXG5cdCcjRkYwMDAwJyxcblx0JyNGRjAwMzMnLFxuXHQnI0ZGMDA2NicsXG5cdCcjRkYwMDk5Jyxcblx0JyNGRjAwQ0MnLFxuXHQnI0ZGMDBGRicsXG5cdCcjRkYzMzAwJyxcblx0JyNGRjMzMzMnLFxuXHQnI0ZGMzM2NicsXG5cdCcjRkYzMzk5Jyxcblx0JyNGRjMzQ0MnLFxuXHQnI0ZGMzNGRicsXG5cdCcjRkY2NjAwJyxcblx0JyNGRjY2MzMnLFxuXHQnI0ZGOTkwMCcsXG5cdCcjRkY5OTMzJyxcblx0JyNGRkNDMDAnLFxuXHQnI0ZGQ0MzMydcbl07XG5cbi8qKlxuICogQ3VycmVudGx5IG9ubHkgV2ViS2l0LWJhc2VkIFdlYiBJbnNwZWN0b3JzLCBGaXJlZm94ID49IHYzMSxcbiAqIGFuZCB0aGUgRmlyZWJ1ZyBleHRlbnNpb24gKGFueSBGaXJlZm94IHZlcnNpb24pIGFyZSBrbm93blxuICogdG8gc3VwcG9ydCBcIiVjXCIgQ1NTIGN1c3RvbWl6YXRpb25zLlxuICpcbiAqIFRPRE86IGFkZCBhIGBsb2NhbFN0b3JhZ2VgIHZhcmlhYmxlIHRvIGV4cGxpY2l0bHkgZW5hYmxlL2Rpc2FibGUgY29sb3JzXG4gKi9cblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNvbXBsZXhpdHlcbmZ1bmN0aW9uIHVzZUNvbG9ycygpIHtcblx0Ly8gTkI6IEluIGFuIEVsZWN0cm9uIHByZWxvYWQgc2NyaXB0LCBkb2N1bWVudCB3aWxsIGJlIGRlZmluZWQgYnV0IG5vdCBmdWxseVxuXHQvLyBpbml0aWFsaXplZC4gU2luY2Ugd2Uga25vdyB3ZSdyZSBpbiBDaHJvbWUsIHdlJ2xsIGp1c3QgZGV0ZWN0IHRoaXMgY2FzZVxuXHQvLyBleHBsaWNpdGx5XG5cdGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJiB3aW5kb3cucHJvY2VzcyAmJiAod2luZG93LnByb2Nlc3MudHlwZSA9PT0gJ3JlbmRlcmVyJyB8fCB3aW5kb3cucHJvY2Vzcy5fX253anMpKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHQvLyBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSBkbyBub3Qgc3VwcG9ydCBjb2xvcnMuXG5cdGlmICh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvKGVkZ2V8dHJpZGVudClcXC8oXFxkKykvKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdC8vIElzIHdlYmtpdD8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTY0NTk2MDYvMzc2NzczXG5cdC8vIGRvY3VtZW50IGlzIHVuZGVmaW5lZCBpbiByZWFjdC1uYXRpdmU6IGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC1uYXRpdmUvcHVsbC8xNjMyXG5cdHJldHVybiAodHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5XZWJraXRBcHBlYXJhbmNlKSB8fFxuXHRcdC8vIElzIGZpcmVidWc/IGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzM5ODEyMC8zNzY3NzNcblx0XHQodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmNvbnNvbGUgJiYgKHdpbmRvdy5jb25zb2xlLmZpcmVidWcgfHwgKHdpbmRvdy5jb25zb2xlLmV4Y2VwdGlvbiAmJiB3aW5kb3cuY29uc29sZS50YWJsZSkpKSB8fFxuXHRcdC8vIElzIGZpcmVmb3ggPj0gdjMxP1xuXHRcdC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvVG9vbHMvV2ViX0NvbnNvbGUjU3R5bGluZ19tZXNzYWdlc1xuXHRcdCh0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiBuYXZpZ2F0b3IudXNlckFnZW50ICYmIG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5tYXRjaCgvZmlyZWZveFxcLyhcXGQrKS8pICYmIHBhcnNlSW50KFJlZ0V4cC4kMSwgMTApID49IDMxKSB8fFxuXHRcdC8vIERvdWJsZSBjaGVjayB3ZWJraXQgaW4gdXNlckFnZW50IGp1c3QgaW4gY2FzZSB3ZSBhcmUgaW4gYSB3b3JrZXJcblx0XHQodHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgbmF2aWdhdG9yLnVzZXJBZ2VudCAmJiBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCkubWF0Y2goL2FwcGxld2Via2l0XFwvKFxcZCspLykpO1xufVxuXG4vKipcbiAqIENvbG9yaXplIGxvZyBhcmd1bWVudHMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRhcmdzWzBdID0gKHRoaXMudXNlQ29sb3JzID8gJyVjJyA6ICcnKSArXG5cdFx0dGhpcy5uYW1lc3BhY2UgK1xuXHRcdCh0aGlzLnVzZUNvbG9ycyA/ICcgJWMnIDogJyAnKSArXG5cdFx0YXJnc1swXSArXG5cdFx0KHRoaXMudXNlQ29sb3JzID8gJyVjICcgOiAnICcpICtcblx0XHQnKycgKyBtb2R1bGUuZXhwb3J0cy5odW1hbml6ZSh0aGlzLmRpZmYpO1xuXG5cdGlmICghdGhpcy51c2VDb2xvcnMpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjID0gJ2NvbG9yOiAnICsgdGhpcy5jb2xvcjtcblx0YXJncy5zcGxpY2UoMSwgMCwgYywgJ2NvbG9yOiBpbmhlcml0Jyk7XG5cblx0Ly8gVGhlIGZpbmFsIFwiJWNcIiBpcyBzb21ld2hhdCB0cmlja3ksIGJlY2F1c2UgdGhlcmUgY291bGQgYmUgb3RoZXJcblx0Ly8gYXJndW1lbnRzIHBhc3NlZCBlaXRoZXIgYmVmb3JlIG9yIGFmdGVyIHRoZSAlYywgc28gd2UgbmVlZCB0b1xuXHQvLyBmaWd1cmUgb3V0IHRoZSBjb3JyZWN0IGluZGV4IHRvIGluc2VydCB0aGUgQ1NTIGludG9cblx0bGV0IGluZGV4ID0gMDtcblx0bGV0IGxhc3RDID0gMDtcblx0YXJnc1swXS5yZXBsYWNlKC8lW2EtekEtWiVdL2csIG1hdGNoID0+IHtcblx0XHRpZiAobWF0Y2ggPT09ICclJScpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXgrKztcblx0XHRpZiAobWF0Y2ggPT09ICclYycpIHtcblx0XHRcdC8vIFdlIG9ubHkgYXJlIGludGVyZXN0ZWQgaW4gdGhlICpsYXN0KiAlY1xuXHRcdFx0Ly8gKHRoZSB1c2VyIG1heSBoYXZlIHByb3ZpZGVkIHRoZWlyIG93bilcblx0XHRcdGxhc3RDID0gaW5kZXg7XG5cdFx0fVxuXHR9KTtcblxuXHRhcmdzLnNwbGljZShsYXN0QywgMCwgYyk7XG59XG5cbi8qKlxuICogSW52b2tlcyBgY29uc29sZS5kZWJ1ZygpYCB3aGVuIGF2YWlsYWJsZS5cbiAqIE5vLW9wIHdoZW4gYGNvbnNvbGUuZGVidWdgIGlzIG5vdCBhIFwiZnVuY3Rpb25cIi5cbiAqIElmIGBjb25zb2xlLmRlYnVnYCBpcyBub3QgYXZhaWxhYmxlLCBmYWxscyBiYWNrXG4gKiB0byBgY29uc29sZS5sb2dgLlxuICpcbiAqIEBhcGkgcHVibGljXG4gKi9cbmV4cG9ydHMubG9nID0gY29uc29sZS5kZWJ1ZyB8fCBjb25zb2xlLmxvZyB8fCAoKCkgPT4ge30pO1xuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdHRyeSB7XG5cdFx0aWYgKG5hbWVzcGFjZXMpIHtcblx0XHRcdGV4cG9ydHMuc3RvcmFnZS5zZXRJdGVtKCdkZWJ1ZycsIG5hbWVzcGFjZXMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRleHBvcnRzLnN0b3JhZ2UucmVtb3ZlSXRlbSgnZGVidWcnKTtcblx0XHR9XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Ly8gU3dhbGxvd1xuXHRcdC8vIFhYWCAoQFFpeC0pIHNob3VsZCB3ZSBiZSBsb2dnaW5nIHRoZXNlP1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cbmZ1bmN0aW9uIGxvYWQoKSB7XG5cdGxldCByO1xuXHR0cnkge1xuXHRcdHIgPSBleHBvcnRzLnN0b3JhZ2UuZ2V0SXRlbSgnZGVidWcnKTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHQvLyBTd2FsbG93XG5cdFx0Ly8gWFhYIChAUWl4LSkgc2hvdWxkIHdlIGJlIGxvZ2dpbmcgdGhlc2U/XG5cdH1cblxuXHQvLyBJZiBkZWJ1ZyBpc24ndCBzZXQgaW4gTFMsIGFuZCB3ZSdyZSBpbiBFbGVjdHJvbiwgdHJ5IHRvIGxvYWQgJERFQlVHXG5cdGlmICghciAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ2VudicgaW4gcHJvY2Vzcykge1xuXHRcdHIgPSBwcm9jZXNzLmVudi5ERUJVRztcblx0fVxuXG5cdHJldHVybiByO1xufVxuXG4vKipcbiAqIExvY2Fsc3RvcmFnZSBhdHRlbXB0cyB0byByZXR1cm4gdGhlIGxvY2Fsc3RvcmFnZS5cbiAqXG4gKiBUaGlzIGlzIG5lY2Vzc2FyeSBiZWNhdXNlIHNhZmFyaSB0aHJvd3NcbiAqIHdoZW4gYSB1c2VyIGRpc2FibGVzIGNvb2tpZXMvbG9jYWxzdG9yYWdlXG4gKiBhbmQgeW91IGF0dGVtcHQgdG8gYWNjZXNzIGl0LlxuICpcbiAqIEByZXR1cm4ge0xvY2FsU3RvcmFnZX1cbiAqIEBhcGkgcHJpdmF0ZVxuICovXG5cbmZ1bmN0aW9uIGxvY2Fsc3RvcmFnZSgpIHtcblx0dHJ5IHtcblx0XHQvLyBUVk1MS2l0IChBcHBsZSBUViBKUyBSdW50aW1lKSBkb2VzIG5vdCBoYXZlIGEgd2luZG93IG9iamVjdCwganVzdCBsb2NhbFN0b3JhZ2UgaW4gdGhlIGdsb2JhbCBjb250ZXh0XG5cdFx0Ly8gVGhlIEJyb3dzZXIgYWxzbyBoYXMgbG9jYWxTdG9yYWdlIGluIHRoZSBnbG9iYWwgY29udGV4dC5cblx0XHRyZXR1cm4gbG9jYWxTdG9yYWdlO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdC8vIFN3YWxsb3dcblx0XHQvLyBYWFggKEBRaXgtKSBzaG91bGQgd2UgYmUgbG9nZ2luZyB0aGVzZT9cblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlaiB0byBgSlNPTi5zdHJpbmdpZnkoKWAsIHNpbmNlIG5vIFdlYiBJbnNwZWN0b3JzIGRvIHRoYXQgYnkgZGVmYXVsdC5cbiAqL1xuXG5mb3JtYXR0ZXJzLmogPSBmdW5jdGlvbiAodikge1xuXHR0cnkge1xuXHRcdHJldHVybiBKU09OLnN0cmluZ2lmeSh2KTtcblx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRyZXR1cm4gJ1tVbmV4cGVjdGVkSlNPTlBhcnNlRXJyb3JdOiAnICsgZXJyb3IubWVzc2FnZTtcblx0fVxufTtcbiIsIid1c2Ugc3RyaWN0JztcblxubW9kdWxlLmV4cG9ydHMgPSAoZmxhZywgYXJndiA9IHByb2Nlc3MuYXJndikgPT4ge1xuXHRjb25zdCBwcmVmaXggPSBmbGFnLnN0YXJ0c1dpdGgoJy0nKSA/ICcnIDogKGZsYWcubGVuZ3RoID09PSAxID8gJy0nIDogJy0tJyk7XG5cdGNvbnN0IHBvc2l0aW9uID0gYXJndi5pbmRleE9mKHByZWZpeCArIGZsYWcpO1xuXHRjb25zdCB0ZXJtaW5hdG9yUG9zaXRpb24gPSBhcmd2LmluZGV4T2YoJy0tJyk7XG5cdHJldHVybiBwb3NpdGlvbiAhPT0gLTEgJiYgKHRlcm1pbmF0b3JQb3NpdGlvbiA9PT0gLTEgfHwgcG9zaXRpb24gPCB0ZXJtaW5hdG9yUG9zaXRpb24pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xuY29uc3QgaGFzRmxhZyA9IHJlcXVpcmUoJ2hhcy1mbGFnJyk7XG5cbmNvbnN0IHtlbnZ9ID0gcHJvY2VzcztcblxubGV0IGZvcmNlQ29sb3I7XG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fFxuXHRoYXNGbGFnKCduby1jb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1mYWxzZScpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPW5ldmVyJykpIHtcblx0Zm9yY2VDb2xvciA9IDA7XG59IGVsc2UgaWYgKGhhc0ZsYWcoJ2NvbG9yJykgfHxcblx0aGFzRmxhZygnY29sb3JzJykgfHxcblx0aGFzRmxhZygnY29sb3I9dHJ1ZScpIHx8XG5cdGhhc0ZsYWcoJ2NvbG9yPWFsd2F5cycpKSB7XG5cdGZvcmNlQ29sb3IgPSAxO1xufVxuXG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcblx0aWYgKGVudi5GT1JDRV9DT0xPUiA9PT0gJ3RydWUnKSB7XG5cdFx0Zm9yY2VDb2xvciA9IDE7XG5cdH0gZWxzZSBpZiAoZW52LkZPUkNFX0NPTE9SID09PSAnZmFsc2UnKSB7XG5cdFx0Zm9yY2VDb2xvciA9IDA7XG5cdH0gZWxzZSB7XG5cdFx0Zm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDAgPyAxIDogTWF0aC5taW4ocGFyc2VJbnQoZW52LkZPUkNFX0NPTE9SLCAxMCksIDMpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldmVsKGxldmVsKSB7XG5cdGlmIChsZXZlbCA9PT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bGV2ZWwsXG5cdFx0aGFzQmFzaWM6IHRydWUsXG5cdFx0aGFzMjU2OiBsZXZlbCA+PSAyLFxuXHRcdGhhczE2bTogbGV2ZWwgPj0gM1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0NvbG9yKGhhdmVTdHJlYW0sIHN0cmVhbUlzVFRZKSB7XG5cdGlmIChmb3JjZUNvbG9yID09PSAwKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MTZtJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj1mdWxsJykgfHxcblx0XHRoYXNGbGFnKCdjb2xvcj10cnVlY29sb3InKSkge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKGhhc0ZsYWcoJ2NvbG9yPTI1NicpKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoaGF2ZVN0cmVhbSAmJiAhc3RyZWFtSXNUVFkgJiYgZm9yY2VDb2xvciA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBtaW4gPSBmb3JjZUNvbG9yIHx8IDA7XG5cblx0aWYgKGVudi5URVJNID09PSAnZHVtYicpIHtcblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcblx0XHQvLyBXaW5kb3dzIDEwIGJ1aWxkIDEwNTg2IGlzIHRoZSBmaXJzdCBXaW5kb3dzIHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAyNTYgY29sb3JzLlxuXHRcdC8vIFdpbmRvd3MgMTAgYnVpbGQgMTQ5MzEgaXMgdGhlIGZpcnN0IHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAxNm0vVHJ1ZUNvbG9yLlxuXHRcdGNvbnN0IG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuXHRcdGlmIChcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMF0pID49IDEwICYmXG5cdFx0XHROdW1iZXIob3NSZWxlYXNlWzJdKSA+PSAxMDU4NlxuXHRcdCkge1xuXHRcdFx0cmV0dXJuIE51bWJlcihvc1JlbGVhc2VbMl0pID49IDE0OTMxID8gMyA6IDI7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NJJyBpbiBlbnYpIHtcblx0XHRpZiAoWydUUkFWSVMnLCAnQ0lSQ0xFQ0knLCAnQVBQVkVZT1InLCAnR0lUTEFCX0NJJywgJ0dJVEhVQl9BQ1RJT05TJywgJ0JVSUxES0lURSddLnNvbWUoc2lnbiA9PiBzaWduIGluIGVudikgfHwgZW52LkNJX05BTUUgPT09ICdjb2Rlc2hpcCcpIHtcblx0XHRcdHJldHVybiAxO1xuXHRcdH1cblxuXHRcdHJldHVybiBtaW47XG5cdH1cblxuXHRpZiAoJ1RFQU1DSVRZX1ZFUlNJT04nIGluIGVudikge1xuXHRcdHJldHVybiAvXig5XFwuKDAqWzEtOV1cXGQqKVxcLnxcXGR7Mix9XFwuKS8udGVzdChlbnYuVEVBTUNJVFlfVkVSU0lPTikgPyAxIDogMDtcblx0fVxuXG5cdGlmIChlbnYuQ09MT1JURVJNID09PSAndHJ1ZWNvbG9yJykge1xuXHRcdHJldHVybiAzO1xuXHR9XG5cblx0aWYgKCdURVJNX1BST0dSQU0nIGluIGVudikge1xuXHRcdGNvbnN0IHZlcnNpb24gPSBwYXJzZUludCgoZW52LlRFUk1fUFJPR1JBTV9WRVJTSU9OIHx8ICcnKS5zcGxpdCgnLicpWzBdLCAxMCk7XG5cblx0XHRzd2l0Y2ggKGVudi5URVJNX1BST0dSQU0pIHtcblx0XHRcdGNhc2UgJ2lUZXJtLmFwcCc6XG5cdFx0XHRcdHJldHVybiB2ZXJzaW9uID49IDMgPyAzIDogMjtcblx0XHRcdGNhc2UgJ0FwcGxlX1Rlcm1pbmFsJzpcblx0XHRcdFx0cmV0dXJuIDI7XG5cdFx0XHQvLyBObyBkZWZhdWx0XG5cdFx0fVxuXHR9XG5cblx0aWYgKC8tMjU2KGNvbG9yKT8kL2kudGVzdChlbnYuVEVSTSkpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmICgvXnNjcmVlbnxeeHRlcm18XnZ0MTAwfF52dDIyMHxecnh2dHxjb2xvcnxhbnNpfGN5Z3dpbnxsaW51eC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRpZiAoJ0NPTE9SVEVSTScgaW4gZW52KSB7XG5cdFx0cmV0dXJuIDE7XG5cdH1cblxuXHRyZXR1cm4gbWluO1xufVxuXG5mdW5jdGlvbiBnZXRTdXBwb3J0TGV2ZWwoc3RyZWFtKSB7XG5cdGNvbnN0IGxldmVsID0gc3VwcG9ydHNDb2xvcihzdHJlYW0sIHN0cmVhbSAmJiBzdHJlYW0uaXNUVFkpO1xuXHRyZXR1cm4gdHJhbnNsYXRlTGV2ZWwobGV2ZWwpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0c3VwcG9ydHNDb2xvcjogZ2V0U3VwcG9ydExldmVsLFxuXHRzdGRvdXQ6IHRyYW5zbGF0ZUxldmVsKHN1cHBvcnRzQ29sb3IodHJ1ZSwgdHR5LmlzYXR0eSgxKSkpLFxuXHRzdGRlcnI6IHRyYW5zbGF0ZUxldmVsKHN1cHBvcnRzQ29sb3IodHJ1ZSwgdHR5LmlzYXR0eSgyKSkpXG59O1xuIiwiLyoqXG4gKiBNb2R1bGUgZGVwZW5kZW5jaWVzLlxuICovXG5cbmNvbnN0IHR0eSA9IHJlcXVpcmUoJ3R0eScpO1xuY29uc3QgdXRpbCA9IHJlcXVpcmUoJ3V0aWwnKTtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBOb2RlLmpzIGltcGxlbWVudGF0aW9uIG9mIGBkZWJ1ZygpYC5cbiAqL1xuXG5leHBvcnRzLmluaXQgPSBpbml0O1xuZXhwb3J0cy5sb2cgPSBsb2c7XG5leHBvcnRzLmZvcm1hdEFyZ3MgPSBmb3JtYXRBcmdzO1xuZXhwb3J0cy5zYXZlID0gc2F2ZTtcbmV4cG9ydHMubG9hZCA9IGxvYWQ7XG5leHBvcnRzLnVzZUNvbG9ycyA9IHVzZUNvbG9ycztcbmV4cG9ydHMuZGVzdHJveSA9IHV0aWwuZGVwcmVjYXRlKFxuXHQoKSA9PiB7fSxcblx0J0luc3RhbmNlIG1ldGhvZCBgZGVidWcuZGVzdHJveSgpYCBpcyBkZXByZWNhdGVkIGFuZCBubyBsb25nZXIgZG9lcyBhbnl0aGluZy4gSXQgd2lsbCBiZSByZW1vdmVkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24gb2YgYGRlYnVnYC4nXG4pO1xuXG4vKipcbiAqIENvbG9ycy5cbiAqL1xuXG5leHBvcnRzLmNvbG9ycyA9IFs2LCAyLCAzLCA0LCA1LCAxXTtcblxudHJ5IHtcblx0Ly8gT3B0aW9uYWwgZGVwZW5kZW5jeSAoYXMgaW4sIGRvZXNuJ3QgbmVlZCB0byBiZSBpbnN0YWxsZWQsIE5PVCBsaWtlIG9wdGlvbmFsRGVwZW5kZW5jaWVzIGluIHBhY2thZ2UuanNvbilcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1leHRyYW5lb3VzLWRlcGVuZGVuY2llc1xuXHRjb25zdCBzdXBwb3J0c0NvbG9yID0gcmVxdWlyZSgnc3VwcG9ydHMtY29sb3InKTtcblxuXHRpZiAoc3VwcG9ydHNDb2xvciAmJiAoc3VwcG9ydHNDb2xvci5zdGRlcnIgfHwgc3VwcG9ydHNDb2xvcikubGV2ZWwgPj0gMikge1xuXHRcdGV4cG9ydHMuY29sb3JzID0gW1xuXHRcdFx0MjAsXG5cdFx0XHQyMSxcblx0XHRcdDI2LFxuXHRcdFx0MjcsXG5cdFx0XHQzMixcblx0XHRcdDMzLFxuXHRcdFx0MzgsXG5cdFx0XHQzOSxcblx0XHRcdDQwLFxuXHRcdFx0NDEsXG5cdFx0XHQ0Mixcblx0XHRcdDQzLFxuXHRcdFx0NDQsXG5cdFx0XHQ0NSxcblx0XHRcdDU2LFxuXHRcdFx0NTcsXG5cdFx0XHQ2Mixcblx0XHRcdDYzLFxuXHRcdFx0NjgsXG5cdFx0XHQ2OSxcblx0XHRcdDc0LFxuXHRcdFx0NzUsXG5cdFx0XHQ3Nixcblx0XHRcdDc3LFxuXHRcdFx0NzgsXG5cdFx0XHQ3OSxcblx0XHRcdDgwLFxuXHRcdFx0ODEsXG5cdFx0XHQ5Mixcblx0XHRcdDkzLFxuXHRcdFx0OTgsXG5cdFx0XHQ5OSxcblx0XHRcdDExMixcblx0XHRcdDExMyxcblx0XHRcdDEyOCxcblx0XHRcdDEyOSxcblx0XHRcdDEzNCxcblx0XHRcdDEzNSxcblx0XHRcdDE0OCxcblx0XHRcdDE0OSxcblx0XHRcdDE2MCxcblx0XHRcdDE2MSxcblx0XHRcdDE2Mixcblx0XHRcdDE2Myxcblx0XHRcdDE2NCxcblx0XHRcdDE2NSxcblx0XHRcdDE2Nixcblx0XHRcdDE2Nyxcblx0XHRcdDE2OCxcblx0XHRcdDE2OSxcblx0XHRcdDE3MCxcblx0XHRcdDE3MSxcblx0XHRcdDE3Mixcblx0XHRcdDE3Myxcblx0XHRcdDE3OCxcblx0XHRcdDE3OSxcblx0XHRcdDE4NCxcblx0XHRcdDE4NSxcblx0XHRcdDE5Nixcblx0XHRcdDE5Nyxcblx0XHRcdDE5OCxcblx0XHRcdDE5OSxcblx0XHRcdDIwMCxcblx0XHRcdDIwMSxcblx0XHRcdDIwMixcblx0XHRcdDIwMyxcblx0XHRcdDIwNCxcblx0XHRcdDIwNSxcblx0XHRcdDIwNixcblx0XHRcdDIwNyxcblx0XHRcdDIwOCxcblx0XHRcdDIwOSxcblx0XHRcdDIxNCxcblx0XHRcdDIxNSxcblx0XHRcdDIyMCxcblx0XHRcdDIyMVxuXHRcdF07XG5cdH1cbn0gY2F0Y2ggKGVycm9yKSB7XG5cdC8vIFN3YWxsb3cgLSB3ZSBvbmx5IGNhcmUgaWYgYHN1cHBvcnRzLWNvbG9yYCBpcyBhdmFpbGFibGU7IGl0IGRvZXNuJ3QgaGF2ZSB0byBiZS5cbn1cblxuLyoqXG4gKiBCdWlsZCB1cCB0aGUgZGVmYXVsdCBgaW5zcGVjdE9wdHNgIG9iamVjdCBmcm9tIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMuXG4gKlxuICogICAkIERFQlVHX0NPTE9SUz1ubyBERUJVR19ERVBUSD0xMCBERUJVR19TSE9XX0hJRERFTj1lbmFibGVkIG5vZGUgc2NyaXB0LmpzXG4gKi9cblxuZXhwb3J0cy5pbnNwZWN0T3B0cyA9IE9iamVjdC5rZXlzKHByb2Nlc3MuZW52KS5maWx0ZXIoa2V5ID0+IHtcblx0cmV0dXJuIC9eZGVidWdfL2kudGVzdChrZXkpO1xufSkucmVkdWNlKChvYmosIGtleSkgPT4ge1xuXHQvLyBDYW1lbC1jYXNlXG5cdGNvbnN0IHByb3AgPSBrZXlcblx0XHQuc3Vic3RyaW5nKDYpXG5cdFx0LnRvTG93ZXJDYXNlKClcblx0XHQucmVwbGFjZSgvXyhbYS16XSkvZywgKF8sIGspID0+IHtcblx0XHRcdHJldHVybiBrLnRvVXBwZXJDYXNlKCk7XG5cdFx0fSk7XG5cblx0Ly8gQ29lcmNlIHN0cmluZyB2YWx1ZSBpbnRvIEpTIHZhbHVlXG5cdGxldCB2YWwgPSBwcm9jZXNzLmVudltrZXldO1xuXHRpZiAoL14oeWVzfG9ufHRydWV8ZW5hYmxlZCkkL2kudGVzdCh2YWwpKSB7XG5cdFx0dmFsID0gdHJ1ZTtcblx0fSBlbHNlIGlmICgvXihub3xvZmZ8ZmFsc2V8ZGlzYWJsZWQpJC9pLnRlc3QodmFsKSkge1xuXHRcdHZhbCA9IGZhbHNlO1xuXHR9IGVsc2UgaWYgKHZhbCA9PT0gJ251bGwnKSB7XG5cdFx0dmFsID0gbnVsbDtcblx0fSBlbHNlIHtcblx0XHR2YWwgPSBOdW1iZXIodmFsKTtcblx0fVxuXG5cdG9ialtwcm9wXSA9IHZhbDtcblx0cmV0dXJuIG9iajtcbn0sIHt9KTtcblxuLyoqXG4gKiBJcyBzdGRvdXQgYSBUVFk/IENvbG9yZWQgb3V0cHV0IGlzIGVuYWJsZWQgd2hlbiBgdHJ1ZWAuXG4gKi9cblxuZnVuY3Rpb24gdXNlQ29sb3JzKCkge1xuXHRyZXR1cm4gJ2NvbG9ycycgaW4gZXhwb3J0cy5pbnNwZWN0T3B0cyA/XG5cdFx0Qm9vbGVhbihleHBvcnRzLmluc3BlY3RPcHRzLmNvbG9ycykgOlxuXHRcdHR0eS5pc2F0dHkocHJvY2Vzcy5zdGRlcnIuZmQpO1xufVxuXG4vKipcbiAqIEFkZHMgQU5TSSBjb2xvciBlc2NhcGUgY29kZXMgaWYgZW5hYmxlZC5cbiAqXG4gKiBAYXBpIHB1YmxpY1xuICovXG5cbmZ1bmN0aW9uIGZvcm1hdEFyZ3MoYXJncykge1xuXHRjb25zdCB7bmFtZXNwYWNlOiBuYW1lLCB1c2VDb2xvcnN9ID0gdGhpcztcblxuXHRpZiAodXNlQ29sb3JzKSB7XG5cdFx0Y29uc3QgYyA9IHRoaXMuY29sb3I7XG5cdFx0Y29uc3QgY29sb3JDb2RlID0gJ1xcdTAwMUJbMycgKyAoYyA8IDggPyBjIDogJzg7NTsnICsgYyk7XG5cdFx0Y29uc3QgcHJlZml4ID0gYCAgJHtjb2xvckNvZGV9OzFtJHtuYW1lfSBcXHUwMDFCWzBtYDtcblxuXHRcdGFyZ3NbMF0gPSBwcmVmaXggKyBhcmdzWzBdLnNwbGl0KCdcXG4nKS5qb2luKCdcXG4nICsgcHJlZml4KTtcblx0XHRhcmdzLnB1c2goY29sb3JDb2RlICsgJ20rJyArIG1vZHVsZS5leHBvcnRzLmh1bWFuaXplKHRoaXMuZGlmZikgKyAnXFx1MDAxQlswbScpO1xuXHR9IGVsc2Uge1xuXHRcdGFyZ3NbMF0gPSBnZXREYXRlKCkgKyBuYW1lICsgJyAnICsgYXJnc1swXTtcblx0fVxufVxuXG5mdW5jdGlvbiBnZXREYXRlKCkge1xuXHRpZiAoZXhwb3J0cy5pbnNwZWN0T3B0cy5oaWRlRGF0ZSkge1xuXHRcdHJldHVybiAnJztcblx0fVxuXHRyZXR1cm4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpICsgJyAnO1xufVxuXG4vKipcbiAqIEludm9rZXMgYHV0aWwuZm9ybWF0KClgIHdpdGggdGhlIHNwZWNpZmllZCBhcmd1bWVudHMgYW5kIHdyaXRlcyB0byBzdGRlcnIuXG4gKi9cblxuZnVuY3Rpb24gbG9nKC4uLmFyZ3MpIHtcblx0cmV0dXJuIHByb2Nlc3Muc3RkZXJyLndyaXRlKHV0aWwuZm9ybWF0KC4uLmFyZ3MpICsgJ1xcbicpO1xufVxuXG4vKipcbiAqIFNhdmUgYG5hbWVzcGFjZXNgLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lc3BhY2VzXG4gKiBAYXBpIHByaXZhdGVcbiAqL1xuZnVuY3Rpb24gc2F2ZShuYW1lc3BhY2VzKSB7XG5cdGlmIChuYW1lc3BhY2VzKSB7XG5cdFx0cHJvY2Vzcy5lbnYuREVCVUcgPSBuYW1lc3BhY2VzO1xuXHR9IGVsc2Uge1xuXHRcdC8vIElmIHlvdSBzZXQgYSBwcm9jZXNzLmVudiBmaWVsZCB0byBudWxsIG9yIHVuZGVmaW5lZCwgaXQgZ2V0cyBjYXN0IHRvIHRoZVxuXHRcdC8vIHN0cmluZyAnbnVsbCcgb3IgJ3VuZGVmaW5lZCcuIEp1c3QgZGVsZXRlIGluc3RlYWQuXG5cdFx0ZGVsZXRlIHByb2Nlc3MuZW52LkRFQlVHO1xuXHR9XG59XG5cbi8qKlxuICogTG9hZCBgbmFtZXNwYWNlc2AuXG4gKlxuICogQHJldHVybiB7U3RyaW5nfSByZXR1cm5zIHRoZSBwcmV2aW91c2x5IHBlcnNpc3RlZCBkZWJ1ZyBtb2Rlc1xuICogQGFwaSBwcml2YXRlXG4gKi9cblxuZnVuY3Rpb24gbG9hZCgpIHtcblx0cmV0dXJuIHByb2Nlc3MuZW52LkRFQlVHO1xufVxuXG4vKipcbiAqIEluaXQgbG9naWMgZm9yIGBkZWJ1Z2AgaW5zdGFuY2VzLlxuICpcbiAqIENyZWF0ZSBhIG5ldyBgaW5zcGVjdE9wdHNgIG9iamVjdCBpbiBjYXNlIGB1c2VDb2xvcnNgIGlzIHNldFxuICogZGlmZmVyZW50bHkgZm9yIGEgcGFydGljdWxhciBgZGVidWdgIGluc3RhbmNlLlxuICovXG5cbmZ1bmN0aW9uIGluaXQoZGVidWcpIHtcblx0ZGVidWcuaW5zcGVjdE9wdHMgPSB7fTtcblxuXHRjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoZXhwb3J0cy5pbnNwZWN0T3B0cyk7XG5cdGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuXHRcdGRlYnVnLmluc3BlY3RPcHRzW2tleXNbaV1dID0gZXhwb3J0cy5pbnNwZWN0T3B0c1trZXlzW2ldXTtcblx0fVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vY29tbW9uJykoZXhwb3J0cyk7XG5cbmNvbnN0IHtmb3JtYXR0ZXJzfSA9IG1vZHVsZS5leHBvcnRzO1xuXG4vKipcbiAqIE1hcCAlbyB0byBgdXRpbC5pbnNwZWN0KClgLCBhbGwgb24gYSBzaW5nbGUgbGluZS5cbiAqL1xuXG5mb3JtYXR0ZXJzLm8gPSBmdW5jdGlvbiAodikge1xuXHR0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXHRyZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpXG5cdFx0LnNwbGl0KCdcXG4nKVxuXHRcdC5tYXAoc3RyID0+IHN0ci50cmltKCkpXG5cdFx0LmpvaW4oJyAnKTtcbn07XG5cbi8qKlxuICogTWFwICVPIHRvIGB1dGlsLmluc3BlY3QoKWAsIGFsbG93aW5nIG11bHRpcGxlIGxpbmVzIGlmIG5lZWRlZC5cbiAqL1xuXG5mb3JtYXR0ZXJzLk8gPSBmdW5jdGlvbiAodikge1xuXHR0aGlzLmluc3BlY3RPcHRzLmNvbG9ycyA9IHRoaXMudXNlQ29sb3JzO1xuXHRyZXR1cm4gdXRpbC5pbnNwZWN0KHYsIHRoaXMuaW5zcGVjdE9wdHMpO1xufTtcbiIsIi8qKlxuICogRGV0ZWN0IEVsZWN0cm9uIHJlbmRlcmVyIC8gbndqcyBwcm9jZXNzLCB3aGljaCBpcyBub2RlLCBidXQgd2Ugc2hvdWxkXG4gKiB0cmVhdCBhcyBhIGJyb3dzZXIuXG4gKi9cblxuaWYgKHR5cGVvZiBwcm9jZXNzID09PSAndW5kZWZpbmVkJyB8fCBwcm9jZXNzLnR5cGUgPT09ICdyZW5kZXJlcicgfHwgcHJvY2Vzcy5icm93c2VyID09PSB0cnVlIHx8IHByb2Nlc3MuX19ud2pzKSB7XG5cdG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9icm93c2VyLmpzJyk7XG59IGVsc2Uge1xuXHRtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbm9kZS5qcycpO1xufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCBmc18xID0gcmVxdWlyZShcImZzXCIpO1xuY29uc3QgZGVidWdfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZGVidWdcIikpO1xuY29uc3QgbG9nID0gZGVidWdfMS5kZWZhdWx0KCdAa3dzaXRlcy9maWxlLWV4aXN0cycpO1xuZnVuY3Rpb24gY2hlY2socGF0aCwgaXNGaWxlLCBpc0RpcmVjdG9yeSkge1xuICAgIGxvZyhgY2hlY2tpbmcgJXNgLCBwYXRoKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzdGF0ID0gZnNfMS5zdGF0U3luYyhwYXRoKTtcbiAgICAgICAgaWYgKHN0YXQuaXNGaWxlKCkgJiYgaXNGaWxlKSB7XG4gICAgICAgICAgICBsb2coYFtPS10gcGF0aCByZXByZXNlbnRzIGEgZmlsZWApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0YXQuaXNEaXJlY3RvcnkoKSAmJiBpc0RpcmVjdG9yeSkge1xuICAgICAgICAgICAgbG9nKGBbT0tdIHBhdGggcmVwcmVzZW50cyBhIGRpcmVjdG9yeWApO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbG9nKGBbRkFJTF0gcGF0aCByZXByZXNlbnRzIHNvbWV0aGluZyBvdGhlciB0aGFuIGEgZmlsZSBvciBkaXJlY3RvcnlgKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZS5jb2RlID09PSAnRU5PRU5UJykge1xuICAgICAgICAgICAgbG9nKGBbRkFJTF0gcGF0aCBpcyBub3QgYWNjZXNzaWJsZTogJW9gLCBlKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBsb2coYFtGQVRBTF0gJW9gLCBlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9XG59XG4vKipcbiAqIFN5bmNocm9ub3VzIHZhbGlkYXRpb24gb2YgYSBwYXRoIGV4aXN0aW5nIGVpdGhlciBhcyBhIGZpbGUgb3IgYXMgYSBkaXJlY3RvcnkuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggdG8gY2hlY2tcbiAqIEBwYXJhbSB7bnVtYmVyfSB0eXBlIE9uZSBvciBib3RoIG9mIHRoZSBleHBvcnRlZCBudW1lcmljIGNvbnN0YW50c1xuICovXG5mdW5jdGlvbiBleGlzdHMocGF0aCwgdHlwZSA9IGV4cG9ydHMuUkVBREFCTEUpIHtcbiAgICByZXR1cm4gY2hlY2socGF0aCwgKHR5cGUgJiBleHBvcnRzLkZJTEUpID4gMCwgKHR5cGUgJiBleHBvcnRzLkZPTERFUikgPiAwKTtcbn1cbmV4cG9ydHMuZXhpc3RzID0gZXhpc3RzO1xuLyoqXG4gKiBDb25zdGFudCByZXByZXNlbnRpbmcgYSBmaWxlXG4gKi9cbmV4cG9ydHMuRklMRSA9IDE7XG4vKipcbiAqIENvbnN0YW50IHJlcHJlc2VudGluZyBhIGZvbGRlclxuICovXG5leHBvcnRzLkZPTERFUiA9IDI7XG4vKipcbiAqIENvbnN0YW50IHJlcHJlc2VudGluZyBlaXRoZXIgYSBmaWxlIG9yIGEgZm9sZGVyXG4gKi9cbmV4cG9ydHMuUkVBREFCTEUgPSBleHBvcnRzLkZJTEUgKyBleHBvcnRzLkZPTERFUjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gX19leHBvcnQobSkge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcbn1cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0KHJlcXVpcmUoXCIuL3NyY1wiKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuYnVmZmVyVG9TdHJpbmcgPSBleHBvcnRzLnByZWZpeGVkQXJyYXkgPSBleHBvcnRzLmFzTnVtYmVyID0gZXhwb3J0cy5hc1N0cmluZ0FycmF5ID0gZXhwb3J0cy5hc0FycmF5ID0gZXhwb3J0cy5vYmplY3RUb1N0cmluZyA9IGV4cG9ydHMucmVtb3ZlID0gZXhwb3J0cy5pbmNsdWRpbmcgPSBleHBvcnRzLmFwcGVuZCA9IGV4cG9ydHMuZm9sZGVyRXhpc3RzID0gZXhwb3J0cy5mb3JFYWNoTGluZVdpdGhDb250ZW50ID0gZXhwb3J0cy50b0xpbmVzV2l0aENvbnRlbnQgPSBleHBvcnRzLmxhc3QgPSBleHBvcnRzLmZpcnN0ID0gZXhwb3J0cy5zcGxpdE9uID0gZXhwb3J0cy5pc1VzZXJGdW5jdGlvbiA9IGV4cG9ydHMuYXNGdW5jdGlvbiA9IGV4cG9ydHMuTk9PUCA9IHZvaWQgMDtcbmNvbnN0IGZpbGVfZXhpc3RzXzEgPSByZXF1aXJlKFwiQGt3c2l0ZXMvZmlsZS1leGlzdHNcIik7XG5jb25zdCBOT09QID0gKCkgPT4ge1xufTtcbmV4cG9ydHMuTk9PUCA9IE5PT1A7XG4vKipcbiAqIFJldHVybnMgZWl0aGVyIHRoZSBzb3VyY2UgYXJndW1lbnQgd2hlbiBpdCBpcyBhIGBGdW5jdGlvbmAsIG9yIHRoZSBkZWZhdWx0XG4gKiBgTk9PUGAgZnVuY3Rpb24gY29uc3RhbnRcbiAqL1xuZnVuY3Rpb24gYXNGdW5jdGlvbihzb3VyY2UpIHtcbiAgICByZXR1cm4gdHlwZW9mIHNvdXJjZSA9PT0gJ2Z1bmN0aW9uJyA/IHNvdXJjZSA6IGV4cG9ydHMuTk9PUDtcbn1cbmV4cG9ydHMuYXNGdW5jdGlvbiA9IGFzRnVuY3Rpb247XG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciB0aGUgc3VwcGxpZWQgYXJndW1lbnQgaXMgYm90aCBhIGZ1bmN0aW9uLCBhbmQgaXMgbm90XG4gKiB0aGUgYE5PT1BgIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBpc1VzZXJGdW5jdGlvbihzb3VyY2UpIHtcbiAgICByZXR1cm4gKHR5cGVvZiBzb3VyY2UgPT09ICdmdW5jdGlvbicgJiYgc291cmNlICE9PSBleHBvcnRzLk5PT1ApO1xufVxuZXhwb3J0cy5pc1VzZXJGdW5jdGlvbiA9IGlzVXNlckZ1bmN0aW9uO1xuZnVuY3Rpb24gc3BsaXRPbihpbnB1dCwgY2hhcikge1xuICAgIGNvbnN0IGluZGV4ID0gaW5wdXQuaW5kZXhPZihjaGFyKTtcbiAgICBpZiAoaW5kZXggPD0gMCkge1xuICAgICAgICByZXR1cm4gW2lucHV0LCAnJ107XG4gICAgfVxuICAgIHJldHVybiBbXG4gICAgICAgIGlucHV0LnN1YnN0cigwLCBpbmRleCksXG4gICAgICAgIGlucHV0LnN1YnN0cihpbmRleCArIDEpLFxuICAgIF07XG59XG5leHBvcnRzLnNwbGl0T24gPSBzcGxpdE9uO1xuZnVuY3Rpb24gZmlyc3QoaW5wdXQsIG9mZnNldCA9IDApIHtcbiAgICByZXR1cm4gaXNBcnJheUxpa2UoaW5wdXQpICYmIGlucHV0Lmxlbmd0aCA+IG9mZnNldCA/IGlucHV0W29mZnNldF0gOiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLmZpcnN0ID0gZmlyc3Q7XG5mdW5jdGlvbiBsYXN0KGlucHV0LCBvZmZzZXQgPSAwKSB7XG4gICAgaWYgKGlzQXJyYXlMaWtlKGlucHV0KSAmJiBpbnB1dC5sZW5ndGggPiBvZmZzZXQpIHtcbiAgICAgICAgcmV0dXJuIGlucHV0W2lucHV0Lmxlbmd0aCAtIDEgLSBvZmZzZXRdO1xuICAgIH1cbn1cbmV4cG9ydHMubGFzdCA9IGxhc3Q7XG5mdW5jdGlvbiBpc0FycmF5TGlrZShpbnB1dCkge1xuICAgIHJldHVybiAhIShpbnB1dCAmJiB0eXBlb2YgaW5wdXQubGVuZ3RoID09PSAnbnVtYmVyJyk7XG59XG5mdW5jdGlvbiB0b0xpbmVzV2l0aENvbnRlbnQoaW5wdXQsIHRyaW1tZWQgPSB0cnVlLCBzZXBhcmF0b3IgPSAnXFxuJykge1xuICAgIHJldHVybiBpbnB1dC5zcGxpdChzZXBhcmF0b3IpXG4gICAgICAgIC5yZWR1Y2UoKG91dHB1dCwgbGluZSkgPT4ge1xuICAgICAgICBjb25zdCBsaW5lQ29udGVudCA9IHRyaW1tZWQgPyBsaW5lLnRyaW0oKSA6IGxpbmU7XG4gICAgICAgIGlmIChsaW5lQ29udGVudCkge1xuICAgICAgICAgICAgb3V0cHV0LnB1c2gobGluZUNvbnRlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfSwgW10pO1xufVxuZXhwb3J0cy50b0xpbmVzV2l0aENvbnRlbnQgPSB0b0xpbmVzV2l0aENvbnRlbnQ7XG5mdW5jdGlvbiBmb3JFYWNoTGluZVdpdGhDb250ZW50KGlucHV0LCBjYWxsYmFjaykge1xuICAgIHJldHVybiB0b0xpbmVzV2l0aENvbnRlbnQoaW5wdXQsIHRydWUpLm1hcChsaW5lID0+IGNhbGxiYWNrKGxpbmUpKTtcbn1cbmV4cG9ydHMuZm9yRWFjaExpbmVXaXRoQ29udGVudCA9IGZvckVhY2hMaW5lV2l0aENvbnRlbnQ7XG5mdW5jdGlvbiBmb2xkZXJFeGlzdHMocGF0aCkge1xuICAgIHJldHVybiBmaWxlX2V4aXN0c18xLmV4aXN0cyhwYXRoLCBmaWxlX2V4aXN0c18xLkZPTERFUik7XG59XG5leHBvcnRzLmZvbGRlckV4aXN0cyA9IGZvbGRlckV4aXN0cztcbi8qKlxuICogQWRkcyBgaXRlbWAgaW50byB0aGUgYHRhcmdldGAgYEFycmF5YCBvciBgU2V0YCB3aGVuIGl0IGlzIG5vdCBhbHJlYWR5IHByZXNlbnQgYW5kIHJldHVybnMgdGhlIGBpdGVtYC5cbiAqL1xuZnVuY3Rpb24gYXBwZW5kKHRhcmdldCwgaXRlbSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHRhcmdldCkpIHtcbiAgICAgICAgaWYgKCF0YXJnZXQuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgICAgIHRhcmdldC5wdXNoKGl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0YXJnZXQuYWRkKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gaXRlbTtcbn1cbmV4cG9ydHMuYXBwZW5kID0gYXBwZW5kO1xuLyoqXG4gKiBBZGRzIGBpdGVtYCBpbnRvIHRoZSBgdGFyZ2V0YCBgQXJyYXlgIHdoZW4gaXQgaXMgbm90IGFscmVhZHkgcHJlc2VudCBhbmQgcmV0dXJucyB0aGUgYHRhcmdldGAuXG4gKi9cbmZ1bmN0aW9uIGluY2x1ZGluZyh0YXJnZXQsIGl0ZW0pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpICYmICF0YXJnZXQuaW5jbHVkZXMoaXRlbSkpIHtcbiAgICAgICAgdGFyZ2V0LnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5leHBvcnRzLmluY2x1ZGluZyA9IGluY2x1ZGluZztcbmZ1bmN0aW9uIHJlbW92ZSh0YXJnZXQsIGl0ZW0pIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh0YXJnZXQpKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGFyZ2V0LmluZGV4T2YoaXRlbSk7XG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XG4gICAgICAgICAgICB0YXJnZXQuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGFyZ2V0LmRlbGV0ZShpdGVtKTtcbiAgICB9XG4gICAgcmV0dXJuIGl0ZW07XG59XG5leHBvcnRzLnJlbW92ZSA9IHJlbW92ZTtcbmV4cG9ydHMub2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwuYmluZChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKTtcbmZ1bmN0aW9uIGFzQXJyYXkoc291cmNlKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoc291cmNlKSA/IHNvdXJjZSA6IFtzb3VyY2VdO1xufVxuZXhwb3J0cy5hc0FycmF5ID0gYXNBcnJheTtcbmZ1bmN0aW9uIGFzU3RyaW5nQXJyYXkoc291cmNlKSB7XG4gICAgcmV0dXJuIGFzQXJyYXkoc291cmNlKS5tYXAoU3RyaW5nKTtcbn1cbmV4cG9ydHMuYXNTdHJpbmdBcnJheSA9IGFzU3RyaW5nQXJyYXk7XG5mdW5jdGlvbiBhc051bWJlcihzb3VyY2UsIG9uTmFOID0gMCkge1xuICAgIGlmIChzb3VyY2UgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gb25OYU47XG4gICAgfVxuICAgIGNvbnN0IG51bSA9IHBhcnNlSW50KHNvdXJjZSwgMTApO1xuICAgIHJldHVybiBpc05hTihudW0pID8gb25OYU4gOiBudW07XG59XG5leHBvcnRzLmFzTnVtYmVyID0gYXNOdW1iZXI7XG5mdW5jdGlvbiBwcmVmaXhlZEFycmF5KGlucHV0LCBwcmVmaXgpIHtcbiAgICBjb25zdCBvdXRwdXQgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMCwgbWF4ID0gaW5wdXQubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgb3V0cHV0LnB1c2gocHJlZml4LCBpbnB1dFtpXSk7XG4gICAgfVxuICAgIHJldHVybiBvdXRwdXQ7XG59XG5leHBvcnRzLnByZWZpeGVkQXJyYXkgPSBwcmVmaXhlZEFycmF5O1xuZnVuY3Rpb24gYnVmZmVyVG9TdHJpbmcoaW5wdXQpIHtcbiAgICByZXR1cm4gKEFycmF5LmlzQXJyYXkoaW5wdXQpID8gQnVmZmVyLmNvbmNhdChpbnB1dCkgOiBpbnB1dCkudG9TdHJpbmcoJ3V0Zi04Jyk7XG59XG5leHBvcnRzLmJ1ZmZlclRvU3RyaW5nID0gYnVmZmVyVG9TdHJpbmc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5maWx0ZXJIYXNMZW5ndGggPSBleHBvcnRzLmZpbHRlckZ1bmN0aW9uID0gZXhwb3J0cy5maWx0ZXJQbGFpbk9iamVjdCA9IGV4cG9ydHMuZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSA9IGV4cG9ydHMuZmlsdGVyU3RyaW5nQXJyYXkgPSBleHBvcnRzLmZpbHRlclN0cmluZyA9IGV4cG9ydHMuZmlsdGVyUHJpbWl0aXZlcyA9IGV4cG9ydHMuZmlsdGVyQXJyYXkgPSBleHBvcnRzLmZpbHRlclR5cGUgPSB2b2lkIDA7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZnVuY3Rpb24gZmlsdGVyVHlwZShpbnB1dCwgZmlsdGVyLCBkZWYpIHtcbiAgICBpZiAoZmlsdGVyKGlucHV0KSkge1xuICAgICAgICByZXR1cm4gaW5wdXQ7XG4gICAgfVxuICAgIHJldHVybiAoYXJndW1lbnRzLmxlbmd0aCA+IDIpID8gZGVmIDogdW5kZWZpbmVkO1xufVxuZXhwb3J0cy5maWx0ZXJUeXBlID0gZmlsdGVyVHlwZTtcbmNvbnN0IGZpbHRlckFycmF5ID0gKGlucHV0KSA9PiB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpO1xufTtcbmV4cG9ydHMuZmlsdGVyQXJyYXkgPSBmaWx0ZXJBcnJheTtcbmZ1bmN0aW9uIGZpbHRlclByaW1pdGl2ZXMoaW5wdXQsIG9taXQpIHtcbiAgICByZXR1cm4gL251bWJlcnxzdHJpbmd8Ym9vbGVhbi8udGVzdCh0eXBlb2YgaW5wdXQpICYmICghb21pdCB8fCAhb21pdC5pbmNsdWRlcygodHlwZW9mIGlucHV0KSkpO1xufVxuZXhwb3J0cy5maWx0ZXJQcmltaXRpdmVzID0gZmlsdGVyUHJpbWl0aXZlcztcbmNvbnN0IGZpbHRlclN0cmluZyA9IChpbnB1dCkgPT4ge1xuICAgIHJldHVybiB0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnO1xufTtcbmV4cG9ydHMuZmlsdGVyU3RyaW5nID0gZmlsdGVyU3RyaW5nO1xuY29uc3QgZmlsdGVyU3RyaW5nQXJyYXkgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShpbnB1dCkgJiYgaW5wdXQuZXZlcnkoZXhwb3J0cy5maWx0ZXJTdHJpbmcpO1xufTtcbmV4cG9ydHMuZmlsdGVyU3RyaW5nQXJyYXkgPSBmaWx0ZXJTdHJpbmdBcnJheTtcbmNvbnN0IGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXkgPSAoaW5wdXQpID0+IHtcbiAgICByZXR1cm4gZXhwb3J0cy5maWx0ZXJTdHJpbmcoaW5wdXQpIHx8IChBcnJheS5pc0FycmF5KGlucHV0KSAmJiBpbnB1dC5ldmVyeShleHBvcnRzLmZpbHRlclN0cmluZykpO1xufTtcbmV4cG9ydHMuZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSA9IGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXk7XG5mdW5jdGlvbiBmaWx0ZXJQbGFpbk9iamVjdChpbnB1dCkge1xuICAgIHJldHVybiAhIWlucHV0ICYmIHV0aWxfMS5vYmplY3RUb1N0cmluZyhpbnB1dCkgPT09ICdbb2JqZWN0IE9iamVjdF0nO1xufVxuZXhwb3J0cy5maWx0ZXJQbGFpbk9iamVjdCA9IGZpbHRlclBsYWluT2JqZWN0O1xuZnVuY3Rpb24gZmlsdGVyRnVuY3Rpb24oaW5wdXQpIHtcbiAgICByZXR1cm4gdHlwZW9mIGlucHV0ID09PSAnZnVuY3Rpb24nO1xufVxuZXhwb3J0cy5maWx0ZXJGdW5jdGlvbiA9IGZpbHRlckZ1bmN0aW9uO1xuY29uc3QgZmlsdGVySGFzTGVuZ3RoID0gKGlucHV0KSA9PiB7XG4gICAgaWYgKGlucHV0ID09IG51bGwgfHwgJ251bWJlcnxib29sZWFufGZ1bmN0aW9uJy5pbmNsdWRlcyh0eXBlb2YgaW5wdXQpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpIHx8IHR5cGVvZiBpbnB1dCA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIGlucHV0Lmxlbmd0aCA9PT0gJ251bWJlcic7XG59O1xuZXhwb3J0cy5maWx0ZXJIYXNMZW5ndGggPSBmaWx0ZXJIYXNMZW5ndGg7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcmd1bWVudC1maWx0ZXJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5FeGl0Q29kZXMgPSB2b2lkIDA7XG4vKipcbiAqIEtub3duIHByb2Nlc3MgZXhpdCBjb2RlcyB1c2VkIGJ5IHRoZSB0YXNrIHBhcnNlcnMgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgYW4gZXJyb3JcbiAqIHdhcyBvbmUgdGhleSBjYW4gYXV0b21hdGljYWxseSBoYW5kbGVcbiAqL1xudmFyIEV4aXRDb2RlcztcbihmdW5jdGlvbiAoRXhpdENvZGVzKSB7XG4gICAgRXhpdENvZGVzW0V4aXRDb2Rlc1tcIlNVQ0NFU1NcIl0gPSAwXSA9IFwiU1VDQ0VTU1wiO1xuICAgIEV4aXRDb2Rlc1tFeGl0Q29kZXNbXCJFUlJPUlwiXSA9IDFdID0gXCJFUlJPUlwiO1xuICAgIEV4aXRDb2Rlc1tFeGl0Q29kZXNbXCJVTkNMRUFOXCJdID0gMTI4XSA9IFwiVU5DTEVBTlwiO1xufSkoRXhpdENvZGVzID0gZXhwb3J0cy5FeGl0Q29kZXMgfHwgKGV4cG9ydHMuRXhpdENvZGVzID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWV4aXQtY29kZXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdE91dHB1dFN0cmVhbXMgPSB2b2lkIDA7XG5jbGFzcyBHaXRPdXRwdXRTdHJlYW1zIHtcbiAgICBjb25zdHJ1Y3RvcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICB0aGlzLnN0ZE91dCA9IHN0ZE91dDtcbiAgICAgICAgdGhpcy5zdGRFcnIgPSBzdGRFcnI7XG4gICAgfVxuICAgIGFzU3RyaW5ncygpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBHaXRPdXRwdXRTdHJlYW1zKHRoaXMuc3RkT3V0LnRvU3RyaW5nKCd1dGY4JyksIHRoaXMuc3RkRXJyLnRvU3RyaW5nKCd1dGY4JykpO1xuICAgIH1cbn1cbmV4cG9ydHMuR2l0T3V0cHV0U3RyZWFtcyA9IEdpdE91dHB1dFN0cmVhbXM7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtb3V0cHV0LXN0cmVhbXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbW90ZUxpbmVQYXJzZXIgPSBleHBvcnRzLkxpbmVQYXJzZXIgPSB2b2lkIDA7XG5jbGFzcyBMaW5lUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihyZWdFeHAsIHVzZU1hdGNoZXMpIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzID0gW107XG4gICAgICAgIHRoaXMucGFyc2UgPSAobGluZSwgdGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0TWF0Y2hlcygpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9yZWdFeHAuZXZlcnkoKHJlZywgaW5kZXgpID0+IHRoaXMuYWRkTWF0Y2gocmVnLCBpbmRleCwgbGluZShpbmRleCkpKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZU1hdGNoZXModGFyZ2V0LCB0aGlzLnByZXBhcmVNYXRjaGVzKCkpICE9PSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5fcmVnRXhwID0gQXJyYXkuaXNBcnJheShyZWdFeHApID8gcmVnRXhwIDogW3JlZ0V4cF07XG4gICAgICAgIGlmICh1c2VNYXRjaGVzKSB7XG4gICAgICAgICAgICB0aGlzLnVzZU1hdGNoZXMgPSB1c2VNYXRjaGVzO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB1c2VNYXRjaGVzKHRhcmdldCwgbWF0Y2gpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBMaW5lUGFyc2VyOnVzZU1hdGNoZXMgbm90IGltcGxlbWVudGVkYCk7XG4gICAgfVxuICAgIHJlc2V0TWF0Y2hlcygpIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzLmxlbmd0aCA9IDA7XG4gICAgfVxuICAgIHByZXBhcmVNYXRjaGVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5tYXRjaGVzO1xuICAgIH1cbiAgICBhZGRNYXRjaChyZWcsIGluZGV4LCBsaW5lKSB7XG4gICAgICAgIGNvbnN0IG1hdGNoZWQgPSBsaW5lICYmIHJlZy5leGVjKGxpbmUpO1xuICAgICAgICBpZiAobWF0Y2hlZCkge1xuICAgICAgICAgICAgdGhpcy5wdXNoTWF0Y2goaW5kZXgsIG1hdGNoZWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIW1hdGNoZWQ7XG4gICAgfVxuICAgIHB1c2hNYXRjaChfaW5kZXgsIG1hdGNoZWQpIHtcbiAgICAgICAgdGhpcy5tYXRjaGVzLnB1c2goLi4ubWF0Y2hlZC5zbGljZSgxKSk7XG4gICAgfVxufVxuZXhwb3J0cy5MaW5lUGFyc2VyID0gTGluZVBhcnNlcjtcbmNsYXNzIFJlbW90ZUxpbmVQYXJzZXIgZXh0ZW5kcyBMaW5lUGFyc2VyIHtcbiAgICBhZGRNYXRjaChyZWcsIGluZGV4LCBsaW5lKSB7XG4gICAgICAgIHJldHVybiAvXnJlbW90ZTpcXHMvLnRlc3QoU3RyaW5nKGxpbmUpKSAmJiBzdXBlci5hZGRNYXRjaChyZWcsIGluZGV4LCBsaW5lKTtcbiAgICB9XG4gICAgcHVzaE1hdGNoKGluZGV4LCBtYXRjaGVkKSB7XG4gICAgICAgIGlmIChpbmRleCA+IDAgfHwgbWF0Y2hlZC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBzdXBlci5wdXNoTWF0Y2goaW5kZXgsIG1hdGNoZWQpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0cy5SZW1vdGVMaW5lUGFyc2VyID0gUmVtb3RlTGluZVBhcnNlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxpbmUtcGFyc2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVJbnN0YW5jZUNvbmZpZyA9IHZvaWQgMDtcbmNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgIGJpbmFyeTogJ2dpdCcsXG4gICAgbWF4Q29uY3VycmVudFByb2Nlc3NlczogNSxcbiAgICBjb25maWc6IFtdLFxufTtcbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlQ29uZmlnKC4uLm9wdGlvbnMpIHtcbiAgICBjb25zdCBiYXNlRGlyID0gcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCBjb25maWcgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oeyBiYXNlRGlyIH0sIGRlZmF1bHRPcHRpb25zKSwgLi4uKG9wdGlvbnMuZmlsdGVyKG8gPT4gdHlwZW9mIG8gPT09ICdvYmplY3QnICYmIG8pKSk7XG4gICAgY29uZmlnLmJhc2VEaXIgPSBjb25maWcuYmFzZURpciB8fCBiYXNlRGlyO1xuICAgIHJldHVybiBjb25maWc7XG59XG5leHBvcnRzLmNyZWF0ZUluc3RhbmNlQ29uZmlnID0gY3JlYXRlSW5zdGFuY2VDb25maWc7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zaW1wbGUtZ2l0LW9wdGlvbnMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudCA9IGV4cG9ydHMudHJhaWxpbmdPcHRpb25zQXJndW1lbnQgPSBleHBvcnRzLmdldFRyYWlsaW5nT3B0aW9ucyA9IGV4cG9ydHMuYXBwZW5kVGFza09wdGlvbnMgPSB2b2lkIDA7XG5jb25zdCBhcmd1bWVudF9maWx0ZXJzXzEgPSByZXF1aXJlKFwiLi9hcmd1bWVudC1maWx0ZXJzXCIpO1xuY29uc3QgdXRpbF8xID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcbmZ1bmN0aW9uIGFwcGVuZFRhc2tPcHRpb25zKG9wdGlvbnMsIGNvbW1hbmRzID0gW10pIHtcbiAgICBpZiAoIWFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJQbGFpbk9iamVjdChvcHRpb25zKSkge1xuICAgICAgICByZXR1cm4gY29tbWFuZHM7XG4gICAgfVxuICAgIHJldHVybiBPYmplY3Qua2V5cyhvcHRpb25zKS5yZWR1Y2UoKGNvbW1hbmRzLCBrZXkpID0+IHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBvcHRpb25zW2tleV07XG4gICAgICAgIGlmIChhcmd1bWVudF9maWx0ZXJzXzEuZmlsdGVyUHJpbWl0aXZlcyh2YWx1ZSwgWydib29sZWFuJ10pKSB7XG4gICAgICAgICAgICBjb21tYW5kcy5wdXNoKGtleSArICc9JyArIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbW1hbmRzLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tbWFuZHM7XG4gICAgfSwgY29tbWFuZHMpO1xufVxuZXhwb3J0cy5hcHBlbmRUYXNrT3B0aW9ucyA9IGFwcGVuZFRhc2tPcHRpb25zO1xuZnVuY3Rpb24gZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3MsIGluaXRpYWxQcmltaXRpdmUgPSAwLCBvYmplY3RPbmx5ID0gZmFsc2UpIHtcbiAgICBjb25zdCBjb21tYW5kID0gW107XG4gICAgZm9yIChsZXQgaSA9IDAsIG1heCA9IGluaXRpYWxQcmltaXRpdmUgPCAwID8gYXJncy5sZW5ndGggOiBpbml0aWFsUHJpbWl0aXZlOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgaWYgKCdzdHJpbmd8bnVtYmVyJy5pbmNsdWRlcyh0eXBlb2YgYXJnc1tpXSkpIHtcbiAgICAgICAgICAgIGNvbW1hbmQucHVzaChTdHJpbmcoYXJnc1tpXSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFwcGVuZFRhc2tPcHRpb25zKHRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50KGFyZ3MpLCBjb21tYW5kKTtcbiAgICBpZiAoIW9iamVjdE9ubHkpIHtcbiAgICAgICAgY29tbWFuZC5wdXNoKC4uLnRyYWlsaW5nQXJyYXlBcmd1bWVudChhcmdzKSk7XG4gICAgfVxuICAgIHJldHVybiBjb21tYW5kO1xufVxuZXhwb3J0cy5nZXRUcmFpbGluZ09wdGlvbnMgPSBnZXRUcmFpbGluZ09wdGlvbnM7XG5mdW5jdGlvbiB0cmFpbGluZ0FycmF5QXJndW1lbnQoYXJncykge1xuICAgIGNvbnN0IGhhc1RyYWlsaW5nQ2FsbGJhY2sgPSB0eXBlb2YgdXRpbF8xLmxhc3QoYXJncykgPT09ICdmdW5jdGlvbic7XG4gICAgcmV0dXJuIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJUeXBlKHV0aWxfMS5sYXN0KGFyZ3MsIGhhc1RyYWlsaW5nQ2FsbGJhY2sgPyAxIDogMCksIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJBcnJheSwgW10pO1xufVxuLyoqXG4gKiBHaXZlbiBhbnkgbnVtYmVyIG9mIGFyZ3VtZW50cywgcmV0dXJucyB0aGUgdHJhaWxpbmcgb3B0aW9ucyBhcmd1bWVudCwgaWdub3JpbmcgYSB0cmFpbGluZyBmdW5jdGlvbiBhcmd1bWVudFxuICogaWYgdGhlcmUgaXMgb25lLiBXaGVuIG5vdCBmb3VuZCwgdGhlIHJldHVybiB2YWx1ZSBpcyBudWxsLlxuICovXG5mdW5jdGlvbiB0cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmdzKSB7XG4gICAgY29uc3QgaGFzVHJhaWxpbmdDYWxsYmFjayA9IGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJGdW5jdGlvbih1dGlsXzEubGFzdChhcmdzKSk7XG4gICAgcmV0dXJuIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJUeXBlKHV0aWxfMS5sYXN0KGFyZ3MsIGhhc1RyYWlsaW5nQ2FsbGJhY2sgPyAxIDogMCksIGFyZ3VtZW50X2ZpbHRlcnNfMS5maWx0ZXJQbGFpbk9iamVjdCk7XG59XG5leHBvcnRzLnRyYWlsaW5nT3B0aW9uc0FyZ3VtZW50ID0gdHJhaWxpbmdPcHRpb25zQXJndW1lbnQ7XG4vKipcbiAqIFJldHVybnMgZWl0aGVyIHRoZSBzb3VyY2UgYXJndW1lbnQgd2hlbiBpdCBpcyBhIGBGdW5jdGlvbmAsIG9yIHRoZSBkZWZhdWx0XG4gKiBgTk9PUGAgZnVuY3Rpb24gY29uc3RhbnRcbiAqL1xuZnVuY3Rpb24gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3MsIGluY2x1ZGVOb29wID0gdHJ1ZSkge1xuICAgIGNvbnN0IGNhbGxiYWNrID0gdXRpbF8xLmFzRnVuY3Rpb24odXRpbF8xLmxhc3QoYXJncykpO1xuICAgIHJldHVybiBpbmNsdWRlTm9vcCB8fCB1dGlsXzEuaXNVc2VyRnVuY3Rpb24oY2FsbGJhY2spID8gY2FsbGJhY2sgOiB1bmRlZmluZWQ7XG59XG5leHBvcnRzLnRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudCA9IHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2stb3B0aW9ucy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VTdHJpbmdSZXNwb25zZSA9IGV4cG9ydHMuY2FsbFRhc2tQYXJzZXIgPSB2b2lkIDA7XG5jb25zdCB1dGlsXzEgPSByZXF1aXJlKFwiLi91dGlsXCIpO1xuZnVuY3Rpb24gY2FsbFRhc2tQYXJzZXIocGFyc2VyLCBzdHJlYW1zKSB7XG4gICAgcmV0dXJuIHBhcnNlcihzdHJlYW1zLnN0ZE91dCwgc3RyZWFtcy5zdGRFcnIpO1xufVxuZXhwb3J0cy5jYWxsVGFza1BhcnNlciA9IGNhbGxUYXNrUGFyc2VyO1xuZnVuY3Rpb24gcGFyc2VTdHJpbmdSZXNwb25zZShyZXN1bHQsIHBhcnNlcnMsIC4uLnRleHRzKSB7XG4gICAgdGV4dHMuZm9yRWFjaCh0ZXh0ID0+IHtcbiAgICAgICAgZm9yIChsZXQgbGluZXMgPSB1dGlsXzEudG9MaW5lc1dpdGhDb250ZW50KHRleHQpLCBpID0gMCwgbWF4ID0gbGluZXMubGVuZ3RoOyBpIDwgbWF4OyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSAob2Zmc2V0ID0gMCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICgoaSArIG9mZnNldCkgPj0gbWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmVzW2kgKyBvZmZzZXRdO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHBhcnNlcnMuc29tZSgoeyBwYXJzZSB9KSA9PiBwYXJzZShsaW5lLCByZXN1bHQpKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5leHBvcnRzLnBhcnNlU3RyaW5nUmVzcG9uc2UgPSBwYXJzZVN0cmluZ1Jlc3BvbnNlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGFzay1wYXJzZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19jcmVhdGVCaW5kaW5nID0gKHRoaXMgJiYgdGhpcy5fX2NyZWF0ZUJpbmRpbmcpIHx8IChPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XG4gICAgaWYgKGsyID09PSB1bmRlZmluZWQpIGsyID0gaztcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobywgazIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbigpIHsgcmV0dXJuIG1ba107IH0gfSk7XG59KSA6IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgb1trMl0gPSBtW2tdO1xufSkpO1xudmFyIF9fZXhwb3J0U3RhciA9ICh0aGlzICYmIHRoaXMuX19leHBvcnRTdGFyKSB8fCBmdW5jdGlvbihtLCBleHBvcnRzKSB7XG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAocCAhPT0gXCJkZWZhdWx0XCIgJiYgIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChleHBvcnRzLCBwKSkgX19jcmVhdGVCaW5kaW5nKGV4cG9ydHMsIG0sIHApO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9hcmd1bWVudC1maWx0ZXJzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9leGl0LWNvZGVzXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9naXQtb3V0cHV0LXN0cmVhbXNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2xpbmUtcGFyc2VyXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9zaW1wbGUtZ2l0LW9wdGlvbnNcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3Rhc2stb3B0aW9uc1wiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdGFzay1wYXJzZXJcIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3V0aWxcIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNoZWNrSXNCYXJlUmVwb1Rhc2sgPSBleHBvcnRzLmNoZWNrSXNSZXBvUm9vdFRhc2sgPSBleHBvcnRzLmNoZWNrSXNSZXBvVGFzayA9IGV4cG9ydHMuQ2hlY2tSZXBvQWN0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgQ2hlY2tSZXBvQWN0aW9ucztcbihmdW5jdGlvbiAoQ2hlY2tSZXBvQWN0aW9ucykge1xuICAgIENoZWNrUmVwb0FjdGlvbnNbXCJCQVJFXCJdID0gXCJiYXJlXCI7XG4gICAgQ2hlY2tSZXBvQWN0aW9uc1tcIklOX1RSRUVcIl0gPSBcInRyZWVcIjtcbiAgICBDaGVja1JlcG9BY3Rpb25zW1wiSVNfUkVQT19ST09UXCJdID0gXCJyb290XCI7XG59KShDaGVja1JlcG9BY3Rpb25zID0gZXhwb3J0cy5DaGVja1JlcG9BY3Rpb25zIHx8IChleHBvcnRzLkNoZWNrUmVwb0FjdGlvbnMgPSB7fSkpO1xuY29uc3Qgb25FcnJvciA9ICh7IGV4aXRDb2RlIH0sIGVycm9yLCBkb25lLCBmYWlsKSA9PiB7XG4gICAgaWYgKGV4aXRDb2RlID09PSB1dGlsc18xLkV4aXRDb2Rlcy5VTkNMRUFOICYmIGlzTm90UmVwb01lc3NhZ2UoZXJyb3IpKSB7XG4gICAgICAgIHJldHVybiBkb25lKEJ1ZmZlci5mcm9tKCdmYWxzZScpKTtcbiAgICB9XG4gICAgZmFpbChlcnJvcik7XG59O1xuY29uc3QgcGFyc2VyID0gKHRleHQpID0+IHtcbiAgICByZXR1cm4gdGV4dC50cmltKCkgPT09ICd0cnVlJztcbn07XG5mdW5jdGlvbiBjaGVja0lzUmVwb1Rhc2soYWN0aW9uKSB7XG4gICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSBDaGVja1JlcG9BY3Rpb25zLkJBUkU6XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tJc0JhcmVSZXBvVGFzaygpO1xuICAgICAgICBjYXNlIENoZWNrUmVwb0FjdGlvbnMuSVNfUkVQT19ST09UOlxuICAgICAgICAgICAgcmV0dXJuIGNoZWNrSXNSZXBvUm9vdFRhc2soKTtcbiAgICB9XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ3Jldi1wYXJzZScsICctLWlzLWluc2lkZS13b3JrLXRyZWUnXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBvbkVycm9yLFxuICAgICAgICBwYXJzZXIsXG4gICAgfTtcbn1cbmV4cG9ydHMuY2hlY2tJc1JlcG9UYXNrID0gY2hlY2tJc1JlcG9UYXNrO1xuZnVuY3Rpb24gY2hlY2tJc1JlcG9Sb290VGFzaygpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncmV2LXBhcnNlJywgJy0tZ2l0LWRpciddO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIG9uRXJyb3IsXG4gICAgICAgIHBhcnNlcihwYXRoKSB7XG4gICAgICAgICAgICByZXR1cm4gL15cXC4oZ2l0KT8kLy50ZXN0KHBhdGgudHJpbSgpKTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5jaGVja0lzUmVwb1Jvb3RUYXNrID0gY2hlY2tJc1JlcG9Sb290VGFzaztcbmZ1bmN0aW9uIGNoZWNrSXNCYXJlUmVwb1Rhc2soKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ3Jldi1wYXJzZScsICctLWlzLWJhcmUtcmVwb3NpdG9yeSddO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIG9uRXJyb3IsXG4gICAgICAgIHBhcnNlcixcbiAgICB9O1xufVxuZXhwb3J0cy5jaGVja0lzQmFyZVJlcG9UYXNrID0gY2hlY2tJc0JhcmVSZXBvVGFzaztcbmZ1bmN0aW9uIGlzTm90UmVwb01lc3NhZ2UoZXJyb3IpIHtcbiAgICByZXR1cm4gLyhOb3QgYSBnaXQgcmVwb3NpdG9yeXxLZWluIEdpdC1SZXBvc2l0b3J5KS9pLnRlc3QoU3RyaW5nKGVycm9yKSk7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jaGVjay1pcy1yZXBvLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jbGVhblN1bW1hcnlQYXJzZXIgPSBleHBvcnRzLkNsZWFuUmVzcG9uc2UgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ2xlYW5SZXNwb25zZSB7XG4gICAgY29uc3RydWN0b3IoZHJ5UnVuKSB7XG4gICAgICAgIHRoaXMuZHJ5UnVuID0gZHJ5UnVuO1xuICAgICAgICB0aGlzLnBhdGhzID0gW107XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy5mb2xkZXJzID0gW107XG4gICAgfVxufVxuZXhwb3J0cy5DbGVhblJlc3BvbnNlID0gQ2xlYW5SZXNwb25zZTtcbmNvbnN0IHJlbW92YWxSZWdleHAgPSAvXlthLXpdK1xccyovaTtcbmNvbnN0IGRyeVJ1blJlbW92YWxSZWdleHAgPSAvXlthLXpdK1xccytbYS16XStcXHMqL2k7XG5jb25zdCBpc0ZvbGRlclJlZ2V4cCA9IC9cXC8kLztcbmZ1bmN0aW9uIGNsZWFuU3VtbWFyeVBhcnNlcihkcnlSdW4sIHRleHQpIHtcbiAgICBjb25zdCBzdW1tYXJ5ID0gbmV3IENsZWFuUmVzcG9uc2UoZHJ5UnVuKTtcbiAgICBjb25zdCByZWdleHAgPSBkcnlSdW4gPyBkcnlSdW5SZW1vdmFsUmVnZXhwIDogcmVtb3ZhbFJlZ2V4cDtcbiAgICB1dGlsc18xLnRvTGluZXNXaXRoQ29udGVudCh0ZXh0KS5mb3JFYWNoKGxpbmUgPT4ge1xuICAgICAgICBjb25zdCByZW1vdmVkID0gbGluZS5yZXBsYWNlKHJlZ2V4cCwgJycpO1xuICAgICAgICBzdW1tYXJ5LnBhdGhzLnB1c2gocmVtb3ZlZCk7XG4gICAgICAgIChpc0ZvbGRlclJlZ2V4cC50ZXN0KHJlbW92ZWQpID8gc3VtbWFyeS5mb2xkZXJzIDogc3VtbWFyeS5maWxlcykucHVzaChyZW1vdmVkKTtcbiAgICB9KTtcbiAgICByZXR1cm4gc3VtbWFyeTtcbn1cbmV4cG9ydHMuY2xlYW5TdW1tYXJ5UGFyc2VyID0gY2xlYW5TdW1tYXJ5UGFyc2VyO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Q2xlYW5TdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc0VtcHR5VGFzayA9IGV4cG9ydHMuaXNCdWZmZXJUYXNrID0gZXhwb3J0cy5zdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrID0gZXhwb3J0cy5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrID0gZXhwb3J0cy5jb25maWd1cmF0aW9uRXJyb3JUYXNrID0gZXhwb3J0cy5hZGhvY0V4ZWNUYXNrID0gZXhwb3J0cy5FTVBUWV9DT01NQU5EUyA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy90YXNrLWNvbmZpZ3VyYXRpb24tZXJyb3JcIik7XG5leHBvcnRzLkVNUFRZX0NPTU1BTkRTID0gW107XG5mdW5jdGlvbiBhZGhvY0V4ZWNUYXNrKHBhcnNlcikge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBleHBvcnRzLkVNUFRZX0NPTU1BTkRTLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcixcbiAgICB9O1xufVxuZXhwb3J0cy5hZGhvY0V4ZWNUYXNrID0gYWRob2NFeGVjVGFzaztcbmZ1bmN0aW9uIGNvbmZpZ3VyYXRpb25FcnJvclRhc2soZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogZXhwb3J0cy5FTVBUWV9DT01NQU5EUyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIoKSB7XG4gICAgICAgICAgICB0aHJvdyB0eXBlb2YgZXJyb3IgPT09ICdzdHJpbmcnID8gbmV3IHRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xLlRhc2tDb25maWd1cmF0aW9uRXJyb3IoZXJyb3IpIDogZXJyb3I7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5jb25maWd1cmF0aW9uRXJyb3JUYXNrID0gY29uZmlndXJhdGlvbkVycm9yVGFzaztcbmZ1bmN0aW9uIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMsIHRyaW1tZWQgPSBmYWxzZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdHJpbW1lZCA/IFN0cmluZyh0ZXh0KS50cmltKCkgOiB0ZXh0O1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2sgPSBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrO1xuZnVuY3Rpb24gc3RyYWlnaHRUaHJvdWdoQnVmZmVyVGFzayhjb21tYW5kcykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICdidWZmZXInLFxuICAgICAgICBwYXJzZXIoYnVmZmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLnN0cmFpZ2h0VGhyb3VnaEJ1ZmZlclRhc2sgPSBzdHJhaWdodFRocm91Z2hCdWZmZXJUYXNrO1xuZnVuY3Rpb24gaXNCdWZmZXJUYXNrKHRhc2spIHtcbiAgICByZXR1cm4gdGFzay5mb3JtYXQgPT09ICdidWZmZXInO1xufVxuZXhwb3J0cy5pc0J1ZmZlclRhc2sgPSBpc0J1ZmZlclRhc2s7XG5mdW5jdGlvbiBpc0VtcHR5VGFzayh0YXNrKSB7XG4gICAgcmV0dXJuICF0YXNrLmNvbW1hbmRzLmxlbmd0aDtcbn1cbmV4cG9ydHMuaXNFbXB0eVRhc2sgPSBpc0VtcHR5VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmlzQ2xlYW5PcHRpb25zQXJyYXkgPSBleHBvcnRzLmNsZWFuVGFzayA9IGV4cG9ydHMuY2xlYW5XaXRoT3B0aW9uc1Rhc2sgPSBleHBvcnRzLkNsZWFuT3B0aW9ucyA9IGV4cG9ydHMuQ09ORklHX0VSUk9SX1VOS05PV05fT1BUSU9OID0gZXhwb3J0cy5DT05GSUdfRVJST1JfTU9ERV9SRVFVSVJFRCA9IGV4cG9ydHMuQ09ORklHX0VSUk9SX0lOVEVSQUNUSVZFX01PREUgPSB2b2lkIDA7XG5jb25zdCBDbGVhblN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQ2xlYW5TdW1tYXJ5XCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5leHBvcnRzLkNPTkZJR19FUlJPUl9JTlRFUkFDVElWRV9NT0RFID0gJ0dpdCBjbGVhbiBpbnRlcmFjdGl2ZSBtb2RlIGlzIG5vdCBzdXBwb3J0ZWQnO1xuZXhwb3J0cy5DT05GSUdfRVJST1JfTU9ERV9SRVFVSVJFRCA9ICdHaXQgY2xlYW4gbW9kZSBwYXJhbWV0ZXIgKFwiblwiIG9yIFwiZlwiKSBpcyByZXF1aXJlZCc7XG5leHBvcnRzLkNPTkZJR19FUlJPUl9VTktOT1dOX09QVElPTiA9ICdHaXQgY2xlYW4gdW5rbm93biBvcHRpb24gZm91bmQgaW46ICc7XG4vKipcbiAqIEFsbCBzdXBwb3J0ZWQgb3B0aW9uIHN3aXRjaGVzIGF2YWlsYWJsZSBmb3IgdXNlIGluIGEgYGdpdC5jbGVhbmAgb3BlcmF0aW9uXG4gKi9cbnZhciBDbGVhbk9wdGlvbnM7XG4oZnVuY3Rpb24gKENsZWFuT3B0aW9ucykge1xuICAgIENsZWFuT3B0aW9uc1tcIkRSWV9SVU5cIl0gPSBcIm5cIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJGT1JDRVwiXSA9IFwiZlwiO1xuICAgIENsZWFuT3B0aW9uc1tcIklHTk9SRURfSU5DTFVERURcIl0gPSBcInhcIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJJR05PUkVEX09OTFlcIl0gPSBcIlhcIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJFWENMVURJTkdcIl0gPSBcImVcIjtcbiAgICBDbGVhbk9wdGlvbnNbXCJRVUlFVFwiXSA9IFwicVwiO1xuICAgIENsZWFuT3B0aW9uc1tcIlJFQ1VSU0lWRVwiXSA9IFwiZFwiO1xufSkoQ2xlYW5PcHRpb25zID0gZXhwb3J0cy5DbGVhbk9wdGlvbnMgfHwgKGV4cG9ydHMuQ2xlYW5PcHRpb25zID0ge30pKTtcbmNvbnN0IENsZWFuT3B0aW9uVmFsdWVzID0gbmV3IFNldChbJ2knLCAuLi51dGlsc18xLmFzU3RyaW5nQXJyYXkoT2JqZWN0LnZhbHVlcyhDbGVhbk9wdGlvbnMpKV0pO1xuZnVuY3Rpb24gY2xlYW5XaXRoT3B0aW9uc1Rhc2sobW9kZSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IHsgY2xlYW5Nb2RlLCBvcHRpb25zLCB2YWxpZCB9ID0gZ2V0Q2xlYW5PcHRpb25zKG1vZGUpO1xuICAgIGlmICghY2xlYW5Nb2RlKSB7XG4gICAgICAgIHJldHVybiB0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzayhleHBvcnRzLkNPTkZJR19FUlJPUl9NT0RFX1JFUVVJUkVEKTtcbiAgICB9XG4gICAgaWYgKCF2YWxpZC5vcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzayhleHBvcnRzLkNPTkZJR19FUlJPUl9VTktOT1dOX09QVElPTiArIEpTT04uc3RyaW5naWZ5KG1vZGUpKTtcbiAgICB9XG4gICAgb3B0aW9ucy5wdXNoKC4uLmN1c3RvbUFyZ3MpO1xuICAgIGlmIChvcHRpb25zLnNvbWUoaXNJbnRlcmFjdGl2ZU1vZGUpKSB7XG4gICAgICAgIHJldHVybiB0YXNrXzEuY29uZmlndXJhdGlvbkVycm9yVGFzayhleHBvcnRzLkNPTkZJR19FUlJPUl9JTlRFUkFDVElWRV9NT0RFKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsZWFuVGFzayhjbGVhbk1vZGUsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5jbGVhbldpdGhPcHRpb25zVGFzayA9IGNsZWFuV2l0aE9wdGlvbnNUYXNrO1xuZnVuY3Rpb24gY2xlYW5UYXNrKG1vZGUsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnY2xlYW4nLCBgLSR7bW9kZX1gLCAuLi5jdXN0b21BcmdzXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIENsZWFuU3VtbWFyeV8xLmNsZWFuU3VtbWFyeVBhcnNlcihtb2RlID09PSBDbGVhbk9wdGlvbnMuRFJZX1JVTiwgdGV4dCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5jbGVhblRhc2sgPSBjbGVhblRhc2s7XG5mdW5jdGlvbiBpc0NsZWFuT3B0aW9uc0FycmF5KGlucHV0KSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkoaW5wdXQpICYmIGlucHV0LmV2ZXJ5KHRlc3QgPT4gQ2xlYW5PcHRpb25WYWx1ZXMuaGFzKHRlc3QpKTtcbn1cbmV4cG9ydHMuaXNDbGVhbk9wdGlvbnNBcnJheSA9IGlzQ2xlYW5PcHRpb25zQXJyYXk7XG5mdW5jdGlvbiBnZXRDbGVhbk9wdGlvbnMoaW5wdXQpIHtcbiAgICBsZXQgY2xlYW5Nb2RlO1xuICAgIGxldCBvcHRpb25zID0gW107XG4gICAgbGV0IHZhbGlkID0geyBjbGVhbk1vZGU6IGZhbHNlLCBvcHRpb25zOiB0cnVlIH07XG4gICAgaW5wdXQucmVwbGFjZSgvW15hLXpdaS9nLCAnJykuc3BsaXQoJycpLmZvckVhY2goY2hhciA9PiB7XG4gICAgICAgIGlmIChpc0NsZWFuTW9kZShjaGFyKSkge1xuICAgICAgICAgICAgY2xlYW5Nb2RlID0gY2hhcjtcbiAgICAgICAgICAgIHZhbGlkLmNsZWFuTW9kZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWxpZC5vcHRpb25zID0gdmFsaWQub3B0aW9ucyAmJiBpc0tub3duT3B0aW9uKG9wdGlvbnNbb3B0aW9ucy5sZW5ndGhdID0gKGAtJHtjaGFyfWApKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNsZWFuTW9kZSxcbiAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgdmFsaWQsXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGlzQ2xlYW5Nb2RlKGNsZWFuTW9kZSkge1xuICAgIHJldHVybiBjbGVhbk1vZGUgPT09IENsZWFuT3B0aW9ucy5GT1JDRSB8fCBjbGVhbk1vZGUgPT09IENsZWFuT3B0aW9ucy5EUllfUlVOO1xufVxuZnVuY3Rpb24gaXNLbm93bk9wdGlvbihvcHRpb24pIHtcbiAgICByZXR1cm4gL14tW2Etel0kL2kudGVzdChvcHRpb24pICYmIENsZWFuT3B0aW9uVmFsdWVzLmhhcyhvcHRpb24uY2hhckF0KDEpKTtcbn1cbmZ1bmN0aW9uIGlzSW50ZXJhY3RpdmVNb2RlKG9wdGlvbikge1xuICAgIGlmICgvXi1bXlxcLV0vLnRlc3Qob3B0aW9uKSkge1xuICAgICAgICByZXR1cm4gb3B0aW9uLmluZGV4T2YoJ2knKSA+IDA7XG4gICAgfVxuICAgIHJldHVybiBvcHRpb24gPT09ICctLWludGVyYWN0aXZlJztcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNsZWFuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5nZXRSZXNldE1vZGUgPSBleHBvcnRzLnJlc2V0VGFzayA9IGV4cG9ydHMuUmVzZXRNb2RlID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbnZhciBSZXNldE1vZGU7XG4oZnVuY3Rpb24gKFJlc2V0TW9kZSkge1xuICAgIFJlc2V0TW9kZVtcIk1JWEVEXCJdID0gXCJtaXhlZFwiO1xuICAgIFJlc2V0TW9kZVtcIlNPRlRcIl0gPSBcInNvZnRcIjtcbiAgICBSZXNldE1vZGVbXCJIQVJEXCJdID0gXCJoYXJkXCI7XG4gICAgUmVzZXRNb2RlW1wiTUVSR0VcIl0gPSBcIm1lcmdlXCI7XG4gICAgUmVzZXRNb2RlW1wiS0VFUFwiXSA9IFwia2VlcFwiO1xufSkoUmVzZXRNb2RlID0gZXhwb3J0cy5SZXNldE1vZGUgfHwgKGV4cG9ydHMuUmVzZXRNb2RlID0ge30pKTtcbmNvbnN0IFJlc2V0TW9kZXMgPSBBcnJheS5mcm9tKE9iamVjdC52YWx1ZXMoUmVzZXRNb2RlKSk7XG5mdW5jdGlvbiByZXNldFRhc2sobW9kZSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydyZXNldCddO1xuICAgIGlmIChpc1ZhbGlkUmVzZXRNb2RlKG1vZGUpKSB7XG4gICAgICAgIGNvbW1hbmRzLnB1c2goYC0tJHttb2RlfWApO1xuICAgIH1cbiAgICBjb21tYW5kcy5wdXNoKC4uLmN1c3RvbUFyZ3MpO1xuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kcyk7XG59XG5leHBvcnRzLnJlc2V0VGFzayA9IHJlc2V0VGFzaztcbmZ1bmN0aW9uIGdldFJlc2V0TW9kZShtb2RlKSB7XG4gICAgaWYgKGlzVmFsaWRSZXNldE1vZGUobW9kZSkpIHtcbiAgICAgICAgcmV0dXJuIG1vZGU7XG4gICAgfVxuICAgIHN3aXRjaCAodHlwZW9mIG1vZGUpIHtcbiAgICAgICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgICAgIHJldHVybiBSZXNldE1vZGUuU09GVDtcbiAgICB9XG4gICAgcmV0dXJuO1xufVxuZXhwb3J0cy5nZXRSZXNldE1vZGUgPSBnZXRSZXNldE1vZGU7XG5mdW5jdGlvbiBpc1ZhbGlkUmVzZXRNb2RlKG1vZGUpIHtcbiAgICByZXR1cm4gUmVzZXRNb2Rlcy5pbmNsdWRlcyhtb2RlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJlc2V0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgZ2l0X2NvbnN0cnVjdF9lcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL2dpdC1jb25zdHJ1Y3QtZXJyb3JcIik7XG5jb25zdCBnaXRfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9naXQtZXJyb3JcIik7XG5jb25zdCBnaXRfcGx1Z2luX2Vycm9yXzEgPSByZXF1aXJlKFwiLi9lcnJvcnMvZ2l0LXBsdWdpbi1lcnJvclwiKTtcbmNvbnN0IGdpdF9yZXNwb25zZV9lcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvclwiKTtcbmNvbnN0IHRhc2tfY29uZmlndXJhdGlvbl9lcnJvcl8xID0gcmVxdWlyZShcIi4vZXJyb3JzL3Rhc2stY29uZmlndXJhdGlvbi1lcnJvclwiKTtcbmNvbnN0IGNoZWNrX2lzX3JlcG9fMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL2NoZWNrLWlzLXJlcG9cIik7XG5jb25zdCBjbGVhbl8xID0gcmVxdWlyZShcIi4vdGFza3MvY2xlYW5cIik7XG5jb25zdCByZXNldF8xID0gcmVxdWlyZShcIi4vdGFza3MvcmVzZXRcIik7XG5jb25zdCBhcGkgPSB7XG4gICAgQ2hlY2tSZXBvQWN0aW9uczogY2hlY2tfaXNfcmVwb18xLkNoZWNrUmVwb0FjdGlvbnMsXG4gICAgQ2xlYW5PcHRpb25zOiBjbGVhbl8xLkNsZWFuT3B0aW9ucyxcbiAgICBHaXRDb25zdHJ1Y3RFcnJvcjogZ2l0X2NvbnN0cnVjdF9lcnJvcl8xLkdpdENvbnN0cnVjdEVycm9yLFxuICAgIEdpdEVycm9yOiBnaXRfZXJyb3JfMS5HaXRFcnJvcixcbiAgICBHaXRQbHVnaW5FcnJvcjogZ2l0X3BsdWdpbl9lcnJvcl8xLkdpdFBsdWdpbkVycm9yLFxuICAgIEdpdFJlc3BvbnNlRXJyb3I6IGdpdF9yZXNwb25zZV9lcnJvcl8xLkdpdFJlc3BvbnNlRXJyb3IsXG4gICAgUmVzZXRNb2RlOiByZXNldF8xLlJlc2V0TW9kZSxcbiAgICBUYXNrQ29uZmlndXJhdGlvbkVycm9yOiB0YXNrX2NvbmZpZ3VyYXRpb25fZXJyb3JfMS5UYXNrQ29uZmlndXJhdGlvbkVycm9yLFxufTtcbmV4cG9ydHMuZGVmYXVsdCA9IGFwaTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwaS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29tbWFuZENvbmZpZ1ByZWZpeGluZ1BsdWdpbiA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBjb21tYW5kQ29uZmlnUHJlZml4aW5nUGx1Z2luKGNvbmZpZ3VyYXRpb24pIHtcbiAgICBjb25zdCBwcmVmaXggPSB1dGlsc18xLnByZWZpeGVkQXJyYXkoY29uZmlndXJhdGlvbiwgJy1jJyk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3NwYXduLmFyZ3MnLFxuICAgICAgICBhY3Rpb24oZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIFsuLi5wcmVmaXgsIC4uLmRhdGFdO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmNvbW1hbmRDb25maWdQcmVmaXhpbmdQbHVnaW4gPSBjb21tYW5kQ29uZmlnUHJlZml4aW5nUGx1Z2luO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWFuZC1jb25maWctcHJlZml4aW5nLXBsdWdpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZXJyb3JEZXRlY3Rpb25QbHVnaW4gPSBleHBvcnRzLmVycm9yRGV0ZWN0aW9uSGFuZGxlciA9IHZvaWQgMDtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtZXJyb3JcIik7XG5mdW5jdGlvbiBpc1Rhc2tFcnJvcihyZXN1bHQpIHtcbiAgICByZXR1cm4gISEocmVzdWx0LmV4aXRDb2RlICYmIHJlc3VsdC5zdGRFcnIubGVuZ3RoKTtcbn1cbmZ1bmN0aW9uIGdldEVycm9yTWVzc2FnZShyZXN1bHQpIHtcbiAgICByZXR1cm4gQnVmZmVyLmNvbmNhdChbLi4ucmVzdWx0LnN0ZE91dCwgLi4ucmVzdWx0LnN0ZEVycl0pO1xufVxuZnVuY3Rpb24gZXJyb3JEZXRlY3Rpb25IYW5kbGVyKG92ZXJ3cml0ZSA9IGZhbHNlLCBpc0Vycm9yID0gaXNUYXNrRXJyb3IsIGVycm9yTWVzc2FnZSA9IGdldEVycm9yTWVzc2FnZSkge1xuICAgIHJldHVybiAoZXJyb3IsIHJlc3VsdCkgPT4ge1xuICAgICAgICBpZiAoKCFvdmVyd3JpdGUgJiYgZXJyb3IpIHx8ICFpc0Vycm9yKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHJldHVybiBlcnJvcjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZXJyb3JNZXNzYWdlKHJlc3VsdCk7XG4gICAgfTtcbn1cbmV4cG9ydHMuZXJyb3JEZXRlY3Rpb25IYW5kbGVyID0gZXJyb3JEZXRlY3Rpb25IYW5kbGVyO1xuZnVuY3Rpb24gZXJyb3JEZXRlY3Rpb25QbHVnaW4oY29uZmlnKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgdHlwZTogJ3Rhc2suZXJyb3InLFxuICAgICAgICBhY3Rpb24oZGF0YSwgY29udGV4dCkge1xuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBjb25maWcoZGF0YS5lcnJvciwge1xuICAgICAgICAgICAgICAgIHN0ZEVycjogY29udGV4dC5zdGRFcnIsXG4gICAgICAgICAgICAgICAgc3RkT3V0OiBjb250ZXh0LnN0ZE91dCxcbiAgICAgICAgICAgICAgICBleGl0Q29kZTogY29udGV4dC5leGl0Q29kZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoQnVmZmVyLmlzQnVmZmVyKGVycm9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7IGVycm9yOiBuZXcgZ2l0X2Vycm9yXzEuR2l0RXJyb3IodW5kZWZpbmVkLCBlcnJvci50b1N0cmluZygndXRmLTgnKSkgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZXJyb3JcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZXJyb3JEZXRlY3Rpb25QbHVnaW4gPSBlcnJvckRldGVjdGlvblBsdWdpbjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWVycm9yLWRldGVjdGlvbi5wbHVnaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlBsdWdpblN0b3JlID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNsYXNzIFBsdWdpblN0b3JlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wbHVnaW5zID0gbmV3IFNldCgpO1xuICAgIH1cbiAgICBhZGQocGx1Z2luKSB7XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXTtcbiAgICAgICAgdXRpbHNfMS5hc0FycmF5KHBsdWdpbikuZm9yRWFjaChwbHVnaW4gPT4gcGx1Z2luICYmIHRoaXMucGx1Z2lucy5hZGQodXRpbHNfMS5hcHBlbmQocGx1Z2lucywgcGx1Z2luKSkpO1xuICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgcGx1Z2lucy5mb3JFYWNoKHBsdWdpbiA9PiB0aGlzLnBsdWdpbnMuZGVsZXRlKHBsdWdpbikpO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBleGVjKHR5cGUsIGRhdGEsIGNvbnRleHQpIHtcbiAgICAgICAgbGV0IG91dHB1dCA9IGRhdGE7XG4gICAgICAgIGNvbnN0IGNvbnRleHR1YWwgPSBPYmplY3QuZnJlZXplKE9iamVjdC5jcmVhdGUoY29udGV4dCkpO1xuICAgICAgICBmb3IgKGNvbnN0IHBsdWdpbiBvZiB0aGlzLnBsdWdpbnMpIHtcbiAgICAgICAgICAgIGlmIChwbHVnaW4udHlwZSA9PT0gdHlwZSkge1xuICAgICAgICAgICAgICAgIG91dHB1dCA9IHBsdWdpbi5hY3Rpb24ob3V0cHV0LCBjb250ZXh0dWFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH1cbn1cbmV4cG9ydHMuUGx1Z2luU3RvcmUgPSBQbHVnaW5TdG9yZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBsdWdpbi1zdG9yZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHJvZ3Jlc3NNb25pdG9yUGx1Z2luID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHByb2dyZXNzTW9uaXRvclBsdWdpbihwcm9ncmVzcykge1xuICAgIGNvbnN0IHByb2dyZXNzQ29tbWFuZCA9ICctLXByb2dyZXNzJztcbiAgICBjb25zdCBwcm9ncmVzc01ldGhvZHMgPSBbJ2NoZWNrb3V0JywgJ2Nsb25lJywgJ2ZldGNoJywgJ3B1bGwnLCAncHVzaCddO1xuICAgIGNvbnN0IG9uUHJvZ3Jlc3MgPSB7XG4gICAgICAgIHR5cGU6ICdzcGF3bi5hZnRlcicsXG4gICAgICAgIGFjdGlvbihfZGF0YSwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKCFjb250ZXh0LmNvbW1hbmRzLmluY2x1ZGVzKHByb2dyZXNzQ29tbWFuZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSBjb250ZXh0LnNwYXduZWQuc3RkZXJyKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gL14oW2EtekEtWiBdKyk6XFxzKihcXGQrKSUgXFwoKFxcZCspXFwvKFxcZCspXFwpLy5leGVjKGNodW5rLnRvU3RyaW5nKCd1dGY4JykpO1xuICAgICAgICAgICAgICAgIGlmICghbWVzc2FnZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHByb2dyZXNzKHtcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiBjb250ZXh0Lm1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgc3RhZ2U6IHByb2dyZXNzRXZlbnRTdGFnZShtZXNzYWdlWzFdKSxcbiAgICAgICAgICAgICAgICAgICAgcHJvZ3Jlc3M6IHV0aWxzXzEuYXNOdW1iZXIobWVzc2FnZVsyXSksXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NlZDogdXRpbHNfMS5hc051bWJlcihtZXNzYWdlWzNdKSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHV0aWxzXzEuYXNOdW1iZXIobWVzc2FnZVs0XSksXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb25BcmdzID0ge1xuICAgICAgICB0eXBlOiAnc3Bhd24uYXJncycsXG4gICAgICAgIGFjdGlvbihhcmdzLCBjb250ZXh0KSB7XG4gICAgICAgICAgICBpZiAoIXByb2dyZXNzTWV0aG9kcy5pbmNsdWRlcyhjb250ZXh0Lm1ldGhvZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJncztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1dGlsc18xLmluY2x1ZGluZyhhcmdzLCBwcm9ncmVzc0NvbW1hbmQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gW29uQXJncywgb25Qcm9ncmVzc107XG59XG5leHBvcnRzLnByb2dyZXNzTW9uaXRvclBsdWdpbiA9IHByb2dyZXNzTW9uaXRvclBsdWdpbjtcbmZ1bmN0aW9uIHByb2dyZXNzRXZlbnRTdGFnZShpbnB1dCkge1xuICAgIHJldHVybiBTdHJpbmcoaW5wdXQudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcsIDEpKSB8fCAndW5rbm93bic7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9ncmVzcy1tb25pdG9yLXBsdWdpbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNpbXBsZS1naXQtcGx1Z2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50aW1lb3V0UGx1Z2luID0gdm9pZCAwO1xuY29uc3QgZ2l0X3BsdWdpbl9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtcGx1Z2luLWVycm9yXCIpO1xuZnVuY3Rpb24gdGltZW91dFBsdWdpbih7IGJsb2NrIH0pIHtcbiAgICBpZiAoYmxvY2sgPiAwKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB0eXBlOiAnc3Bhd24uYWZ0ZXInLFxuICAgICAgICAgICAgYWN0aW9uKF9kYXRhLCBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgICAgICBsZXQgdGltZW91dDtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiB3YWl0KCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ICYmIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoa2lsbCwgYmxvY2spO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdG9wKCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSBjb250ZXh0LnNwYXduZWQuc3Rkb3V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub2ZmKCdkYXRhJywgd2FpdCk7XG4gICAgICAgICAgICAgICAgICAgIChfYiA9IGNvbnRleHQuc3Bhd25lZC5zdGRlcnIpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi5vZmYoJ2RhdGEnLCB3YWl0KTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5zcGF3bmVkLm9mZignZXhpdCcsIHN0b3ApO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LnNwYXduZWQub2ZmKCdjbG9zZScsIHN0b3ApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBraWxsKCkge1xuICAgICAgICAgICAgICAgICAgICBzdG9wKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRleHQua2lsbChuZXcgZ2l0X3BsdWdpbl9lcnJvcl8xLkdpdFBsdWdpbkVycm9yKHVuZGVmaW5lZCwgJ3RpbWVvdXQnLCBgYmxvY2sgdGltZW91dCByZWFjaGVkYCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAoX2EgPSBjb250ZXh0LnNwYXduZWQuc3Rkb3V0KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub24oJ2RhdGEnLCB3YWl0KTtcbiAgICAgICAgICAgICAgICAoX2IgPSBjb250ZXh0LnNwYXduZWQuc3RkZXJyKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Iub24oJ2RhdGEnLCB3YWl0KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNwYXduZWQub24oJ2V4aXQnLCBzdG9wKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnNwYXduZWQub24oJ2Nsb3NlJywgc3RvcCk7XG4gICAgICAgICAgICAgICAgd2FpdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgIH1cbn1cbmV4cG9ydHMudGltZW91dFBsdWdpbiA9IHRpbWVvdXRQbHVnaW47XG4vLyMgc291cmNlTWFwcGluZ1VSTD10aW1vdXQtcGx1Z2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fY3JlYXRlQmluZGluZyA9ICh0aGlzICYmIHRoaXMuX19jcmVhdGVCaW5kaW5nKSB8fCAoT2JqZWN0LmNyZWF0ZSA/IChmdW5jdGlvbihvLCBtLCBrLCBrMikge1xuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24oKSB7IHJldHVybiBtW2tdOyB9IH0pO1xufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xuICAgIG9bazJdID0gbVtrXTtcbn0pKTtcbnZhciBfX2V4cG9ydFN0YXIgPSAodGhpcyAmJiB0aGlzLl9fZXhwb3J0U3RhcikgfHwgZnVuY3Rpb24obSwgZXhwb3J0cykge1xuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKHAgIT09IFwiZGVmYXVsdFwiICYmICFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZXhwb3J0cywgcCkpIF9fY3JlYXRlQmluZGluZyhleHBvcnRzLCBtLCBwKTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vY29tbWFuZC1jb25maWctcHJlZml4aW5nLXBsdWdpblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZXJyb3ItZGV0ZWN0aW9uLnBsdWdpblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vcGx1Z2luLXN0b3JlXCIpLCBleHBvcnRzKTtcbl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9wcm9ncmVzcy1tb25pdG9yLXBsdWdpblwiKSwgZXhwb3J0cyk7XG5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vc2ltcGxlLWdpdC1wbHVnaW5cIiksIGV4cG9ydHMpO1xuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3RpbW91dC1wbHVnaW5cIiksIGV4cG9ydHMpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdExvZ2dlciA9IGV4cG9ydHMuY3JlYXRlTG9nZ2VyID0gZXhwb3J0cy5sb2cgPSB2b2lkIDA7XG5jb25zdCBkZWJ1Z18xID0gcmVxdWlyZShcImRlYnVnXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuZGVidWdfMS5kZWZhdWx0LmZvcm1hdHRlcnMuTCA9ICh2YWx1ZSkgPT4gU3RyaW5nKHV0aWxzXzEuZmlsdGVySGFzTGVuZ3RoKHZhbHVlKSA/IHZhbHVlLmxlbmd0aCA6ICctJyk7XG5kZWJ1Z18xLmRlZmF1bHQuZm9ybWF0dGVycy5CID0gKHZhbHVlKSA9PiB7XG4gICAgaWYgKEJ1ZmZlci5pc0J1ZmZlcih2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlLnRvU3RyaW5nKCd1dGY4Jyk7XG4gICAgfVxuICAgIHJldHVybiB1dGlsc18xLm9iamVjdFRvU3RyaW5nKHZhbHVlKTtcbn07XG4vKipcbiAqIFRoZSBzaGFyZWQgZGVidWcgbG9nZ2luZyBpbnN0YW5jZVxuICovXG5leHBvcnRzLmxvZyA9IGRlYnVnXzEuZGVmYXVsdCgnc2ltcGxlLWdpdCcpO1xuZnVuY3Rpb24gcHJlZml4ZWRMb2dnZXIodG8sIHByZWZpeCwgZm9yd2FyZCkge1xuICAgIGlmICghcHJlZml4IHx8ICFTdHJpbmcocHJlZml4KS5yZXBsYWNlKC9cXHMqLywgJycpKSB7XG4gICAgICAgIHJldHVybiAhZm9yd2FyZCA/IHRvIDogKG1lc3NhZ2UsIC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHRvKG1lc3NhZ2UsIC4uLmFyZ3MpO1xuICAgICAgICAgICAgZm9yd2FyZChtZXNzYWdlLCAuLi5hcmdzKTtcbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIChtZXNzYWdlLCAuLi5hcmdzKSA9PiB7XG4gICAgICAgIHRvKGAlcyAke21lc3NhZ2V9YCwgcHJlZml4LCAuLi5hcmdzKTtcbiAgICAgICAgaWYgKGZvcndhcmQpIHtcbiAgICAgICAgICAgIGZvcndhcmQobWVzc2FnZSwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZnVuY3Rpb24gY2hpbGRMb2dnZXJOYW1lKG5hbWUsIGNoaWxkRGVidWdnZXIsIHsgbmFtZXNwYWNlOiBwYXJlbnROYW1lc3BhY2UgfSkge1xuICAgIGlmICh0eXBlb2YgbmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkTmFtZXNwYWNlID0gY2hpbGREZWJ1Z2dlciAmJiBjaGlsZERlYnVnZ2VyLm5hbWVzcGFjZSB8fCAnJztcbiAgICBpZiAoY2hpbGROYW1lc3BhY2Uuc3RhcnRzV2l0aChwYXJlbnROYW1lc3BhY2UpKSB7XG4gICAgICAgIHJldHVybiBjaGlsZE5hbWVzcGFjZS5zdWJzdHIocGFyZW50TmFtZXNwYWNlLmxlbmd0aCArIDEpO1xuICAgIH1cbiAgICByZXR1cm4gY2hpbGROYW1lc3BhY2UgfHwgcGFyZW50TmFtZXNwYWNlO1xufVxuZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKGxhYmVsLCB2ZXJib3NlLCBpbml0aWFsU3RlcCwgaW5mb0RlYnVnZ2VyID0gZXhwb3J0cy5sb2cpIHtcbiAgICBjb25zdCBsYWJlbFByZWZpeCA9IGxhYmVsICYmIGBbJHtsYWJlbH1dYCB8fCAnJztcbiAgICBjb25zdCBzcGF3bmVkID0gW107XG4gICAgY29uc3QgZGVidWdEZWJ1Z2dlciA9ICh0eXBlb2YgdmVyYm9zZSA9PT0gJ3N0cmluZycpID8gaW5mb0RlYnVnZ2VyLmV4dGVuZCh2ZXJib3NlKSA6IHZlcmJvc2U7XG4gICAgY29uc3Qga2V5ID0gY2hpbGRMb2dnZXJOYW1lKHV0aWxzXzEuZmlsdGVyVHlwZSh2ZXJib3NlLCB1dGlsc18xLmZpbHRlclN0cmluZyksIGRlYnVnRGVidWdnZXIsIGluZm9EZWJ1Z2dlcik7XG4gICAgcmV0dXJuIHN0ZXAoaW5pdGlhbFN0ZXApO1xuICAgIGZ1bmN0aW9uIGNoaWxkKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHV0aWxzXzEuYXBwZW5kKHNwYXduZWQsIGNyZWF0ZUxvZ2dlcihsYWJlbCwgZGVidWdEZWJ1Z2dlciAmJiBkZWJ1Z0RlYnVnZ2VyLmV4dGVuZChuYW1lKSB8fCBuYW1lKSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNpYmxpbmcobmFtZSwgaW5pdGlhbCkge1xuICAgICAgICByZXR1cm4gdXRpbHNfMS5hcHBlbmQoc3Bhd25lZCwgY3JlYXRlTG9nZ2VyKGxhYmVsLCBrZXkucmVwbGFjZSgvXlteOl0rLywgbmFtZSksIGluaXRpYWwsIGluZm9EZWJ1Z2dlcikpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzdGVwKHBoYXNlKSB7XG4gICAgICAgIGNvbnN0IHN0ZXBQcmVmaXggPSBwaGFzZSAmJiBgWyR7cGhhc2V9XWAgfHwgJyc7XG4gICAgICAgIGNvbnN0IGRlYnVnID0gZGVidWdEZWJ1Z2dlciAmJiBwcmVmaXhlZExvZ2dlcihkZWJ1Z0RlYnVnZ2VyLCBzdGVwUHJlZml4KSB8fCB1dGlsc18xLk5PT1A7XG4gICAgICAgIGNvbnN0IGluZm8gPSBwcmVmaXhlZExvZ2dlcihpbmZvRGVidWdnZXIsIGAke2xhYmVsUHJlZml4fSAke3N0ZXBQcmVmaXh9YCwgZGVidWcpO1xuICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihkZWJ1Z0RlYnVnZ2VyID8gZGVidWcgOiBpbmZvLCB7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBsYWJlbCxcbiAgICAgICAgICAgIGNoaWxkLFxuICAgICAgICAgICAgc2libGluZyxcbiAgICAgICAgICAgIGRlYnVnLFxuICAgICAgICAgICAgaW5mbyxcbiAgICAgICAgICAgIHN0ZXAsXG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuY3JlYXRlTG9nZ2VyID0gY3JlYXRlTG9nZ2VyO1xuLyoqXG4gKiBUaGUgYEdpdExvZ2dlcmAgaXMgdXNlZCBieSB0aGUgbWFpbiBgU2ltcGxlR2l0YCBydW5uZXIgdG8gaGFuZGxlIGxvZ2dpbmdcbiAqIGFueSB3YXJuaW5ncyBvciBlcnJvcnMuXG4gKi9cbmNsYXNzIEdpdExvZ2dlciB7XG4gICAgY29uc3RydWN0b3IoX291dCA9IGV4cG9ydHMubG9nKSB7XG4gICAgICAgIHRoaXMuX291dCA9IF9vdXQ7XG4gICAgICAgIHRoaXMuZXJyb3IgPSBwcmVmaXhlZExvZ2dlcihfb3V0LCAnW0VSUk9SXScpO1xuICAgICAgICB0aGlzLndhcm4gPSBwcmVmaXhlZExvZ2dlcihfb3V0LCAnW1dBUk5dJyk7XG4gICAgfVxuICAgIHNpbGVudChzaWxlbmNlID0gZmFsc2UpIHtcbiAgICAgICAgaWYgKHNpbGVuY2UgIT09IHRoaXMuX291dC5lbmFibGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBuYW1lc3BhY2UgfSA9IHRoaXMuX291dDtcbiAgICAgICAgY29uc3QgZW52ID0gKHByb2Nlc3MuZW52LkRFQlVHIHx8ICcnKS5zcGxpdCgnLCcpLmZpbHRlcihzID0+ICEhcyk7XG4gICAgICAgIGNvbnN0IGhhc09uID0gZW52LmluY2x1ZGVzKG5hbWVzcGFjZSk7XG4gICAgICAgIGNvbnN0IGhhc09mZiA9IGVudi5pbmNsdWRlcyhgLSR7bmFtZXNwYWNlfWApO1xuICAgICAgICAvLyBlbmFibGluZyB0aGUgbG9nXG4gICAgICAgIGlmICghc2lsZW5jZSkge1xuICAgICAgICAgICAgaWYgKGhhc09mZikge1xuICAgICAgICAgICAgICAgIHV0aWxzXzEucmVtb3ZlKGVudiwgYC0ke25hbWVzcGFjZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVudi5wdXNoKG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGFzT24pIHtcbiAgICAgICAgICAgICAgICB1dGlsc18xLnJlbW92ZShlbnYsIG5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbnYucHVzaChgLSR7bmFtZXNwYWNlfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRlYnVnXzEuZGVmYXVsdC5lbmFibGUoZW52LmpvaW4oJywnKSk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRMb2dnZXIgPSBHaXRMb2dnZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtbG9nZ2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5UYXNrc1BlbmRpbmdRdWV1ZSA9IHZvaWQgMDtcbmNvbnN0IGdpdF9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtZXJyb3JcIik7XG5jb25zdCBnaXRfbG9nZ2VyXzEgPSByZXF1aXJlKFwiLi4vZ2l0LWxvZ2dlclwiKTtcbmNsYXNzIFRhc2tzUGVuZGluZ1F1ZXVlIHtcbiAgICBjb25zdHJ1Y3Rvcihsb2dMYWJlbCA9ICdHaXRFeGVjdXRvcicpIHtcbiAgICAgICAgdGhpcy5sb2dMYWJlbCA9IGxvZ0xhYmVsO1xuICAgICAgICB0aGlzLl9xdWV1ZSA9IG5ldyBNYXAoKTtcbiAgICB9XG4gICAgd2l0aFByb2dyZXNzKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3F1ZXVlLmdldCh0YXNrKTtcbiAgICB9XG4gICAgY3JlYXRlUHJvZ3Jlc3ModGFzaykge1xuICAgICAgICBjb25zdCBuYW1lID0gVGFza3NQZW5kaW5nUXVldWUuZ2V0TmFtZSh0YXNrLmNvbW1hbmRzWzBdKTtcbiAgICAgICAgY29uc3QgbG9nZ2VyID0gZ2l0X2xvZ2dlcl8xLmNyZWF0ZUxvZ2dlcih0aGlzLmxvZ0xhYmVsLCBuYW1lKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHRhc2ssXG4gICAgICAgICAgICBsb2dnZXIsXG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBwdXNoKHRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLmNyZWF0ZVByb2dyZXNzKHRhc2spO1xuICAgICAgICBwcm9ncmVzcy5sb2dnZXIoJ0FkZGluZyB0YXNrIHRvIHRoZSBxdWV1ZSwgY29tbWFuZHMgPSAlbycsIHRhc2suY29tbWFuZHMpO1xuICAgICAgICB0aGlzLl9xdWV1ZS5zZXQodGFzaywgcHJvZ3Jlc3MpO1xuICAgICAgICByZXR1cm4gcHJvZ3Jlc3M7XG4gICAgfVxuICAgIGZhdGFsKGVycikge1xuICAgICAgICBmb3IgKGNvbnN0IFt0YXNrLCB7IGxvZ2dlciB9XSBvZiBBcnJheS5mcm9tKHRoaXMuX3F1ZXVlLmVudHJpZXMoKSkpIHtcbiAgICAgICAgICAgIGlmICh0YXNrID09PSBlcnIudGFzaykge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBGYWlsZWQgJW9gLCBlcnIpO1xuICAgICAgICAgICAgICAgIGxvZ2dlcihgRmF0YWwgZXhjZXB0aW9uLCBhbnkgYXMteWV0IHVuLXN0YXJ0ZWQgdGFza3MgcnVuIHRocm91Z2ggdGhpcyBleGVjdXRvciB3aWxsIG5vdCBiZSBhdHRlbXB0ZWRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBBIGZhdGFsIGV4Y2VwdGlvbiBvY2N1cnJlZCBpbiBhIHByZXZpb3VzIHRhc2ssIHRoZSBxdWV1ZSBoYXMgYmVlbiBwdXJnZWQ6ICVvYCwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fcXVldWUuc2l6ZSAhPT0gMCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBRdWV1ZSBzaXplIHNob3VsZCBiZSB6ZXJvIGFmdGVyIGZhdGFsOiAke3RoaXMuX3F1ZXVlLnNpemV9YCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29tcGxldGUodGFzaykge1xuICAgICAgICBjb25zdCBwcm9ncmVzcyA9IHRoaXMud2l0aFByb2dyZXNzKHRhc2spO1xuICAgICAgICBpZiAocHJvZ3Jlc3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3F1ZXVlLmRlbGV0ZSh0YXNrKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhdHRlbXB0KHRhc2spIHtcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSB0aGlzLndpdGhQcm9ncmVzcyh0YXNrKTtcbiAgICAgICAgaWYgKCFwcm9ncmVzcykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IGdpdF9lcnJvcl8xLkdpdEVycm9yKHVuZGVmaW5lZCwgJ1Rhc2tzUGVuZGluZ1F1ZXVlOiBhdHRlbXB0IGNhbGxlZCBmb3IgYW4gdW5rbm93biB0YXNrJyk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvZ3Jlc3MubG9nZ2VyKCdTdGFydGluZyB0YXNrJyk7XG4gICAgICAgIHJldHVybiBwcm9ncmVzcztcbiAgICB9XG4gICAgc3RhdGljIGdldE5hbWUobmFtZSA9ICdlbXB0eScpIHtcbiAgICAgICAgcmV0dXJuIGB0YXNrOiR7bmFtZX06JHsrK1Rhc2tzUGVuZGluZ1F1ZXVlLmNvdW50ZXJ9YDtcbiAgICB9XG59XG5leHBvcnRzLlRhc2tzUGVuZGluZ1F1ZXVlID0gVGFza3NQZW5kaW5nUXVldWU7XG5UYXNrc1BlbmRpbmdRdWV1ZS5jb3VudGVyID0gMDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2tzLXBlbmRpbmctcXVldWUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2l0RXhlY3V0b3JDaGFpbiA9IHZvaWQgMDtcbmNvbnN0IGNoaWxkX3Byb2Nlc3NfMSA9IHJlcXVpcmUoXCJjaGlsZF9wcm9jZXNzXCIpO1xuY29uc3QgZ2l0X2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1lcnJvclwiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuLi90YXNrcy90YXNrXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHRhc2tzX3BlbmRpbmdfcXVldWVfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzLXBlbmRpbmctcXVldWVcIik7XG5jbGFzcyBHaXRFeGVjdXRvckNoYWluIHtcbiAgICBjb25zdHJ1Y3RvcihfZXhlY3V0b3IsIF9zY2hlZHVsZXIsIF9wbHVnaW5zKSB7XG4gICAgICAgIHRoaXMuX2V4ZWN1dG9yID0gX2V4ZWN1dG9yO1xuICAgICAgICB0aGlzLl9zY2hlZHVsZXIgPSBfc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLl9wbHVnaW5zID0gX3BsdWdpbnM7XG4gICAgICAgIHRoaXMuX2NoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuX3F1ZXVlID0gbmV3IHRhc2tzX3BlbmRpbmdfcXVldWVfMS5UYXNrc1BlbmRpbmdRdWV1ZSgpO1xuICAgIH1cbiAgICBnZXQgYmluYXJ5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0b3IuYmluYXJ5O1xuICAgIH1cbiAgICBnZXQgY3dkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0b3IuY3dkO1xuICAgIH1cbiAgICBnZXQgZW52KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZXhlY3V0b3IuZW52O1xuICAgIH1cbiAgICBnZXQgb3V0cHV0SGFuZGxlcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4ZWN1dG9yLm91dHB1dEhhbmRsZXI7XG4gICAgfVxuICAgIGNoYWluKCkge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgcHVzaCh0YXNrKSB7XG4gICAgICAgIHRoaXMuX3F1ZXVlLnB1c2godGFzayk7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGFpbiA9IHRoaXMuX2NoYWluLnRoZW4oKCkgPT4gdGhpcy5hdHRlbXB0VGFzayh0YXNrKSk7XG4gICAgfVxuICAgIGF0dGVtcHRUYXNrKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IG9uU2NoZWR1bGVDb21wbGV0ZSA9IHlpZWxkIHRoaXMuX3NjaGVkdWxlci5uZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBvblF1ZXVlQ29tcGxldGUgPSAoKSA9PiB0aGlzLl9xdWV1ZS5jb21wbGV0ZSh0YXNrKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBsb2dnZXIgfSA9IHRoaXMuX3F1ZXVlLmF0dGVtcHQodGFzayk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHlpZWxkICh0YXNrXzEuaXNFbXB0eVRhc2sodGFzaylcbiAgICAgICAgICAgICAgICAgICAgPyB0aGlzLmF0dGVtcHRFbXB0eVRhc2sodGFzaywgbG9nZ2VyKVxuICAgICAgICAgICAgICAgICAgICA6IHRoaXMuYXR0ZW1wdFJlbW90ZVRhc2sodGFzaywgbG9nZ2VyKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRocm93IHRoaXMub25GYXRhbEV4Y2VwdGlvbih0YXNrLCBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbmFsbHkge1xuICAgICAgICAgICAgICAgIG9uUXVldWVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgICAgIG9uU2NoZWR1bGVDb21wbGV0ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25GYXRhbEV4Y2VwdGlvbih0YXNrLCBlKSB7XG4gICAgICAgIGNvbnN0IGdpdEVycm9yID0gKGUgaW5zdGFuY2VvZiBnaXRfZXJyb3JfMS5HaXRFcnJvcikgPyBPYmplY3QuYXNzaWduKGUsIHsgdGFzayB9KSA6IG5ldyBnaXRfZXJyb3JfMS5HaXRFcnJvcih0YXNrLCBlICYmIFN0cmluZyhlKSk7XG4gICAgICAgIHRoaXMuX2NoYWluID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIHRoaXMuX3F1ZXVlLmZhdGFsKGdpdEVycm9yKTtcbiAgICAgICAgcmV0dXJuIGdpdEVycm9yO1xuICAgIH1cbiAgICBhdHRlbXB0UmVtb3RlVGFzayh0YXNrLCBsb2dnZXIpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFyZ3MgPSB0aGlzLl9wbHVnaW5zLmV4ZWMoJ3NwYXduLmFyZ3MnLCBbLi4udGFzay5jb21tYW5kc10sIHBsdWdpbkNvbnRleHQodGFzaywgdGFzay5jb21tYW5kcykpO1xuICAgICAgICAgICAgY29uc3QgcmF3ID0geWllbGQgdGhpcy5naXRSZXNwb25zZSh0YXNrLCB0aGlzLmJpbmFyeSwgYXJncywgdGhpcy5vdXRwdXRIYW5kbGVyLCBsb2dnZXIuc3RlcCgnU1BBV04nKSk7XG4gICAgICAgICAgICBjb25zdCBvdXRwdXRTdHJlYW1zID0geWllbGQgdGhpcy5oYW5kbGVUYXNrRGF0YSh0YXNrLCBhcmdzLCByYXcsIGxvZ2dlci5zdGVwKCdIQU5ETEUnKSk7XG4gICAgICAgICAgICBsb2dnZXIoYHBhc3NpbmcgcmVzcG9uc2UgdG8gdGFzaydzIHBhcnNlciBhcyBhICVzYCwgdGFzay5mb3JtYXQpO1xuICAgICAgICAgICAgaWYgKHRhc2tfMS5pc0J1ZmZlclRhc2sodGFzaykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdXRpbHNfMS5jYWxsVGFza1BhcnNlcih0YXNrLnBhcnNlciwgb3V0cHV0U3RyZWFtcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdXRpbHNfMS5jYWxsVGFza1BhcnNlcih0YXNrLnBhcnNlciwgb3V0cHV0U3RyZWFtcy5hc1N0cmluZ3MoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhdHRlbXB0RW1wdHlUYXNrKHRhc2ssIGxvZ2dlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgbG9nZ2VyKGBlbXB0eSB0YXNrIGJ5cGFzc2luZyBjaGlsZCBwcm9jZXNzIHRvIGNhbGwgdG8gdGFzaydzIHBhcnNlcmApO1xuICAgICAgICAgICAgcmV0dXJuIHRhc2sucGFyc2VyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVUYXNrRGF0YSh0YXNrLCBhcmdzLCByZXN1bHQsIGxvZ2dlcikge1xuICAgICAgICBjb25zdCB7IGV4aXRDb2RlLCByZWplY3Rpb24sIHN0ZE91dCwgc3RkRXJyIH0gPSByZXN1bHQ7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoZG9uZSwgZmFpbCkgPT4ge1xuICAgICAgICAgICAgbG9nZ2VyKGBQcmVwYXJpbmcgdG8gaGFuZGxlIHByb2Nlc3MgcmVzcG9uc2UgZXhpdENvZGU9JWQgc3RkT3V0PWAsIGV4aXRDb2RlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZXJyb3IgfSA9IHRoaXMuX3BsdWdpbnMuZXhlYygndGFzay5lcnJvcicsIHsgZXJyb3I6IHJlamVjdGlvbiB9LCBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHBsdWdpbkNvbnRleHQodGFzaywgYXJncykpLCByZXN1bHQpKTtcbiAgICAgICAgICAgIGlmIChlcnJvciAmJiB0YXNrLm9uRXJyb3IpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgZXhpdENvZGU9JXMgaGFuZGxpbmcgd2l0aCBjdXN0b20gZXJyb3IgaGFuZGxlcmApO1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXNrLm9uRXJyb3IocmVzdWx0LCBlcnJvciwgKG5ld1N0ZE91dCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgY3VzdG9tIGVycm9yIGhhbmRsZXIgdHJlYXRlZCBhcyBzdWNjZXNzYCk7XG4gICAgICAgICAgICAgICAgICAgIGxvZ2dlcihgY3VzdG9tIGVycm9yIHJldHVybmVkIGEgJXNgLCB1dGlsc18xLm9iamVjdFRvU3RyaW5nKG5ld1N0ZE91dCkpO1xuICAgICAgICAgICAgICAgICAgICBkb25lKG5ldyB1dGlsc18xLkdpdE91dHB1dFN0cmVhbXMoQXJyYXkuaXNBcnJheShuZXdTdGRPdXQpID8gQnVmZmVyLmNvbmNhdChuZXdTdGRPdXQpIDogbmV3U3RkT3V0LCBCdWZmZXIuY29uY2F0KHN0ZEVycikpKTtcbiAgICAgICAgICAgICAgICB9LCBmYWlsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKGBoYW5kbGluZyBhcyBlcnJvcjogZXhpdENvZGU9JXMgc3RkRXJyPSVzIHJlamVjdGlvbj0lb2AsIGV4aXRDb2RlLCBzdGRFcnIubGVuZ3RoLCByZWplY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWlsKGVycm9yKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxvZ2dlci5pbmZvKGByZXRyaWV2aW5nIHRhc2sgb3V0cHV0IGNvbXBsZXRlYCk7XG4gICAgICAgICAgICBkb25lKG5ldyB1dGlsc18xLkdpdE91dHB1dFN0cmVhbXMoQnVmZmVyLmNvbmNhdChzdGRPdXQpLCBCdWZmZXIuY29uY2F0KHN0ZEVycikpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdpdFJlc3BvbnNlKHRhc2ssIGNvbW1hbmQsIGFyZ3MsIG91dHB1dEhhbmRsZXIsIGxvZ2dlcikge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3Qgb3V0cHV0TG9nZ2VyID0gbG9nZ2VyLnNpYmxpbmcoJ291dHB1dCcpO1xuICAgICAgICAgICAgY29uc3Qgc3Bhd25PcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIGN3ZDogdGhpcy5jd2QsXG4gICAgICAgICAgICAgICAgZW52OiB0aGlzLmVudixcbiAgICAgICAgICAgICAgICB3aW5kb3dzSGlkZTogdHJ1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKGRvbmUpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGRPdXQgPSBbXTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGRFcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgYXR0ZW1wdGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IHJlamVjdGlvbjtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhdHRlbXB0Q2xvc2UoZXhpdENvZGUsIGV2ZW50ID0gJ3JldHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyBjbG9zaW5nIHdoZW4gdGhlcmUgaXMgY29udGVudCwgdGVybWluYXRlIGltbWVkaWF0ZWx5XG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0ZWQgfHwgc3RkRXJyLmxlbmd0aCB8fCBzdGRPdXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgZXhpdENvZGU9JXMgZXZlbnQ9JXMgcmVqZWN0aW9uPSVvYCwgZXhpdENvZGUsIGV2ZW50LCByZWplY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RkT3V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZEVycixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0Q29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gZmlyc3QgYXR0ZW1wdCBhdCBjbG9zaW5nIGJ1dCBubyBjb250ZW50IHlldCwgd2FpdCBicmllZmx5IGZvciB0aGUgY2xvc2UvZXhpdCB0aGF0IG1heSBmb2xsb3dcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhdHRlbXB0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGVtcHRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IGF0dGVtcHRDbG9zZShleGl0Q29kZSwgJ2RlZmVycmVkJyksIDUwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvZ2dlcigncmVjZWl2ZWQgJXMgZXZlbnQgYmVmb3JlIGNvbnRlbnQgb24gc3RkT3V0L3N0ZEVycicsIGV2ZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbyhgJXMgJW9gLCBjb21tYW5kLCBhcmdzKTtcbiAgICAgICAgICAgICAgICBsb2dnZXIoJyVPJywgc3Bhd25PcHRpb25zKTtcbiAgICAgICAgICAgICAgICBjb25zdCBzcGF3bmVkID0gY2hpbGRfcHJvY2Vzc18xLnNwYXduKGNvbW1hbmQsIGFyZ3MsIHNwYXduT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgc3Bhd25lZC5zdGRvdXQub24oJ2RhdGEnLCBvbkRhdGFSZWNlaXZlZChzdGRPdXQsICdzdGRPdXQnLCBsb2dnZXIsIG91dHB1dExvZ2dlci5zdGVwKCdzdGRPdXQnKSkpO1xuICAgICAgICAgICAgICAgIHNwYXduZWQuc3RkZXJyLm9uKCdkYXRhJywgb25EYXRhUmVjZWl2ZWQoc3RkRXJyLCAnc3RkRXJyJywgbG9nZ2VyLCBvdXRwdXRMb2dnZXIuc3RlcCgnc3RkRXJyJykpKTtcbiAgICAgICAgICAgICAgICBzcGF3bmVkLm9uKCdlcnJvcicsIG9uRXJyb3JSZWNlaXZlZChzdGRFcnIsIGxvZ2dlcikpO1xuICAgICAgICAgICAgICAgIHNwYXduZWQub24oJ2Nsb3NlJywgKGNvZGUpID0+IGF0dGVtcHRDbG9zZShjb2RlLCAnY2xvc2UnKSk7XG4gICAgICAgICAgICAgICAgc3Bhd25lZC5vbignZXhpdCcsIChjb2RlKSA9PiBhdHRlbXB0Q2xvc2UoY29kZSwgJ2V4aXQnKSk7XG4gICAgICAgICAgICAgICAgaWYgKG91dHB1dEhhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbG9nZ2VyKGBQYXNzaW5nIGNoaWxkIHByb2Nlc3Mgc3RkT3V0L3N0ZEVyciB0byBjdXN0b20gb3V0cHV0SGFuZGxlcmApO1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXRIYW5kbGVyKGNvbW1hbmQsIHNwYXduZWQuc3Rkb3V0LCBzcGF3bmVkLnN0ZGVyciwgWy4uLmFyZ3NdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcGx1Z2lucy5leGVjKCdzcGF3bi5hZnRlcicsIHVuZGVmaW5lZCwgT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBwbHVnaW5Db250ZXh0KHRhc2ssIGFyZ3MpKSwgeyBzcGF3bmVkLCBraWxsKHJlYXNvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNwYXduZWQua2lsbGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0aW9uID0gcmVhc29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgc3Bhd25lZC5raWxsKCdTSUdJTlQnKTtcbiAgICAgICAgICAgICAgICAgICAgfSB9KSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRFeGVjdXRvckNoYWluID0gR2l0RXhlY3V0b3JDaGFpbjtcbmZ1bmN0aW9uIHBsdWdpbkNvbnRleHQodGFzaywgY29tbWFuZHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZXRob2Q6IHV0aWxzXzEuZmlyc3QodGFzay5jb21tYW5kcykgfHwgJycsXG4gICAgICAgIGNvbW1hbmRzLFxuICAgIH07XG59XG5mdW5jdGlvbiBvbkVycm9yUmVjZWl2ZWQodGFyZ2V0LCBsb2dnZXIpIHtcbiAgICByZXR1cm4gKGVycikgPT4ge1xuICAgICAgICBsb2dnZXIoYFtFUlJPUl0gY2hpbGQgcHJvY2VzcyBleGNlcHRpb24gJW9gLCBlcnIpO1xuICAgICAgICB0YXJnZXQucHVzaChCdWZmZXIuZnJvbShTdHJpbmcoZXJyLnN0YWNrKSwgJ2FzY2lpJykpO1xuICAgIH07XG59XG5mdW5jdGlvbiBvbkRhdGFSZWNlaXZlZCh0YXJnZXQsIG5hbWUsIGxvZ2dlciwgb3V0cHV0KSB7XG4gICAgcmV0dXJuIChidWZmZXIpID0+IHtcbiAgICAgICAgbG9nZ2VyKGAlcyByZWNlaXZlZCAlTCBieXRlc2AsIG5hbWUsIGJ1ZmZlcik7XG4gICAgICAgIG91dHB1dChgJUJgLCBidWZmZXIpO1xuICAgICAgICB0YXJnZXQucHVzaChidWZmZXIpO1xuICAgIH07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtZXhlY3V0b3ItY2hhaW4uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdpdEV4ZWN1dG9yID0gdm9pZCAwO1xuY29uc3QgZ2l0X2V4ZWN1dG9yX2NoYWluXzEgPSByZXF1aXJlKFwiLi9naXQtZXhlY3V0b3ItY2hhaW5cIik7XG5jbGFzcyBHaXRFeGVjdXRvciB7XG4gICAgY29uc3RydWN0b3IoYmluYXJ5ID0gJ2dpdCcsIGN3ZCwgX3NjaGVkdWxlciwgX3BsdWdpbnMpIHtcbiAgICAgICAgdGhpcy5iaW5hcnkgPSBiaW5hcnk7XG4gICAgICAgIHRoaXMuY3dkID0gY3dkO1xuICAgICAgICB0aGlzLl9zY2hlZHVsZXIgPSBfc2NoZWR1bGVyO1xuICAgICAgICB0aGlzLl9wbHVnaW5zID0gX3BsdWdpbnM7XG4gICAgICAgIHRoaXMuX2NoYWluID0gbmV3IGdpdF9leGVjdXRvcl9jaGFpbl8xLkdpdEV4ZWN1dG9yQ2hhaW4odGhpcywgdGhpcy5fc2NoZWR1bGVyLCB0aGlzLl9wbHVnaW5zKTtcbiAgICB9XG4gICAgY2hhaW4oKSB7XG4gICAgICAgIHJldHVybiBuZXcgZ2l0X2V4ZWN1dG9yX2NoYWluXzEuR2l0RXhlY3V0b3JDaGFpbih0aGlzLCB0aGlzLl9zY2hlZHVsZXIsIHRoaXMuX3BsdWdpbnMpO1xuICAgIH1cbiAgICBwdXNoKHRhc2spIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoYWluLnB1c2godGFzayk7XG4gICAgfVxufVxuZXhwb3J0cy5HaXRFeGVjdXRvciA9IEdpdEV4ZWN1dG9yO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2l0LWV4ZWN1dG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy50YXNrQ2FsbGJhY2sgPSB2b2lkIDA7XG5jb25zdCBnaXRfcmVzcG9uc2VfZXJyb3JfMSA9IHJlcXVpcmUoXCIuL2Vycm9ycy9naXQtcmVzcG9uc2UtZXJyb3JcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5mdW5jdGlvbiB0YXNrQ2FsbGJhY2sodGFzaywgcmVzcG9uc2UsIGNhbGxiYWNrID0gdXRpbHNfMS5OT09QKSB7XG4gICAgY29uc3Qgb25TdWNjZXNzID0gKGRhdGEpID0+IHtcbiAgICAgICAgY2FsbGJhY2sobnVsbCwgZGF0YSk7XG4gICAgfTtcbiAgICBjb25zdCBvbkVycm9yID0gKGVycikgPT4ge1xuICAgICAgICBpZiAoKGVyciA9PT0gbnVsbCB8fCBlcnIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVyci50YXNrKSA9PT0gdGFzaykge1xuICAgICAgICAgICAgaWYgKGVyciBpbnN0YW5jZW9mIGdpdF9yZXNwb25zZV9lcnJvcl8xLkdpdFJlc3BvbnNlRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gY2FsbGJhY2soYWRkRGVwcmVjYXRpb25Ob3RpY2VUb0Vycm9yKGVycikpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVzcG9uc2UudGhlbihvblN1Y2Nlc3MsIG9uRXJyb3IpO1xufVxuZXhwb3J0cy50YXNrQ2FsbGJhY2sgPSB0YXNrQ2FsbGJhY2s7XG5mdW5jdGlvbiBhZGREZXByZWNhdGlvbk5vdGljZVRvRXJyb3IoZXJyKSB7XG4gICAgbGV0IGxvZyA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnNvbGUud2Fybihgc2ltcGxlLWdpdCBkZXByZWNhdGlvbiBub3RpY2U6IGFjY2Vzc2luZyBHaXRSZXNwb25zZUVycm9yLiR7bmFtZX0gc2hvdWxkIGJlIEdpdFJlc3BvbnNlRXJyb3IuZ2l0LiR7bmFtZX0sIHRoaXMgd2lsbCBubyBsb25nZXIgYmUgYXZhaWxhYmxlIGluIHZlcnNpb24gM2ApO1xuICAgICAgICBsb2cgPSB1dGlsc18xLk5PT1A7XG4gICAgfTtcbiAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZShlcnIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKGVyci5naXQpLnJlZHVjZShkZXNjcmlwdG9yUmVkdWNlciwge30pKTtcbiAgICBmdW5jdGlvbiBkZXNjcmlwdG9yUmVkdWNlcihhbGwsIG5hbWUpIHtcbiAgICAgICAgaWYgKG5hbWUgaW4gZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gYWxsO1xuICAgICAgICB9XG4gICAgICAgIGFsbFtuYW1lXSA9IHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIGdldCgpIHtcbiAgICAgICAgICAgICAgICBsb2cobmFtZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVyci5naXRbbmFtZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYWxsO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhc2stY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlbW90ZU1lc3NhZ2VzT2JqZWN0UGFyc2VycyA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBvYmplY3RFbnVtZXJhdGlvblJlc3VsdChyZW1vdGVNZXNzYWdlcykge1xuICAgIHJldHVybiAocmVtb3RlTWVzc2FnZXMub2JqZWN0cyA9IHJlbW90ZU1lc3NhZ2VzLm9iamVjdHMgfHwge1xuICAgICAgICBjb21wcmVzc2luZzogMCxcbiAgICAgICAgY291bnRpbmc6IDAsXG4gICAgICAgIGVudW1lcmF0aW5nOiAwLFxuICAgICAgICBwYWNrUmV1c2VkOiAwLFxuICAgICAgICByZXVzZWQ6IHsgY291bnQ6IDAsIGRlbHRhOiAwIH0sXG4gICAgICAgIHRvdGFsOiB7IGNvdW50OiAwLCBkZWx0YTogMCB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBhc09iamVjdENvdW50KHNvdXJjZSkge1xuICAgIGNvbnN0IGNvdW50ID0gL15cXHMqKFxcZCspLy5leGVjKHNvdXJjZSk7XG4gICAgY29uc3QgZGVsdGEgPSAvZGVsdGEgKFxcZCspL2kuZXhlYyhzb3VyY2UpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvdW50OiB1dGlsc18xLmFzTnVtYmVyKGNvdW50ICYmIGNvdW50WzFdIHx8ICcwJyksXG4gICAgICAgIGRlbHRhOiB1dGlsc18xLmFzTnVtYmVyKGRlbHRhICYmIGRlbHRhWzFdIHx8ICcwJyksXG4gICAgfTtcbn1cbmV4cG9ydHMucmVtb3RlTWVzc2FnZXNPYmplY3RQYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoL15yZW1vdGU6XFxzKihlbnVtZXJhdGluZ3xjb3VudGluZ3xjb21wcmVzc2luZykgb2JqZWN0czogKFxcZCspLC9pLCAocmVzdWx0LCBbYWN0aW9uLCBjb3VudF0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGVudW1lcmF0aW9uID0gb2JqZWN0RW51bWVyYXRpb25SZXN1bHQocmVzdWx0LnJlbW90ZU1lc3NhZ2VzKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbnVtZXJhdGlvbiwgeyBba2V5XTogdXRpbHNfMS5hc051bWJlcihjb3VudCkgfSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuUmVtb3RlTGluZVBhcnNlcigvXnJlbW90ZTpcXHMqKGVudW1lcmF0aW5nfGNvdW50aW5nfGNvbXByZXNzaW5nKSBvYmplY3RzOiBcXGQrJSBcXChcXGQrXFwvKFxcZCspXFwpLC9pLCAocmVzdWx0LCBbYWN0aW9uLCBjb3VudF0pID0+IHtcbiAgICAgICAgY29uc3Qga2V5ID0gYWN0aW9uLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGVudW1lcmF0aW9uID0gb2JqZWN0RW51bWVyYXRpb25SZXN1bHQocmVzdWx0LnJlbW90ZU1lc3NhZ2VzKTtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihlbnVtZXJhdGlvbiwgeyBba2V5XTogdXRpbHNfMS5hc051bWJlcihjb3VudCkgfSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuUmVtb3RlTGluZVBhcnNlcigvdG90YWwgKFteLF0rKSwgcmV1c2VkIChbXixdKyksIHBhY2stcmV1c2VkIChcXGQrKS9pLCAocmVzdWx0LCBbdG90YWwsIHJldXNlZCwgcGFja1JldXNlZF0pID0+IHtcbiAgICAgICAgY29uc3Qgb2JqZWN0cyA9IG9iamVjdEVudW1lcmF0aW9uUmVzdWx0KHJlc3VsdC5yZW1vdGVNZXNzYWdlcyk7XG4gICAgICAgIG9iamVjdHMudG90YWwgPSBhc09iamVjdENvdW50KHRvdGFsKTtcbiAgICAgICAgb2JqZWN0cy5yZXVzZWQgPSBhc09iamVjdENvdW50KHJldXNlZCk7XG4gICAgICAgIG9iamVjdHMucGFja1JldXNlZCA9IHV0aWxzXzEuYXNOdW1iZXIocGFja1JldXNlZCk7XG4gICAgfSksXG5dO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFyc2UtcmVtb3RlLW9iamVjdHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlJlbW90ZU1lc3NhZ2VTdW1tYXJ5ID0gZXhwb3J0cy5wYXJzZVJlbW90ZU1lc3NhZ2VzID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlX3JlbW90ZV9vYmplY3RzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS1yZW1vdGUtb2JqZWN0c1wiKTtcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuUmVtb3RlTGluZVBhcnNlcigvXnJlbW90ZTpcXHMqKC4rKSQvLCAocmVzdWx0LCBbdGV4dF0pID0+IHtcbiAgICAgICAgcmVzdWx0LnJlbW90ZU1lc3NhZ2VzLmFsbC5wdXNoKHRleHQudHJpbSgpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pLFxuICAgIC4uLnBhcnNlX3JlbW90ZV9vYmplY3RzXzEucmVtb3RlTWVzc2FnZXNPYmplY3RQYXJzZXJzLFxuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoWy9jcmVhdGUgYSAoPzpwdWxsfG1lcmdlKSByZXF1ZXN0L2ksIC9cXHMoaHR0cHM/OlxcL1xcL1xcUyspJC9dLCAocmVzdWx0LCBbcHVsbFJlcXVlc3RVcmxdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZW1vdGVNZXNzYWdlcy5wdWxsUmVxdWVzdFVybCA9IHB1bGxSZXF1ZXN0VXJsO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLlJlbW90ZUxpbmVQYXJzZXIoWy9mb3VuZCAoXFxkKykgdnVsbmVyYWJpbGl0aWVzLitcXCgoW14pXSspXFwpL2ksIC9cXHMoaHR0cHM/OlxcL1xcL1xcUyspJC9dLCAocmVzdWx0LCBbY291bnQsIHN1bW1hcnksIHVybF0pID0+IHtcbiAgICAgICAgcmVzdWx0LnJlbW90ZU1lc3NhZ2VzLnZ1bG5lcmFiaWxpdGllcyA9IHtcbiAgICAgICAgICAgIGNvdW50OiB1dGlsc18xLmFzTnVtYmVyKGNvdW50KSxcbiAgICAgICAgICAgIHN1bW1hcnksXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgIH07XG4gICAgfSksXG5dO1xuZnVuY3Rpb24gcGFyc2VSZW1vdGVNZXNzYWdlcyhfc3RkT3V0LCBzdGRFcnIpIHtcbiAgICByZXR1cm4gdXRpbHNfMS5wYXJzZVN0cmluZ1Jlc3BvbnNlKHsgcmVtb3RlTWVzc2FnZXM6IG5ldyBSZW1vdGVNZXNzYWdlU3VtbWFyeSgpIH0sIHBhcnNlcnMsIHN0ZEVycik7XG59XG5leHBvcnRzLnBhcnNlUmVtb3RlTWVzc2FnZXMgPSBwYXJzZVJlbW90ZU1lc3NhZ2VzO1xuY2xhc3MgUmVtb3RlTWVzc2FnZVN1bW1hcnkge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFsbCA9IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuUmVtb3RlTWVzc2FnZVN1bW1hcnkgPSBSZW1vdGVNZXNzYWdlU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLXJlbW90ZS1tZXNzYWdlcy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucGFyc2VQdXNoRGV0YWlsID0gZXhwb3J0cy5wYXJzZVB1c2hSZXN1bHQgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VfcmVtb3RlX21lc3NhZ2VzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS1yZW1vdGUtbWVzc2FnZXNcIik7XG5mdW5jdGlvbiBwdXNoUmVzdWx0UHVzaGVkSXRlbShsb2NhbCwgcmVtb3RlLCBzdGF0dXMpIHtcbiAgICBjb25zdCBkZWxldGVkID0gc3RhdHVzLmluY2x1ZGVzKCdkZWxldGVkJyk7XG4gICAgY29uc3QgdGFnID0gc3RhdHVzLmluY2x1ZGVzKCd0YWcnKSB8fCAvXnJlZnNcXC90YWdzLy50ZXN0KGxvY2FsKTtcbiAgICBjb25zdCBhbHJlYWR5VXBkYXRlZCA9ICFzdGF0dXMuaW5jbHVkZXMoJ25ldycpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGRlbGV0ZWQsXG4gICAgICAgIHRhZyxcbiAgICAgICAgYnJhbmNoOiAhdGFnLFxuICAgICAgICBuZXc6ICFhbHJlYWR5VXBkYXRlZCxcbiAgICAgICAgYWxyZWFkeVVwZGF0ZWQsXG4gICAgICAgIGxvY2FsLFxuICAgICAgICByZW1vdGUsXG4gICAgfTtcbn1cbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXlB1c2hpbmcgdG8gKC4rKSQvLCAocmVzdWx0LCBbcmVwb10pID0+IHtcbiAgICAgICAgcmVzdWx0LnJlcG8gPSByZXBvO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL151cGRhdGluZyBsb2NhbCB0cmFja2luZyByZWYgJyguKyknLywgKHJlc3VsdCwgW2xvY2FsXSkgPT4ge1xuICAgICAgICByZXN1bHQucmVmID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCAocmVzdWx0LnJlZiB8fCB7fSkpLCB7IGxvY2FsIH0pO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15bKi09XVxccysoW146XSspOihcXFMrKVxccytcXFsoLispXSQvLCAocmVzdWx0LCBbbG9jYWwsIHJlbW90ZSwgdHlwZV0pID0+IHtcbiAgICAgICAgcmVzdWx0LnB1c2hlZC5wdXNoKHB1c2hSZXN1bHRQdXNoZWRJdGVtKGxvY2FsLCByZW1vdGUsIHR5cGUpKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQnJhbmNoICcoW14nXSspJyBzZXQgdXAgdG8gdHJhY2sgcmVtb3RlIGJyYW5jaCAnKFteJ10rKScgZnJvbSAnKFteJ10rKScvLCAocmVzdWx0LCBbbG9jYWwsIHJlbW90ZSwgcmVtb3RlTmFtZV0pID0+IHtcbiAgICAgICAgcmVzdWx0LmJyYW5jaCA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgKHJlc3VsdC5icmFuY2ggfHwge30pKSwgeyBsb2NhbCxcbiAgICAgICAgICAgIHJlbW90ZSxcbiAgICAgICAgICAgIHJlbW90ZU5hbWUgfSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXihbXjpdKyk6KFxcUyspXFxzKyhbYS16MC05XSspXFwuXFwuKFthLXowLTldKykkLywgKHJlc3VsdCwgW2xvY2FsLCByZW1vdGUsIGZyb20sIHRvXSkgPT4ge1xuICAgICAgICByZXN1bHQudXBkYXRlID0ge1xuICAgICAgICAgICAgaGVhZDoge1xuICAgICAgICAgICAgICAgIGxvY2FsLFxuICAgICAgICAgICAgICAgIHJlbW90ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBoYXNoOiB7XG4gICAgICAgICAgICAgICAgZnJvbSxcbiAgICAgICAgICAgICAgICB0byxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgfSksXG5dO1xuY29uc3QgcGFyc2VQdXNoUmVzdWx0ID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgY29uc3QgcHVzaERldGFpbCA9IGV4cG9ydHMucGFyc2VQdXNoRGV0YWlsKHN0ZE91dCwgc3RkRXJyKTtcbiAgICBjb25zdCByZXNwb25zZURldGFpbCA9IHBhcnNlX3JlbW90ZV9tZXNzYWdlc18xLnBhcnNlUmVtb3RlTWVzc2FnZXMoc3RkT3V0LCBzdGRFcnIpO1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIHB1c2hEZXRhaWwpLCByZXNwb25zZURldGFpbCk7XG59O1xuZXhwb3J0cy5wYXJzZVB1c2hSZXN1bHQgPSBwYXJzZVB1c2hSZXN1bHQ7XG5jb25zdCBwYXJzZVB1c2hEZXRhaWwgPSAoc3RkT3V0LCBzdGRFcnIpID0+IHtcbiAgICByZXR1cm4gdXRpbHNfMS5wYXJzZVN0cmluZ1Jlc3BvbnNlKHsgcHVzaGVkOiBbXSB9LCBwYXJzZXJzLCBzdGRPdXQsIHN0ZEVycik7XG59O1xuZXhwb3J0cy5wYXJzZVB1c2hEZXRhaWwgPSBwYXJzZVB1c2hEZXRhaWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1wdXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wdXNoVGFzayA9IGV4cG9ydHMucHVzaFRhZ3NUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfcHVzaF8xID0gcmVxdWlyZShcIi4uL3BhcnNlcnMvcGFyc2UtcHVzaFwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBwdXNoVGFnc1Rhc2socmVmID0ge30sIGN1c3RvbUFyZ3MpIHtcbiAgICB1dGlsc18xLmFwcGVuZChjdXN0b21BcmdzLCAnLS10YWdzJyk7XG4gICAgcmV0dXJuIHB1c2hUYXNrKHJlZiwgY3VzdG9tQXJncyk7XG59XG5leHBvcnRzLnB1c2hUYWdzVGFzayA9IHB1c2hUYWdzVGFzaztcbmZ1bmN0aW9uIHB1c2hUYXNrKHJlZiA9IHt9LCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ3B1c2gnLCAuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAocmVmLmJyYW5jaCkge1xuICAgICAgICBjb21tYW5kcy5zcGxpY2UoMSwgMCwgcmVmLmJyYW5jaCk7XG4gICAgfVxuICAgIGlmIChyZWYucmVtb3RlKSB7XG4gICAgICAgIGNvbW1hbmRzLnNwbGljZSgxLCAwLCByZWYucmVtb3RlKTtcbiAgICB9XG4gICAgdXRpbHNfMS5yZW1vdmUoY29tbWFuZHMsICctdicpO1xuICAgIHV0aWxzXzEuYXBwZW5kKGNvbW1hbmRzLCAnLS12ZXJib3NlJyk7XG4gICAgdXRpbHNfMS5hcHBlbmQoY29tbWFuZHMsICctLXBvcmNlbGFpbicpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcjogcGFyc2VfcHVzaF8xLnBhcnNlUHVzaFJlc3VsdCxcbiAgICB9O1xufVxuZXhwb3J0cy5wdXNoVGFzayA9IHB1c2hUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cHVzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2ltcGxlR2l0QXBpID0gdm9pZCAwO1xuY29uc3QgdGFza19jYWxsYmFja18xID0gcmVxdWlyZShcIi4vdGFzay1jYWxsYmFja1wiKTtcbmNvbnN0IHB1c2hfMSA9IHJlcXVpcmUoXCIuL3Rhc2tzL3B1c2hcIik7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi90YXNrcy90YXNrXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuY2xhc3MgU2ltcGxlR2l0QXBpIHtcbiAgICBjb25zdHJ1Y3RvcihfZXhlY3V0b3IpIHtcbiAgICAgICAgdGhpcy5fZXhlY3V0b3IgPSBfZXhlY3V0b3I7XG4gICAgfVxuICAgIF9ydW5UYXNrKHRhc2ssIHRoZW4pIHtcbiAgICAgICAgY29uc3QgY2hhaW4gPSB0aGlzLl9leGVjdXRvci5jaGFpbigpO1xuICAgICAgICBjb25zdCBwcm9taXNlID0gY2hhaW4ucHVzaCh0YXNrKTtcbiAgICAgICAgaWYgKHRoZW4pIHtcbiAgICAgICAgICAgIHRhc2tfY2FsbGJhY2tfMS50YXNrQ2FsbGJhY2sodGFzaywgcHJvbWlzZSwgdGhlbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUodGhpcywge1xuICAgICAgICAgICAgdGhlbjogeyB2YWx1ZTogcHJvbWlzZS50aGVuLmJpbmQocHJvbWlzZSkgfSxcbiAgICAgICAgICAgIGNhdGNoOiB7IHZhbHVlOiBwcm9taXNlLmNhdGNoLmJpbmQocHJvbWlzZSkgfSxcbiAgICAgICAgICAgIF9leGVjdXRvcjogeyB2YWx1ZTogY2hhaW4gfSxcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFkZChmaWxlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ2FkZCcsIC4uLnV0aWxzXzEuYXNBcnJheShmaWxlcyldKSwgdXRpbHNfMS50cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG4gICAgfVxuICAgIHB1c2goKSB7XG4gICAgICAgIGNvbnN0IHRhc2sgPSBwdXNoXzEucHVzaFRhc2soe1xuICAgICAgICAgICAgcmVtb3RlOiB1dGlsc18xLmZpbHRlclR5cGUoYXJndW1lbnRzWzBdLCB1dGlsc18xLmZpbHRlclN0cmluZyksXG4gICAgICAgICAgICBicmFuY2g6IHV0aWxzXzEuZmlsdGVyVHlwZShhcmd1bWVudHNbMV0sIHV0aWxzXzEuZmlsdGVyU3RyaW5nKSxcbiAgICAgICAgfSwgdXRpbHNfMS5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSk7XG4gICAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2ssIHV0aWxzXzEudHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xuICAgIH1cbn1cbmV4cG9ydHMuU2ltcGxlR2l0QXBpID0gU2ltcGxlR2l0QXBpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2ltcGxlLWdpdC1hcGkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNyZWF0ZURlZmVycmVkID0gZXhwb3J0cy5kZWZlcnJlZCA9IHZvaWQgMDtcbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBgRGVmZXJyZWRQcm9taXNlYFxuICpcbiAqIGBgYHR5cGVzY3JpcHRcbiBpbXBvcnQge2RlZmVycmVkfSBmcm9tICdAa3dzaXRlcy9wcm9taXNlLWRlZmVycmVkYDtcbiBgYGBcbiAqL1xuZnVuY3Rpb24gZGVmZXJyZWQoKSB7XG4gICAgbGV0IGRvbmU7XG4gICAgbGV0IGZhaWw7XG4gICAgbGV0IHN0YXR1cyA9ICdwZW5kaW5nJztcbiAgICBjb25zdCBwcm9taXNlID0gbmV3IFByb21pc2UoKF9kb25lLCBfZmFpbCkgPT4ge1xuICAgICAgICBkb25lID0gX2RvbmU7XG4gICAgICAgIGZhaWwgPSBfZmFpbDtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9taXNlLFxuICAgICAgICBkb25lKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gJ3BlbmRpbmcnKSB7XG4gICAgICAgICAgICAgICAgc3RhdHVzID0gJ3Jlc29sdmVkJztcbiAgICAgICAgICAgICAgICBkb25lKHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhaWwoZXJyb3IpIHtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09ICdwZW5kaW5nJykge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9ICdyZWplY3RlZCc7XG4gICAgICAgICAgICAgICAgZmFpbChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBmdWxmaWxsZWQoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdHVzICE9PSAncGVuZGluZyc7XG4gICAgICAgIH0sXG4gICAgICAgIGdldCBzdGF0dXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmRlZmVycmVkID0gZGVmZXJyZWQ7XG4vKipcbiAqIEFsaWFzIG9mIHRoZSBleHBvcnRlZCBgZGVmZXJyZWRgIGZ1bmN0aW9uLCB0byBoZWxwIGNvbnN1bWVycyB3YW50aW5nIHRvIHVzZSBgZGVmZXJyZWRgIGFzIHRoZVxuICogbG9jYWwgdmFyaWFibGUgbmFtZSByYXRoZXIgdGhhbiB0aGUgZmFjdG9yeSBpbXBvcnQgbmFtZSwgd2l0aG91dCBuZWVkaW5nIHRvIHJlbmFtZSBvbiBpbXBvcnQuXG4gKlxuICogYGBgdHlwZXNjcmlwdFxuIGltcG9ydCB7Y3JlYXRlRGVmZXJyZWR9IGZyb20gJ0Brd3NpdGVzL3Byb21pc2UtZGVmZXJyZWRgO1xuIGBgYFxuICovXG5leHBvcnRzLmNyZWF0ZURlZmVycmVkID0gZGVmZXJyZWQ7XG4vKipcbiAqIERlZmF1bHQgZXhwb3J0IGFsbG93cyB1c2UgYXM6XG4gKlxuICogYGBgdHlwZXNjcmlwdFxuIGltcG9ydCBkZWZlcnJlZCBmcm9tICdAa3dzaXRlcy9wcm9taXNlLWRlZmVycmVkYDtcbiBgYGBcbiAqL1xuZXhwb3J0cy5kZWZhdWx0ID0gZGVmZXJyZWQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2NoZWR1bGVyID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHByb21pc2VfZGVmZXJyZWRfMSA9IHJlcXVpcmUoXCJAa3dzaXRlcy9wcm9taXNlLWRlZmVycmVkXCIpO1xuY29uc3QgZ2l0X2xvZ2dlcl8xID0gcmVxdWlyZShcIi4uL2dpdC1sb2dnZXJcIik7XG5jb25zdCBsb2dnZXIgPSBnaXRfbG9nZ2VyXzEuY3JlYXRlTG9nZ2VyKCcnLCAnc2NoZWR1bGVyJyk7XG5jb25zdCBjcmVhdGVTY2hlZHVsZWRUYXNrID0gKCgpID0+IHtcbiAgICBsZXQgaWQgPSAwO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICAgIGlkKys7XG4gICAgICAgIGNvbnN0IHsgcHJvbWlzZSwgZG9uZSB9ID0gcHJvbWlzZV9kZWZlcnJlZF8xLmNyZWF0ZURlZmVycmVkKCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwcm9taXNlLFxuICAgICAgICAgICAgZG9uZSxcbiAgICAgICAgICAgIGlkLFxuICAgICAgICB9O1xuICAgIH07XG59KSgpO1xuY2xhc3MgU2NoZWR1bGVyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb25jdXJyZW5jeSA9IDIpIHtcbiAgICAgICAgdGhpcy5jb25jdXJyZW5jeSA9IGNvbmN1cnJlbmN5O1xuICAgICAgICB0aGlzLnBlbmRpbmcgPSBbXTtcbiAgICAgICAgdGhpcy5ydW5uaW5nID0gW107XG4gICAgICAgIGxvZ2dlcihgQ29uc3RydWN0ZWQsIGNvbmN1cnJlbmN5PSVzYCwgY29uY3VycmVuY3kpO1xuICAgIH1cbiAgICBzY2hlZHVsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBlbmRpbmcubGVuZ3RoIHx8IHRoaXMucnVubmluZy5sZW5ndGggPj0gdGhpcy5jb25jdXJyZW5jeSkge1xuICAgICAgICAgICAgbG9nZ2VyKGBTY2hlZHVsZSBhdHRlbXB0IGlnbm9yZWQsIHBlbmRpbmc9JXMgcnVubmluZz0lcyBjb25jdXJyZW5jeT0lc2AsIHRoaXMucGVuZGluZy5sZW5ndGgsIHRoaXMucnVubmluZy5sZW5ndGgsIHRoaXMuY29uY3VycmVuY3kpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRhc2sgPSB1dGlsc18xLmFwcGVuZCh0aGlzLnJ1bm5pbmcsIHRoaXMucGVuZGluZy5zaGlmdCgpKTtcbiAgICAgICAgbG9nZ2VyKGBBdHRlbXB0aW5nIGlkPSVzYCwgdGFzay5pZCk7XG4gICAgICAgIHRhc2suZG9uZSgoKSA9PiB7XG4gICAgICAgICAgICBsb2dnZXIoYENvbXBsZXRpbmcgaWQ9YCwgdGFzay5pZCk7XG4gICAgICAgICAgICB1dGlsc18xLnJlbW92ZSh0aGlzLnJ1bm5pbmcsIHRhc2spO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbmV4dCgpIHtcbiAgICAgICAgY29uc3QgeyBwcm9taXNlLCBpZCB9ID0gdXRpbHNfMS5hcHBlbmQodGhpcy5wZW5kaW5nLCBjcmVhdGVTY2hlZHVsZWRUYXNrKCkpO1xuICAgICAgICBsb2dnZXIoYFNjaGVkdWxpbmcgaWQ9JXNgLCBpZCk7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxufVxuZXhwb3J0cy5TY2hlZHVsZXIgPSBTY2hlZHVsZXI7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zY2hlZHVsZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFwcGx5UGF0Y2hUYXNrID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmZ1bmN0aW9uIGFwcGx5UGF0Y2hUYXNrKHBhdGNoZXMsIGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydhcHBseScsIC4uLmN1c3RvbUFyZ3MsIC4uLnBhdGNoZXNdKTtcbn1cbmV4cG9ydHMuYXBwbHlQYXRjaFRhc2sgPSBhcHBseVBhdGNoVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcGx5LXBhdGNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5pc1NpbmdsZUJyYW5jaERlbGV0ZUZhaWx1cmUgPSBleHBvcnRzLmJyYW5jaERlbGV0aW9uRmFpbHVyZSA9IGV4cG9ydHMuYnJhbmNoRGVsZXRpb25TdWNjZXNzID0gZXhwb3J0cy5CcmFuY2hEZWxldGlvbkJhdGNoID0gdm9pZCAwO1xuY2xhc3MgQnJhbmNoRGVsZXRpb25CYXRjaCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWxsID0gW107XG4gICAgICAgIHRoaXMuYnJhbmNoZXMgPSB7fTtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBbXTtcbiAgICB9XG4gICAgZ2V0IHN1Y2Nlc3MoKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5lcnJvcnMubGVuZ3RoO1xuICAgIH1cbn1cbmV4cG9ydHMuQnJhbmNoRGVsZXRpb25CYXRjaCA9IEJyYW5jaERlbGV0aW9uQmF0Y2g7XG5mdW5jdGlvbiBicmFuY2hEZWxldGlvblN1Y2Nlc3MoYnJhbmNoLCBoYXNoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgYnJhbmNoLCBoYXNoLCBzdWNjZXNzOiB0cnVlLFxuICAgIH07XG59XG5leHBvcnRzLmJyYW5jaERlbGV0aW9uU3VjY2VzcyA9IGJyYW5jaERlbGV0aW9uU3VjY2VzcztcbmZ1bmN0aW9uIGJyYW5jaERlbGV0aW9uRmFpbHVyZShicmFuY2gpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBicmFuY2gsIGhhc2g6IG51bGwsIHN1Y2Nlc3M6IGZhbHNlLFxuICAgIH07XG59XG5leHBvcnRzLmJyYW5jaERlbGV0aW9uRmFpbHVyZSA9IGJyYW5jaERlbGV0aW9uRmFpbHVyZTtcbmZ1bmN0aW9uIGlzU2luZ2xlQnJhbmNoRGVsZXRlRmFpbHVyZSh0ZXN0KSB7XG4gICAgcmV0dXJuIHRlc3Quc3VjY2Vzcztcbn1cbmV4cG9ydHMuaXNTaW5nbGVCcmFuY2hEZWxldGVGYWlsdXJlID0gaXNTaW5nbGVCcmFuY2hEZWxldGVGYWlsdXJlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QnJhbmNoRGVsZXRlU3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaGFzQnJhbmNoRGVsZXRpb25FcnJvciA9IGV4cG9ydHMucGFyc2VCcmFuY2hEZWxldGlvbnMgPSB2b2lkIDA7XG5jb25zdCBCcmFuY2hEZWxldGVTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0JyYW5jaERlbGV0ZVN1bW1hcnlcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgZGVsZXRlU3VjY2Vzc1JlZ2V4ID0gLyhcXFMrKVxccytcXChcXFMrXFxzKFteKV0rKVxcKS87XG5jb25zdCBkZWxldGVFcnJvclJlZ2V4ID0gL15lcnJvclteJ10rJyhbXiddKyknL207XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoZGVsZXRlU3VjY2Vzc1JlZ2V4LCAocmVzdWx0LCBbYnJhbmNoLCBoYXNoXSkgPT4ge1xuICAgICAgICBjb25zdCBkZWxldGlvbiA9IEJyYW5jaERlbGV0ZVN1bW1hcnlfMS5icmFuY2hEZWxldGlvblN1Y2Nlc3MoYnJhbmNoLCBoYXNoKTtcbiAgICAgICAgcmVzdWx0LmFsbC5wdXNoKGRlbGV0aW9uKTtcbiAgICAgICAgcmVzdWx0LmJyYW5jaGVzW2JyYW5jaF0gPSBkZWxldGlvbjtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKGRlbGV0ZUVycm9yUmVnZXgsIChyZXN1bHQsIFticmFuY2hdKSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbGV0aW9uID0gQnJhbmNoRGVsZXRlU3VtbWFyeV8xLmJyYW5jaERlbGV0aW9uRmFpbHVyZShicmFuY2gpO1xuICAgICAgICByZXN1bHQuZXJyb3JzLnB1c2goZGVsZXRpb24pO1xuICAgICAgICByZXN1bHQuYWxsLnB1c2goZGVsZXRpb24pO1xuICAgICAgICByZXN1bHQuYnJhbmNoZXNbYnJhbmNoXSA9IGRlbGV0aW9uO1xuICAgIH0pLFxuXTtcbmNvbnN0IHBhcnNlQnJhbmNoRGVsZXRpb25zID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShuZXcgQnJhbmNoRGVsZXRlU3VtbWFyeV8xLkJyYW5jaERlbGV0aW9uQmF0Y2goKSwgcGFyc2Vycywgc3RkT3V0LCBzdGRFcnIpO1xufTtcbmV4cG9ydHMucGFyc2VCcmFuY2hEZWxldGlvbnMgPSBwYXJzZUJyYW5jaERlbGV0aW9ucztcbmZ1bmN0aW9uIGhhc0JyYW5jaERlbGV0aW9uRXJyb3IoZGF0YSwgcHJvY2Vzc0V4aXRDb2RlKSB7XG4gICAgcmV0dXJuIHByb2Nlc3NFeGl0Q29kZSA9PT0gdXRpbHNfMS5FeGl0Q29kZXMuRVJST1IgJiYgZGVsZXRlRXJyb3JSZWdleC50ZXN0KGRhdGEpO1xufVxuZXhwb3J0cy5oYXNCcmFuY2hEZWxldGlvbkVycm9yID0gaGFzQnJhbmNoRGVsZXRpb25FcnJvcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWJyYW5jaC1kZWxldGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkJyYW5jaFN1bW1hcnlSZXN1bHQgPSB2b2lkIDA7XG5jbGFzcyBCcmFuY2hTdW1tYXJ5UmVzdWx0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hbGwgPSBbXTtcbiAgICAgICAgdGhpcy5icmFuY2hlcyA9IHt9O1xuICAgICAgICB0aGlzLmN1cnJlbnQgPSAnJztcbiAgICAgICAgdGhpcy5kZXRhY2hlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBwdXNoKGN1cnJlbnQsIGRldGFjaGVkLCBuYW1lLCBjb21taXQsIGxhYmVsKSB7XG4gICAgICAgIGlmIChjdXJyZW50KSB7XG4gICAgICAgICAgICB0aGlzLmRldGFjaGVkID0gZGV0YWNoZWQ7XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnQgPSBuYW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuYWxsLnB1c2gobmFtZSk7XG4gICAgICAgIHRoaXMuYnJhbmNoZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICBjdXJyZW50OiBjdXJyZW50LFxuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIGNvbW1pdDogY29tbWl0LFxuICAgICAgICAgICAgbGFiZWw6IGxhYmVsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5CcmFuY2hTdW1tYXJ5UmVzdWx0ID0gQnJhbmNoU3VtbWFyeVJlc3VsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUJyYW5jaFN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlQnJhbmNoU3VtbWFyeSA9IHZvaWQgMDtcbmNvbnN0IEJyYW5jaFN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQnJhbmNoU3VtbWFyeVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL14oXFwqXFxzKT9cXCgoPzpIRUFEICk/ZGV0YWNoZWQgKD86ZnJvbXxhdCkgKFxcUyspXFwpXFxzKyhbYS16MC05XSspXFxzKC4qKSQvLCAocmVzdWx0LCBbY3VycmVudCwgbmFtZSwgY29tbWl0LCBsYWJlbF0pID0+IHtcbiAgICAgICAgcmVzdWx0LnB1c2goISFjdXJyZW50LCB0cnVlLCBuYW1lLCBjb21taXQsIGxhYmVsKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eKFxcKlxccyk/KFxcUyspXFxzKyhbYS16MC05XSspXFxzKC4qKSQvcywgKHJlc3VsdCwgW2N1cnJlbnQsIG5hbWUsIGNvbW1pdCwgbGFiZWxdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5wdXNoKCEhY3VycmVudCwgZmFsc2UsIG5hbWUsIGNvbW1pdCwgbGFiZWwpO1xuICAgIH0pXG5dO1xuZnVuY3Rpb24gcGFyc2VCcmFuY2hTdW1tYXJ5KHN0ZE91dCkge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UobmV3IEJyYW5jaFN1bW1hcnlfMS5CcmFuY2hTdW1tYXJ5UmVzdWx0KCksIHBhcnNlcnMsIHN0ZE91dCk7XG59XG5leHBvcnRzLnBhcnNlQnJhbmNoU3VtbWFyeSA9IHBhcnNlQnJhbmNoU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWJyYW5jaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGVsZXRlQnJhbmNoVGFzayA9IGV4cG9ydHMuZGVsZXRlQnJhbmNoZXNUYXNrID0gZXhwb3J0cy5icmFuY2hMb2NhbFRhc2sgPSBleHBvcnRzLmJyYW5jaFRhc2sgPSBleHBvcnRzLmNvbnRhaW5zRGVsZXRlQnJhbmNoQ29tbWFuZCA9IHZvaWQgMDtcbmNvbnN0IGdpdF9yZXNwb25zZV9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtcmVzcG9uc2UtZXJyb3JcIik7XG5jb25zdCBwYXJzZV9icmFuY2hfZGVsZXRlXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1icmFuY2gtZGVsZXRlXCIpO1xuY29uc3QgcGFyc2VfYnJhbmNoXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1icmFuY2hcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kKGNvbW1hbmRzKSB7XG4gICAgY29uc3QgZGVsZXRlQ29tbWFuZHMgPSBbJy1kJywgJy1EJywgJy0tZGVsZXRlJ107XG4gICAgcmV0dXJuIGNvbW1hbmRzLnNvbWUoY29tbWFuZCA9PiBkZWxldGVDb21tYW5kcy5pbmNsdWRlcyhjb21tYW5kKSk7XG59XG5leHBvcnRzLmNvbnRhaW5zRGVsZXRlQnJhbmNoQ29tbWFuZCA9IGNvbnRhaW5zRGVsZXRlQnJhbmNoQ29tbWFuZDtcbmZ1bmN0aW9uIGJyYW5jaFRhc2soY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGlzRGVsZXRlID0gY29udGFpbnNEZWxldGVCcmFuY2hDb21tYW5kKGN1c3RvbUFyZ3MpO1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydicmFuY2gnLCAuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoY29tbWFuZHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbW1hbmRzLnB1c2goJy1hJyk7XG4gICAgfVxuICAgIGlmICghY29tbWFuZHMuaW5jbHVkZXMoJy12JykpIHtcbiAgICAgICAgY29tbWFuZHMuc3BsaWNlKDEsIDAsICctdicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBwYXJzZXIoc3RkT3V0LCBzdGRFcnIpIHtcbiAgICAgICAgICAgIGlmIChpc0RlbGV0ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZV9icmFuY2hfZGVsZXRlXzEucGFyc2VCcmFuY2hEZWxldGlvbnMoc3RkT3V0LCBzdGRFcnIpLmFsbFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXJzZV9icmFuY2hfMS5wYXJzZUJyYW5jaFN1bW1hcnkoc3RkT3V0KTtcbiAgICAgICAgfSxcbiAgICB9O1xufVxuZXhwb3J0cy5icmFuY2hUYXNrID0gYnJhbmNoVGFzaztcbmZ1bmN0aW9uIGJyYW5jaExvY2FsVGFzaygpIHtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZV9icmFuY2hfMS5wYXJzZUJyYW5jaFN1bW1hcnk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBjb21tYW5kczogWydicmFuY2gnLCAnLXYnXSxcbiAgICAgICAgcGFyc2VyLFxuICAgIH07XG59XG5leHBvcnRzLmJyYW5jaExvY2FsVGFzayA9IGJyYW5jaExvY2FsVGFzaztcbmZ1bmN0aW9uIGRlbGV0ZUJyYW5jaGVzVGFzayhicmFuY2hlcywgZm9yY2VEZWxldGUgPSBmYWxzZSkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgY29tbWFuZHM6IFsnYnJhbmNoJywgJy12JywgZm9yY2VEZWxldGUgPyAnLUQnIDogJy1kJywgLi4uYnJhbmNoZXNdLFxuICAgICAgICBwYXJzZXIoc3RkT3V0LCBzdGRFcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBwYXJzZV9icmFuY2hfZGVsZXRlXzEucGFyc2VCcmFuY2hEZWxldGlvbnMoc3RkT3V0LCBzdGRFcnIpO1xuICAgICAgICB9LFxuICAgICAgICBvbkVycm9yKHsgZXhpdENvZGUsIHN0ZE91dCB9LCBlcnJvciwgZG9uZSwgZmFpbCkge1xuICAgICAgICAgICAgaWYgKCFwYXJzZV9icmFuY2hfZGVsZXRlXzEuaGFzQnJhbmNoRGVsZXRpb25FcnJvcihTdHJpbmcoZXJyb3IpLCBleGl0Q29kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb25lKHN0ZE91dCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMuZGVsZXRlQnJhbmNoZXNUYXNrID0gZGVsZXRlQnJhbmNoZXNUYXNrO1xuZnVuY3Rpb24gZGVsZXRlQnJhbmNoVGFzayhicmFuY2gsIGZvcmNlRGVsZXRlID0gZmFsc2UpIHtcbiAgICBjb25zdCB0YXNrID0ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ2JyYW5jaCcsICctdicsIGZvcmNlRGVsZXRlID8gJy1EJyA6ICctZCcsIGJyYW5jaF0sXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlX2JyYW5jaF9kZWxldGVfMS5wYXJzZUJyYW5jaERlbGV0aW9ucyhzdGRPdXQsIHN0ZEVycikuYnJhbmNoZXNbYnJhbmNoXTtcbiAgICAgICAgfSxcbiAgICAgICAgb25FcnJvcih7IGV4aXRDb2RlLCBzdGRFcnIsIHN0ZE91dCB9LCBlcnJvciwgXywgZmFpbCkge1xuICAgICAgICAgICAgaWYgKCFwYXJzZV9icmFuY2hfZGVsZXRlXzEuaGFzQnJhbmNoRGVsZXRpb25FcnJvcihTdHJpbmcoZXJyb3IpLCBleGl0Q29kZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFpbChlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEuR2l0UmVzcG9uc2VFcnJvcih0YXNrLnBhcnNlcih1dGlsc18xLmJ1ZmZlclRvU3RyaW5nKHN0ZE91dCksIHV0aWxzXzEuYnVmZmVyVG9TdHJpbmcoc3RkRXJyKSksIFN0cmluZyhlcnJvcikpO1xuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHRhc2s7XG59XG5leHBvcnRzLmRlbGV0ZUJyYW5jaFRhc2sgPSBkZWxldGVCcmFuY2hUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YnJhbmNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZUNoZWNrSWdub3JlID0gdm9pZCAwO1xuLyoqXG4gKiBQYXJzZXIgZm9yIHRoZSBgY2hlY2staWdub3JlYCBjb21tYW5kIC0gcmV0dXJucyBlYWNoIGZpbGUgYXMgYSBzdHJpbmcgYXJyYXlcbiAqL1xuY29uc3QgcGFyc2VDaGVja0lnbm9yZSA9ICh0ZXh0KSA9PiB7XG4gICAgcmV0dXJuIHRleHQuc3BsaXQoL1xcbi9nKVxuICAgICAgICAubWFwKGxpbmUgPT4gbGluZS50cmltKCkpXG4gICAgICAgIC5maWx0ZXIoZmlsZSA9PiAhIWZpbGUpO1xufTtcbmV4cG9ydHMucGFyc2VDaGVja0lnbm9yZSA9IHBhcnNlQ2hlY2tJZ25vcmU7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1DaGVja0lnbm9yZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY2hlY2tJZ25vcmVUYXNrID0gdm9pZCAwO1xuY29uc3QgQ2hlY2tJZ25vcmVfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvQ2hlY2tJZ25vcmVcIik7XG5mdW5jdGlvbiBjaGVja0lnbm9yZVRhc2socGF0aHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogWydjaGVjay1pZ25vcmUnLCAuLi5wYXRoc10sXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiBDaGVja0lnbm9yZV8xLnBhcnNlQ2hlY2tJZ25vcmUsXG4gICAgfTtcbn1cbmV4cG9ydHMuY2hlY2tJZ25vcmVUYXNrID0gY2hlY2tJZ25vcmVUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hlY2staWdub3JlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jbG9uZU1pcnJvclRhc2sgPSBleHBvcnRzLmNsb25lVGFzayA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gY2xvbmVUYXNrKHJlcG8sIGRpcmVjdG9yeSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydjbG9uZScsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmICh0eXBlb2YgcmVwbyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaChyZXBvKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBkaXJlY3RvcnkgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGNvbW1hbmRzLnB1c2goZGlyZWN0b3J5KTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmRzKTtcbn1cbmV4cG9ydHMuY2xvbmVUYXNrID0gY2xvbmVUYXNrO1xuZnVuY3Rpb24gY2xvbmVNaXJyb3JUYXNrKHJlcG8sIGRpcmVjdG9yeSwgY3VzdG9tQXJncykge1xuICAgIHV0aWxzXzEuYXBwZW5kKGN1c3RvbUFyZ3MsICctLW1pcnJvcicpO1xuICAgIHJldHVybiBjbG9uZVRhc2socmVwbywgZGlyZWN0b3J5LCBjdXN0b21BcmdzKTtcbn1cbmV4cG9ydHMuY2xvbmVNaXJyb3JUYXNrID0gY2xvbmVNaXJyb3JUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2xvbmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbmZpZ0xpc3RQYXJzZXIgPSBleHBvcnRzLkNvbmZpZ0xpc3QgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY2xhc3MgQ29uZmlnTGlzdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZmlsZXMgPSBbXTtcbiAgICAgICAgdGhpcy52YWx1ZXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIH1cbiAgICBnZXQgYWxsKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2FsbCkge1xuICAgICAgICAgICAgdGhpcy5fYWxsID0gdGhpcy5maWxlcy5yZWR1Y2UoKGFsbCwgZmlsZSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKGFsbCwgdGhpcy52YWx1ZXNbZmlsZV0pO1xuICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9hbGw7XG4gICAgfVxuICAgIGFkZEZpbGUoZmlsZSkge1xuICAgICAgICBpZiAoIShmaWxlIGluIHRoaXMudmFsdWVzKSkge1xuICAgICAgICAgICAgY29uc3QgbGF0ZXN0ID0gdXRpbHNfMS5sYXN0KHRoaXMuZmlsZXMpO1xuICAgICAgICAgICAgdGhpcy52YWx1ZXNbZmlsZV0gPSBsYXRlc3QgPyBPYmplY3QuY3JlYXRlKHRoaXMudmFsdWVzW2xhdGVzdF0pIDoge307XG4gICAgICAgICAgICB0aGlzLmZpbGVzLnB1c2goZmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsdWVzW2ZpbGVdO1xuICAgIH1cbiAgICBhZGRWYWx1ZShmaWxlLCBrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuYWRkRmlsZShmaWxlKTtcbiAgICAgICAgaWYgKCF2YWx1ZXMuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgdmFsdWVzW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChBcnJheS5pc0FycmF5KHZhbHVlc1trZXldKSkge1xuICAgICAgICAgICAgdmFsdWVzW2tleV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZXNba2V5XSA9IFt2YWx1ZXNba2V5XSwgdmFsdWVdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2FsbCA9IHVuZGVmaW5lZDtcbiAgICB9XG59XG5leHBvcnRzLkNvbmZpZ0xpc3QgPSBDb25maWdMaXN0O1xuZnVuY3Rpb24gY29uZmlnTGlzdFBhcnNlcih0ZXh0KSB7XG4gICAgY29uc3QgY29uZmlnID0gbmV3IENvbmZpZ0xpc3QoKTtcbiAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcMCcpO1xuICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBsaW5lcy5sZW5ndGggLSAxOyBpIDwgbWF4Oykge1xuICAgICAgICBjb25zdCBmaWxlID0gY29uZmlnRmlsZVBhdGgobGluZXNbaSsrXSk7XG4gICAgICAgIGNvbnN0IFtrZXksIHZhbHVlXSA9IHV0aWxzXzEuc3BsaXRPbihsaW5lc1tpKytdLCAnXFxuJyk7XG4gICAgICAgIGNvbmZpZy5hZGRWYWx1ZShmaWxlLCBrZXksIHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIGNvbmZpZztcbn1cbmV4cG9ydHMuY29uZmlnTGlzdFBhcnNlciA9IGNvbmZpZ0xpc3RQYXJzZXI7XG5mdW5jdGlvbiBjb25maWdGaWxlUGF0aChmaWxlUGF0aCkge1xuICAgIHJldHVybiBmaWxlUGF0aC5yZXBsYWNlKC9eKGZpbGUpOi8sICcnKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUNvbmZpZ0xpc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxpc3RDb25maWdUYXNrID0gZXhwb3J0cy5hZGRDb25maWdUYXNrID0gdm9pZCAwO1xuY29uc3QgQ29uZmlnTGlzdF8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9Db25maWdMaXN0XCIpO1xuZnVuY3Rpb24gYWRkQ29uZmlnVGFzayhrZXksIHZhbHVlLCBhcHBlbmQgPSBmYWxzZSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydjb25maWcnLCAnLS1sb2NhbCddO1xuICAgIGlmIChhcHBlbmQpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaCgnLS1hZGQnKTtcbiAgICB9XG4gICAgY29tbWFuZHMucHVzaChrZXksIHZhbHVlKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIHRleHQ7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5hZGRDb25maWdUYXNrID0gYWRkQ29uZmlnVGFzaztcbmZ1bmN0aW9uIGxpc3RDb25maWdUYXNrKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ2NvbmZpZycsICctLWxpc3QnLCAnLS1zaG93LW9yaWdpbicsICctLW51bGwnXSxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIENvbmZpZ0xpc3RfMS5jb25maWdMaXN0UGFyc2VyKHRleHQpO1xuICAgICAgICB9LFxuICAgIH07XG59XG5leHBvcnRzLmxpc3RDb25maWdUYXNrID0gbGlzdENvbmZpZ1Rhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWcuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlQ29tbWl0UmVzdWx0ID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXFxbKFteXFxzXSspKCBcXChbXildK1xcKSk/IChbXlxcXV0rKS8sIChyZXN1bHQsIFticmFuY2gsIHJvb3QsIGNvbW1pdF0pID0+IHtcbiAgICAgICAgcmVzdWx0LmJyYW5jaCA9IGJyYW5jaDtcbiAgICAgICAgcmVzdWx0LmNvbW1pdCA9IGNvbW1pdDtcbiAgICAgICAgcmVzdWx0LnJvb3QgPSAhIXJvb3Q7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXFxzKkF1dGhvcjpcXHMoLispL2ksIChyZXN1bHQsIFthdXRob3JdKSA9PiB7XG4gICAgICAgIGNvbnN0IHBhcnRzID0gYXV0aG9yLnNwbGl0KCc8Jyk7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gcGFydHMucG9wKCk7XG4gICAgICAgIGlmICghZW1haWwgfHwgIWVtYWlsLmluY2x1ZGVzKCdAJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZXN1bHQuYXV0aG9yID0ge1xuICAgICAgICAgICAgZW1haWw6IGVtYWlsLnN1YnN0cigwLCBlbWFpbC5sZW5ndGggLSAxKSxcbiAgICAgICAgICAgIG5hbWU6IHBhcnRzLmpvaW4oJzwnKS50cmltKClcbiAgICAgICAgfTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC8oXFxkKylbXixdKig/OixcXHMqKFxcZCspW14sXSopKD86LFxccyooXFxkKykpL2csIChyZXN1bHQsIFtjaGFuZ2VzLCBpbnNlcnRpb25zLCBkZWxldGlvbnNdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5zdW1tYXJ5LmNoYW5nZXMgPSBwYXJzZUludChjaGFuZ2VzLCAxMCkgfHwgMDtcbiAgICAgICAgcmVzdWx0LnN1bW1hcnkuaW5zZXJ0aW9ucyA9IHBhcnNlSW50KGluc2VydGlvbnMsIDEwKSB8fCAwO1xuICAgICAgICByZXN1bHQuc3VtbWFyeS5kZWxldGlvbnMgPSBwYXJzZUludChkZWxldGlvbnMsIDEwKSB8fCAwO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL14oXFxkKylbXixdKig/OixcXHMqKFxcZCspW14oXStcXCgoWystXSkpPy8sIChyZXN1bHQsIFtjaGFuZ2VzLCBsaW5lcywgZGlyZWN0aW9uXSkgPT4ge1xuICAgICAgICByZXN1bHQuc3VtbWFyeS5jaGFuZ2VzID0gcGFyc2VJbnQoY2hhbmdlcywgMTApIHx8IDA7XG4gICAgICAgIGNvbnN0IGNvdW50ID0gcGFyc2VJbnQobGluZXMsIDEwKSB8fCAwO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnLScpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zdW1tYXJ5LmRlbGV0aW9ucyA9IGNvdW50O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJysnKSB7XG4gICAgICAgICAgICByZXN1bHQuc3VtbWFyeS5pbnNlcnRpb25zID0gY291bnQ7XG4gICAgICAgIH1cbiAgICB9KSxcbl07XG5mdW5jdGlvbiBwYXJzZUNvbW1pdFJlc3VsdChzdGRPdXQpIHtcbiAgICBjb25zdCByZXN1bHQgPSB7XG4gICAgICAgIGF1dGhvcjogbnVsbCxcbiAgICAgICAgYnJhbmNoOiAnJyxcbiAgICAgICAgY29tbWl0OiAnJyxcbiAgICAgICAgcm9vdDogZmFsc2UsXG4gICAgICAgIHN1bW1hcnk6IHtcbiAgICAgICAgICAgIGNoYW5nZXM6IDAsXG4gICAgICAgICAgICBpbnNlcnRpb25zOiAwLFxuICAgICAgICAgICAgZGVsZXRpb25zOiAwLFxuICAgICAgICB9LFxuICAgIH07XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShyZXN1bHQsIHBhcnNlcnMsIHN0ZE91dCk7XG59XG5leHBvcnRzLnBhcnNlQ29tbWl0UmVzdWx0ID0gcGFyc2VDb21taXRSZXN1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1jb21taXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbW1pdFRhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9jb21taXRfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWNvbW1pdFwiKTtcbmZ1bmN0aW9uIGNvbW1pdFRhc2sobWVzc2FnZSwgZmlsZXMsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsnY29tbWl0J107XG4gICAgbWVzc2FnZS5mb3JFYWNoKChtKSA9PiBjb21tYW5kcy5wdXNoKCctbScsIG0pKTtcbiAgICBjb21tYW5kcy5wdXNoKC4uLmZpbGVzLCAuLi5jdXN0b21BcmdzKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kcyxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXI6IHBhcnNlX2NvbW1pdF8xLnBhcnNlQ29tbWl0UmVzdWx0LFxuICAgIH07XG59XG5leHBvcnRzLmNvbW1pdFRhc2sgPSBjb21taXRUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29tbWl0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5EaWZmU3VtbWFyeSA9IHZvaWQgMDtcbi8qKipcbiAqIFRoZSBEaWZmU3VtbWFyeSBpcyByZXR1cm5lZCBhcyBhIHJlc3BvbnNlIHRvIGdldHRpbmcgYGdpdCgpLnN0YXR1cygpYFxuICovXG5jbGFzcyBEaWZmU3VtbWFyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY2hhbmdlZCA9IDA7XG4gICAgICAgIHRoaXMuZGVsZXRpb25zID0gMDtcbiAgICAgICAgdGhpcy5pbnNlcnRpb25zID0gMDtcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgIH1cbn1cbmV4cG9ydHMuRGlmZlN1bW1hcnkgPSBEaWZmU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPURpZmZTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZURpZmZSZXN1bHQgPSB2b2lkIDA7XG5jb25zdCBEaWZmU3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9EaWZmU3VtbWFyeVwiKTtcbmZ1bmN0aW9uIHBhcnNlRGlmZlJlc3VsdChzdGRPdXQpIHtcbiAgICBjb25zdCBsaW5lcyA9IHN0ZE91dC50cmltKCkuc3BsaXQoJ1xcbicpO1xuICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBEaWZmU3VtbWFyeV8xLkRpZmZTdW1tYXJ5KCk7XG4gICAgcmVhZFN1bW1hcnlMaW5lKHN0YXR1cywgbGluZXMucG9wKCkpO1xuICAgIGZvciAobGV0IGkgPSAwLCBtYXggPSBsaW5lcy5sZW5ndGg7IGkgPCBtYXg7IGkrKykge1xuICAgICAgICBjb25zdCBsaW5lID0gbGluZXNbaV07XG4gICAgICAgIHRleHRGaWxlQ2hhbmdlKGxpbmUsIHN0YXR1cykgfHwgYmluYXJ5RmlsZUNoYW5nZShsaW5lLCBzdGF0dXMpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xufVxuZXhwb3J0cy5wYXJzZURpZmZSZXN1bHQgPSBwYXJzZURpZmZSZXN1bHQ7XG5mdW5jdGlvbiByZWFkU3VtbWFyeUxpbmUoc3RhdHVzLCBzdW1tYXJ5KSB7XG4gICAgKHN1bW1hcnkgfHwgJycpXG4gICAgICAgIC50cmltKClcbiAgICAgICAgLnNwbGl0KCcsICcpXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uICh0ZXh0KSB7XG4gICAgICAgIGNvbnN0IHN1bW1hcnkgPSAvKFxcZCspXFxzKFthLXpdKykvLmV4ZWModGV4dCk7XG4gICAgICAgIGlmICghc3VtbWFyeSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1bW1hcnlUeXBlKHN0YXR1cywgc3VtbWFyeVsyXSwgcGFyc2VJbnQoc3VtbWFyeVsxXSwgMTApKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHN1bW1hcnlUeXBlKHN0YXR1cywga2V5LCB2YWx1ZSkge1xuICAgIGNvbnN0IG1hdGNoID0gKC8oW2Etel0rPylzP1xcYi8uZXhlYyhrZXkpKTtcbiAgICBpZiAoIW1hdGNoIHx8ICFzdGF0dXNVcGRhdGVbbWF0Y2hbMV1dKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3RhdHVzVXBkYXRlW21hdGNoWzFdXShzdGF0dXMsIHZhbHVlKTtcbn1cbmNvbnN0IHN0YXR1c1VwZGF0ZSA9IHtcbiAgICBmaWxlKHN0YXR1cywgdmFsdWUpIHtcbiAgICAgICAgc3RhdHVzLmNoYW5nZWQgPSB2YWx1ZTtcbiAgICB9LFxuICAgIGRlbGV0aW9uKHN0YXR1cywgdmFsdWUpIHtcbiAgICAgICAgc3RhdHVzLmRlbGV0aW9ucyA9IHZhbHVlO1xuICAgIH0sXG4gICAgaW5zZXJ0aW9uKHN0YXR1cywgdmFsdWUpIHtcbiAgICAgICAgc3RhdHVzLmluc2VydGlvbnMgPSB2YWx1ZTtcbiAgICB9XG59O1xuZnVuY3Rpb24gdGV4dEZpbGVDaGFuZ2UoaW5wdXQsIHsgZmlsZXMgfSkge1xuICAgIGNvbnN0IGxpbmUgPSBpbnB1dC50cmltKCkubWF0Y2goL14oLispXFxzK1xcfFxccysoXFxkKykoXFxzK1srXFwtXSspPyQvKTtcbiAgICBpZiAobGluZSkge1xuICAgICAgICB2YXIgYWx0ZXJhdGlvbnMgPSAobGluZVszXSB8fCAnJykudHJpbSgpO1xuICAgICAgICBmaWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGZpbGU6IGxpbmVbMV0udHJpbSgpLFxuICAgICAgICAgICAgY2hhbmdlczogcGFyc2VJbnQobGluZVsyXSwgMTApLFxuICAgICAgICAgICAgaW5zZXJ0aW9uczogYWx0ZXJhdGlvbnMucmVwbGFjZSgvLS9nLCAnJykubGVuZ3RoLFxuICAgICAgICAgICAgZGVsZXRpb25zOiBhbHRlcmF0aW9ucy5yZXBsYWNlKC9cXCsvZywgJycpLmxlbmd0aCxcbiAgICAgICAgICAgIGJpbmFyeTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBiaW5hcnlGaWxlQ2hhbmdlKGlucHV0LCB7IGZpbGVzIH0pIHtcbiAgICBjb25zdCBsaW5lID0gaW5wdXQubWF0Y2goL14oLispIFxcfFxccytCaW4gKFswLTkuXSspIC0+IChbMC05Ll0rKSAoW2Etel0rKSQvKTtcbiAgICBpZiAobGluZSkge1xuICAgICAgICBmaWxlcy5wdXNoKHtcbiAgICAgICAgICAgIGZpbGU6IGxpbmVbMV0udHJpbSgpLFxuICAgICAgICAgICAgYmVmb3JlOiArbGluZVsyXSxcbiAgICAgICAgICAgIGFmdGVyOiArbGluZVszXSxcbiAgICAgICAgICAgIGJpbmFyeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWRpZmYtc3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZGlmZlN1bW1hcnlUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfZGlmZl9zdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1kaWZmLXN1bW1hcnlcIik7XG5mdW5jdGlvbiBkaWZmU3VtbWFyeVRhc2soY3VzdG9tQXJncykge1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ2RpZmYnLCAnLS1zdGF0PTQwOTYnLCAuLi5jdXN0b21BcmdzXSxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIoc3RkT3V0KSB7XG4gICAgICAgICAgICByZXR1cm4gcGFyc2VfZGlmZl9zdW1tYXJ5XzEucGFyc2VEaWZmUmVzdWx0KHN0ZE91dCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5kaWZmU3VtbWFyeVRhc2sgPSBkaWZmU3VtbWFyeVRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kaWZmLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZUZldGNoUmVzdWx0ID0gdm9pZCAwO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi91dGlsc1wiKTtcbmNvbnN0IHBhcnNlcnMgPSBbXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvRnJvbSAoLispJC8sIChyZXN1bHQsIFtyZW1vdGVdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5yZW1vdGUgPSByZW1vdGU7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXFwqIFxcW25ldyBicmFuY2hdXFxzKyhcXFMrKVxccyotPiAoLispJC8sIChyZXN1bHQsIFtuYW1lLCB0cmFja2luZ10pID0+IHtcbiAgICAgICAgcmVzdWx0LmJyYW5jaGVzLnB1c2goe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIHRyYWNraW5nLFxuICAgICAgICB9KTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9cXCogXFxbbmV3IHRhZ11cXHMrKFxcUyspXFxzKi0+ICguKykkLywgKHJlc3VsdCwgW25hbWUsIHRyYWNraW5nXSkgPT4ge1xuICAgICAgICByZXN1bHQudGFncy5wdXNoKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB0cmFja2luZyxcbiAgICAgICAgfSk7XG4gICAgfSlcbl07XG5mdW5jdGlvbiBwYXJzZUZldGNoUmVzdWx0KHN0ZE91dCwgc3RkRXJyKSB7XG4gICAgY29uc3QgcmVzdWx0ID0ge1xuICAgICAgICByYXc6IHN0ZE91dCxcbiAgICAgICAgcmVtb3RlOiBudWxsLFxuICAgICAgICBicmFuY2hlczogW10sXG4gICAgICAgIHRhZ3M6IFtdLFxuICAgIH07XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZShyZXN1bHQsIHBhcnNlcnMsIHN0ZE91dCwgc3RkRXJyKTtcbn1cbmV4cG9ydHMucGFyc2VGZXRjaFJlc3VsdCA9IHBhcnNlRmV0Y2hSZXN1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1mZXRjaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZmV0Y2hUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfZmV0Y2hfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWZldGNoXCIpO1xuZnVuY3Rpb24gZmV0Y2hUYXNrKHJlbW90ZSwgYnJhbmNoLCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2ZldGNoJywgLi4uY3VzdG9tQXJnc107XG4gICAgaWYgKHJlbW90ZSAmJiBicmFuY2gpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaChyZW1vdGUsIGJyYW5jaCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcjogcGFyc2VfZmV0Y2hfMS5wYXJzZUZldGNoUmVzdWx0LFxuICAgIH07XG59XG5leHBvcnRzLmZldGNoVGFzayA9IGZldGNoVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWZldGNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5oYXNoT2JqZWN0VGFzayA9IHZvaWQgMDtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG4vKipcbiAqIFRhc2sgdXNlZCBieSBgZ2l0Lmhhc2hPYmplY3RgXG4gKi9cbmZ1bmN0aW9uIGhhc2hPYmplY3RUYXNrKGZpbGVQYXRoLCB3cml0ZSkge1xuICAgIGNvbnN0IGNvbW1hbmRzID0gWydoYXNoLW9iamVjdCcsIGZpbGVQYXRoXTtcbiAgICBpZiAod3JpdGUpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaCgnLXcnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmRzLCB0cnVlKTtcbn1cbmV4cG9ydHMuaGFzaE9iamVjdFRhc2sgPSBoYXNoT2JqZWN0VGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhhc2gtb2JqZWN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZUluaXQgPSBleHBvcnRzLkluaXRTdW1tYXJ5ID0gdm9pZCAwO1xuY2xhc3MgSW5pdFN1bW1hcnkge1xuICAgIGNvbnN0cnVjdG9yKGJhcmUsIHBhdGgsIGV4aXN0aW5nLCBnaXREaXIpIHtcbiAgICAgICAgdGhpcy5iYXJlID0gYmFyZTtcbiAgICAgICAgdGhpcy5wYXRoID0gcGF0aDtcbiAgICAgICAgdGhpcy5leGlzdGluZyA9IGV4aXN0aW5nO1xuICAgICAgICB0aGlzLmdpdERpciA9IGdpdERpcjtcbiAgICB9XG59XG5leHBvcnRzLkluaXRTdW1tYXJ5ID0gSW5pdFN1bW1hcnk7XG5jb25zdCBpbml0UmVzcG9uc2VSZWdleCA9IC9eSW5pdC4rIHJlcG9zaXRvcnkgaW4gKC4rKSQvO1xuY29uc3QgcmVJbml0UmVzcG9uc2VSZWdleCA9IC9eUmVpbi4rIGluICguKykkLztcbmZ1bmN0aW9uIHBhcnNlSW5pdChiYXJlLCBwYXRoLCB0ZXh0KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBTdHJpbmcodGV4dCkudHJpbSgpO1xuICAgIGxldCByZXN1bHQ7XG4gICAgaWYgKChyZXN1bHQgPSBpbml0UmVzcG9uc2VSZWdleC5leGVjKHJlc3BvbnNlKSkpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBJbml0U3VtbWFyeShiYXJlLCBwYXRoLCBmYWxzZSwgcmVzdWx0WzFdKTtcbiAgICB9XG4gICAgaWYgKChyZXN1bHQgPSByZUluaXRSZXNwb25zZVJlZ2V4LmV4ZWMocmVzcG9uc2UpKSkge1xuICAgICAgICByZXR1cm4gbmV3IEluaXRTdW1tYXJ5KGJhcmUsIHBhdGgsIHRydWUsIHJlc3VsdFsxXSk7XG4gICAgfVxuICAgIGxldCBnaXREaXIgPSAnJztcbiAgICBjb25zdCB0b2tlbnMgPSByZXNwb25zZS5zcGxpdCgnICcpO1xuICAgIHdoaWxlICh0b2tlbnMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHRva2VuID0gdG9rZW5zLnNoaWZ0KCk7XG4gICAgICAgIGlmICh0b2tlbiA9PT0gJ2luJykge1xuICAgICAgICAgICAgZ2l0RGlyID0gdG9rZW5zLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgSW5pdFN1bW1hcnkoYmFyZSwgcGF0aCwgL15yZS9pLnRlc3QocmVzcG9uc2UpLCBnaXREaXIpO1xufVxuZXhwb3J0cy5wYXJzZUluaXQgPSBwYXJzZUluaXQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Jbml0U3VtbWFyeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuaW5pdFRhc2sgPSB2b2lkIDA7XG5jb25zdCBJbml0U3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9Jbml0U3VtbWFyeVwiKTtcbmNvbnN0IGJhcmVDb21tYW5kID0gJy0tYmFyZSc7XG5mdW5jdGlvbiBoYXNCYXJlQ29tbWFuZChjb21tYW5kKSB7XG4gICAgcmV0dXJuIGNvbW1hbmQuaW5jbHVkZXMoYmFyZUNvbW1hbmQpO1xufVxuZnVuY3Rpb24gaW5pdFRhc2soYmFyZSA9IGZhbHNlLCBwYXRoLCBjdXN0b21BcmdzKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbJ2luaXQnLCAuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoYmFyZSAmJiAhaGFzQmFyZUNvbW1hbmQoY29tbWFuZHMpKSB7XG4gICAgICAgIGNvbW1hbmRzLnNwbGljZSgxLCAwLCBiYXJlQ29tbWFuZCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcih0ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gSW5pdFN1bW1hcnlfMS5wYXJzZUluaXQoY29tbWFuZHMuaW5jbHVkZXMoJy0tYmFyZScpLCBwYXRoLCB0ZXh0KTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLmluaXRUYXNrID0gaW5pdFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbml0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jcmVhdGVMaXN0TG9nU3VtbWFyeVBhcnNlciA9IGV4cG9ydHMuU1BMSVRURVIgPSBleHBvcnRzLkNPTU1JVF9CT1VOREFSWSA9IGV4cG9ydHMuU1RBUlRfQk9VTkRBUlkgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VfZGlmZl9zdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi9wYXJzZS1kaWZmLXN1bW1hcnlcIik7XG5leHBvcnRzLlNUQVJUX0JPVU5EQVJZID0gJ8Oyw7LDssOyw7LDsiAnO1xuZXhwb3J0cy5DT01NSVRfQk9VTkRBUlkgPSAnIMOyw7InO1xuZXhwb3J0cy5TUExJVFRFUiA9ICcgw7IgJztcbmNvbnN0IGRlZmF1bHRGaWVsZE5hbWVzID0gWydoYXNoJywgJ2RhdGUnLCAnbWVzc2FnZScsICdyZWZzJywgJ2F1dGhvcl9uYW1lJywgJ2F1dGhvcl9lbWFpbCddO1xuZnVuY3Rpb24gbGluZUJ1aWxkZXIodG9rZW5zLCBmaWVsZHMpIHtcbiAgICByZXR1cm4gZmllbGRzLnJlZHVjZSgobGluZSwgZmllbGQsIGluZGV4KSA9PiB7XG4gICAgICAgIGxpbmVbZmllbGRdID0gdG9rZW5zW2luZGV4XSB8fCAnJztcbiAgICAgICAgcmV0dXJuIGxpbmU7XG4gICAgfSwgT2JqZWN0LmNyZWF0ZSh7IGRpZmY6IG51bGwgfSkpO1xufVxuZnVuY3Rpb24gY3JlYXRlTGlzdExvZ1N1bW1hcnlQYXJzZXIoc3BsaXR0ZXIgPSBleHBvcnRzLlNQTElUVEVSLCBmaWVsZHMgPSBkZWZhdWx0RmllbGROYW1lcykge1xuICAgIHJldHVybiBmdW5jdGlvbiAoc3RkT3V0KSB7XG4gICAgICAgIGNvbnN0IGFsbCA9IHV0aWxzXzEudG9MaW5lc1dpdGhDb250ZW50KHN0ZE91dCwgdHJ1ZSwgZXhwb3J0cy5TVEFSVF9CT1VOREFSWSlcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmVEZXRhaWwgPSBpdGVtLnRyaW0oKS5zcGxpdChleHBvcnRzLkNPTU1JVF9CT1VOREFSWSk7XG4gICAgICAgICAgICBjb25zdCBsaXN0TG9nTGluZSA9IGxpbmVCdWlsZGVyKGxpbmVEZXRhaWxbMF0udHJpbSgpLnNwbGl0KHNwbGl0dGVyKSwgZmllbGRzKTtcbiAgICAgICAgICAgIGlmIChsaW5lRGV0YWlsLmxlbmd0aCA+IDEgJiYgISFsaW5lRGV0YWlsWzFdLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIGxpc3RMb2dMaW5lLmRpZmYgPSBwYXJzZV9kaWZmX3N1bW1hcnlfMS5wYXJzZURpZmZSZXN1bHQobGluZURldGFpbFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGlzdExvZ0xpbmU7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgYWxsLFxuICAgICAgICAgICAgbGF0ZXN0OiBhbGwubGVuZ3RoICYmIGFsbFswXSB8fCBudWxsLFxuICAgICAgICAgICAgdG90YWw6IGFsbC5sZW5ndGgsXG4gICAgICAgIH07XG4gICAgfTtcbn1cbmV4cG9ydHMuY3JlYXRlTGlzdExvZ1N1bW1hcnlQYXJzZXIgPSBjcmVhdGVMaXN0TG9nU3VtbWFyeVBhcnNlcjtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhcnNlLWxpc3QtbG9nLXN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmxvZ1Rhc2sgPSBleHBvcnRzLnBhcnNlTG9nT3B0aW9ucyA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLWxpc3QtbG9nLXN1bW1hcnlcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xudmFyIGV4Y2x1ZGVPcHRpb25zO1xuKGZ1bmN0aW9uIChleGNsdWRlT3B0aW9ucykge1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wiLS1wcmV0dHlcIl0gPSAwXSA9IFwiLS1wcmV0dHlcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcIm1heC1jb3VudFwiXSA9IDFdID0gXCJtYXgtY291bnRcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcIm1heENvdW50XCJdID0gMl0gPSBcIm1heENvdW50XCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJuXCJdID0gM10gPSBcIm5cIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcImZpbGVcIl0gPSA0XSA9IFwiZmlsZVwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wiZm9ybWF0XCJdID0gNV0gPSBcImZvcm1hdFwiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wiZnJvbVwiXSA9IDZdID0gXCJmcm9tXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJ0b1wiXSA9IDddID0gXCJ0b1wiO1xuICAgIGV4Y2x1ZGVPcHRpb25zW2V4Y2x1ZGVPcHRpb25zW1wic3BsaXR0ZXJcIl0gPSA4XSA9IFwic3BsaXR0ZXJcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcInN5bW1ldHJpY1wiXSA9IDldID0gXCJzeW1tZXRyaWNcIjtcbiAgICBleGNsdWRlT3B0aW9uc1tleGNsdWRlT3B0aW9uc1tcIm11bHRpTGluZVwiXSA9IDEwXSA9IFwibXVsdGlMaW5lXCI7XG4gICAgZXhjbHVkZU9wdGlvbnNbZXhjbHVkZU9wdGlvbnNbXCJzdHJpY3REYXRlXCJdID0gMTFdID0gXCJzdHJpY3REYXRlXCI7XG59KShleGNsdWRlT3B0aW9ucyB8fCAoZXhjbHVkZU9wdGlvbnMgPSB7fSkpO1xuZnVuY3Rpb24gcHJldHR5Rm9ybWF0KGZvcm1hdCwgc3BsaXR0ZXIpIHtcbiAgICBjb25zdCBmaWVsZHMgPSBbXTtcbiAgICBjb25zdCBmb3JtYXRTdHIgPSBbXTtcbiAgICBPYmplY3Qua2V5cyhmb3JtYXQpLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgIGZpZWxkcy5wdXNoKGZpZWxkKTtcbiAgICAgICAgZm9ybWF0U3RyLnB1c2goU3RyaW5nKGZvcm1hdFtmaWVsZF0pKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW1xuICAgICAgICBmaWVsZHMsIGZvcm1hdFN0ci5qb2luKHNwbGl0dGVyKVxuICAgIF07XG59XG5mdW5jdGlvbiB1c2VyT3B0aW9ucyhpbnB1dCkge1xuICAgIGNvbnN0IG91dHB1dCA9IE9iamVjdC5hc3NpZ24oe30sIGlucHV0KTtcbiAgICBPYmplY3Qua2V5cyhpbnB1dCkuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICBpZiAoa2V5IGluIGV4Y2x1ZGVPcHRpb25zKSB7XG4gICAgICAgICAgICBkZWxldGUgb3V0cHV0W2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gb3V0cHV0O1xufVxuZnVuY3Rpb24gcGFyc2VMb2dPcHRpb25zKG9wdCA9IHt9LCBjdXN0b21BcmdzID0gW10pIHtcbiAgICBjb25zdCBzcGxpdHRlciA9IG9wdC5zcGxpdHRlciB8fCBwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEuU1BMSVRURVI7XG4gICAgY29uc3QgZm9ybWF0ID0gb3B0LmZvcm1hdCB8fCB7XG4gICAgICAgIGhhc2g6ICclSCcsXG4gICAgICAgIGRhdGU6IG9wdC5zdHJpY3REYXRlID09PSBmYWxzZSA/ICclYWknIDogJyVhSScsXG4gICAgICAgIG1lc3NhZ2U6ICclcycsXG4gICAgICAgIHJlZnM6ICclRCcsXG4gICAgICAgIGJvZHk6IG9wdC5tdWx0aUxpbmUgPyAnJUInIDogJyViJyxcbiAgICAgICAgYXV0aG9yX25hbWU6ICclYU4nLFxuICAgICAgICBhdXRob3JfZW1haWw6ICclYWUnXG4gICAgfTtcbiAgICBjb25zdCBbZmllbGRzLCBmb3JtYXRTdHJdID0gcHJldHR5Rm9ybWF0KGZvcm1hdCwgc3BsaXR0ZXIpO1xuICAgIGNvbnN0IHN1ZmZpeCA9IFtdO1xuICAgIGNvbnN0IGNvbW1hbmQgPSBbXG4gICAgICAgIGAtLXByZXR0eT1mb3JtYXQ6JHtwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEuU1RBUlRfQk9VTkRBUll9JHtmb3JtYXRTdHJ9JHtwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEuQ09NTUlUX0JPVU5EQVJZfWAsXG4gICAgICAgIC4uLmN1c3RvbUFyZ3MsXG4gICAgXTtcbiAgICBjb25zdCBtYXhDb3VudCA9IG9wdC5uIHx8IG9wdFsnbWF4LWNvdW50J10gfHwgb3B0Lm1heENvdW50O1xuICAgIGlmIChtYXhDb3VudCkge1xuICAgICAgICBjb21tYW5kLnB1c2goYC0tbWF4LWNvdW50PSR7bWF4Q291bnR9YCk7XG4gICAgfVxuICAgIGlmIChvcHQuZnJvbSAmJiBvcHQudG8pIHtcbiAgICAgICAgY29uc3QgcmFuZ2VPcGVyYXRvciA9IChvcHQuc3ltbWV0cmljICE9PSBmYWxzZSkgPyAnLi4uJyA6ICcuLic7XG4gICAgICAgIHN1ZmZpeC5wdXNoKGAke29wdC5mcm9tfSR7cmFuZ2VPcGVyYXRvcn0ke29wdC50b31gKTtcbiAgICB9XG4gICAgaWYgKG9wdC5maWxlKSB7XG4gICAgICAgIHN1ZmZpeC5wdXNoKCctLWZvbGxvdycsIG9wdC5maWxlKTtcbiAgICB9XG4gICAgdXRpbHNfMS5hcHBlbmRUYXNrT3B0aW9ucyh1c2VyT3B0aW9ucyhvcHQpLCBjb21tYW5kKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBmaWVsZHMsXG4gICAgICAgIHNwbGl0dGVyLFxuICAgICAgICBjb21tYW5kczogW1xuICAgICAgICAgICAgLi4uY29tbWFuZCxcbiAgICAgICAgICAgIC4uLnN1ZmZpeCxcbiAgICAgICAgXSxcbiAgICB9O1xufVxuZXhwb3J0cy5wYXJzZUxvZ09wdGlvbnMgPSBwYXJzZUxvZ09wdGlvbnM7XG5mdW5jdGlvbiBsb2dUYXNrKHNwbGl0dGVyLCBmaWVsZHMsIGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogWydsb2cnLCAuLi5jdXN0b21BcmdzXSxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXI6IHBhcnNlX2xpc3RfbG9nX3N1bW1hcnlfMS5jcmVhdGVMaXN0TG9nU3VtbWFyeVBhcnNlcihzcGxpdHRlciwgZmllbGRzKSxcbiAgICB9O1xufVxuZXhwb3J0cy5sb2dUYXNrID0gbG9nVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxvZy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuTWVyZ2VTdW1tYXJ5RGV0YWlsID0gZXhwb3J0cy5NZXJnZVN1bW1hcnlDb25mbGljdCA9IHZvaWQgMDtcbmNsYXNzIE1lcmdlU3VtbWFyeUNvbmZsaWN0IHtcbiAgICBjb25zdHJ1Y3RvcihyZWFzb24sIGZpbGUgPSBudWxsLCBtZXRhKSB7XG4gICAgICAgIHRoaXMucmVhc29uID0gcmVhc29uO1xuICAgICAgICB0aGlzLmZpbGUgPSBmaWxlO1xuICAgICAgICB0aGlzLm1ldGEgPSBtZXRhO1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuZmlsZX06JHt0aGlzLnJlYXNvbn1gO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVyZ2VTdW1tYXJ5Q29uZmxpY3QgPSBNZXJnZVN1bW1hcnlDb25mbGljdDtcbmNsYXNzIE1lcmdlU3VtbWFyeURldGFpbCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuY29uZmxpY3RzID0gW107XG4gICAgICAgIHRoaXMubWVyZ2VzID0gW107XG4gICAgICAgIHRoaXMucmVzdWx0ID0gJ3N1Y2Nlc3MnO1xuICAgIH1cbiAgICBnZXQgZmFpbGVkKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb25mbGljdHMubGVuZ3RoID4gMDtcbiAgICB9XG4gICAgZ2V0IHJlYXNvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzdWx0O1xuICAgIH1cbiAgICB0b1N0cmluZygpIHtcbiAgICAgICAgaWYgKHRoaXMuY29uZmxpY3RzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGBDT05GTElDVFM6ICR7dGhpcy5jb25mbGljdHMuam9pbignLCAnKX1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnT0snO1xuICAgIH1cbn1cbmV4cG9ydHMuTWVyZ2VTdW1tYXJ5RGV0YWlsID0gTWVyZ2VTdW1tYXJ5RGV0YWlsO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TWVyZ2VTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5QdWxsU3VtbWFyeSA9IHZvaWQgMDtcbmNsYXNzIFB1bGxTdW1tYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5yZW1vdGVNZXNzYWdlcyA9IHtcbiAgICAgICAgICAgIGFsbDogW10sXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IFtdO1xuICAgICAgICB0aGlzLmRlbGV0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB0aGlzLmRlbGV0aW9ucyA9IHt9O1xuICAgICAgICB0aGlzLmluc2VydGlvbnMgPSB7fTtcbiAgICAgICAgdGhpcy5zdW1tYXJ5ID0ge1xuICAgICAgICAgICAgY2hhbmdlczogMCxcbiAgICAgICAgICAgIGRlbGV0aW9uczogMCxcbiAgICAgICAgICAgIGluc2VydGlvbnM6IDAsXG4gICAgICAgIH07XG4gICAgfVxufVxuZXhwb3J0cy5QdWxsU3VtbWFyeSA9IFB1bGxTdW1tYXJ5O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UHVsbFN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlUHVsbFJlc3VsdCA9IGV4cG9ydHMucGFyc2VQdWxsRGV0YWlsID0gdm9pZCAwO1xuY29uc3QgUHVsbFN1bW1hcnlfMSA9IHJlcXVpcmUoXCIuLi9yZXNwb25zZXMvUHVsbFN1bW1hcnlcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VfcmVtb3RlX21lc3NhZ2VzXzEgPSByZXF1aXJlKFwiLi9wYXJzZS1yZW1vdGUtbWVzc2FnZXNcIik7XG5jb25zdCBGSUxFX1VQREFURV9SRUdFWCA9IC9eXFxzKiguKz8pXFxzK1xcfFxccytcXGQrXFxzKihcXCsqKSgtKikvO1xuY29uc3QgU1VNTUFSWV9SRUdFWCA9IC8oXFxkKylcXEQrKChcXGQrKVxcRCtcXChcXCtcXCkpPyhcXEQrKFxcZCspXFxEK1xcKC1cXCkpPy87XG5jb25zdCBBQ1RJT05fUkVHRVggPSAvXihjcmVhdGV8ZGVsZXRlKSBtb2RlIFxcZCsgKC4rKS87XG5jb25zdCBwYXJzZXJzID0gW1xuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoRklMRV9VUERBVEVfUkVHRVgsIChyZXN1bHQsIFtmaWxlLCBpbnNlcnRpb25zLCBkZWxldGlvbnNdKSA9PiB7XG4gICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKGZpbGUpO1xuICAgICAgICBpZiAoaW5zZXJ0aW9ucykge1xuICAgICAgICAgICAgcmVzdWx0Lmluc2VydGlvbnNbZmlsZV0gPSBpbnNlcnRpb25zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVsZXRpb25zKSB7XG4gICAgICAgICAgICByZXN1bHQuZGVsZXRpb25zW2ZpbGVdID0gZGVsZXRpb25zLmxlbmd0aDtcbiAgICAgICAgfVxuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoU1VNTUFSWV9SRUdFWCwgKHJlc3VsdCwgW2NoYW5nZXMsICwgaW5zZXJ0aW9ucywgLCBkZWxldGlvbnNdKSA9PiB7XG4gICAgICAgIGlmIChpbnNlcnRpb25zICE9PSB1bmRlZmluZWQgfHwgZGVsZXRpb25zICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlc3VsdC5zdW1tYXJ5LmNoYW5nZXMgPSArY2hhbmdlcyB8fCAwO1xuICAgICAgICAgICAgcmVzdWx0LnN1bW1hcnkuaW5zZXJ0aW9ucyA9ICtpbnNlcnRpb25zIHx8IDA7XG4gICAgICAgICAgICByZXN1bHQuc3VtbWFyeS5kZWxldGlvbnMgPSArZGVsZXRpb25zIHx8IDA7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcihBQ1RJT05fUkVHRVgsIChyZXN1bHQsIFthY3Rpb24sIGZpbGVdKSA9PiB7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5maWxlcywgZmlsZSk7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKChhY3Rpb24gPT09ICdjcmVhdGUnKSA/IHJlc3VsdC5jcmVhdGVkIDogcmVzdWx0LmRlbGV0ZWQsIGZpbGUpO1xuICAgIH0pLFxuXTtcbmNvbnN0IHBhcnNlUHVsbERldGFpbCA9IChzdGRPdXQsIHN0ZEVycikgPT4ge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UobmV3IFB1bGxTdW1tYXJ5XzEuUHVsbFN1bW1hcnkoKSwgcGFyc2Vycywgc3RkT3V0LCBzdGRFcnIpO1xufTtcbmV4cG9ydHMucGFyc2VQdWxsRGV0YWlsID0gcGFyc2VQdWxsRGV0YWlsO1xuY29uc3QgcGFyc2VQdWxsUmVzdWx0ID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24obmV3IFB1bGxTdW1tYXJ5XzEuUHVsbFN1bW1hcnkoKSwgZXhwb3J0cy5wYXJzZVB1bGxEZXRhaWwoc3RkT3V0LCBzdGRFcnIpLCBwYXJzZV9yZW1vdGVfbWVzc2FnZXNfMS5wYXJzZVJlbW90ZU1lc3NhZ2VzKHN0ZE91dCwgc3RkRXJyKSk7XG59O1xuZXhwb3J0cy5wYXJzZVB1bGxSZXN1bHQgPSBwYXJzZVB1bGxSZXN1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1wdWxsLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZU1lcmdlRGV0YWlsID0gZXhwb3J0cy5wYXJzZU1lcmdlUmVzdWx0ID0gdm9pZCAwO1xuY29uc3QgTWVyZ2VTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL01lcmdlU3VtbWFyeVwiKTtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5jb25zdCBwYXJzZV9wdWxsXzEgPSByZXF1aXJlKFwiLi9wYXJzZS1wdWxsXCIpO1xuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQXV0by1tZXJnaW5nXFxzKyguKykkLywgKHN1bW1hcnksIFthdXRvTWVyZ2VdKSA9PiB7XG4gICAgICAgIHN1bW1hcnkubWVyZ2VzLnB1c2goYXV0b01lcmdlKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQ09ORkxJQ1RcXHMrXFwoKC4rKVxcKTogTWVyZ2UgY29uZmxpY3QgaW4gKC4rKSQvLCAoc3VtbWFyeSwgW3JlYXNvbiwgZmlsZV0pID0+IHtcbiAgICAgICAgc3VtbWFyeS5jb25mbGljdHMucHVzaChuZXcgTWVyZ2VTdW1tYXJ5XzEuTWVyZ2VTdW1tYXJ5Q29uZmxpY3QocmVhc29uLCBmaWxlKSk7XG4gICAgfSksXG4gICAgbmV3IHV0aWxzXzEuTGluZVBhcnNlcigvXkNPTkZMSUNUXFxzK1xcKCguK1xcL2RlbGV0ZSlcXCk6ICguKykgZGVsZXRlZCBpbiAoLispIGFuZC8sIChzdW1tYXJ5LCBbcmVhc29uLCBmaWxlLCBkZWxldGVSZWZdKSA9PiB7XG4gICAgICAgIHN1bW1hcnkuY29uZmxpY3RzLnB1c2gobmV3IE1lcmdlU3VtbWFyeV8xLk1lcmdlU3VtbWFyeUNvbmZsaWN0KHJlYXNvbiwgZmlsZSwgeyBkZWxldGVSZWYgfSkpO1xuICAgIH0pLFxuICAgIG5ldyB1dGlsc18xLkxpbmVQYXJzZXIoL15DT05GTElDVFxccytcXCgoLispXFwpOi8sIChzdW1tYXJ5LCBbcmVhc29uXSkgPT4ge1xuICAgICAgICBzdW1tYXJ5LmNvbmZsaWN0cy5wdXNoKG5ldyBNZXJnZVN1bW1hcnlfMS5NZXJnZVN1bW1hcnlDb25mbGljdChyZWFzb24sIG51bGwpKTtcbiAgICB9KSxcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eQXV0b21hdGljIG1lcmdlIGZhaWxlZDtcXHMrKC4rKSQvLCAoc3VtbWFyeSwgW3Jlc3VsdF0pID0+IHtcbiAgICAgICAgc3VtbWFyeS5yZXN1bHQgPSByZXN1bHQ7XG4gICAgfSksXG5dO1xuLyoqXG4gKiBQYXJzZSB0aGUgY29tcGxldGUgcmVzcG9uc2UgZnJvbSBgZ2l0Lm1lcmdlYFxuICovXG5jb25zdCBwYXJzZU1lcmdlUmVzdWx0ID0gKHN0ZE91dCwgc3RkRXJyKSA9PiB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZXhwb3J0cy5wYXJzZU1lcmdlRGV0YWlsKHN0ZE91dCwgc3RkRXJyKSwgcGFyc2VfcHVsbF8xLnBhcnNlUHVsbFJlc3VsdChzdGRPdXQsIHN0ZEVycikpO1xufTtcbmV4cG9ydHMucGFyc2VNZXJnZVJlc3VsdCA9IHBhcnNlTWVyZ2VSZXN1bHQ7XG4vKipcbiAqIFBhcnNlIHRoZSBtZXJnZSBzcGVjaWZpYyBkZXRhaWwgKGllOiBub3QgdGhlIGNvbnRlbnQgYWxzbyBhdmFpbGFibGUgaW4gdGhlIHB1bGwgZGV0YWlsKSBmcm9tIGBnaXQubW5lcmdlYFxuICogQHBhcmFtIHN0ZE91dFxuICovXG5jb25zdCBwYXJzZU1lcmdlRGV0YWlsID0gKHN0ZE91dCkgPT4ge1xuICAgIHJldHVybiB1dGlsc18xLnBhcnNlU3RyaW5nUmVzcG9uc2UobmV3IE1lcmdlU3VtbWFyeV8xLk1lcmdlU3VtbWFyeURldGFpbCgpLCBwYXJzZXJzLCBzdGRPdXQpO1xufTtcbmV4cG9ydHMucGFyc2VNZXJnZURldGFpbCA9IHBhcnNlTWVyZ2VEZXRhaWw7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1tZXJnZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubWVyZ2VUYXNrID0gdm9pZCAwO1xuY29uc3QgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEgPSByZXF1aXJlKFwiLi4vZXJyb3JzL2dpdC1yZXNwb25zZS1lcnJvclwiKTtcbmNvbnN0IHBhcnNlX21lcmdlXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1tZXJnZVwiKTtcbmNvbnN0IHRhc2tfMSA9IHJlcXVpcmUoXCIuL3Rhc2tcIik7XG5mdW5jdGlvbiBtZXJnZVRhc2soY3VzdG9tQXJncykge1xuICAgIGlmICghY3VzdG9tQXJncy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHRhc2tfMS5jb25maWd1cmF0aW9uRXJyb3JUYXNrKCdHaXQubWVyZ2UgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIG9wdGlvbicpO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogWydtZXJnZScsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgY29uc3QgbWVyZ2UgPSBwYXJzZV9tZXJnZV8xLnBhcnNlTWVyZ2VSZXN1bHQoc3RkT3V0LCBzdGRFcnIpO1xuICAgICAgICAgICAgaWYgKG1lcmdlLmZhaWxlZCkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBnaXRfcmVzcG9uc2VfZXJyb3JfMS5HaXRSZXNwb25zZUVycm9yKG1lcmdlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtZXJnZTtcbiAgICAgICAgfVxuICAgIH07XG59XG5leHBvcnRzLm1lcmdlVGFzayA9IG1lcmdlVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1lcmdlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZU1vdmVSZXN1bHQgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgcGFyc2VycyA9IFtcbiAgICBuZXcgdXRpbHNfMS5MaW5lUGFyc2VyKC9eUmVuYW1pbmcgKC4rKSB0byAoLispJC8sIChyZXN1bHQsIFtmcm9tLCB0b10pID0+IHtcbiAgICAgICAgcmVzdWx0Lm1vdmVzLnB1c2goeyBmcm9tLCB0byB9KTtcbiAgICB9KSxcbl07XG5mdW5jdGlvbiBwYXJzZU1vdmVSZXN1bHQoc3RkT3V0KSB7XG4gICAgcmV0dXJuIHV0aWxzXzEucGFyc2VTdHJpbmdSZXNwb25zZSh7IG1vdmVzOiBbXSB9LCBwYXJzZXJzLCBzdGRPdXQpO1xufVxuZXhwb3J0cy5wYXJzZU1vdmVSZXN1bHQgPSBwYXJzZU1vdmVSZXN1bHQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYXJzZS1tb3ZlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5tb3ZlVGFzayA9IHZvaWQgMDtcbmNvbnN0IHBhcnNlX21vdmVfMSA9IHJlcXVpcmUoXCIuLi9wYXJzZXJzL3BhcnNlLW1vdmVcIik7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuZnVuY3Rpb24gbW92ZVRhc2soZnJvbSwgdG8pIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBjb21tYW5kczogWydtdicsICctdicsIC4uLnV0aWxzXzEuYXNBcnJheShmcm9tKSwgdG9dLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcjogcGFyc2VfbW92ZV8xLnBhcnNlTW92ZVJlc3VsdCxcbiAgICB9O1xufVxuZXhwb3J0cy5tb3ZlVGFzayA9IG1vdmVUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bW92ZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMucHVsbFRhc2sgPSB2b2lkIDA7XG5jb25zdCBwYXJzZV9wdWxsXzEgPSByZXF1aXJlKFwiLi4vcGFyc2Vycy9wYXJzZS1wdWxsXCIpO1xuZnVuY3Rpb24gcHVsbFRhc2socmVtb3RlLCBicmFuY2gsIGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncHVsbCcsIC4uLmN1c3RvbUFyZ3NdO1xuICAgIGlmIChyZW1vdGUgJiYgYnJhbmNoKSB7XG4gICAgICAgIGNvbW1hbmRzLnNwbGljZSgxLCAwLCByZW1vdGUsIGJyYW5jaCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzLFxuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIHBhcnNlcihzdGRPdXQsIHN0ZEVycikge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlX3B1bGxfMS5wYXJzZVB1bGxSZXN1bHQoc3RkT3V0LCBzdGRFcnIpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMucHVsbFRhc2sgPSBwdWxsVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXB1bGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlR2V0UmVtb3Rlc1ZlcmJvc2UgPSBleHBvcnRzLnBhcnNlR2V0UmVtb3RlcyA9IHZvaWQgMDtcbmNvbnN0IHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG5mdW5jdGlvbiBwYXJzZUdldFJlbW90ZXModGV4dCkge1xuICAgIGNvbnN0IHJlbW90ZXMgPSB7fTtcbiAgICBmb3JFYWNoKHRleHQsIChbbmFtZV0pID0+IHJlbW90ZXNbbmFtZV0gPSB7IG5hbWUgfSk7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXMocmVtb3Rlcyk7XG59XG5leHBvcnRzLnBhcnNlR2V0UmVtb3RlcyA9IHBhcnNlR2V0UmVtb3RlcztcbmZ1bmN0aW9uIHBhcnNlR2V0UmVtb3Rlc1ZlcmJvc2UodGV4dCkge1xuICAgIGNvbnN0IHJlbW90ZXMgPSB7fTtcbiAgICBmb3JFYWNoKHRleHQsIChbbmFtZSwgdXJsLCBwdXJwb3NlXSkgPT4ge1xuICAgICAgICBpZiAoIXJlbW90ZXMuaGFzT3duUHJvcGVydHkobmFtZSkpIHtcbiAgICAgICAgICAgIHJlbW90ZXNbbmFtZV0gPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICByZWZzOiB7IGZldGNoOiAnJywgcHVzaDogJycgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHB1cnBvc2UgJiYgdXJsKSB7XG4gICAgICAgICAgICByZW1vdGVzW25hbWVdLnJlZnNbcHVycG9zZS5yZXBsYWNlKC9bXmEtel0vZywgJycpXSA9IHVybDtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHJlbW90ZXMpO1xufVxuZXhwb3J0cy5wYXJzZUdldFJlbW90ZXNWZXJib3NlID0gcGFyc2VHZXRSZW1vdGVzVmVyYm9zZTtcbmZ1bmN0aW9uIGZvckVhY2godGV4dCwgaGFuZGxlcikge1xuICAgIHV0aWxzXzEuZm9yRWFjaExpbmVXaXRoQ29udGVudCh0ZXh0LCAobGluZSkgPT4gaGFuZGxlcihsaW5lLnNwbGl0KC9cXHMrLykpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUdldFJlbW90ZVN1bW1hcnkuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnJlbW92ZVJlbW90ZVRhc2sgPSBleHBvcnRzLnJlbW90ZVRhc2sgPSBleHBvcnRzLmxpc3RSZW1vdGVzVGFzayA9IGV4cG9ydHMuZ2V0UmVtb3Rlc1Rhc2sgPSBleHBvcnRzLmFkZFJlbW90ZVRhc2sgPSB2b2lkIDA7XG5jb25zdCBHZXRSZW1vdGVTdW1tYXJ5XzEgPSByZXF1aXJlKFwiLi4vcmVzcG9uc2VzL0dldFJlbW90ZVN1bW1hcnlcIik7XG5jb25zdCB0YXNrXzEgPSByZXF1aXJlKFwiLi90YXNrXCIpO1xuZnVuY3Rpb24gYWRkUmVtb3RlVGFzayhyZW1vdGVOYW1lLCByZW1vdGVSZXBvLCBjdXN0b21BcmdzID0gW10pIHtcbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydyZW1vdGUnLCAnYWRkJywgLi4uY3VzdG9tQXJncywgcmVtb3RlTmFtZSwgcmVtb3RlUmVwb10pO1xufVxuZXhwb3J0cy5hZGRSZW1vdGVUYXNrID0gYWRkUmVtb3RlVGFzaztcbmZ1bmN0aW9uIGdldFJlbW90ZXNUYXNrKHZlcmJvc2UpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsncmVtb3RlJ107XG4gICAgaWYgKHZlcmJvc2UpIHtcbiAgICAgICAgY29tbWFuZHMucHVzaCgnLXYnKTtcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgY29tbWFuZHMsXG4gICAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgICAgcGFyc2VyOiB2ZXJib3NlID8gR2V0UmVtb3RlU3VtbWFyeV8xLnBhcnNlR2V0UmVtb3Rlc1ZlcmJvc2UgOiBHZXRSZW1vdGVTdW1tYXJ5XzEucGFyc2VHZXRSZW1vdGVzLFxuICAgIH07XG59XG5leHBvcnRzLmdldFJlbW90ZXNUYXNrID0gZ2V0UmVtb3Rlc1Rhc2s7XG5mdW5jdGlvbiBsaXN0UmVtb3Rlc1Rhc2soY3VzdG9tQXJncyA9IFtdKSB7XG4gICAgY29uc3QgY29tbWFuZHMgPSBbLi4uY3VzdG9tQXJnc107XG4gICAgaWYgKGNvbW1hbmRzWzBdICE9PSAnbHMtcmVtb3RlJykge1xuICAgICAgICBjb21tYW5kcy51bnNoaWZ0KCdscy1yZW1vdGUnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRhc2tfMS5zdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmRzKTtcbn1cbmV4cG9ydHMubGlzdFJlbW90ZXNUYXNrID0gbGlzdFJlbW90ZXNUYXNrO1xuZnVuY3Rpb24gcmVtb3RlVGFzayhjdXN0b21BcmdzID0gW10pIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoY29tbWFuZHNbMF0gIT09ICdyZW1vdGUnKSB7XG4gICAgICAgIGNvbW1hbmRzLnVuc2hpZnQoJ3JlbW90ZScpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpO1xufVxuZXhwb3J0cy5yZW1vdGVUYXNrID0gcmVtb3RlVGFzaztcbmZ1bmN0aW9uIHJlbW92ZVJlbW90ZVRhc2socmVtb3RlTmFtZSkge1xuICAgIHJldHVybiB0YXNrXzEuc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3JlbW90ZScsICdyZW1vdmUnLCByZW1vdGVOYW1lXSk7XG59XG5leHBvcnRzLnJlbW92ZVJlbW90ZVRhc2sgPSByZW1vdmVSZW1vdGVUYXNrO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVtb3RlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdGFzaExpc3RUYXNrID0gdm9pZCAwO1xuY29uc3QgcGFyc2VfbGlzdF9sb2dfc3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3BhcnNlcnMvcGFyc2UtbGlzdC1sb2ctc3VtbWFyeVwiKTtcbmNvbnN0IGxvZ18xID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuZnVuY3Rpb24gc3Rhc2hMaXN0VGFzayhvcHQgPSB7fSwgY3VzdG9tQXJncykge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBsb2dfMS5wYXJzZUxvZ09wdGlvbnMob3B0KTtcbiAgICBjb25zdCBwYXJzZXIgPSBwYXJzZV9saXN0X2xvZ19zdW1tYXJ5XzEuY3JlYXRlTGlzdExvZ1N1bW1hcnlQYXJzZXIob3B0aW9ucy5zcGxpdHRlciwgb3B0aW9ucy5maWVsZHMpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNvbW1hbmRzOiBbJ3N0YXNoJywgJ2xpc3QnLCAuLi5vcHRpb25zLmNvbW1hbmRzLCAuLi5jdXN0b21BcmdzXSxcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBwYXJzZXIsXG4gICAgfTtcbn1cbmV4cG9ydHMuc3Rhc2hMaXN0VGFzayA9IHN0YXNoTGlzdFRhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGFzaC1saXN0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5GaWxlU3RhdHVzU3VtbWFyeSA9IGV4cG9ydHMuZnJvbVBhdGhSZWdleCA9IHZvaWQgMDtcbmV4cG9ydHMuZnJvbVBhdGhSZWdleCA9IC9eKC4rKSAtPiAoLispJC87XG5jbGFzcyBGaWxlU3RhdHVzU3VtbWFyeSB7XG4gICAgY29uc3RydWN0b3IocGF0aCwgaW5kZXgsIHdvcmtpbmdfZGlyKSB7XG4gICAgICAgIHRoaXMucGF0aCA9IHBhdGg7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy53b3JraW5nX2RpciA9IHdvcmtpbmdfZGlyO1xuICAgICAgICBpZiAoJ1InID09PSAoaW5kZXggKyB3b3JraW5nX2RpcikpIHtcbiAgICAgICAgICAgIGNvbnN0IGRldGFpbCA9IGV4cG9ydHMuZnJvbVBhdGhSZWdleC5leGVjKHBhdGgpIHx8IFtudWxsLCBwYXRoLCBwYXRoXTtcbiAgICAgICAgICAgIHRoaXMuZnJvbSA9IGRldGFpbFsxXSB8fCAnJztcbiAgICAgICAgICAgIHRoaXMucGF0aCA9IGRldGFpbFsyXSB8fCAnJztcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydHMuRmlsZVN0YXR1c1N1bW1hcnkgPSBGaWxlU3RhdHVzU3VtbWFyeTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZpbGVTdGF0dXNTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5wYXJzZVN0YXR1c1N1bW1hcnkgPSBleHBvcnRzLlN0YXR1c1N1bW1hcnkgPSB2b2lkIDA7XG5jb25zdCB1dGlsc18xID0gcmVxdWlyZShcIi4uL3V0aWxzXCIpO1xuY29uc3QgRmlsZVN0YXR1c1N1bW1hcnlfMSA9IHJlcXVpcmUoXCIuL0ZpbGVTdGF0dXNTdW1tYXJ5XCIpO1xuLyoqXG4gKiBUaGUgU3RhdHVzU3VtbWFyeSBpcyByZXR1cm5lZCBhcyBhIHJlc3BvbnNlIHRvIGdldHRpbmcgYGdpdCgpLnN0YXR1cygpYFxuICovXG5jbGFzcyBTdGF0dXNTdW1tYXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ub3RfYWRkZWQgPSBbXTtcbiAgICAgICAgdGhpcy5jb25mbGljdGVkID0gW107XG4gICAgICAgIHRoaXMuY3JlYXRlZCA9IFtdO1xuICAgICAgICB0aGlzLmRlbGV0ZWQgPSBbXTtcbiAgICAgICAgdGhpcy5tb2RpZmllZCA9IFtdO1xuICAgICAgICB0aGlzLnJlbmFtZWQgPSBbXTtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFsbCBmaWxlcyByZXByZXNlbnRlZCBhcyBhbiBhcnJheSBvZiBvYmplY3RzIGNvbnRhaW5pbmcgdGhlIGBwYXRoYCBhbmQgc3RhdHVzIGluIGBpbmRleGAgYW5kXG4gICAgICAgICAqIGluIHRoZSBgd29ya2luZ19kaXJgLlxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xuICAgICAgICB0aGlzLnN0YWdlZCA9IFtdO1xuICAgICAgICAvKipcbiAgICAgICAgICogTnVtYmVyIG9mIGNvbW1pdHMgYWhlYWQgb2YgdGhlIHRyYWNrZWQgYnJhbmNoXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmFoZWFkID0gMDtcbiAgICAgICAgLyoqXG4gICAgICAgICAqTnVtYmVyIG9mIGNvbW1pdHMgYmVoaW5kIHRoZSB0cmFja2VkIGJyYW5jaFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5iZWhpbmQgPSAwO1xuICAgICAgICAvKipcbiAgICAgICAgICogTmFtZSBvZiB0aGUgY3VycmVudCBicmFuY2hcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY3VycmVudCA9IG51bGw7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBOYW1lIG9mIHRoZSBicmFuY2ggYmVpbmcgdHJhY2tlZFxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy50cmFja2luZyA9IG51bGw7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEdldHMgd2hldGhlciB0aGlzIFN0YXR1c1N1bW1hcnkgcmVwcmVzZW50cyBhIGNsZWFuIHdvcmtpbmcgYnJhbmNoLlxuICAgICAqL1xuICAgIGlzQ2xlYW4oKSB7XG4gICAgICAgIHJldHVybiAhdGhpcy5maWxlcy5sZW5ndGg7XG4gICAgfVxufVxuZXhwb3J0cy5TdGF0dXNTdW1tYXJ5ID0gU3RhdHVzU3VtbWFyeTtcbnZhciBQb3JjZWxhaW5GaWxlU3RhdHVzO1xuKGZ1bmN0aW9uIChQb3JjZWxhaW5GaWxlU3RhdHVzKSB7XG4gICAgUG9yY2VsYWluRmlsZVN0YXR1c1tcIkFEREVEXCJdID0gXCJBXCI7XG4gICAgUG9yY2VsYWluRmlsZVN0YXR1c1tcIkRFTEVURURcIl0gPSBcIkRcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiTU9ESUZJRURcIl0gPSBcIk1cIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiUkVOQU1FRFwiXSA9IFwiUlwiO1xuICAgIFBvcmNlbGFpbkZpbGVTdGF0dXNbXCJDT1BJRURcIl0gPSBcIkNcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiVU5NRVJHRURcIl0gPSBcIlVcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiVU5UUkFDS0VEXCJdID0gXCI/XCI7XG4gICAgUG9yY2VsYWluRmlsZVN0YXR1c1tcIklHTk9SRURcIl0gPSBcIiFcIjtcbiAgICBQb3JjZWxhaW5GaWxlU3RhdHVzW1wiTk9ORVwiXSA9IFwiIFwiO1xufSkoUG9yY2VsYWluRmlsZVN0YXR1cyB8fCAoUG9yY2VsYWluRmlsZVN0YXR1cyA9IHt9KSk7XG5mdW5jdGlvbiByZW5hbWVkRmlsZShsaW5lKSB7XG4gICAgY29uc3QgZGV0YWlsID0gL14oLispIC0+ICguKykkLy5leGVjKGxpbmUpO1xuICAgIGlmICghZGV0YWlsKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBmcm9tOiBsaW5lLCB0bzogbGluZVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBmcm9tOiBTdHJpbmcoZGV0YWlsWzFdKSxcbiAgICAgICAgdG86IFN0cmluZyhkZXRhaWxbMl0pLFxuICAgIH07XG59XG5mdW5jdGlvbiBwYXJzZXIoaW5kZXhYLCBpbmRleFksIGhhbmRsZXIpIHtcbiAgICByZXR1cm4gW2Ake2luZGV4WH0ke2luZGV4WX1gLCBoYW5kbGVyXTtcbn1cbmZ1bmN0aW9uIGNvbmZsaWN0cyhpbmRleFgsIC4uLmluZGV4WSkge1xuICAgIHJldHVybiBpbmRleFkubWFwKHkgPT4gcGFyc2VyKGluZGV4WCwgeSwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNvbmZsaWN0ZWQsIGZpbGUpKSk7XG59XG5jb25zdCBwYXJzZXJzID0gbmV3IE1hcChbXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNyZWF0ZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCBQb3JjZWxhaW5GaWxlU3RhdHVzLkRFTEVURUQsIChyZXN1bHQsIGZpbGUpID0+IHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5kZWxldGVkLCBmaWxlKSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0Lm1vZGlmaWVkLCBmaWxlKSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNyZWF0ZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5BRERFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmNyZWF0ZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5tb2RpZmllZCwgZmlsZSkpLFxuICAgIHBhcnNlcihQb3JjZWxhaW5GaWxlU3RhdHVzLkRFTEVURUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuTk9ORSwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0LmRlbGV0ZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQubW9kaWZpZWQsIGZpbGUpICYmIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5zdGFnZWQsIGZpbGUpKSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4gdXRpbHNfMS5hcHBlbmQocmVzdWx0Lm1vZGlmaWVkLCBmaWxlKSAmJiB1dGlsc18xLmFwcGVuZChyZXN1bHQuc3RhZ2VkLCBmaWxlKSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuUkVOQU1FRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5OT05FLCAocmVzdWx0LCBmaWxlKSA9PiB7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5yZW5hbWVkLCByZW5hbWVkRmlsZShmaWxlKSk7XG4gICAgfSksXG4gICAgcGFyc2VyKFBvcmNlbGFpbkZpbGVTdGF0dXMuUkVOQU1FRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5NT0RJRklFRCwgKHJlc3VsdCwgZmlsZSkgPT4ge1xuICAgICAgICBjb25zdCByZW5hbWVkID0gcmVuYW1lZEZpbGUoZmlsZSk7XG4gICAgICAgIHV0aWxzXzEuYXBwZW5kKHJlc3VsdC5yZW5hbWVkLCByZW5hbWVkKTtcbiAgICAgICAgdXRpbHNfMS5hcHBlbmQocmVzdWx0Lm1vZGlmaWVkLCByZW5hbWVkLnRvKTtcbiAgICB9KSxcbiAgICBwYXJzZXIoUG9yY2VsYWluRmlsZVN0YXR1cy5VTlRSQUNLRUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuVU5UUkFDS0VELCAocmVzdWx0LCBmaWxlKSA9PiB1dGlsc18xLmFwcGVuZChyZXN1bHQubm90X2FkZGVkLCBmaWxlKSksXG4gICAgLi4uY29uZmxpY3RzKFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuVU5NRVJHRUQpLFxuICAgIC4uLmNvbmZsaWN0cyhQb3JjZWxhaW5GaWxlU3RhdHVzLkRFTEVURUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5VTk1FUkdFRCksXG4gICAgLi4uY29uZmxpY3RzKFBvcmNlbGFpbkZpbGVTdGF0dXMuVU5NRVJHRUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuQURERUQsIFBvcmNlbGFpbkZpbGVTdGF0dXMuREVMRVRFRCwgUG9yY2VsYWluRmlsZVN0YXR1cy5VTk1FUkdFRCksXG4gICAgWycjIycsIChyZXN1bHQsIGxpbmUpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFoZWFkUmVnID0gL2FoZWFkIChcXGQrKS87XG4gICAgICAgICAgICBjb25zdCBiZWhpbmRSZWcgPSAvYmVoaW5kIChcXGQrKS87XG4gICAgICAgICAgICBjb25zdCBjdXJyZW50UmVnID0gL14oLis/KD89KD86XFwuezN9fFxcc3wkKSkpLztcbiAgICAgICAgICAgIGNvbnN0IHRyYWNraW5nUmVnID0gL1xcLnszfShcXFMqKS87XG4gICAgICAgICAgICBjb25zdCBvbkVtcHR5QnJhbmNoUmVnID0gL1xcc29uXFxzKFtcXFNdKykkLztcbiAgICAgICAgICAgIGxldCByZWdleFJlc3VsdDtcbiAgICAgICAgICAgIHJlZ2V4UmVzdWx0ID0gYWhlYWRSZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIHJlc3VsdC5haGVhZCA9IHJlZ2V4UmVzdWx0ICYmICtyZWdleFJlc3VsdFsxXSB8fCAwO1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSBiZWhpbmRSZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIHJlc3VsdC5iZWhpbmQgPSByZWdleFJlc3VsdCAmJiArcmVnZXhSZXN1bHRbMV0gfHwgMDtcbiAgICAgICAgICAgIHJlZ2V4UmVzdWx0ID0gY3VycmVudFJlZy5leGVjKGxpbmUpO1xuICAgICAgICAgICAgcmVzdWx0LmN1cnJlbnQgPSByZWdleFJlc3VsdCAmJiByZWdleFJlc3VsdFsxXTtcbiAgICAgICAgICAgIHJlZ2V4UmVzdWx0ID0gdHJhY2tpbmdSZWcuZXhlYyhsaW5lKTtcbiAgICAgICAgICAgIHJlc3VsdC50cmFja2luZyA9IHJlZ2V4UmVzdWx0ICYmIHJlZ2V4UmVzdWx0WzFdO1xuICAgICAgICAgICAgcmVnZXhSZXN1bHQgPSBvbkVtcHR5QnJhbmNoUmVnLmV4ZWMobGluZSk7XG4gICAgICAgICAgICByZXN1bHQuY3VycmVudCA9IHJlZ2V4UmVzdWx0ICYmIHJlZ2V4UmVzdWx0WzFdIHx8IHJlc3VsdC5jdXJyZW50O1xuICAgICAgICB9XVxuXSk7XG5jb25zdCBwYXJzZVN0YXR1c1N1bW1hcnkgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgIGNvbnN0IGxpbmVzID0gdGV4dC50cmltKCkuc3BsaXQoJ1xcbicpO1xuICAgIGNvbnN0IHN0YXR1cyA9IG5ldyBTdGF0dXNTdW1tYXJ5KCk7XG4gICAgZm9yIChsZXQgaSA9IDAsIGwgPSBsaW5lcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgc3BsaXRMaW5lKHN0YXR1cywgbGluZXNbaV0pO1xuICAgIH1cbiAgICByZXR1cm4gc3RhdHVzO1xufTtcbmV4cG9ydHMucGFyc2VTdGF0dXNTdW1tYXJ5ID0gcGFyc2VTdGF0dXNTdW1tYXJ5O1xuZnVuY3Rpb24gc3BsaXRMaW5lKHJlc3VsdCwgbGluZVN0cikge1xuICAgIGNvbnN0IHRyaW1tZWQgPSBsaW5lU3RyLnRyaW0oKTtcbiAgICBzd2l0Y2ggKCcgJykge1xuICAgICAgICBjYXNlIHRyaW1tZWQuY2hhckF0KDIpOlxuICAgICAgICAgICAgcmV0dXJuIGRhdGEodHJpbW1lZC5jaGFyQXQoMCksIHRyaW1tZWQuY2hhckF0KDEpLCB0cmltbWVkLnN1YnN0cigzKSk7XG4gICAgICAgIGNhc2UgdHJpbW1lZC5jaGFyQXQoMSk6XG4gICAgICAgICAgICByZXR1cm4gZGF0YShQb3JjZWxhaW5GaWxlU3RhdHVzLk5PTkUsIHRyaW1tZWQuY2hhckF0KDApLCB0cmltbWVkLnN1YnN0cigyKSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRhdGEoaW5kZXgsIHdvcmtpbmdEaXIsIHBhdGgpIHtcbiAgICAgICAgY29uc3QgcmF3ID0gYCR7aW5kZXh9JHt3b3JraW5nRGlyfWA7XG4gICAgICAgIGNvbnN0IGhhbmRsZXIgPSBwYXJzZXJzLmdldChyYXcpO1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcihyZXN1bHQsIHBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYXcgIT09ICcjIycpIHtcbiAgICAgICAgICAgIHJlc3VsdC5maWxlcy5wdXNoKG5ldyBGaWxlU3RhdHVzU3VtbWFyeV8xLkZpbGVTdGF0dXNTdW1tYXJ5KHBhdGgsIGluZGV4LCB3b3JraW5nRGlyKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1TdGF0dXNTdW1tYXJ5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdGF0dXNUYXNrID0gdm9pZCAwO1xuY29uc3QgU3RhdHVzU3VtbWFyeV8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9TdGF0dXNTdW1tYXJ5XCIpO1xuZnVuY3Rpb24gc3RhdHVzVGFzayhjdXN0b21BcmdzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZm9ybWF0OiAndXRmLTgnLFxuICAgICAgICBjb21tYW5kczogWydzdGF0dXMnLCAnLS1wb3JjZWxhaW4nLCAnLWInLCAnLXUnLCAuLi5jdXN0b21BcmdzXSxcbiAgICAgICAgcGFyc2VyKHRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBTdGF0dXNTdW1tYXJ5XzEucGFyc2VTdGF0dXNTdW1tYXJ5KHRleHQpO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmV4cG9ydHMuc3RhdHVzVGFzayA9IHN0YXR1c1Rhc2s7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1zdGF0dXMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnVwZGF0ZVN1Yk1vZHVsZVRhc2sgPSBleHBvcnRzLnN1Yk1vZHVsZVRhc2sgPSBleHBvcnRzLmluaXRTdWJNb2R1bGVUYXNrID0gZXhwb3J0cy5hZGRTdWJNb2R1bGVUYXNrID0gdm9pZCAwO1xuY29uc3QgdGFza18xID0gcmVxdWlyZShcIi4vdGFza1wiKTtcbmZ1bmN0aW9uIGFkZFN1Yk1vZHVsZVRhc2socmVwbywgcGF0aCkge1xuICAgIHJldHVybiBzdWJNb2R1bGVUYXNrKFsnYWRkJywgcmVwbywgcGF0aF0pO1xufVxuZXhwb3J0cy5hZGRTdWJNb2R1bGVUYXNrID0gYWRkU3ViTW9kdWxlVGFzaztcbmZ1bmN0aW9uIGluaXRTdWJNb2R1bGVUYXNrKGN1c3RvbUFyZ3MpIHtcbiAgICByZXR1cm4gc3ViTW9kdWxlVGFzayhbJ2luaXQnLCAuLi5jdXN0b21BcmdzXSk7XG59XG5leHBvcnRzLmluaXRTdWJNb2R1bGVUYXNrID0gaW5pdFN1Yk1vZHVsZVRhc2s7XG5mdW5jdGlvbiBzdWJNb2R1bGVUYXNrKGN1c3RvbUFyZ3MpIHtcbiAgICBjb25zdCBjb21tYW5kcyA9IFsuLi5jdXN0b21BcmdzXTtcbiAgICBpZiAoY29tbWFuZHNbMF0gIT09ICdzdWJtb2R1bGUnKSB7XG4gICAgICAgIGNvbW1hbmRzLnVuc2hpZnQoJ3N1Ym1vZHVsZScpO1xuICAgIH1cbiAgICByZXR1cm4gdGFza18xLnN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMpO1xufVxuZXhwb3J0cy5zdWJNb2R1bGVUYXNrID0gc3ViTW9kdWxlVGFzaztcbmZ1bmN0aW9uIHVwZGF0ZVN1Yk1vZHVsZVRhc2soY3VzdG9tQXJncykge1xuICAgIHJldHVybiBzdWJNb2R1bGVUYXNrKFsndXBkYXRlJywgLi4uY3VzdG9tQXJnc10pO1xufVxuZXhwb3J0cy51cGRhdGVTdWJNb2R1bGVUYXNrID0gdXBkYXRlU3ViTW9kdWxlVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXN1Yi1tb2R1bGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnBhcnNlVGFnTGlzdCA9IGV4cG9ydHMuVGFnTGlzdCA9IHZvaWQgMDtcbmNsYXNzIFRhZ0xpc3Qge1xuICAgIGNvbnN0cnVjdG9yKGFsbCwgbGF0ZXN0KSB7XG4gICAgICAgIHRoaXMuYWxsID0gYWxsO1xuICAgICAgICB0aGlzLmxhdGVzdCA9IGxhdGVzdDtcbiAgICB9XG59XG5leHBvcnRzLlRhZ0xpc3QgPSBUYWdMaXN0O1xuY29uc3QgcGFyc2VUYWdMaXN0ID0gZnVuY3Rpb24gKGRhdGEsIGN1c3RvbVNvcnQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHRhZ3MgPSBkYXRhXG4gICAgICAgIC5zcGxpdCgnXFxuJylcbiAgICAgICAgLm1hcCh0cmltbWVkKVxuICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgIGlmICghY3VzdG9tU29ydCkge1xuICAgICAgICB0YWdzLnNvcnQoZnVuY3Rpb24gKHRhZ0EsIHRhZ0IpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzQSA9IHRhZ0Euc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzQiA9IHRhZ0Iuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGlmIChwYXJ0c0EubGVuZ3RoID09PSAxIHx8IHBhcnRzQi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc2luZ2xlU29ydGVkKHRvTnVtYmVyKHBhcnRzQVswXSksIHRvTnVtYmVyKHBhcnRzQlswXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGwgPSBNYXRoLm1heChwYXJ0c0EubGVuZ3RoLCBwYXJ0c0IubGVuZ3RoKTsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRpZmYgPSBzb3J0ZWQodG9OdW1iZXIocGFydHNBW2ldKSwgdG9OdW1iZXIocGFydHNCW2ldKSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpZmYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpZmY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBsYXRlc3QgPSBjdXN0b21Tb3J0ID8gdGFnc1swXSA6IFsuLi50YWdzXS5yZXZlcnNlKCkuZmluZCgodGFnKSA9PiB0YWcuaW5kZXhPZignLicpID49IDApO1xuICAgIHJldHVybiBuZXcgVGFnTGlzdCh0YWdzLCBsYXRlc3QpO1xufTtcbmV4cG9ydHMucGFyc2VUYWdMaXN0ID0gcGFyc2VUYWdMaXN0O1xuZnVuY3Rpb24gc2luZ2xlU29ydGVkKGEsIGIpIHtcbiAgICBjb25zdCBhSXNOdW0gPSBpc05hTihhKTtcbiAgICBjb25zdCBiSXNOdW0gPSBpc05hTihiKTtcbiAgICBpZiAoYUlzTnVtICE9PSBiSXNOdW0pIHtcbiAgICAgICAgcmV0dXJuIGFJc051bSA/IDEgOiAtMTtcbiAgICB9XG4gICAgcmV0dXJuIGFJc051bSA/IHNvcnRlZChhLCBiKSA6IDA7XG59XG5mdW5jdGlvbiBzb3J0ZWQoYSwgYikge1xuICAgIHJldHVybiBhID09PSBiID8gMCA6IGEgPiBiID8gMSA6IC0xO1xufVxuZnVuY3Rpb24gdHJpbW1lZChpbnB1dCkge1xuICAgIHJldHVybiBpbnB1dC50cmltKCk7XG59XG5mdW5jdGlvbiB0b051bWJlcihpbnB1dCkge1xuICAgIGlmICh0eXBlb2YgaW5wdXQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBwYXJzZUludChpbnB1dC5yZXBsYWNlKC9eXFxEKy9nLCAnJyksIDEwKSB8fCAwO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRhZ0xpc3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmFkZEFubm90YXRlZFRhZ1Rhc2sgPSBleHBvcnRzLmFkZFRhZ1Rhc2sgPSBleHBvcnRzLnRhZ0xpc3RUYXNrID0gdm9pZCAwO1xuY29uc3QgVGFnTGlzdF8xID0gcmVxdWlyZShcIi4uL3Jlc3BvbnNlcy9UYWdMaXN0XCIpO1xuLyoqXG4gKiBUYXNrIHVzZWQgYnkgYGdpdC50YWdzYFxuICovXG5mdW5jdGlvbiB0YWdMaXN0VGFzayhjdXN0b21BcmdzID0gW10pIHtcbiAgICBjb25zdCBoYXNDdXN0b21Tb3J0ID0gY3VzdG9tQXJncy5zb21lKChvcHRpb24pID0+IC9eLS1zb3J0PS8udGVzdChvcHRpb24pKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ3RhZycsICctbCcsIC4uLmN1c3RvbUFyZ3NdLFxuICAgICAgICBwYXJzZXIodGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIFRhZ0xpc3RfMS5wYXJzZVRhZ0xpc3QodGV4dCwgaGFzQ3VzdG9tU29ydCk7XG4gICAgICAgIH0sXG4gICAgfTtcbn1cbmV4cG9ydHMudGFnTGlzdFRhc2sgPSB0YWdMaXN0VGFzaztcbi8qKlxuICogVGFzayB1c2VkIGJ5IGBnaXQuYWRkVGFnYFxuICovXG5mdW5jdGlvbiBhZGRUYWdUYXNrKG5hbWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ3RhZycsIG5hbWVdLFxuICAgICAgICBwYXJzZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5hZGRUYWdUYXNrID0gYWRkVGFnVGFzaztcbi8qKlxuICogVGFzayB1c2VkIGJ5IGBnaXQuYWRkVGFnYFxuICovXG5mdW5jdGlvbiBhZGRBbm5vdGF0ZWRUYWdUYXNrKG5hbWUsIHRhZ01lc3NhZ2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBmb3JtYXQ6ICd1dGYtOCcsXG4gICAgICAgIGNvbW1hbmRzOiBbJ3RhZycsICctYScsICctbScsIHRhZ01lc3NhZ2UsIG5hbWVdLFxuICAgICAgICBwYXJzZXIoKSB7XG4gICAgICAgICAgICByZXR1cm4geyBuYW1lIH07XG4gICAgICAgIH1cbiAgICB9O1xufVxuZXhwb3J0cy5hZGRBbm5vdGF0ZWRUYWdUYXNrID0gYWRkQW5ub3RhdGVkVGFnVGFzaztcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXRhZy5qcy5tYXAiLCJjb25zdCB7R2l0RXhlY3V0b3J9ID0gcmVxdWlyZSgnLi9saWIvcnVubmVycy9naXQtZXhlY3V0b3InKTtcbmNvbnN0IHtTaW1wbGVHaXRBcGl9ID0gcmVxdWlyZSgnLi9saWIvc2ltcGxlLWdpdC1hcGknKTtcblxuY29uc3Qge1NjaGVkdWxlcn0gPSByZXF1aXJlKCcuL2xpYi9ydW5uZXJzL3NjaGVkdWxlcicpO1xuY29uc3Qge0dpdExvZ2dlcn0gPSByZXF1aXJlKCcuL2xpYi9naXQtbG9nZ2VyJyk7XG5jb25zdCB7YWRob2NFeGVjVGFzaywgY29uZmlndXJhdGlvbkVycm9yVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy90YXNrJyk7XG5jb25zdCB7XG4gICBOT09QLFxuICAgYXNBcnJheSxcbiAgIGZpbHRlckFycmF5LFxuICAgZmlsdGVyUHJpbWl0aXZlcyxcbiAgIGZpbHRlclN0cmluZyxcbiAgIGZpbHRlclN0cmluZ09yU3RyaW5nQXJyYXksXG4gICBmaWx0ZXJUeXBlLFxuICAgZm9sZGVyRXhpc3RzLFxuICAgZ2V0VHJhaWxpbmdPcHRpb25zLFxuICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50LFxuICAgdHJhaWxpbmdPcHRpb25zQXJndW1lbnRcbn0gPSByZXF1aXJlKCcuL2xpYi91dGlscycpO1xuY29uc3Qge2FwcGx5UGF0Y2hUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2FwcGx5LXBhdGNoJylcbmNvbnN0IHticmFuY2hUYXNrLCBicmFuY2hMb2NhbFRhc2ssIGRlbGV0ZUJyYW5jaGVzVGFzaywgZGVsZXRlQnJhbmNoVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9icmFuY2gnKTtcbmNvbnN0IHtjaGVja0lnbm9yZVRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvY2hlY2staWdub3JlJyk7XG5jb25zdCB7Y2hlY2tJc1JlcG9UYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2NoZWNrLWlzLXJlcG8nKTtcbmNvbnN0IHtjbG9uZVRhc2ssIGNsb25lTWlycm9yVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9jbG9uZScpO1xuY29uc3Qge2FkZENvbmZpZ1Rhc2ssIGxpc3RDb25maWdUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2NvbmZpZycpO1xuY29uc3Qge2NsZWFuV2l0aE9wdGlvbnNUYXNrLCBpc0NsZWFuT3B0aW9uc0FycmF5fSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2NsZWFuJyk7XG5jb25zdCB7Y29tbWl0VGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9jb21taXQnKTtcbmNvbnN0IHtkaWZmU3VtbWFyeVRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvZGlmZicpO1xuY29uc3Qge2ZldGNoVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9mZXRjaCcpO1xuY29uc3Qge2hhc2hPYmplY3RUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL2hhc2gtb2JqZWN0Jyk7XG5jb25zdCB7aW5pdFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvaW5pdCcpO1xuY29uc3Qge2xvZ1Rhc2ssIHBhcnNlTG9nT3B0aW9uc30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9sb2cnKTtcbmNvbnN0IHttZXJnZVRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvbWVyZ2UnKTtcbmNvbnN0IHttb3ZlVGFza30gPSByZXF1aXJlKFwiLi9saWIvdGFza3MvbW92ZVwiKTtcbmNvbnN0IHtwdWxsVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9wdWxsJyk7XG5jb25zdCB7cHVzaFRhZ3NUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3B1c2gnKTtcbmNvbnN0IHthZGRSZW1vdGVUYXNrLCBnZXRSZW1vdGVzVGFzaywgbGlzdFJlbW90ZXNUYXNrLCByZW1vdGVUYXNrLCByZW1vdmVSZW1vdGVUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3JlbW90ZScpO1xuY29uc3Qge2dldFJlc2V0TW9kZSwgcmVzZXRUYXNrfSA9IHJlcXVpcmUoJy4vbGliL3Rhc2tzL3Jlc2V0Jyk7XG5jb25zdCB7c3Rhc2hMaXN0VGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9zdGFzaC1saXN0Jyk7XG5jb25zdCB7c3RhdHVzVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9zdGF0dXMnKTtcbmNvbnN0IHthZGRTdWJNb2R1bGVUYXNrLCBpbml0U3ViTW9kdWxlVGFzaywgc3ViTW9kdWxlVGFzaywgdXBkYXRlU3ViTW9kdWxlVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy9zdWItbW9kdWxlJyk7XG5jb25zdCB7YWRkQW5ub3RhdGVkVGFnVGFzaywgYWRkVGFnVGFzaywgdGFnTGlzdFRhc2t9ID0gcmVxdWlyZSgnLi9saWIvdGFza3MvdGFnJyk7XG5jb25zdCB7c3RyYWlnaHRUaHJvdWdoQnVmZmVyVGFzaywgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFza30gPSByZXF1aXJlKCcuL2xpYi90YXNrcy90YXNrJyk7XG5cbmZ1bmN0aW9uIEdpdCAob3B0aW9ucywgcGx1Z2lucykge1xuICAgdGhpcy5fZXhlY3V0b3IgPSBuZXcgR2l0RXhlY3V0b3IoXG4gICAgICBvcHRpb25zLmJpbmFyeSwgb3B0aW9ucy5iYXNlRGlyLFxuICAgICAgbmV3IFNjaGVkdWxlcihvcHRpb25zLm1heENvbmN1cnJlbnRQcm9jZXNzZXMpLCBwbHVnaW5zLFxuICAgKTtcbiAgIHRoaXMuX2xvZ2dlciA9IG5ldyBHaXRMb2dnZXIoKTtcbn1cblxuKEdpdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKFNpbXBsZUdpdEFwaS5wcm90b3R5cGUpKS5jb25zdHJ1Y3RvciA9IEdpdDtcblxuLyoqXG4gKiBMb2dnaW5nIHV0aWxpdHkgZm9yIHByaW50aW5nIG91dCBpbmZvIG9yIGVycm9yIG1lc3NhZ2VzIHRvIHRoZSB1c2VyXG4gKiBAdHlwZSB7R2l0TG9nZ2VyfVxuICogQHByaXZhdGVcbiAqL1xuR2l0LnByb3RvdHlwZS5fbG9nZ2VyID0gbnVsbDtcblxuLyoqXG4gKiBTZXRzIHRoZSBwYXRoIHRvIGEgY3VzdG9tIGdpdCBiaW5hcnksIHNob3VsZCBlaXRoZXIgYmUgYGdpdGAgd2hlbiB0aGVyZSBpcyBhbiBpbnN0YWxsYXRpb24gb2YgZ2l0IGF2YWlsYWJsZSBvblxuICogdGhlIHN5c3RlbSBwYXRoLCBvciBhIGZ1bGx5IHF1YWxpZmllZCBwYXRoIHRvIHRoZSBleGVjdXRhYmxlLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBjb21tYW5kXG4gKiBAcmV0dXJucyB7R2l0fVxuICovXG5HaXQucHJvdG90eXBlLmN1c3RvbUJpbmFyeSA9IGZ1bmN0aW9uIChjb21tYW5kKSB7XG4gICB0aGlzLl9leGVjdXRvci5iaW5hcnkgPSBjb21tYW5kO1xuICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIFNldHMgYW4gZW52aXJvbm1lbnQgdmFyaWFibGUgZm9yIHRoZSBzcGF3bmVkIGNoaWxkIHByb2Nlc3MsIGVpdGhlciBzdXBwbHkgYm90aCBhIG5hbWUgYW5kIHZhbHVlIGFzIHN0cmluZ3Mgb3JcbiAqIGEgc2luZ2xlIG9iamVjdCB0byBlbnRpcmVseSByZXBsYWNlIHRoZSBjdXJyZW50IGVudmlyb25tZW50IHZhcmlhYmxlcy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ3xPYmplY3R9IG5hbWVcbiAqIEBwYXJhbSB7c3RyaW5nfSBbdmFsdWVdXG4gKiBAcmV0dXJucyB7R2l0fVxuICovXG5HaXQucHJvdG90eXBlLmVudiA9IGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSkge1xuICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEgJiYgdHlwZW9mIG5hbWUgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLl9leGVjdXRvci5lbnYgPSBuYW1lO1xuICAgfSBlbHNlIHtcbiAgICAgICh0aGlzLl9leGVjdXRvci5lbnYgPSB0aGlzLl9leGVjdXRvci5lbnYgfHwge30pW25hbWVdID0gdmFsdWU7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzO1xufTtcblxuLyoqXG4gKiBTZXRzIHRoZSB3b3JraW5nIGRpcmVjdG9yeSBvZiB0aGUgc3Vic2VxdWVudCBjb21tYW5kcy5cbiAqL1xuR2l0LnByb3RvdHlwZS5jd2QgPSBmdW5jdGlvbiAod29ya2luZ0RpcmVjdG9yeSkge1xuICAgY29uc3QgdGFzayA9ICh0eXBlb2Ygd29ya2luZ0RpcmVjdG9yeSAhPT0gJ3N0cmluZycpXG4gICAgICA/IGNvbmZpZ3VyYXRpb25FcnJvclRhc2soJ0dpdC5jd2Q6IHdvcmtpbmdEaXJlY3RvcnkgbXVzdCBiZSBzdXBwbGllZCBhcyBhIHN0cmluZycpXG4gICAgICA6IGFkaG9jRXhlY1Rhc2soKCkgPT4ge1xuICAgICAgICAgaWYgKCFmb2xkZXJFeGlzdHMod29ya2luZ0RpcmVjdG9yeSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgR2l0LmN3ZDogY2Fubm90IGNoYW5nZSB0byBub24tZGlyZWN0b3J5IFwiJHsgd29ya2luZ0RpcmVjdG9yeSB9XCJgKTtcbiAgICAgICAgIH1cblxuICAgICAgICAgcmV0dXJuICh0aGlzLl9leGVjdXRvci5jd2QgPSB3b3JraW5nRGlyZWN0b3J5KTtcbiAgICAgIH0pO1xuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrLCB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSB8fCBOT09QKTtcbn07XG5cbi8qKlxuICogU2V0cyBhIGhhbmRsZXIgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW5ldmVyIGEgbmV3IGNoaWxkIHByb2Nlc3MgaXMgY3JlYXRlZCwgdGhlIGhhbmRsZXIgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWRcbiAqIHdpdGggdGhlIG5hbWUgb2YgdGhlIGNvbW1hbmQgYmVpbmcgcnVuIGFuZCB0aGUgc3Rkb3V0ICYgc3RkZXJyIHN0cmVhbXMgdXNlZCBieSB0aGUgQ2hpbGRQcm9jZXNzLlxuICpcbiAqIEBleGFtcGxlXG4gKiByZXF1aXJlKCdzaW1wbGUtZ2l0JylcbiAqICAgIC5vdXRwdXRIYW5kbGVyKGZ1bmN0aW9uIChjb21tYW5kLCBzdGRvdXQsIHN0ZGVycikge1xuICogICAgICAgc3Rkb3V0LnBpcGUocHJvY2Vzcy5zdGRvdXQpO1xuICogICAgfSlcbiAqICAgIC5jaGVja291dCgnaHR0cHM6Ly9naXRodWIuY29tL3VzZXIvcmVwby5naXQnKTtcbiAqXG4gKiBAc2VlIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvY2hpbGRfcHJvY2Vzcy5odG1sI2NoaWxkX3Byb2Nlc3NfY2xhc3NfY2hpbGRwcm9jZXNzXG4gKiBAc2VlIGh0dHBzOi8vbm9kZWpzLm9yZy9hcGkvc3RyZWFtLmh0bWwjc3RyZWFtX2NsYXNzX3N0cmVhbV9yZWFkYWJsZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb3V0cHV0SGFuZGxlclxuICogQHJldHVybnMge0dpdH1cbiAqL1xuR2l0LnByb3RvdHlwZS5vdXRwdXRIYW5kbGVyID0gZnVuY3Rpb24gKG91dHB1dEhhbmRsZXIpIHtcbiAgIHRoaXMuX2V4ZWN1dG9yLm91dHB1dEhhbmRsZXIgPSBvdXRwdXRIYW5kbGVyO1xuICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIEluaXRpYWxpemUgYSBnaXQgcmVwb1xuICpcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW2JhcmU9ZmFsc2VdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5pbml0ID0gZnVuY3Rpb24gKGJhcmUsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgaW5pdFRhc2soYmFyZSA9PT0gdHJ1ZSwgdGhpcy5fZXhlY3V0b3IuY3dkLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIENoZWNrIHRoZSBzdGF0dXMgb2YgdGhlIGxvY2FsIHJlcG9cbiAqL1xuR2l0LnByb3RvdHlwZS5zdGF0dXMgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0YXR1c1Rhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBMaXN0IHRoZSBzdGFzaChzKSBvZiB0aGUgbG9jYWwgcmVwb1xuICovXG5HaXQucHJvdG90eXBlLnN0YXNoTGlzdCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0YXNoTGlzdFRhc2soXG4gICAgICAgICB0cmFpbGluZ09wdGlvbnNBcmd1bWVudChhcmd1bWVudHMpIHx8IHt9LFxuICAgICAgICAgZmlsdGVyQXJyYXkob3B0aW9ucykgJiYgb3B0aW9ucyB8fCBbXVxuICAgICAgKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogU3Rhc2ggdGhlIGxvY2FsIHJlcG9cbiAqXG4gKiBAcGFyYW0ge09iamVjdHxBcnJheX0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5zdGFzaCA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydzdGFzaCcsIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpXSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDbG9uZVRhc2sgKGFwaSwgdGFzaywgcmVwb1BhdGgsIGxvY2FsUGF0aCkge1xuICAgaWYgKHR5cGVvZiByZXBvUGF0aCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiBjb25maWd1cmF0aW9uRXJyb3JUYXNrKGBnaXQuJHsgYXBpIH0oKSByZXF1aXJlcyBhIHN0cmluZyAncmVwb1BhdGgnYCk7XG4gICB9XG5cbiAgIHJldHVybiB0YXNrKHJlcG9QYXRoLCBmaWx0ZXJUeXBlKGxvY2FsUGF0aCwgZmlsdGVyU3RyaW5nKSwgZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpO1xufVxuXG5cbi8qKlxuICogQ2xvbmUgYSBnaXQgcmVwb1xuICovXG5HaXQucHJvdG90eXBlLmNsb25lID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBjcmVhdGVDbG9uZVRhc2soJ2Nsb25lJywgY2xvbmVUYXNrLCAuLi5hcmd1bWVudHMpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBNaXJyb3IgYSBnaXQgcmVwb1xuICovXG5HaXQucHJvdG90eXBlLm1pcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY3JlYXRlQ2xvbmVUYXNrKCdtaXJyb3InLCBjbG9uZU1pcnJvclRhc2ssIC4uLmFyZ3VtZW50cyksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIE1vdmVzIG9uZSBvciBtb3JlIGZpbGVzIHRvIGEgbmV3IGRlc3RpbmF0aW9uLlxuICpcbiAqIEBzZWUgaHR0cHM6Ly9naXQtc2NtLmNvbS9kb2NzL2dpdC1tdlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBmcm9tXG4gKiBAcGFyYW0ge3N0cmluZ30gdG9cbiAqL1xuR2l0LnByb3RvdHlwZS5tdiA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2sobW92ZVRhc2soZnJvbSwgdG8pLCB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG59O1xuXG4vKipcbiAqIEludGVybmFsbHkgdXNlcyBwdWxsIGFuZCB0YWdzIHRvIGdldCB0aGUgbGlzdCBvZiB0YWdzIHRoZW4gY2hlY2tzIG91dCB0aGUgbGF0ZXN0IHRhZy5cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5jaGVja291dExhdGVzdFRhZyA9IGZ1bmN0aW9uICh0aGVuKSB7XG4gICB2YXIgZ2l0ID0gdGhpcztcbiAgIHJldHVybiB0aGlzLnB1bGwoZnVuY3Rpb24gKCkge1xuICAgICAgZ2l0LnRhZ3MoZnVuY3Rpb24gKGVyciwgdGFncykge1xuICAgICAgICAgZ2l0LmNoZWNrb3V0KHRhZ3MubGF0ZXN0LCB0aGVuKTtcbiAgICAgIH0pO1xuICAgfSk7XG59O1xuXG4vKipcbiAqIENvbW1pdHMgY2hhbmdlcyBpbiB0aGUgY3VycmVudCB3b3JraW5nIGRpcmVjdG9yeSAtIHdoZW4gc3BlY2lmaWMgZmlsZSBwYXRocyBhcmUgc3VwcGxpZWQsIG9ubHkgY2hhbmdlcyBvbiB0aG9zZVxuICogZmlsZXMgd2lsbCBiZSBjb21taXR0ZWQuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IG1lc3NhZ2VcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBbZmlsZXNdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5jb21taXQgPSBmdW5jdGlvbiAobWVzc2FnZSwgZmlsZXMsIG9wdGlvbnMsIHRoZW4pIHtcbiAgIGNvbnN0IG5leHQgPSB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcbiAgIGNvbnN0IG1lc3NhZ2VzID0gW107XG5cbiAgIGlmIChmaWx0ZXJTdHJpbmdPclN0cmluZ0FycmF5KG1lc3NhZ2UpKSB7XG4gICAgICBtZXNzYWdlcy5wdXNoKC4uLmFzQXJyYXkobWVzc2FnZSkpO1xuICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUud2Fybignc2ltcGxlLWdpdCBkZXByZWNhdGlvbiBub3RpY2U6IGdpdC5jb21taXQ6IHJlcXVpcmVzIHRoZSBjb21taXQgbWVzc2FnZSB0byBiZSBzdXBwbGllZCBhcyBhIHN0cmluZy9zdHJpbmdbXSwgdGhpcyB3aWxsIGJlIGFuIGVycm9yIGluIHZlcnNpb24gMycpO1xuICAgfVxuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGNvbW1pdFRhc2soXG4gICAgICAgICBtZXNzYWdlcyxcbiAgICAgICAgIGFzQXJyYXkoZmlsdGVyVHlwZShmaWxlcywgZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSwgW10pKSxcbiAgICAgICAgIFsuLi5maWx0ZXJUeXBlKG9wdGlvbnMsIGZpbHRlckFycmF5LCBbXSksIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIDAsIHRydWUpXVxuICAgICAgKSxcbiAgICAgIG5leHRcbiAgICk7XG59O1xuXG4vKipcbiAqIFB1bGwgdGhlIHVwZGF0ZWQgY29udGVudHMgb2YgdGhlIGN1cnJlbnQgcmVwb1xuICovXG5HaXQucHJvdG90eXBlLnB1bGwgPSBmdW5jdGlvbiAocmVtb3RlLCBicmFuY2gsIG9wdGlvbnMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgcHVsbFRhc2soZmlsdGVyVHlwZShyZW1vdGUsIGZpbHRlclN0cmluZyksIGZpbHRlclR5cGUoYnJhbmNoLCBmaWx0ZXJTdHJpbmcpLCBnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIEZldGNoIHRoZSB1cGRhdGVkIGNvbnRlbnRzIG9mIHRoZSBjdXJyZW50IHJlcG8uXG4gKlxuICogQGV4YW1wbGVcbiAqICAgLmZldGNoKCd1cHN0cmVhbScsICdtYXN0ZXInKSAvLyBmZXRjaGVzIGZyb20gbWFzdGVyIG9uIHJlbW90ZSBuYW1lZCB1cHN0cmVhbVxuICogICAuZmV0Y2goZnVuY3Rpb24gKCkge30pIC8vIHJ1bnMgZmV0Y2ggYWdhaW5zdCBkZWZhdWx0IHJlbW90ZSBhbmQgYnJhbmNoIGFuZCBjYWxscyBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbcmVtb3RlXVxuICogQHBhcmFtIHtzdHJpbmd9IFticmFuY2hdXG4gKi9cbkdpdC5wcm90b3R5cGUuZmV0Y2ggPSBmdW5jdGlvbiAocmVtb3RlLCBicmFuY2gpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgZmV0Y2hUYXNrKGZpbHRlclR5cGUocmVtb3RlLCBmaWx0ZXJTdHJpbmcpLCBmaWx0ZXJUeXBlKGJyYW5jaCwgZmlsdGVyU3RyaW5nKSwgZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBEaXNhYmxlcy9lbmFibGVzIHRoZSB1c2Ugb2YgdGhlIGNvbnNvbGUgZm9yIHByaW50aW5nIHdhcm5pbmdzIGFuZCBlcnJvcnMsIGJ5IGRlZmF1bHQgbWVzc2FnZXMgYXJlIG5vdCBzaG93biBpblxuICogYSBwcm9kdWN0aW9uIGVudmlyb25tZW50LlxuICpcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gc2lsZW5jZVxuICogQHJldHVybnMge0dpdH1cbiAqL1xuR2l0LnByb3RvdHlwZS5zaWxlbnQgPSBmdW5jdGlvbiAoc2lsZW5jZSkge1xuICAgY29uc29sZS53YXJuKCdzaW1wbGUtZ2l0IGRlcHJlY2F0aW9uIG5vdGljZTogZ2l0LnNpbGVudDogbG9nZ2luZyBzaG91bGQgYmUgY29uZmlndXJlZCB1c2luZyB0aGUgYGRlYnVnYCBsaWJyYXJ5IC8gYERFQlVHYCBlbnZpcm9ubWVudCB2YXJpYWJsZSwgdGhpcyB3aWxsIGJlIGFuIGVycm9yIGluIHZlcnNpb24gMycpO1xuICAgdGhpcy5fbG9nZ2VyLnNpbGVudCghIXNpbGVuY2UpO1xuICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIExpc3QgYWxsIHRhZ3MuIFdoZW4gdXNpbmcgZ2l0IDIuNy4wIG9yIGFib3ZlLCBpbmNsdWRlIGFuIG9wdGlvbnMgb2JqZWN0IHdpdGggYFwiLS1zb3J0XCI6IFwicHJvcGVydHktbmFtZVwiYCB0b1xuICogc29ydCB0aGUgdGFncyBieSB0aGF0IHByb3BlcnR5IGluc3RlYWQgb2YgdXNpbmcgdGhlIGRlZmF1bHQgc2VtYW50aWMgdmVyc2lvbmluZyBzb3J0LlxuICpcbiAqIE5vdGUsIHN1cHBseWluZyB0aGlzIG9wdGlvbiB3aGVuIGl0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgeW91ciBHaXQgdmVyc2lvbiB3aWxsIGNhdXNlIHRoZSBvcGVyYXRpb24gdG8gZmFpbC5cbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS50YWdzID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgdGFnTGlzdFRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBSZWJhc2VzIHRoZSBjdXJyZW50IHdvcmtpbmcgY29weS4gT3B0aW9ucyBjYW4gYmUgc3VwcGxpZWQgZWl0aGVyIGFzIGFuIGFycmF5IG9mIHN0cmluZyBwYXJhbWV0ZXJzXG4gKiB0byBiZSBzZW50IHRvIHRoZSBgZ2l0IHJlYmFzZWAgY29tbWFuZCwgb3IgYSBzdGFuZGFyZCBvcHRpb25zIG9iamVjdC5cbiAqL1xuR2l0LnByb3RvdHlwZS5yZWJhc2UgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydyZWJhc2UnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKV0pLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cylcbiAgICk7XG59O1xuXG4vKipcbiAqIFJlc2V0IGEgcmVwb1xuICovXG5HaXQucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgcmVzZXRUYXNrKGdldFJlc2V0TW9kZShtb2RlKSwgZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cykpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBSZXZlcnQgb25lIG9yIG1vcmUgY29tbWl0cyBpbiB0aGUgbG9jYWwgd29ya2luZyBjb3B5XG4gKi9cbkdpdC5wcm90b3R5cGUucmV2ZXJ0ID0gZnVuY3Rpb24gKGNvbW1pdCkge1xuICAgY29uc3QgbmV4dCA9IHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpO1xuXG4gICBpZiAodHlwZW9mIGNvbW1pdCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgICAgY29uZmlndXJhdGlvbkVycm9yVGFzaygnQ29tbWl0IG11c3QgYmUgYSBzdHJpbmcnKSxcbiAgICAgICAgIG5leHQsXG4gICAgICApO1xuICAgfVxuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydyZXZlcnQnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCAwLCB0cnVlKSwgY29tbWl0XSksXG4gICAgICBuZXh0XG4gICApO1xufTtcblxuLyoqXG4gKiBBZGQgYSBsaWdodHdlaWdodCB0YWcgdG8gdGhlIGhlYWQgb2YgdGhlIGN1cnJlbnQgYnJhbmNoXG4gKi9cbkdpdC5wcm90b3R5cGUuYWRkVGFnID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgIGNvbnN0IHRhc2sgPSAodHlwZW9mIG5hbWUgPT09ICdzdHJpbmcnKVxuICAgICAgPyBhZGRUYWdUYXNrKG5hbWUpXG4gICAgICA6IGNvbmZpZ3VyYXRpb25FcnJvclRhc2soJ0dpdC5hZGRUYWcgcmVxdWlyZXMgYSB0YWcgbmFtZScpO1xuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrLCB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSk7XG59O1xuXG4vKipcbiAqIEFkZCBhbiBhbm5vdGF0ZWQgdGFnIHRvIHRoZSBoZWFkIG9mIHRoZSBjdXJyZW50IGJyYW5jaFxuICovXG5HaXQucHJvdG90eXBlLmFkZEFubm90YXRlZFRhZyA9IGZ1bmN0aW9uICh0YWdOYW1lLCB0YWdNZXNzYWdlKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGFkZEFubm90YXRlZFRhZ1Rhc2sodGFnTmFtZSwgdGFnTWVzc2FnZSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIENoZWNrIG91dCBhIHRhZyBvciByZXZpc2lvbiwgYW55IG51bWJlciBvZiBhZGRpdGlvbmFsIGFyZ3VtZW50cyBjYW4gYmUgcGFzc2VkIHRvIHRoZSBgZ2l0IGNoZWNrb3V0YCBjb21tYW5kXG4gKiBieSBzdXBwbHlpbmcgZWl0aGVyIGEgc3RyaW5nIG9yIGFycmF5IG9mIHN0cmluZ3MgYXMgdGhlIGZpcnN0IGFyZ3VtZW50LlxuICovXG5HaXQucHJvdG90eXBlLmNoZWNrb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgY29uc3QgY29tbWFuZHMgPSBbJ2NoZWNrb3V0JywgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgdHJ1ZSldO1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmRzKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogQ2hlY2sgb3V0IGEgcmVtb3RlIGJyYW5jaFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBicmFuY2hOYW1lIG5hbWUgb2YgYnJhbmNoXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RhcnRQb2ludCAoZS5nIG9yaWdpbi9kZXZlbG9wbWVudClcbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmNoZWNrb3V0QnJhbmNoID0gZnVuY3Rpb24gKGJyYW5jaE5hbWUsIHN0YXJ0UG9pbnQsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLmNoZWNrb3V0KFsnLWInLCBicmFuY2hOYW1lLCBzdGFydFBvaW50XSwgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xufTtcblxuLyoqXG4gKiBDaGVjayBvdXQgYSBsb2NhbCBicmFuY2hcbiAqL1xuR2l0LnByb3RvdHlwZS5jaGVja291dExvY2FsQnJhbmNoID0gZnVuY3Rpb24gKGJyYW5jaE5hbWUsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLmNoZWNrb3V0KFsnLWInLCBicmFuY2hOYW1lXSwgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xufTtcblxuLyoqXG4gKiBEZWxldGUgYSBsb2NhbCBicmFuY2hcbiAqL1xuR2l0LnByb3RvdHlwZS5kZWxldGVMb2NhbEJyYW5jaCA9IGZ1bmN0aW9uIChicmFuY2hOYW1lLCBmb3JjZURlbGV0ZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBkZWxldGVCcmFuY2hUYXNrKGJyYW5jaE5hbWUsIHR5cGVvZiBmb3JjZURlbGV0ZSA9PT0gXCJib29sZWFuXCIgPyBmb3JjZURlbGV0ZSA6IGZhbHNlKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogRGVsZXRlIG9uZSBvciBtb3JlIGxvY2FsIGJyYW5jaGVzXG4gKi9cbkdpdC5wcm90b3R5cGUuZGVsZXRlTG9jYWxCcmFuY2hlcyA9IGZ1bmN0aW9uIChicmFuY2hOYW1lcywgZm9yY2VEZWxldGUsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgZGVsZXRlQnJhbmNoZXNUYXNrKGJyYW5jaE5hbWVzLCB0eXBlb2YgZm9yY2VEZWxldGUgPT09IFwiYm9vbGVhblwiID8gZm9yY2VEZWxldGUgOiBmYWxzZSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIExpc3QgYWxsIGJyYW5jaGVzXG4gKlxuICogQHBhcmFtIHtPYmplY3QgfCBzdHJpbmdbXX0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5icmFuY2ggPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBicmFuY2hUYXNrKGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogUmV0dXJuIGxpc3Qgb2YgbG9jYWwgYnJhbmNoZXNcbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5icmFuY2hMb2NhbCA9IGZ1bmN0aW9uICh0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGJyYW5jaExvY2FsVGFzaygpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBBZGQgY29uZmlnIHRvIGxvY2FsIGdpdCBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgY29uZmlndXJhdGlvbiBrZXkgKGUuZyB1c2VyLm5hbWUpXG4gKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgZm9yIHRoZSBnaXZlbiBrZXkgKGUuZyB5b3VyIG5hbWUpXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFthcHBlbmQ9ZmFsc2VdIG9wdGlvbmFsbHkgYXBwZW5kIHRoZSBrZXkvdmFsdWUgcGFpciAoZXF1aXZhbGVudCBvZiBwYXNzaW5nIGAtLWFkZGAgb3B0aW9uKS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmFkZENvbmZpZyA9IGZ1bmN0aW9uIChrZXksIHZhbHVlLCBhcHBlbmQsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgYWRkQ29uZmlnVGFzayhrZXksIHZhbHVlLCB0eXBlb2YgYXBwZW5kID09PSBcImJvb2xlYW5cIiA/IGFwcGVuZCA6IGZhbHNlKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUubGlzdENvbmZpZyA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKGxpc3RDb25maWdUYXNrKCksIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpKTtcbn07XG5cbi8qKlxuICogRXhlY3V0ZXMgYW55IGNvbW1hbmQgYWdhaW5zdCB0aGUgZ2l0IGJpbmFyeS5cbiAqL1xuR2l0LnByb3RvdHlwZS5yYXcgPSBmdW5jdGlvbiAoY29tbWFuZHMpIHtcbiAgIGNvbnN0IGNyZWF0ZVJlc3RDb21tYW5kcyA9ICFBcnJheS5pc0FycmF5KGNvbW1hbmRzKTtcbiAgIGNvbnN0IGNvbW1hbmQgPSBbXS5zbGljZS5jYWxsKGNyZWF0ZVJlc3RDb21tYW5kcyA/IGFyZ3VtZW50cyA6IGNvbW1hbmRzLCAwKTtcblxuICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb21tYW5kLmxlbmd0aCAmJiBjcmVhdGVSZXN0Q29tbWFuZHM7IGkrKykge1xuICAgICAgaWYgKCFmaWx0ZXJQcmltaXRpdmVzKGNvbW1hbmRbaV0pKSB7XG4gICAgICAgICBjb21tYW5kLnNwbGljZShpLCBjb21tYW5kLmxlbmd0aCAtIGkpO1xuICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICB9XG5cbiAgIGNvbW1hbmQucHVzaChcbiAgICAgIC4uLmdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIDAsIHRydWUpLFxuICAgKTtcblxuICAgdmFyIG5leHQgPSB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKTtcblxuICAgaWYgKCFjb21tYW5kLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICAgICBjb25maWd1cmF0aW9uRXJyb3JUYXNrKCdSYXc6IG11c3Qgc3VwcGx5IG9uZSBvciBtb3JlIGNvbW1hbmQgdG8gZXhlY3V0ZScpLFxuICAgICAgICAgbmV4dCxcbiAgICAgICk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZCksIG5leHQpO1xufTtcblxuR2l0LnByb3RvdHlwZS5zdWJtb2R1bGVBZGQgPSBmdW5jdGlvbiAocmVwbywgcGF0aCwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBhZGRTdWJNb2R1bGVUYXNrKHJlcG8sIHBhdGgpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5zdWJtb2R1bGVVcGRhdGUgPSBmdW5jdGlvbiAoYXJncywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICB1cGRhdGVTdWJNb2R1bGVUYXNrKGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIHRydWUpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuc3VibW9kdWxlSW5pdCA9IGZ1bmN0aW9uIChhcmdzLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGluaXRTdWJNb2R1bGVUYXNrKGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMsIHRydWUpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuc3ViTW9kdWxlID0gZnVuY3Rpb24gKG9wdGlvbnMsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3ViTW9kdWxlVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLmxpc3RSZW1vdGUgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGxpc3RSZW1vdGVzVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIEFkZHMgYSByZW1vdGUgdG8gdGhlIGxpc3Qgb2YgcmVtb3Rlcy5cbiAqL1xuR2l0LnByb3RvdHlwZS5hZGRSZW1vdGUgPSBmdW5jdGlvbiAocmVtb3RlTmFtZSwgcmVtb3RlUmVwbywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBhZGRSZW1vdGVUYXNrKHJlbW90ZU5hbWUsIHJlbW90ZVJlcG8sIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyBhbiBlbnRyeSBieSBuYW1lIGZyb20gdGhlIGxpc3Qgb2YgcmVtb3Rlcy5cbiAqL1xuR2l0LnByb3RvdHlwZS5yZW1vdmVSZW1vdGUgPSBmdW5jdGlvbiAocmVtb3RlTmFtZSwgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICByZW1vdmVSZW1vdGVUYXNrKHJlbW90ZU5hbWUpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBHZXRzIHRoZSBjdXJyZW50bHkgYXZhaWxhYmxlIHJlbW90ZXMsIHNldHRpbmcgdGhlIG9wdGlvbmFsIHZlcmJvc2UgYXJndW1lbnQgdG8gdHJ1ZSBpbmNsdWRlcyBhZGRpdGlvbmFsXG4gKiBkZXRhaWwgb24gdGhlIHJlbW90ZXMgdGhlbXNlbHZlcy5cbiAqL1xuR2l0LnByb3RvdHlwZS5nZXRSZW1vdGVzID0gZnVuY3Rpb24gKHZlcmJvc2UsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgZ2V0UmVtb3Rlc1Rhc2sodmVyYm9zZSA9PT0gdHJ1ZSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIENvbXB1dGUgb2JqZWN0IElEIGZyb20gYSBmaWxlXG4gKi9cbkdpdC5wcm90b3R5cGUuaGFzaE9iamVjdCA9IGZ1bmN0aW9uIChwYXRoLCB3cml0ZSkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBoYXNoT2JqZWN0VGFzayhwYXRoLCB3cml0ZSA9PT0gdHJ1ZSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIENhbGwgYW55IGBnaXQgcmVtb3RlYCBmdW5jdGlvbiB3aXRoIGFyZ3VtZW50cyBwYXNzZWQgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBvcHRpb25zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS5yZW1vdGUgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICByZW1vdGVUYXNrKGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogTWVyZ2VzIGZyb20gb25lIGJyYW5jaCB0byBhbm90aGVyLCBlcXVpdmFsZW50IHRvIHJ1bm5pbmcgYGdpdCBtZXJnZSAke2Zyb219ICRbdG99YCwgdGhlIGBvcHRpb25zYCBhcmd1bWVudCBjYW5cbiAqIGVpdGhlciBiZSBhbiBhcnJheSBvZiBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgdG8gcGFzcyB0byB0aGUgY29tbWFuZCBvciBudWxsIC8gb21pdHRlZCB0byBiZSBpZ25vcmVkLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBmcm9tXG4gKiBAcGFyYW0ge3N0cmluZ30gdG9cbiAqL1xuR2l0LnByb3RvdHlwZS5tZXJnZUZyb21UbyA9IGZ1bmN0aW9uIChmcm9tLCB0bykge1xuICAgaWYgKCEoZmlsdGVyU3RyaW5nKGZyb20pICYmIGZpbHRlclN0cmluZyh0bykpKSB7XG4gICAgICByZXR1cm4gdGhpcy5fcnVuVGFzayhjb25maWd1cmF0aW9uRXJyb3JUYXNrKFxuICAgICAgICAgYEdpdC5tZXJnZUZyb21UbyByZXF1aXJlcyB0aGF0IHRoZSAnZnJvbScgYW5kICd0bycgYXJndW1lbnRzIGFyZSBzdXBwbGllZCBhcyBzdHJpbmdzYFxuICAgICAgKSk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgbWVyZ2VUYXNrKFtmcm9tLCB0bywgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cyldKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMsIGZhbHNlKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIFJ1bnMgYSBtZXJnZSwgYG9wdGlvbnNgIGNhbiBiZSBlaXRoZXIgYW4gYXJyYXkgb2YgYXJndW1lbnRzXG4gKiBzdXBwb3J0ZWQgYnkgdGhlIFtgZ2l0IG1lcmdlYF0oaHR0cHM6Ly9naXQtc2NtLmNvbS9kb2NzL2dpdC1tZXJnZSlcbiAqIG9yIGFuIG9wdGlvbnMgb2JqZWN0LlxuICpcbiAqIENvbmZsaWN0cyBkdXJpbmcgdGhlIG1lcmdlIHJlc3VsdCBpbiBhbiBlcnJvciByZXNwb25zZSxcbiAqIHRoZSByZXNwb25zZSB0eXBlIHdoZXRoZXIgaXQgd2FzIGFuIGVycm9yIG9yIHN1Y2Nlc3Mgd2lsbCBiZSBhIE1lcmdlU3VtbWFyeSBpbnN0YW5jZS5cbiAqIFdoZW4gc3VjY2Vzc2Z1bCwgdGhlIE1lcmdlU3VtbWFyeSBoYXMgYWxsIGRldGFpbCBmcm9tIGEgdGhlIFB1bGxTdW1tYXJ5XG4gKlxuICogQHBhcmFtIHtPYmplY3QgfCBzdHJpbmdbXX0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqIEByZXR1cm5zIHsqfVxuICpcbiAqIEBzZWUgLi9yZXNwb25zZXMvTWVyZ2VTdW1tYXJ5LmpzXG4gKiBAc2VlIC4vcmVzcG9uc2VzL1B1bGxTdW1tYXJ5LmpzXG4gKi9cbkdpdC5wcm90b3R5cGUubWVyZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIG1lcmdlVGFzayhnZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzKSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG4vKipcbiAqIENhbGwgYW55IGBnaXQgdGFnYCBmdW5jdGlvbiB3aXRoIGFyZ3VtZW50cyBwYXNzZWQgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBvcHRpb25zXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS50YWcgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgY29uc3QgY29tbWFuZCA9IGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpO1xuXG4gICBpZiAoY29tbWFuZFswXSAhPT0gJ3RhZycpIHtcbiAgICAgIGNvbW1hbmQudW5zaGlmdCgndGFnJyk7XG4gICB9XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhjb21tYW5kKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpXG4gICApO1xufTtcblxuLyoqXG4gKiBVcGRhdGVzIHJlcG9zaXRvcnkgc2VydmVyIGluZm9cbiAqXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbdGhlbl1cbiAqL1xuR2l0LnByb3RvdHlwZS51cGRhdGVTZXJ2ZXJJbmZvID0gZnVuY3Rpb24gKHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgc3RyYWlnaHRUaHJvdWdoU3RyaW5nVGFzayhbJ3VwZGF0ZS1zZXJ2ZXItaW5mbyddKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogUHVzaGVzIHRoZSBjdXJyZW50IHRhZyBjaGFuZ2VzIHRvIGEgcmVtb3RlIHdoaWNoIGNhbiBiZSBlaXRoZXIgYSBVUkwgb3IgbmFtZWQgcmVtb3RlLiBXaGVuIG5vdCBzcGVjaWZpZWQgdXNlcyB0aGVcbiAqIGRlZmF1bHQgY29uZmlndXJlZCByZW1vdGUgc3BlYy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gW3JlbW90ZV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLnB1c2hUYWdzID0gZnVuY3Rpb24gKHJlbW90ZSwgdGhlbikge1xuICAgY29uc3QgdGFzayA9IHB1c2hUYWdzVGFzayh7cmVtb3RlOiBmaWx0ZXJUeXBlKHJlbW90ZSwgZmlsdGVyU3RyaW5nKX0sIGdldFRyYWlsaW5nT3B0aW9ucyhhcmd1bWVudHMpKTtcblxuICAgcmV0dXJuIHRoaXMuX3J1blRhc2sodGFzaywgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cykpO1xufTtcblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBuYW1lZCBmaWxlcyBmcm9tIHNvdXJjZSBjb250cm9sLlxuICovXG5HaXQucHJvdG90eXBlLnJtID0gZnVuY3Rpb24gKGZpbGVzKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydybScsICctZicsIC4uLmFzQXJyYXkoZmlsZXMpXSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKVxuICAgKTtcbn07XG5cbi8qKlxuICogUmVtb3ZlcyB0aGUgbmFtZWQgZmlsZXMgZnJvbSBzb3VyY2UgY29udHJvbCBidXQga2VlcHMgdGhlbSBvbiBkaXNrIHJhdGhlciB0aGFuIGRlbGV0aW5nIHRoZW0gZW50aXJlbHkuIFRvXG4gKiBjb21wbGV0ZWx5IHJlbW92ZSB0aGUgZmlsZXMsIHVzZSBgcm1gLlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfHN0cmluZ1tdfSBmaWxlc1xuICovXG5HaXQucHJvdG90eXBlLnJtS2VlcExvY2FsID0gZnVuY3Rpb24gKGZpbGVzKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydybScsICctLWNhY2hlZCcsIC4uLmFzQXJyYXkoZmlsZXMpXSksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKVxuICAgKTtcbn07XG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3Qgb2Ygb2JqZWN0cyBpbiBhIHRyZWUgYmFzZWQgb24gY29tbWl0IGhhc2guIFBhc3NpbmcgaW4gYW4gb2JqZWN0IGhhc2ggcmV0dXJucyB0aGUgb2JqZWN0J3MgY29udGVudCxcbiAqIHNpemUsIGFuZCB0eXBlLlxuICpcbiAqIFBhc3NpbmcgXCItcFwiIHdpbGwgaW5zdHJ1Y3QgY2F0LWZpbGUgdG8gZGV0ZXJtaW5lIHRoZSBvYmplY3QgdHlwZSwgYW5kIGRpc3BsYXkgaXRzIGZvcm1hdHRlZCBjb250ZW50cy5cbiAqXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9uc11cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmNhdEZpbGUgPSBmdW5jdGlvbiAob3B0aW9ucywgdGhlbikge1xuICAgcmV0dXJuIHRoaXMuX2NhdEZpbGUoJ3V0Zi04JywgYXJndW1lbnRzKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuYmluYXJ5Q2F0RmlsZSA9IGZ1bmN0aW9uICgpIHtcbiAgIHJldHVybiB0aGlzLl9jYXRGaWxlKCdidWZmZXInLCBhcmd1bWVudHMpO1xufTtcblxuR2l0LnByb3RvdHlwZS5fY2F0RmlsZSA9IGZ1bmN0aW9uIChmb3JtYXQsIGFyZ3MpIHtcbiAgIHZhciBoYW5kbGVyID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3MpO1xuICAgdmFyIGNvbW1hbmQgPSBbJ2NhdC1maWxlJ107XG4gICB2YXIgb3B0aW9ucyA9IGFyZ3NbMF07XG5cbiAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgICAgY29uZmlndXJhdGlvbkVycm9yVGFzaygnR2l0LmNhdEZpbGU6IG9wdGlvbnMgbXVzdCBiZSBzdXBwbGllZCBhcyBhbiBhcnJheSBvZiBzdHJpbmdzJyksXG4gICAgICAgICBoYW5kbGVyLFxuICAgICAgKTtcbiAgIH1cblxuICAgaWYgKEFycmF5LmlzQXJyYXkob3B0aW9ucykpIHtcbiAgICAgIGNvbW1hbmQucHVzaC5hcHBseShjb21tYW5kLCBvcHRpb25zKTtcbiAgIH1cblxuICAgY29uc3QgdGFzayA9IGZvcm1hdCA9PT0gJ2J1ZmZlcidcbiAgICAgID8gc3RyYWlnaHRUaHJvdWdoQnVmZmVyVGFzayhjb21tYW5kKVxuICAgICAgOiBzdHJhaWdodFRocm91Z2hTdHJpbmdUYXNrKGNvbW1hbmQpO1xuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayh0YXNrLCBoYW5kbGVyKTtcbn07XG5cbkdpdC5wcm90b3R5cGUuZGlmZiA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICBjb25zdCBjb21tYW5kID0gWydkaWZmJywgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cyldO1xuXG4gICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBjb21tYW5kLnNwbGljZSgxLCAwLCBvcHRpb25zKTtcbiAgICAgIHRoaXMuX2xvZ2dlci53YXJuKCdHaXQjZGlmZjogc3VwcGx5aW5nIG9wdGlvbnMgYXMgYSBzaW5nbGUgc3RyaW5nIGlzIG5vdyBkZXByZWNhdGVkLCBzd2l0Y2ggdG8gYW4gYXJyYXkgb2Ygc3RyaW5ncycpO1xuICAgfVxuXG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZCksXG4gICAgICB0cmFpbGluZ0Z1bmN0aW9uQXJndW1lbnQoYXJndW1lbnRzKSxcbiAgICk7XG59O1xuXG5HaXQucHJvdG90eXBlLmRpZmZTdW1tYXJ5ID0gZnVuY3Rpb24gKCkge1xuICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICBkaWZmU3VtbWFyeVRhc2soZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgMSkpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5hcHBseVBhdGNoID0gZnVuY3Rpb24gKHBhdGNoZXMpIHtcbiAgIGNvbnN0IHRhc2sgPSAhZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheShwYXRjaGVzKVxuICAgICAgPyBjb25maWd1cmF0aW9uRXJyb3JUYXNrKGBnaXQuYXBwbHlQYXRjaCByZXF1aXJlcyBvbmUgb3IgbW9yZSBzdHJpbmcgcGF0Y2hlcyBhcyB0aGUgZmlyc3QgYXJndW1lbnRgKVxuICAgICAgOiBhcHBseVBhdGNoVGFzayhhc0FycmF5KHBhdGNoZXMpLCBnZXRUcmFpbGluZ09wdGlvbnMoW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKSk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgdGFzayxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn1cblxuR2l0LnByb3RvdHlwZS5yZXZwYXJzZSA9IGZ1bmN0aW9uICgpIHtcbiAgIGNvbnN0IGNvbW1hbmRzID0gWydyZXYtcGFyc2UnLCAuLi5nZXRUcmFpbGluZ09wdGlvbnMoYXJndW1lbnRzLCB0cnVlKV07XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soY29tbWFuZHMsIHRydWUpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuLyoqXG4gKiBTaG93IHZhcmlvdXMgdHlwZXMgb2Ygb2JqZWN0cywgZm9yIGV4YW1wbGUgdGhlIGZpbGUgYXQgYSBjZXJ0YWluIGNvbW1pdFxuICpcbiAqIEBwYXJhbSB7c3RyaW5nW119IFtvcHRpb25zXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChvcHRpb25zLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIHN0cmFpZ2h0VGhyb3VnaFN0cmluZ1Rhc2soWydzaG93JywgLi4uZ2V0VHJhaWxpbmdPcHRpb25zKGFyZ3VtZW50cywgMSldKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpXG4gICApO1xufTtcblxuLyoqXG4gKi9cbkdpdC5wcm90b3R5cGUuY2xlYW4gPSBmdW5jdGlvbiAobW9kZSwgb3B0aW9ucywgdGhlbikge1xuICAgY29uc3QgdXNpbmdDbGVhbk9wdGlvbnNBcnJheSA9IGlzQ2xlYW5PcHRpb25zQXJyYXkobW9kZSk7XG4gICBjb25zdCBjbGVhbk1vZGUgPSB1c2luZ0NsZWFuT3B0aW9uc0FycmF5ICYmIG1vZGUuam9pbignJykgfHwgZmlsdGVyVHlwZShtb2RlLCBmaWx0ZXJTdHJpbmcpIHx8ICcnO1xuICAgY29uc3QgY3VzdG9tQXJncyA9IGdldFRyYWlsaW5nT3B0aW9ucyhbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgdXNpbmdDbGVhbk9wdGlvbnNBcnJheSA/IDEgOiAwKSk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY2xlYW5XaXRoT3B0aW9uc1Rhc2soY2xlYW5Nb2RlLCBjdXN0b21BcmdzKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbi8qKlxuICogQ2FsbCBhIHNpbXBsZSBmdW5jdGlvbiBhdCB0aGUgbmV4dCBzdGVwIGluIHRoZSBjaGFpbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IFt0aGVuXVxuICovXG5HaXQucHJvdG90eXBlLmV4ZWMgPSBmdW5jdGlvbiAodGhlbikge1xuICAgY29uc3QgdGFzayA9IHtcbiAgICAgIGNvbW1hbmRzOiBbXSxcbiAgICAgIGZvcm1hdDogJ3V0Zi04JyxcbiAgICAgIHBhcnNlciAoKSB7XG4gICAgICAgICBpZiAodHlwZW9mIHRoZW4gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRoZW4oKTtcbiAgICAgICAgIH1cbiAgICAgIH1cbiAgIH07XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKHRhc2spO1xufTtcblxuLyoqXG4gKiBTaG93IGNvbW1pdCBsb2dzIGZyb20gYEhFQURgIHRvIHRoZSBmaXJzdCBjb21taXQuXG4gKiBJZiBwcm92aWRlZCBiZXR3ZWVuIGBvcHRpb25zLmZyb21gIGFuZCBgb3B0aW9ucy50b2AgdGFncyBvciBicmFuY2guXG4gKlxuICogQWRkaXRpb25hbGx5IHlvdSBjYW4gcHJvdmlkZSBvcHRpb25zLmZpbGUsIHdoaWNoIGlzIHRoZSBwYXRoIHRvIGEgZmlsZSBpbiB5b3VyIHJlcG9zaXRvcnkuIFRoZW4gb25seSB0aGlzIGZpbGUgd2lsbCBiZSBjb25zaWRlcmVkLlxuICpcbiAqIFRvIHVzZSBhIGN1c3RvbSBzcGxpdHRlciBpbiB0aGUgbG9nIGZvcm1hdCwgc2V0IGBvcHRpb25zLnNwbGl0dGVyYCB0byBiZSB0aGUgc3RyaW5nIHRoZSBsb2cgc2hvdWxkIGJlIHNwbGl0IG9uLlxuICpcbiAqIE9wdGlvbnMgY2FuIGFsc28gYmUgc3VwcGxpZWQgYXMgYSBzdGFuZGFyZCBvcHRpb25zIG9iamVjdCBmb3IgYWRkaW5nIGN1c3RvbSBwcm9wZXJ0aWVzIHN1cHBvcnRlZCBieSB0aGUgZ2l0IGxvZyBjb21tYW5kLlxuICogRm9yIGFueSBvdGhlciBzZXQgb2Ygb3B0aW9ucywgc3VwcGx5IG9wdGlvbnMgYXMgYW4gYXJyYXkgb2Ygc3RyaW5ncyB0byBiZSBhcHBlbmRlZCB0byB0aGUgZ2l0IGxvZyBjb21tYW5kLlxuICovXG5HaXQucHJvdG90eXBlLmxvZyA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICBjb25zdCBuZXh0ID0gdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyk7XG5cbiAgIGlmIChmaWx0ZXJTdHJpbmcoYXJndW1lbnRzWzBdKSAmJiBmaWx0ZXJTdHJpbmcoYXJndW1lbnRzWzFdKSkge1xuICAgICAgcmV0dXJuIHRoaXMuX3J1blRhc2soXG4gICAgICAgICBjb25maWd1cmF0aW9uRXJyb3JUYXNrKGBnaXQubG9nKHN0cmluZywgc3RyaW5nKSBzaG91bGQgYmUgcmVwbGFjZWQgd2l0aCBnaXQubG9nKHsgZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nIH0pYCksXG4gICAgICAgICBuZXh0XG4gICAgICApO1xuICAgfVxuXG4gICBjb25zdCBwYXJzZWRPcHRpb25zID0gcGFyc2VMb2dPcHRpb25zKFxuICAgICAgdHJhaWxpbmdPcHRpb25zQXJndW1lbnQoYXJndW1lbnRzKSB8fCB7fSxcbiAgICAgIGZpbHRlckFycmF5KG9wdGlvbnMpICYmIG9wdGlvbnMgfHwgW11cbiAgICk7XG5cbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgbG9nVGFzayhwYXJzZWRPcHRpb25zLnNwbGl0dGVyLCBwYXJzZWRPcHRpb25zLmZpZWxkcywgcGFyc2VkT3B0aW9ucy5jb21tYW5kcyksXG4gICAgICBuZXh0LFxuICAgKVxufTtcblxuLyoqXG4gKiBDbGVhcnMgdGhlIHF1ZXVlIG9mIHBlbmRpbmcgY29tbWFuZHMgYW5kIHJldHVybnMgdGhlIHdyYXBwZXIgaW5zdGFuY2UgZm9yIGNoYWluaW5nLlxuICpcbiAqIEByZXR1cm5zIHtHaXR9XG4gKi9cbkdpdC5wcm90b3R5cGUuY2xlYXJRdWV1ZSA9IGZ1bmN0aW9uICgpIHtcbiAgIC8vIFRPRE86XG4gICAvLyB0aGlzLl9leGVjdXRvci5jbGVhcigpO1xuICAgcmV0dXJuIHRoaXM7XG59O1xuXG4vKipcbiAqIENoZWNrIGlmIGEgcGF0aG5hbWUgb3IgcGF0aG5hbWVzIGFyZSBleGNsdWRlZCBieSAuZ2l0aWdub3JlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd8c3RyaW5nW119IHBhdGhuYW1lc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gW3RoZW5dXG4gKi9cbkdpdC5wcm90b3R5cGUuY2hlY2tJZ25vcmUgPSBmdW5jdGlvbiAocGF0aG5hbWVzLCB0aGVuKSB7XG4gICByZXR1cm4gdGhpcy5fcnVuVGFzayhcbiAgICAgIGNoZWNrSWdub3JlVGFzayhhc0FycmF5KChmaWx0ZXJUeXBlKHBhdGhuYW1lcywgZmlsdGVyU3RyaW5nT3JTdHJpbmdBcnJheSwgW10pKSkpLFxuICAgICAgdHJhaWxpbmdGdW5jdGlvbkFyZ3VtZW50KGFyZ3VtZW50cyksXG4gICApO1xufTtcblxuR2l0LnByb3RvdHlwZS5jaGVja0lzUmVwbyA9IGZ1bmN0aW9uIChjaGVja1R5cGUsIHRoZW4pIHtcbiAgIHJldHVybiB0aGlzLl9ydW5UYXNrKFxuICAgICAgY2hlY2tJc1JlcG9UYXNrKGZpbHRlclR5cGUoY2hlY2tUeXBlLCBmaWx0ZXJTdHJpbmcpKSxcbiAgICAgIHRyYWlsaW5nRnVuY3Rpb25Bcmd1bWVudChhcmd1bWVudHMpLFxuICAgKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gR2l0O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmdpdEluc3RhbmNlRmFjdG9yeSA9IGV4cG9ydHMuZ2l0RXhwb3J0RmFjdG9yeSA9IGV4cG9ydHMuZXNNb2R1bGVGYWN0b3J5ID0gdm9pZCAwO1xuY29uc3QgYXBpXzEgPSByZXF1aXJlKFwiLi9hcGlcIik7XG5jb25zdCBwbHVnaW5zXzEgPSByZXF1aXJlKFwiLi9wbHVnaW5zXCIpO1xuY29uc3QgdXRpbHNfMSA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuY29uc3QgR2l0ID0gcmVxdWlyZSgnLi4vZ2l0Jyk7XG4vKipcbiAqIEFkZHMgdGhlIG5lY2Vzc2FyeSBwcm9wZXJ0aWVzIHRvIHRoZSBzdXBwbGllZCBvYmplY3QgdG8gZW5hYmxlIGl0IGZvciB1c2UgYXNcbiAqIHRoZSBkZWZhdWx0IGV4cG9ydCBvZiBhIG1vZHVsZS5cbiAqXG4gKiBFZzogYG1vZHVsZS5leHBvcnRzID0gZXNNb2R1bGVGYWN0b3J5KHsgc29tZXRoaW5nICgpIHt9IH0pYFxuICovXG5mdW5jdGlvbiBlc01vZHVsZUZhY3RvcnkoZGVmYXVsdEV4cG9ydCkge1xuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhkZWZhdWx0RXhwb3J0LCB7XG4gICAgICAgIF9fZXNNb2R1bGU6IHsgdmFsdWU6IHRydWUgfSxcbiAgICAgICAgZGVmYXVsdDogeyB2YWx1ZTogZGVmYXVsdEV4cG9ydCB9LFxuICAgIH0pO1xufVxuZXhwb3J0cy5lc01vZHVsZUZhY3RvcnkgPSBlc01vZHVsZUZhY3Rvcnk7XG5mdW5jdGlvbiBnaXRFeHBvcnRGYWN0b3J5KGZhY3RvcnksIGV4dHJhKSB7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgcmV0dXJuIGZhY3RvcnkuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfSwgYXBpXzEuZGVmYXVsdCwgZXh0cmEgfHwge30pO1xufVxuZXhwb3J0cy5naXRFeHBvcnRGYWN0b3J5ID0gZ2l0RXhwb3J0RmFjdG9yeTtcbmZ1bmN0aW9uIGdpdEluc3RhbmNlRmFjdG9yeShiYXNlRGlyLCBvcHRpb25zKSB7XG4gICAgY29uc3QgcGx1Z2lucyA9IG5ldyBwbHVnaW5zXzEuUGx1Z2luU3RvcmUoKTtcbiAgICBjb25zdCBjb25maWcgPSB1dGlsc18xLmNyZWF0ZUluc3RhbmNlQ29uZmlnKGJhc2VEaXIgJiYgKHR5cGVvZiBiYXNlRGlyID09PSAnc3RyaW5nJyA/IHsgYmFzZURpciB9IDogYmFzZURpcikgfHwge30sIG9wdGlvbnMpO1xuICAgIGlmICghdXRpbHNfMS5mb2xkZXJFeGlzdHMoY29uZmlnLmJhc2VEaXIpKSB7XG4gICAgICAgIHRocm93IG5ldyBhcGlfMS5kZWZhdWx0LkdpdENvbnN0cnVjdEVycm9yKGNvbmZpZywgYENhbm5vdCB1c2Ugc2ltcGxlLWdpdCBvbiBhIGRpcmVjdG9yeSB0aGF0IGRvZXMgbm90IGV4aXN0YCk7XG4gICAgfVxuICAgIGlmIChBcnJheS5pc0FycmF5KGNvbmZpZy5jb25maWcpKSB7XG4gICAgICAgIHBsdWdpbnMuYWRkKHBsdWdpbnNfMS5jb21tYW5kQ29uZmlnUHJlZml4aW5nUGx1Z2luKGNvbmZpZy5jb25maWcpKTtcbiAgICB9XG4gICAgY29uZmlnLnByb2dyZXNzICYmIHBsdWdpbnMuYWRkKHBsdWdpbnNfMS5wcm9ncmVzc01vbml0b3JQbHVnaW4oY29uZmlnLnByb2dyZXNzKSk7XG4gICAgY29uZmlnLnRpbWVvdXQgJiYgcGx1Z2lucy5hZGQocGx1Z2luc18xLnRpbWVvdXRQbHVnaW4oY29uZmlnLnRpbWVvdXQpKTtcbiAgICBwbHVnaW5zLmFkZChwbHVnaW5zXzEuZXJyb3JEZXRlY3Rpb25QbHVnaW4ocGx1Z2luc18xLmVycm9yRGV0ZWN0aW9uSGFuZGxlcih0cnVlKSkpO1xuICAgIGNvbmZpZy5lcnJvcnMgJiYgcGx1Z2lucy5hZGQocGx1Z2luc18xLmVycm9yRGV0ZWN0aW9uUGx1Z2luKGNvbmZpZy5lcnJvcnMpKTtcbiAgICByZXR1cm4gbmV3IEdpdChjb25maWcsIHBsdWdpbnMpO1xufVxuZXhwb3J0cy5naXRJbnN0YW5jZUZhY3RvcnkgPSBnaXRJbnN0YW5jZUZhY3Rvcnk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1naXQtZmFjdG9yeS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuZ2l0UCA9IHZvaWQgMDtcbmNvbnN0IGdpdF9yZXNwb25zZV9lcnJvcl8xID0gcmVxdWlyZShcIi4uL2Vycm9ycy9naXQtcmVzcG9uc2UtZXJyb3JcIik7XG5jb25zdCBnaXRfZmFjdG9yeV8xID0gcmVxdWlyZShcIi4uL2dpdC1mYWN0b3J5XCIpO1xuY29uc3QgZnVuY3Rpb25OYW1lc0J1aWxkZXJBcGkgPSBbXG4gICAgJ2N1c3RvbUJpbmFyeScsICdlbnYnLCAnb3V0cHV0SGFuZGxlcicsICdzaWxlbnQnLFxuXTtcbmNvbnN0IGZ1bmN0aW9uTmFtZXNQcm9taXNlQXBpID0gW1xuICAgICdhZGQnLFxuICAgICdhZGRBbm5vdGF0ZWRUYWcnLFxuICAgICdhZGRDb25maWcnLFxuICAgICdhZGRSZW1vdGUnLFxuICAgICdhZGRUYWcnLFxuICAgICdhcHBseVBhdGNoJyxcbiAgICAnYmluYXJ5Q2F0RmlsZScsXG4gICAgJ2JyYW5jaCcsXG4gICAgJ2JyYW5jaExvY2FsJyxcbiAgICAnY2F0RmlsZScsXG4gICAgJ2NoZWNrSWdub3JlJyxcbiAgICAnY2hlY2tJc1JlcG8nLFxuICAgICdjaGVja291dCcsXG4gICAgJ2NoZWNrb3V0QnJhbmNoJyxcbiAgICAnY2hlY2tvdXRMYXRlc3RUYWcnLFxuICAgICdjaGVja291dExvY2FsQnJhbmNoJyxcbiAgICAnY2xlYW4nLFxuICAgICdjbG9uZScsXG4gICAgJ2NvbW1pdCcsXG4gICAgJ2N3ZCcsXG4gICAgJ2RlbGV0ZUxvY2FsQnJhbmNoJyxcbiAgICAnZGVsZXRlTG9jYWxCcmFuY2hlcycsXG4gICAgJ2RpZmYnLFxuICAgICdkaWZmU3VtbWFyeScsXG4gICAgJ2V4ZWMnLFxuICAgICdmZXRjaCcsXG4gICAgJ2dldFJlbW90ZXMnLFxuICAgICdpbml0JyxcbiAgICAnbGlzdENvbmZpZycsXG4gICAgJ2xpc3RSZW1vdGUnLFxuICAgICdsb2cnLFxuICAgICdtZXJnZScsXG4gICAgJ21lcmdlRnJvbVRvJyxcbiAgICAnbWlycm9yJyxcbiAgICAnbXYnLFxuICAgICdwdWxsJyxcbiAgICAncHVzaCcsXG4gICAgJ3B1c2hUYWdzJyxcbiAgICAncmF3JyxcbiAgICAncmViYXNlJyxcbiAgICAncmVtb3RlJyxcbiAgICAncmVtb3ZlUmVtb3RlJyxcbiAgICAncmVzZXQnLFxuICAgICdyZXZlcnQnLFxuICAgICdyZXZwYXJzZScsXG4gICAgJ3JtJyxcbiAgICAncm1LZWVwTG9jYWwnLFxuICAgICdzaG93JyxcbiAgICAnc3Rhc2gnLFxuICAgICdzdGFzaExpc3QnLFxuICAgICdzdGF0dXMnLFxuICAgICdzdWJNb2R1bGUnLFxuICAgICdzdWJtb2R1bGVBZGQnLFxuICAgICdzdWJtb2R1bGVJbml0JyxcbiAgICAnc3VibW9kdWxlVXBkYXRlJyxcbiAgICAndGFnJyxcbiAgICAndGFncycsXG4gICAgJ3VwZGF0ZVNlcnZlckluZm8nXG5dO1xuZnVuY3Rpb24gZ2l0UCguLi5hcmdzKSB7XG4gICAgbGV0IGdpdDtcbiAgICBsZXQgY2hhaW4gPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICB0cnkge1xuICAgICAgICBnaXQgPSBnaXRfZmFjdG9yeV8xLmdpdEluc3RhbmNlRmFjdG9yeSguLi5hcmdzKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgY2hhaW4gPSBQcm9taXNlLnJlamVjdChlKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYnVpbGRlclJldHVybigpIHtcbiAgICAgICAgcmV0dXJuIHByb21pc2VBcGk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNoYWluUmV0dXJuKCkge1xuICAgICAgICByZXR1cm4gY2hhaW47XG4gICAgfVxuICAgIGNvbnN0IHByb21pc2VBcGkgPSBbLi4uZnVuY3Rpb25OYW1lc0J1aWxkZXJBcGksIC4uLmZ1bmN0aW9uTmFtZXNQcm9taXNlQXBpXS5yZWR1Y2UoKGFwaSwgbmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBpc0FzeW5jID0gZnVuY3Rpb25OYW1lc1Byb21pc2VBcGkuaW5jbHVkZXMobmFtZSk7XG4gICAgICAgIGNvbnN0IHZhbGlkID0gaXNBc3luYyA/IGFzeW5jV3JhcHBlcihuYW1lLCBnaXQpIDogc3luY1dyYXBwZXIobmFtZSwgZ2l0LCBhcGkpO1xuICAgICAgICBjb25zdCBhbHRlcm5hdGl2ZSA9IGlzQXN5bmMgPyBjaGFpblJldHVybiA6IGJ1aWxkZXJSZXR1cm47XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhcGksIG5hbWUsIHtcbiAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICAgIHZhbHVlOiBnaXQgPyB2YWxpZCA6IGFsdGVybmF0aXZlLFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFwaTtcbiAgICB9LCB7fSk7XG4gICAgcmV0dXJuIHByb21pc2VBcGk7XG4gICAgZnVuY3Rpb24gYXN5bmNXcmFwcGVyKGZuLCBnaXQpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGFyZ3NbYXJncy5sZW5ndGhdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignUHJvbWlzZSBpbnRlcmZhY2UgcmVxdWlyZXMgdGhhdCBoYW5kbGVycyBhcmUgbm90IHN1cHBsaWVkIGlubGluZSwgJyArXG4gICAgICAgICAgICAgICAgICAgICd0cmFpbGluZyBmdW5jdGlvbiBub3QgYWxsb3dlZCBpbiBjYWxsIHRvICcgKyBmbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY2hhaW4udGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSAoZXJyLCByZXN1bHQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KHRvRXJyb3IoZXJyKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGFyZ3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgIGdpdFtmbl0uYXBwbHkoZ2l0LCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBmdW5jdGlvbiBzeW5jV3JhcHBlcihmbiwgZ2l0LCBhcGkpIHtcbiAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICBnaXRbZm5dKC4uLmFyZ3MpO1xuICAgICAgICAgICAgcmV0dXJuIGFwaTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5leHBvcnRzLmdpdFAgPSBnaXRQO1xuZnVuY3Rpb24gdG9FcnJvcihlcnJvcikge1xuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIHJldHVybiBlcnJvcjtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBlcnJvciA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBFcnJvcihlcnJvcik7XG4gICAgfVxuICAgIHJldHVybiBuZXcgZ2l0X3Jlc3BvbnNlX2Vycm9yXzEuR2l0UmVzcG9uc2VFcnJvcihlcnJvcik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wcm9taXNlLXdyYXBwZWQuanMubWFwIiwiXG5jb25zdCB7Z2l0UH0gPSByZXF1aXJlKCcuL2xpYi9ydW5uZXJzL3Byb21pc2Utd3JhcHBlZCcpO1xuY29uc3Qge2VzTW9kdWxlRmFjdG9yeSwgZ2l0SW5zdGFuY2VGYWN0b3J5LCBnaXRFeHBvcnRGYWN0b3J5fSA9IHJlcXVpcmUoJy4vbGliL2dpdC1mYWN0b3J5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZXNNb2R1bGVGYWN0b3J5KFxuICAgZ2l0RXhwb3J0RmFjdG9yeShnaXRJbnN0YW5jZUZhY3RvcnksIHtnaXRQfSlcbik7XG4iLCJpbXBvcnQgeyBzcGF3blN5bmMgfSBmcm9tIFwiY2hpbGRfcHJvY2Vzc1wiO1xuaW1wb3J0IHsgRmlsZVN5c3RlbUFkYXB0ZXIsIEZ1enp5U3VnZ2VzdE1vZGFsLCBOb3RpY2UsIFBsdWdpbiwgUGx1Z2luU2V0dGluZ1RhYiwgU2V0dGluZywgU3VnZ2VzdE1vZGFsLCBURmlsZSB9IGZyb20gXCJvYnNpZGlhblwiO1xuaW1wb3J0IHNpbXBsZUdpdCwgeyBGaWxlU3RhdHVzUmVzdWx0LCBTaW1wbGVHaXQgfSBmcm9tIFwic2ltcGxlLWdpdFwiO1xuXG5lbnVtIFBsdWdpblN0YXRlIHtcbiAgICBpZGxlLFxuICAgIHN0YXR1cyxcbiAgICBwdWxsLFxuICAgIGFkZCxcbiAgICBjb21taXQsXG4gICAgcHVzaCxcbiAgICBjb25mbGljdGVkLFxufVxuaW50ZXJmYWNlIE9ic2lkaWFuR2l0U2V0dGluZ3Mge1xuICAgIGNvbW1pdE1lc3NhZ2U6IHN0cmluZztcbiAgICBjb21taXREYXRlRm9ybWF0OiBzdHJpbmc7XG4gICAgYXV0b1NhdmVJbnRlcnZhbDogbnVtYmVyO1xuICAgIGF1dG9QdWxsSW50ZXJ2YWw6IG51bWJlcjtcbiAgICBhdXRvUHVsbE9uQm9vdDogYm9vbGVhbjtcbiAgICBkaXNhYmxlUHVzaDogYm9vbGVhbjtcbiAgICBwdWxsQmVmb3JlUHVzaDogYm9vbGVhbjtcbiAgICBkaXNhYmxlUG9wdXBzOiBib29sZWFuO1xuICAgIGxpc3RDaGFuZ2VkRmlsZXNJbk1lc3NhZ2VCb2R5OiBib29sZWFuO1xufVxuY29uc3QgREVGQVVMVF9TRVRUSU5HUzogT2JzaWRpYW5HaXRTZXR0aW5ncyA9IHtcbiAgICBjb21taXRNZXNzYWdlOiBcInZhdWx0IGJhY2t1cDoge3tkYXRlfX1cIixcbiAgICBjb21taXREYXRlRm9ybWF0OiBcIllZWVktTU0tREQgSEg6bW06c3NcIixcbiAgICBhdXRvU2F2ZUludGVydmFsOiAwLFxuICAgIGF1dG9QdWxsSW50ZXJ2YWw6IDAsXG4gICAgYXV0b1B1bGxPbkJvb3Q6IGZhbHNlLFxuICAgIGRpc2FibGVQdXNoOiBmYWxzZSxcbiAgICBwdWxsQmVmb3JlUHVzaDogdHJ1ZSxcbiAgICBkaXNhYmxlUG9wdXBzOiBmYWxzZSxcbiAgICBsaXN0Q2hhbmdlZEZpbGVzSW5NZXNzYWdlQm9keTogZmFsc2UsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPYnNpZGlhbkdpdCBleHRlbmRzIFBsdWdpbiB7XG4gICAgZ2l0OiBTaW1wbGVHaXQ7XG4gICAgc2V0dGluZ3M6IE9ic2lkaWFuR2l0U2V0dGluZ3M7XG4gICAgc3RhdHVzQmFyOiBTdGF0dXNCYXI7XG4gICAgc3RhdGU6IFBsdWdpblN0YXRlO1xuICAgIGludGVydmFsSURCYWNrdXA6IG51bWJlcjtcbiAgICBpbnRlcnZhbElEUHVsbDogbnVtYmVyO1xuICAgIGxhc3RVcGRhdGU6IG51bWJlcjtcbiAgICBnaXRSZWFkeSA9IGZhbHNlO1xuICAgIHByb21pc2VRdWV1ZTogUHJvbWlzZVF1ZXVlID0gbmV3IFByb21pc2VRdWV1ZSgpO1xuICAgIGNvbmZsaWN0T3V0cHV0RmlsZSA9IFwiY29uZmxpY3QtZmlsZXMtb2JzaWRpYW4tZ2l0Lm1kXCI7XG5cbiAgICBzZXRTdGF0ZShzdGF0ZTogUGx1Z2luU3RhdGUpIHtcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgICAgICB0aGlzLnN0YXR1c0Jhci5kaXNwbGF5KCk7XG4gICAgfVxuXG4gICAgYXN5bmMgb25sb2FkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGluZyAnICsgdGhpcy5tYW5pZmVzdC5uYW1lICsgXCIgcGx1Z2luXCIpO1xuICAgICAgICBhd2FpdCB0aGlzLmxvYWRTZXR0aW5ncygpO1xuXG4gICAgICAgIHRoaXMuYWRkU2V0dGluZ1RhYihuZXcgT2JzaWRpYW5HaXRTZXR0aW5nc1RhYih0aGlzLmFwcCwgdGhpcykpO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJwdWxsXCIsXG4gICAgICAgICAgICBuYW1lOiBcIlB1bGwgZnJvbSByZW1vdGUgcmVwb3NpdG9yeVwiLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IHRoaXMucHJvbWlzZVF1ZXVlLmFkZFRhc2soKCkgPT4gdGhpcy5wdWxsQ2hhbmdlc0Zyb21SZW1vdGUoKSksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJwdXNoXCIsXG4gICAgICAgICAgICBuYW1lOiBcIkNvbW1pdCAqYWxsKiBjaGFuZ2VzIGFuZCBwdXNoIHRvIHJlbW90ZSByZXBvc2l0b3J5XCIsXG4gICAgICAgICAgICBjYWxsYmFjazogKCkgPT4gdGhpcy5wcm9taXNlUXVldWUuYWRkVGFzaygoKSA9PiB0aGlzLmNyZWF0ZUJhY2t1cChmYWxzZSkpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJjb21taXQtcHVzaC1zcGVjaWZpZWQtbWVzc2FnZVwiLFxuICAgICAgICAgICAgbmFtZTogXCJDb21taXQgYW5kIHB1c2ggYWxsIGNoYW5nZXMgd2l0aCBzcGVjaWZpZWQgbWVzc2FnZVwiLFxuICAgICAgICAgICAgY2FsbGJhY2s6ICgpID0+IG5ldyBDdXN0b21NZXNzYWdlTW9kYWwodGhpcykub3BlbigpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuYWRkQ29tbWFuZCh7XG4gICAgICAgICAgICBpZDogXCJsaXN0LWNoYW5nZWQtZmlsZXNcIixcbiAgICAgICAgICAgIG5hbWU6IFwiTGlzdCBjaGFuZ2VkIGZpbGVzXCIsXG4gICAgICAgICAgICBjYWxsYmFjazogYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygpO1xuICAgICAgICAgICAgICAgIG5ldyBDaGFuZ2VkRmlsZXNNb2RhbCh0aGlzLCBzdGF0dXMuZmlsZXMpLm9wZW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGluaXQgc3RhdHVzQmFyXG4gICAgICAgIGxldCBzdGF0dXNCYXJFbCA9IHRoaXMuYWRkU3RhdHVzQmFySXRlbSgpO1xuICAgICAgICB0aGlzLnN0YXR1c0JhciA9IG5ldyBTdGF0dXNCYXIoc3RhdHVzQmFyRWwsIHRoaXMpO1xuICAgICAgICB0aGlzLnJlZ2lzdGVySW50ZXJ2YWwoXG4gICAgICAgICAgICB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4gdGhpcy5zdGF0dXNCYXIuZGlzcGxheSgpLCAxMDAwKVxuICAgICAgICApO1xuXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH1cblxuICAgIGFzeW5jIG9udW5sb2FkKCkge1xuICAgICAgICBjb25zb2xlLmxvZygndW5sb2FkaW5nICcgKyB0aGlzLm1hbmlmZXN0Lm5hbWUgKyBcIiBwbHVnaW5cIik7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRTZXR0aW5ncygpIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IE9iamVjdC5hc3NpZ24oe30sIERFRkFVTFRfU0VUVElOR1MsIGF3YWl0IHRoaXMubG9hZERhdGEoKSk7XG4gICAgfVxuICAgIGFzeW5jIHNhdmVTZXR0aW5ncygpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5zYXZlRGF0YSh0aGlzLnNldHRpbmdzKTtcbiAgICB9XG5cbiAgICBhc3luYyBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIXRoaXMuaXNHaXRJbnN0YWxsZWQoKSkge1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoXCJDYW5ub3QgcnVuIGdpdCBjb21tYW5kXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBhZGFwdGVyID0gdGhpcy5hcHAudmF1bHQuYWRhcHRlciBhcyBGaWxlU3lzdGVtQWRhcHRlcjtcbiAgICAgICAgICAgIGNvbnN0IHBhdGggPSBhZGFwdGVyLmdldEJhc2VQYXRoKCk7XG5cbiAgICAgICAgICAgIHRoaXMuZ2l0ID0gc2ltcGxlR2l0KHBhdGgpO1xuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkUmVwbyA9IGF3YWl0IHRoaXMuZ2l0LmNoZWNrSXNSZXBvKCk7XG5cbiAgICAgICAgICAgIGlmICghaXNWYWxpZFJlcG8pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihcIlZhbGlkIGdpdCByZXBvc2l0b3J5IG5vdCBmb3VuZC5cIik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2l0UmVhZHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuaWRsZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvUHVsbE9uQm9vdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb21pc2VRdWV1ZS5hZGRUYXNrKCgpID0+IHRoaXMucHVsbENoYW5nZXNGcm9tUmVtb3RlKCkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlQXV0b0JhY2t1cCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuYWJsZUF1dG9QdWxsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihlcnJvcik7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFzeW5jIHB1bGxDaGFuZ2VzRnJvbVJlbW90ZSgpOiBQcm9taXNlPHZvaWQ+IHtcblxuICAgICAgICBpZiAoIXRoaXMuZ2l0UmVhZHkpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCF0aGlzLmdpdFJlYWR5KSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgZmlsZXNVcGRhdGVkID0gYXdhaXQgdGhpcy5wdWxsKCk7XG4gICAgICAgIGlmIChmaWxlc1VwZGF0ZWQgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKGBQdWxsZWQgbmV3IGNoYW5nZXMuICR7ZmlsZXNVcGRhdGVkfSBmaWxlcyB1cGRhdGVkYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKFwiRXZlcnl0aGluZyBpcyB1cC10by1kYXRlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG4gICAgICAgIGlmIChzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihgWW91IGhhdmUgJHtzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGh9IGNvbmZsaWN0IGZpbGVzYCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmlkbGUpO1xuICAgIH1cblxuICAgIGFzeW5jIGNyZWF0ZUJhY2t1cChmcm9tQXV0b0JhY2t1cDogYm9vbGVhbiwgY29tbWl0TWVzc2FnZT86IHN0cmluZyk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICBpZiAoIXRoaXMuZ2l0UmVhZHkpIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5naXRSZWFkeSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuc3RhdHVzKTtcbiAgICAgICAgbGV0IHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygpO1xuXG5cbiAgICAgICAgaWYgKCFmcm9tQXV0b0JhY2t1cCkge1xuICAgICAgICAgICAgY29uc3QgZmlsZSA9IHRoaXMuYXBwLnZhdWx0LmdldEFic3RyYWN0RmlsZUJ5UGF0aCh0aGlzLmNvbmZsaWN0T3V0cHV0RmlsZSk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmFwcC52YXVsdC5kZWxldGUoZmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBmb3IgY29uZmxpY3QgZmlsZXMgb24gYXV0byBiYWNrdXBcbiAgICAgICAgaWYgKGZyb21BdXRvQmFja3VwICYmIHN0YXR1cy5jb25mbGljdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuaWRsZSk7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlFcnJvcihgRGlkIG5vdCBjb21taXQsIGJlY2F1c2UgeW91IGhhdmUgJHtzdGF0dXMuY29uZmxpY3RlZC5sZW5ndGh9IGNvbmZsaWN0IGZpbGVzLiBQbGVhc2UgcmVzb2x2ZSB0aGVtIGFuZCBjb21taXQgcGVyIGNvbW1hbmQuYCk7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUNvbmZsaWN0KHN0YXR1cy5jb25mbGljdGVkKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGNoYW5nZWRGaWxlcyA9IChhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKSkuZmlsZXM7XG5cbiAgICAgICAgaWYgKGNoYW5nZWRGaWxlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuYWRkKCk7XG4gICAgICAgICAgICBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuY29tbWl0KGNvbW1pdE1lc3NhZ2UpO1xuXG4gICAgICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShgQ29tbWl0dGVkICR7c3RhdHVzLnN0YWdlZC5sZW5ndGh9IGZpbGVzYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKFwiTm8gY2hhbmdlcyB0byBjb21taXRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIXRoaXMuc2V0dGluZ3MuZGlzYWJsZVB1c2gpIHtcbiAgICAgICAgICAgIGNvbnN0IHRyYWNraW5nQnJhbmNoID0gc3RhdHVzLnRyYWNraW5nO1xuICAgICAgICAgICAgY29uc3QgY3VycmVudEJyYW5jaCA9IHN0YXR1cy5jdXJyZW50O1xuXG4gICAgICAgICAgICBpZiAoIXRyYWNraW5nQnJhbmNoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoXCJEaWQgbm90IHB1c2guIE5vIHVwc3RyZWFtIGJyYW5jaCBpcyBzZXQhIFNlZSBSRUFETUUgZm9yIGluc3RydWN0aW9uc1wiLCAxMDAwMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5pZGxlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHJlbW90ZUNoYW5nZWRGaWxlcyA9IChhd2FpdCB0aGlzLmdpdC5kaWZmU3VtbWFyeShbY3VycmVudEJyYW5jaCwgdHJhY2tpbmdCcmFuY2hdKSkuY2hhbmdlZDtcblxuICAgICAgICAgICAgLy8gUHJldmVudCBwbHVnaW4gdG8gcHVsbC9wdXNoIGF0IGV2ZXJ5IGNhbGwgb2YgY3JlYXRlQmFja3VwLiBPbmx5IGlmIHVucHVzaGVkIGNvbW1pdHMgYXJlIHByZXNlbnRcbiAgICAgICAgICAgIGlmIChyZW1vdGVDaGFuZ2VkRmlsZXMgPiAwKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MucHVsbEJlZm9yZVB1c2gpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHVsbGVkRmlsZXNMZW5ndGggPSBhd2FpdCB0aGlzLnB1bGwoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHB1bGxlZEZpbGVzTGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5TWVzc2FnZShgUHVsbGVkICR7cHVsbGVkRmlsZXNMZW5ndGh9IGZpbGVzIGZyb20gcmVtb3RlYCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBSZWZyZXNoIGJlY2F1c2Ugb2YgcHVsbFxuICAgICAgICAgICAgICAgIHN0YXR1cyA9IGF3YWl0IHRoaXMuZ2l0LnN0YXR1cygpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5jb25mbGljdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5RXJyb3IoYENhbm5vdCBwdXNoLiBZb3UgaGF2ZSAke3N0YXR1cy5jb25mbGljdGVkLmxlbmd0aH0gY29uZmxpY3QgZmlsZXNgKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDb25mbGljdChzdGF0dXMuY29uZmxpY3RlZCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVDaGFuZ2VkRmlsZXMgPSAoYXdhaXQgdGhpcy5naXQuZGlmZlN1bW1hcnkoW2N1cnJlbnRCcmFuY2gsIHRyYWNraW5nQnJhbmNoXSkpLmNoYW5nZWQ7XG5cbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5wdXNoKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheU1lc3NhZ2UoYFB1c2hlZCAke3JlbW90ZUNoYW5nZWRGaWxlc30gZmlsZXMgdG8gcmVtb3RlYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlNZXNzYWdlKFwiTm8gY2hhbmdlcyB0byBwdXNoXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuaWRsZSk7XG4gICAgfVxuXG5cbiAgICAvLyByZWdpb246IG1haW4gbWV0aG9kc1xuXG4gICAgaXNHaXRJbnN0YWxsZWQoKTogYm9vbGVhbiB7XG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zdGV2ZXVreC9naXQtanMvaXNzdWVzLzQwMlxuICAgICAgICBjb25zdCBjb21tYW5kID0gc3Bhd25TeW5jKCdnaXQnLCBbJy0tdmVyc2lvbiddLCB7XG4gICAgICAgICAgICBzdGRpbzogJ2lnbm9yZSdcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKGNvbW1hbmQuZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoY29tbWFuZC5lcnJvcik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgYXN5bmMgYWRkKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICB0aGlzLnNldFN0YXRlKFBsdWdpblN0YXRlLmFkZCk7XG4gICAgICAgIGF3YWl0IHRoaXMuZ2l0LmFkZChcbiAgICAgICAgICAgIFwiLi8qXCIsXG4gICAgICAgICAgICAoZXJyOiBFcnJvciB8IG51bGwpID0+XG4gICAgICAgICAgICAgICAgZXJyICYmIHRoaXMuZGlzcGxheUVycm9yKGBDYW5ub3QgYWRkIGZpbGVzOiAke2Vyci5tZXNzYWdlfWApXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgYXN5bmMgY29tbWl0KG1lc3NhZ2U/OiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5jb21taXQpO1xuICAgICAgICBsZXQgY29tbWl0TWVzc2FnZTogc3RyaW5nIHwgc3RyaW5nW10gPSBtZXNzYWdlID8/IGF3YWl0IHRoaXMuZm9ybWF0Q29tbWl0TWVzc2FnZSh0aGlzLnNldHRpbmdzLmNvbW1pdE1lc3NhZ2UpO1xuICAgICAgICBpZiAodGhpcy5zZXR0aW5ncy5saXN0Q2hhbmdlZEZpbGVzSW5NZXNzYWdlQm9keSkge1xuICAgICAgICAgICAgY29tbWl0TWVzc2FnZSA9IFtjb21taXRNZXNzYWdlLCBcIkFmZmVjdGVkIGZpbGVzOlwiLCAoYXdhaXQgdGhpcy5naXQuc3RhdHVzKCkpLnN0YWdlZC5qb2luKFwiXFxuXCIpXTtcbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmdpdC5jb21taXQoY29tbWl0TWVzc2FnZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgcHVzaCgpOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5wdXNoKTtcbiAgICAgICAgYXdhaXQgdGhpcy5naXQucHVzaChcbiAgICAgICAgICAgIChlcnI6IEVycm9yIHwgbnVsbCkgPT4ge1xuICAgICAgICAgICAgICAgIGVyciAmJiB0aGlzLmRpc3BsYXlFcnJvcihgUHVzaCBmYWlsZWQgJHtlcnIubWVzc2FnZX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuICAgIH1cblxuICAgIGFzeW5jIHB1bGwoKTogUHJvbWlzZTxudW1iZXI+IHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShQbHVnaW5TdGF0ZS5wdWxsKTtcbiAgICAgICAgY29uc3QgcHVsbFJlc3VsdCA9IGF3YWl0IHRoaXMuZ2l0LnB1bGwoW1wiLS1uby1yZWJhc2VcIl0sXG4gICAgICAgICAgICBhc3luYyAoZXJyOiBFcnJvciB8IG51bGwpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheUVycm9yKGBQdWxsIGZhaWxlZCAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCB0aGlzLmdpdC5zdGF0dXMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1cy5jb25mbGljdGVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ29uZmxpY3Qoc3RhdHVzLmNvbmZsaWN0ZWQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmxhc3RVcGRhdGUgPSBEYXRlLm5vdygpO1xuICAgICAgICByZXR1cm4gcHVsbFJlc3VsdC5maWxlcy5sZW5ndGg7XG4gICAgfVxuXG4gICAgLy8gZW5kcmVnaW9uOiBtYWluIG1ldGhvZHNcblxuICAgIGVuYWJsZUF1dG9CYWNrdXAoKSB7XG4gICAgICAgIGNvbnN0IG1pbnV0ZXMgPSB0aGlzLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWw7XG4gICAgICAgIHRoaXMuaW50ZXJ2YWxJREJhY2t1cCA9IHdpbmRvdy5zZXRJbnRlcnZhbChcbiAgICAgICAgICAgICgpID0+IHRoaXMucHJvbWlzZVF1ZXVlLmFkZFRhc2soKCkgPT4gdGhpcy5jcmVhdGVCYWNrdXAodHJ1ZSkpLFxuICAgICAgICAgICAgbWludXRlcyAqIDYwMDAwXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnRlcnZhbCh0aGlzLmludGVydmFsSURCYWNrdXApO1xuICAgIH1cblxuICAgIGVuYWJsZUF1dG9QdWxsKCkge1xuICAgICAgICBjb25zdCBtaW51dGVzID0gdGhpcy5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsO1xuICAgICAgICB0aGlzLmludGVydmFsSURQdWxsID0gd2luZG93LnNldEludGVydmFsKFxuICAgICAgICAgICAgKCkgPT4gdGhpcy5wcm9taXNlUXVldWUuYWRkVGFzaygoKSA9PiB0aGlzLnB1bGxDaGFuZ2VzRnJvbVJlbW90ZSgpKSxcbiAgICAgICAgICAgIG1pbnV0ZXMgKiA2MDAwMFxuICAgICAgICApO1xuICAgICAgICB0aGlzLnJlZ2lzdGVySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEUHVsbCk7XG4gICAgfVxuXG4gICAgZGlzYWJsZUF1dG9CYWNrdXAoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSURCYWNrdXApIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5pbnRlcnZhbElEQmFja3VwKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBkaXNhYmxlQXV0b1B1bGwoKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh0aGlzLmludGVydmFsSURQdWxsKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJRFB1bGwpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGFzeW5jIGhhbmRsZUNvbmZsaWN0KGNvbmZsaWN0ZWQ6IHN0cmluZ1tdKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoUGx1Z2luU3RhdGUuY29uZmxpY3RlZCk7XG4gICAgICAgIGNvbnN0IGxpbmVzID0gW1xuICAgICAgICAgICAgXCIjIENvbmZsaWN0IGZpbGVzXCIsXG4gICAgICAgICAgICBcIlBsZWFzZSByZXNvbHZlIHRoZW0gYW5kIGNvbW1pdCBwZXIgY29tbWFuZCAoVGhpcyBmaWxlIHdpbGwgYmUgZGVsZXRlZCBiZWZvcmUgdGhlIGNvbW1pdCkuXCIsXG4gICAgICAgICAgICAuLi5jb25mbGljdGVkLm1hcChlID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5hcHAudmF1bHQuZ2V0QWJzdHJhY3RGaWxlQnlQYXRoKGUpO1xuICAgICAgICAgICAgICAgIGlmIChmaWxlIGluc3RhbmNlb2YgVEZpbGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGluayA9IHRoaXMuYXBwLm1ldGFkYXRhQ2FjaGUuZmlsZVRvTGlua3RleHQoZmlsZSwgXCIvXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYC0gW1ske2xpbmt9XV1gO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgLSBOb3QgYSBmaWxlOiAke2V9YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICBdO1xuICAgICAgICB0aGlzLndyaXRlQW5kT3BlbkZpbGUobGluZXMuam9pbihcIlxcblwiKSk7XG4gICAgfVxuXG4gICAgYXN5bmMgd3JpdGVBbmRPcGVuRmlsZSh0ZXh0OiBzdHJpbmcpIHtcbiAgICAgICAgYXdhaXQgdGhpcy5hcHAudmF1bHQuYWRhcHRlci53cml0ZSh0aGlzLmNvbmZsaWN0T3V0cHV0RmlsZSwgdGV4dCk7XG5cbiAgICAgICAgbGV0IGZpbGVJc0FscmVhZHlPcGVuZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5hcHAud29ya3NwYWNlLml0ZXJhdGVBbGxMZWF2ZXMobGVhZiA9PiB7XG4gICAgICAgICAgICBpZiAobGVhZi5nZXREaXNwbGF5VGV4dCgpICE9IFwiXCIgJiYgdGhpcy5jb25mbGljdE91dHB1dEZpbGUuc3RhcnRzV2l0aChsZWFmLmdldERpc3BsYXlUZXh0KCkpKSB7XG4gICAgICAgICAgICAgICAgZmlsZUlzQWxyZWFkeU9wZW5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWZpbGVJc0FscmVhZHlPcGVuZWQpIHtcbiAgICAgICAgICAgIHRoaXMuYXBwLndvcmtzcGFjZS5vcGVuTGlua1RleHQodGhpcy5jb25mbGljdE91dHB1dEZpbGUsIFwiL1wiLCB0cnVlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlZ2lvbjogZGlzcGxheWluZyAvIGZvcm1hdHRpbmcgbWVzc2FnZXNcbiAgICBkaXNwbGF5TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlciA9IDQgKiAxMDAwKTogdm9pZCB7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRpc3BsYXlNZXNzYWdlKG1lc3NhZ2UudG9Mb3dlckNhc2UoKSwgdGltZW91dCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnNldHRpbmdzLmRpc2FibGVQb3B1cHMpIHtcbiAgICAgICAgICAgIG5ldyBOb3RpY2UobWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zb2xlLmxvZyhgZ2l0IG9ic2lkaWFuIG1lc3NhZ2U6ICR7bWVzc2FnZX1gKTtcbiAgICB9XG4gICAgZGlzcGxheUVycm9yKG1lc3NhZ2U6IHN0cmluZywgdGltZW91dDogbnVtYmVyID0gMCk6IHZvaWQge1xuICAgICAgICBuZXcgTm90aWNlKG1lc3NhZ2UpO1xuICAgICAgICBjb25zb2xlLmxvZyhgZ2l0IG9ic2lkaWFuIGVycm9yOiAke21lc3NhZ2V9YCk7XG4gICAgICAgIHRoaXMuc3RhdHVzQmFyLmRpc3BsYXlNZXNzYWdlKG1lc3NhZ2UudG9Mb3dlckNhc2UoKSwgdGltZW91dCk7XG4gICAgfVxuXG4gICAgYXN5bmMgZm9ybWF0Q29tbWl0TWVzc2FnZSh0ZW1wbGF0ZTogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICAgICAgaWYgKHRlbXBsYXRlLmluY2x1ZGVzKFwie3tudW1GaWxlc319XCIpKSB7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG4gICAgICAgICAgICBsZXQgbnVtRmlsZXMgPSBzdGF0dXMuZmlsZXMubGVuZ3RoO1xuICAgICAgICAgICAgdGVtcGxhdGUgPSB0ZW1wbGF0ZS5yZXBsYWNlKFwie3tudW1GaWxlc319XCIsIFN0cmluZyhudW1GaWxlcykpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHRlbXBsYXRlLmluY2x1ZGVzKFwie3tmaWxlc319XCIpKSB7XG4gICAgICAgICAgICBsZXQgc3RhdHVzID0gYXdhaXQgdGhpcy5naXQuc3RhdHVzKCk7XG5cbiAgICAgICAgICAgIGxldCBjaGFuZ2VzZXQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nW107IH0gPSB7fTtcbiAgICAgICAgICAgIHN0YXR1cy5maWxlcy5mb3JFYWNoKCh2YWx1ZTogRmlsZVN0YXR1c1Jlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS5pbmRleCBpbiBjaGFuZ2VzZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlc2V0W3ZhbHVlLmluZGV4XS5wdXNoKHZhbHVlLnBhdGgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZXNldFt2YWx1ZS5pbmRleF0gPSBbdmFsdWUucGF0aF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxldCBjaHVua3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IFthY3Rpb24sIGZpbGVzXSBvZiBPYmplY3QuZW50cmllcyhjaGFuZ2VzZXQpKSB7XG4gICAgICAgICAgICAgICAgY2h1bmtzLnB1c2goYWN0aW9uICsgXCIgXCIgKyBmaWxlcy5qb2luKFwiIFwiKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBmaWxlcyA9IGNodW5rcy5qb2luKFwiLCBcIik7XG5cbiAgICAgICAgICAgIHRlbXBsYXRlID0gdGVtcGxhdGUucmVwbGFjZShcInt7ZmlsZXN9fVwiLCBmaWxlcyk7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbW9tZW50ID0gKHdpbmRvdyBhcyBhbnkpLm1vbWVudDtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlLnJlcGxhY2UoXG4gICAgICAgICAgICBcInt7ZGF0ZX19XCIsXG4gICAgICAgICAgICBtb21lbnQoKS5mb3JtYXQodGhpcy5zZXR0aW5ncy5jb21taXREYXRlRm9ybWF0KVxuICAgICAgICApO1xuICAgIH1cblxuICAgIC8vIGVuZHJlZ2lvbjogZGlzcGxheWluZyAvIGZvcm1hdHRpbmcgc3R1ZmZcbn1cblxuXG5jbGFzcyBPYnNpZGlhbkdpdFNldHRpbmdzVGFiIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG4gICAgZGlzcGxheSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IHsgY29udGFpbmVyRWwgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHBsdWdpbjogT2JzaWRpYW5HaXQgPSAodGhpcyBhcyBhbnkpLnBsdWdpbjtcblxuICAgICAgICBjb250YWluZXJFbC5lbXB0eSgpO1xuICAgICAgICBjb250YWluZXJFbC5jcmVhdGVFbChcImgyXCIsIHsgdGV4dDogXCJHaXQgQmFja3VwIHNldHRpbmdzXCIgfSk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlZhdWx0IGJhY2t1cCBpbnRlcnZhbCAobWludXRlcylcIilcbiAgICAgICAgICAgIC5zZXREZXNjKFxuICAgICAgICAgICAgICAgIFwiQ29tbWl0IGFuZCBwdXNoIGNoYW5nZXMgZXZlcnkgWCBtaW51dGVzLiBUbyBkaXNhYmxlIGF1dG9tYXRpYyBiYWNrdXAsIHNwZWNpZnkgbmVnYXRpdmUgdmFsdWUgb3IgemVybyAoZGVmYXVsdClcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUoU3RyaW5nKHBsdWdpbi5zZXR0aW5ncy5hdXRvU2F2ZUludGVydmFsKSlcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIodmFsdWUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5hdXRvU2F2ZUludGVydmFsID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5kaXNhYmxlQXV0b0JhY2t1cCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uZW5hYmxlQXV0b0JhY2t1cCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYEF1dG9tYXRpYyBiYWNrdXAgZW5hYmxlZCEgRXZlcnkgJHtwbHVnaW4uc2V0dGluZ3MuYXV0b1NhdmVJbnRlcnZhbH0gbWludXRlcy5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9TYXZlSW50ZXJ2YWwgPD0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uaW50ZXJ2YWxJREJhY2t1cFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uZGlzYWJsZUF1dG9CYWNrdXAoKSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShcIkF1dG9tYXRpYyBiYWNrdXAgZGlzYWJsZWQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBzcGVjaWZ5IGEgdmFsaWQgbnVtYmVyLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuICAgICAgICAgICAgLnNldE5hbWUoXCJBdXRvIHB1bGwgaW50ZXJ2YWwgKG1pbnV0ZXMpXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcbiAgICAgICAgICAgICAgICBcIlB1bGwgY2hhbmdlcyBldmVyeSBYIG1pbnV0ZXMuIFRvIGRpc2FibGUgYXV0b21hdGljIHB1bGwsIHNwZWNpZnkgbmVnYXRpdmUgdmFsdWUgb3IgemVybyAoZGVmYXVsdClcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUoU3RyaW5nKHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsKSlcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc05hTihOdW1iZXIodmFsdWUpKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbEludGVydmFsID0gTnVtYmVyKHZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2F2ZVNldHRpbmdzKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGx1Z2luLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWwgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5kaXNhYmxlQXV0b1B1bGwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLmVuYWJsZUF1dG9QdWxsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBOb3RpY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgQXV0b21hdGljIHB1bGwgZW5hYmxlZCEgRXZlcnkgJHtwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxJbnRlcnZhbH0gbWludXRlcy5gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmF1dG9QdWxsSW50ZXJ2YWwgPD0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uaW50ZXJ2YWxJRFB1bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLmRpc2FibGVBdXRvUHVsbCgpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgTm90aWNlKFwiQXV0b21hdGljIHB1bGwgZGlzYWJsZWQhXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShcIlBsZWFzZSBzcGVjaWZ5IGEgdmFsaWQgbnVtYmVyLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkNvbW1pdCBtZXNzYWdlXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcbiAgICAgICAgICAgICAgICBcIlNwZWNpZnkgY3VzdG9tIGNvbW1pdCBtZXNzYWdlLiBBdmFpbGFibGUgcGxhY2Vob2xkZXJzOiB7e2RhdGV9fVwiICtcbiAgICAgICAgICAgICAgICBcIiAoc2VlIGJlbG93KSBhbmQge3tudW1GaWxlc319IChudW1iZXIgb2YgY2hhbmdlZCBmaWxlcyBpbiB0aGUgY29tbWl0KVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkVGV4dCgodGV4dCkgPT5cbiAgICAgICAgICAgICAgICB0ZXh0XG4gICAgICAgICAgICAgICAgICAgIC5zZXRQbGFjZWhvbGRlcihcInZhdWx0IGJhY2t1cFwiKVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUoXG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY29tbWl0TWVzc2FnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gcGx1Z2luLnNldHRpbmdzLmNvbW1pdE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MuY29tbWl0TWVzc2FnZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwie3tkYXRlfX0gcGxhY2Vob2xkZXIgZm9ybWF0XCIpXG4gICAgICAgICAgICAuc2V0RGVzYygnU3BlY2lmeSBjdXN0b20gZGF0ZSBmb3JtYXQuIEUuZy4gXCJZWVlZLU1NLUREIEhIOm1tOnNzXCInKVxuICAgICAgICAgICAgLmFkZFRleHQoKHRleHQpID0+XG4gICAgICAgICAgICAgICAgdGV4dFxuICAgICAgICAgICAgICAgICAgICAuc2V0UGxhY2Vob2xkZXIocGx1Z2luLnNldHRpbmdzLmNvbW1pdERhdGVGb3JtYXQpXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuY29tbWl0RGF0ZUZvcm1hdClcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKGFzeW5jICh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmNvbW1pdERhdGVGb3JtYXQgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlByZXZpZXcgY29tbWl0IG1lc3NhZ2VcIilcbiAgICAgICAgICAgIC5hZGRCdXR0b24oKGJ1dHRvbikgPT5cbiAgICAgICAgICAgICAgICBidXR0b24uc2V0QnV0dG9uVGV4dChcIlByZXZpZXdcIikub25DbGljayhhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb21taXRNZXNzYWdlUHJldmlldyA9IGF3YWl0IHBsdWdpbi5mb3JtYXRDb21taXRNZXNzYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmNvbW1pdE1lc3NhZ2VcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShgJHtjb21taXRNZXNzYWdlUHJldmlld31gKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiTGlzdCBmaWxlbmFtZXMgYWZmZWN0ZWQgYnkgY29tbWl0IGluIHRoZSBjb21taXQgYm9keVwiKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLmxpc3RDaGFuZ2VkRmlsZXNJbk1lc3NhZ2VCb2R5KVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MubGlzdENoYW5nZWRGaWxlc0luTWVzc2FnZUJvZHkgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkN1cnJlbnQgYnJhbmNoXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIlN3aXRjaCB0byBhIGRpZmZlcmVudCBicmFuY2hcIilcbiAgICAgICAgICAgIC5hZGREcm9wZG93bihhc3luYyAoZHJvcGRvd24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBicmFuY2hJbmZvID0gYXdhaXQgcGx1Z2luLmdpdC5icmFuY2hMb2NhbCgpO1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYnJhbmNoIG9mIGJyYW5jaEluZm8uYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLmFkZE9wdGlvbihicmFuY2gsIGJyYW5jaCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRyb3Bkb3duLnNldFZhbHVlKGJyYW5jaEluZm8uY3VycmVudCk7XG4gICAgICAgICAgICAgICAgZHJvcGRvd24ub25DaGFuZ2UoYXN5bmMgKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBwbHVnaW4uZ2l0LmNoZWNrb3V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgW10sXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYyAoZXJyOiBFcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShlcnIubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duLnNldFZhbHVlKGJyYW5jaEluZm8uY3VycmVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE5vdGljZShgQ2hlY2tlZCBvdXQgdG8gJHtvcHRpb259YCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIlB1bGwgdXBkYXRlcyBvbiBzdGFydHVwXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkF1dG9tYXRpY2FsbHkgcHVsbCB1cGRhdGVzIHdoZW4gT2JzaWRpYW4gc3RhcnRzXCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuYXV0b1B1bGxPbkJvb3QpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5hdXRvUHVsbE9uQm9vdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiRGlzYWJsZSBwdXNoXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkRvIG5vdCBwdXNoIGNoYW5nZXMgdG8gdGhlIHJlbW90ZSByZXBvc2l0b3J5XCIpXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuZGlzYWJsZVB1c2gpXG4gICAgICAgICAgICAgICAgICAgIC5vbkNoYW5nZSgodmFsdWUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zZXR0aW5ncy5kaXNhYmxlUHVzaCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNhdmVTZXR0aW5ncygpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICBuZXcgU2V0dGluZyhjb250YWluZXJFbClcbiAgICAgICAgICAgIC5zZXROYW1lKFwiUHVsbCBjaGFuZ2VzIGJlZm9yZSBwdXNoXCIpXG4gICAgICAgICAgICAuc2V0RGVzYyhcIkNvbW1pdCAtPiBwdWxsIC0+IHB1c2ggKE9ubHkgaWYgcHVzaGluZyBpcyBlbmFibGVkKVwiKVxuICAgICAgICAgICAgLmFkZFRvZ2dsZSgodG9nZ2xlKSA9PlxuICAgICAgICAgICAgICAgIHRvZ2dsZVxuICAgICAgICAgICAgICAgICAgICAuc2V0VmFsdWUocGx1Z2luLnNldHRpbmdzLnB1bGxCZWZvcmVQdXNoKVxuICAgICAgICAgICAgICAgICAgICAub25DaGFuZ2UoKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW4uc2V0dGluZ3MucHVsbEJlZm9yZVB1c2ggPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgbmV3IFNldHRpbmcoY29udGFpbmVyRWwpXG4gICAgICAgICAgICAuc2V0TmFtZShcIkRpc2FibGUgbm90aWZpY2F0aW9uc1wiKVxuICAgICAgICAgICAgLnNldERlc2MoXG4gICAgICAgICAgICAgICAgXCJEaXNhYmxlIG5vdGlmaWNhdGlvbnMgZm9yIGdpdCBvcGVyYXRpb25zIHRvIG1pbmltaXplIGRpc3RyYWN0aW9uIChyZWZlciB0byBzdGF0dXMgYmFyIGZvciB1cGRhdGVzKVwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuYWRkVG9nZ2xlKCh0b2dnbGUpID0+XG4gICAgICAgICAgICAgICAgdG9nZ2xlXG4gICAgICAgICAgICAgICAgICAgIC5zZXRWYWx1ZShwbHVnaW4uc2V0dGluZ3MuZGlzYWJsZVBvcHVwcylcbiAgICAgICAgICAgICAgICAgICAgLm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luLnNldHRpbmdzLmRpc2FibGVQb3B1cHMgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgfVxufVxuXG5pbnRlcmZhY2UgU3RhdHVzQmFyTWVzc2FnZSB7XG4gICAgbWVzc2FnZTogc3RyaW5nO1xuICAgIHRpbWVvdXQ6IG51bWJlcjtcbn1cblxuY2xhc3MgU3RhdHVzQmFyIHtcbiAgICBwdWJsaWMgbWVzc2FnZXM6IFN0YXR1c0Jhck1lc3NhZ2VbXSA9IFtdO1xuICAgIHB1YmxpYyBjdXJyZW50TWVzc2FnZTogU3RhdHVzQmFyTWVzc2FnZTtcbiAgICBwdWJsaWMgbGFzdE1lc3NhZ2VUaW1lc3RhbXA6IG51bWJlcjtcblxuICAgIHByaXZhdGUgc3RhdHVzQmFyRWw6IEhUTUxFbGVtZW50O1xuICAgIHByaXZhdGUgcGx1Z2luOiBPYnNpZGlhbkdpdDtcblxuICAgIGNvbnN0cnVjdG9yKHN0YXR1c0JhckVsOiBIVE1MRWxlbWVudCwgcGx1Z2luOiBPYnNpZGlhbkdpdCkge1xuICAgICAgICB0aGlzLnN0YXR1c0JhckVsID0gc3RhdHVzQmFyRWw7XG4gICAgICAgIHRoaXMucGx1Z2luID0gcGx1Z2luO1xuICAgIH1cblxuICAgIHB1YmxpYyBkaXNwbGF5TWVzc2FnZShtZXNzYWdlOiBzdHJpbmcsIHRpbWVvdXQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2goe1xuICAgICAgICAgICAgbWVzc2FnZTogYGdpdDogJHttZXNzYWdlLnNsaWNlKDAsIDEwMCl9YCxcbiAgICAgICAgICAgIHRpbWVvdXQ6IHRpbWVvdXQsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmRpc3BsYXkoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgZGlzcGxheSgpIHtcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZXMubGVuZ3RoID4gMCAmJiAhdGhpcy5jdXJyZW50TWVzc2FnZSkge1xuICAgICAgICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZSA9IHRoaXMubWVzc2FnZXMuc2hpZnQoKTtcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dCh0aGlzLmN1cnJlbnRNZXNzYWdlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgdGhpcy5sYXN0TWVzc2FnZVRpbWVzdGFtcCA9IERhdGUubm93KCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50TWVzc2FnZSkge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZUFnZSA9IERhdGUubm93KCkgLSB0aGlzLmxhc3RNZXNzYWdlVGltZXN0YW1wO1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2VBZ2UgPj0gdGhpcy5jdXJyZW50TWVzc2FnZS50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50TWVzc2FnZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0TWVzc2FnZVRpbWVzdGFtcCA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBkaXNwbGF5U3RhdGUoKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5wbHVnaW4uc3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3RhdGUuaWRsZTpcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlGcm9tTm93KHRoaXMucGx1Z2luLmxhc3RVcGRhdGUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5zdGF0dXM6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiBjaGVja2luZyByZXBvIHN0YXR1cy4uXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5hZGQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiBhZGRpbmcgZmlsZXMgdG8gcmVwby4uXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5jb21taXQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiBjb21taXR0aW5nIGNoYW5nZXMuLlwiKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgUGx1Z2luU3RhdGUucHVzaDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IHB1c2hpbmcgY2hhbmdlcy4uXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBQbHVnaW5TdGF0ZS5wdWxsOlxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzQmFyRWwuc2V0VGV4dChcImdpdDogcHVsbGluZyBjaGFuZ2VzLi5cIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFBsdWdpblN0YXRlLmNvbmZsaWN0ZWQ6XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNCYXJFbC5zZXRUZXh0KFwiZ2l0OiB5b3UgaGF2ZSBjb25mbGljdCBmaWxlcy4uXCIpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoXCJnaXQ6IGZhaWxlZCBvbiBpbml0aWFsaXphdGlvbiFcIik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIGRpc3BsYXlGcm9tTm93KHRpbWVzdGFtcDogbnVtYmVyKTogdm9pZCB7XG4gICAgICAgIGlmICh0aW1lc3RhbXApIHtcbiAgICAgICAgICAgIGxldCBtb21lbnQgPSAod2luZG93IGFzIGFueSkubW9tZW50O1xuICAgICAgICAgICAgbGV0IGZyb21Ob3cgPSBtb21lbnQodGltZXN0YW1wKS5mcm9tTm93KCk7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoYGdpdDogbGFzdCB1cGRhdGUgJHtmcm9tTm93fS4uYCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnN0YXR1c0JhckVsLnNldFRleHQoYGdpdDogcmVhZHlgKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEN1c3RvbU1lc3NhZ2VNb2RhbCBleHRlbmRzIFN1Z2dlc3RNb2RhbDxzdHJpbmc+IHtcbiAgICBwbHVnaW46IE9ic2lkaWFuR2l0O1xuXG4gICAgY29uc3RydWN0b3IocGx1Z2luOiBPYnNpZGlhbkdpdCkge1xuICAgICAgICBzdXBlcihwbHVnaW4uYXBwKTtcbiAgICAgICAgdGhpcy5wbHVnaW4gPSBwbHVnaW47XG4gICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIoXCJUeXBlIHlvdXIgbWVzc2FnZSBhbmQgc2VsZWN0IG9wdGlvbmFsIHRoZSB2ZXJzaW9uIHdpdGggdGhlIGFkZGVkIGRhdGUuXCIpO1xuICAgIH1cblxuXG4gICAgZ2V0U3VnZ2VzdGlvbnMocXVlcnk6IHN0cmluZyk6IHN0cmluZ1tdIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9ICh3aW5kb3cgYXMgYW55KS5tb21lbnQoKS5mb3JtYXQodGhpcy5wbHVnaW4uc2V0dGluZ3MuY29tbWl0RGF0ZUZvcm1hdCk7XG4gICAgICAgIGlmIChxdWVyeSA9PSBcIlwiKSBxdWVyeSA9IFwiLi4uXCI7XG4gICAgICAgIHJldHVybiBbcXVlcnksIGAke2RhdGV9OiAke3F1ZXJ5fWAsIGAke3F1ZXJ5fTogJHtkYXRlfWBdO1xuICAgIH1cblxuICAgIHJlbmRlclN1Z2dlc3Rpb24odmFsdWU6IHN0cmluZywgZWw6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gICAgICAgIGVsLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cblxuICAgIG9uQ2hvb3NlU3VnZ2VzdGlvbihpdGVtOiBzdHJpbmcsIF86IE1vdXNlRXZlbnQgfCBLZXlib2FyZEV2ZW50KTogdm9pZCB7XG4gICAgICAgIHRoaXMucGx1Z2luLnByb21pc2VRdWV1ZS5hZGRUYXNrKCgpID0+IHRoaXMucGx1Z2luLmNyZWF0ZUJhY2t1cChmYWxzZSwgaXRlbSkpO1xuICAgIH1cblxufVxuY2xhc3MgQ2hhbmdlZEZpbGVzTW9kYWwgZXh0ZW5kcyBGdXp6eVN1Z2dlc3RNb2RhbDxGaWxlU3RhdHVzUmVzdWx0PiB7XG4gICAgcGx1Z2luOiBPYnNpZGlhbkdpdDtcbiAgICBjaGFuZ2VkRmlsZXM6IEZpbGVTdGF0dXNSZXN1bHRbXTtcblxuICAgIGNvbnN0cnVjdG9yKHBsdWdpbjogT2JzaWRpYW5HaXQsIGNoYW5nZWRGaWxlczogRmlsZVN0YXR1c1Jlc3VsdFtdKSB7XG4gICAgICAgIHN1cGVyKHBsdWdpbi5hcHApO1xuICAgICAgICB0aGlzLnBsdWdpbiA9IHBsdWdpbjtcbiAgICAgICAgdGhpcy5jaGFuZ2VkRmlsZXMgPSBjaGFuZ2VkRmlsZXM7XG4gICAgICAgIHRoaXMuc2V0UGxhY2Vob2xkZXIoXCJOb3Qgc3VwcG9ydGVkIGZpbGVzIHdpbGwgYmUgb3BlbmVkIGJ5IGRlZmF1bHQgYXBwIVwiKTtcbiAgICB9XG5cbiAgICBnZXRJdGVtcygpOiBGaWxlU3RhdHVzUmVzdWx0W10ge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2VkRmlsZXM7XG4gICAgfVxuXG4gICAgZ2V0SXRlbVRleHQoaXRlbTogRmlsZVN0YXR1c1Jlc3VsdCk6IHN0cmluZyB7XG4gICAgICAgIGlmIChpdGVtLmluZGV4ID09IFwiP1wiICYmIGl0ZW0ud29ya2luZ19kaXIgPT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHJldHVybiBgVW50cmFja2VkIHwgJHtpdGVtLnBhdGh9YDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCB3b3JraW5nX2RpciA9IFwiXCI7XG4gICAgICAgIGxldCBpbmRleCA9IFwiXCI7XG5cbiAgICAgICAgaWYgKGl0ZW0ud29ya2luZ19kaXIgIT0gXCIgXCIpIHdvcmtpbmdfZGlyID0gYFdvcmtpbmcgZGlyOiAke2l0ZW0ud29ya2luZ19kaXJ9IGA7XG4gICAgICAgIGlmIChpdGVtLmluZGV4ICE9IFwiIFwiKSBpbmRleCA9IGBJbmRleDogJHtpdGVtLmluZGV4fWA7XG5cbiAgICAgICAgcmV0dXJuIGAke3dvcmtpbmdfZGlyfSR7aW5kZXh9IHwgJHtpdGVtLnBhdGh9YDtcbiAgICB9XG5cbiAgICBvbkNob29zZUl0ZW0oaXRlbTogRmlsZVN0YXR1c1Jlc3VsdCwgXzogTW91c2VFdmVudCB8IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucGx1Z2luLmFwcC5tZXRhZGF0YUNhY2hlLmdldEZpcnN0TGlua3BhdGhEZXN0KGl0ZW0ucGF0aCwgXCJcIikgPT0gbnVsbCkge1xuICAgICAgICAgICAgKHRoaXMuYXBwIGFzIGFueSkub3BlbldpdGhEZWZhdWx0QXBwKGl0ZW0ucGF0aCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBsdWdpbi5hcHAud29ya3NwYWNlLm9wZW5MaW5rVGV4dChpdGVtLnBhdGgsIFwiL1wiKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY2xhc3MgUHJvbWlzZVF1ZXVlIHtcbiAgICB0YXNrczogKCgpID0+IFByb21pc2U8YW55PilbXSA9IFtdO1xuXG4gICAgYWRkVGFzayh0YXNrOiAoKSA9PiBQcm9taXNlPGFueT4pIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKHRhc2spO1xuICAgICAgICBpZiAodGhpcy50YXNrcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlVGFzaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFzeW5jIGhhbmRsZVRhc2soKSB7XG4gICAgICAgIGlmICh0aGlzLnRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMudGFza3NbMF0oKS5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRhc2tzLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVUYXNrKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0iXSwibmFtZXMiOlsiZ2l0X2Vycm9yXzEiLCJyZXF1aXJlJCQwIiwib3MiLCJ0dHkiLCJ1dGlsIiwicmVxdWlyZSQkMSIsInRoaXMiLCJmc18xIiwiZmlsZV9leGlzdHNfMSIsInV0aWxfMSIsImFyZ3VtZW50X2ZpbHRlcnNfMSIsInJlcXVpcmUkJDIiLCJyZXF1aXJlJCQzIiwicmVxdWlyZSQkNCIsInJlcXVpcmUkJDUiLCJyZXF1aXJlJCQ2IiwicmVxdWlyZSQkNyIsInV0aWxzXzEiLCJ0YXNrX2NvbmZpZ3VyYXRpb25fZXJyb3JfMSIsInRhc2tfMSIsIkNsZWFuU3VtbWFyeV8xIiwiY2hlY2tfaXNfcmVwb18xIiwiY2xlYW5fMSIsImdpdF9jb25zdHJ1Y3RfZXJyb3JfMSIsImdpdF9wbHVnaW5fZXJyb3JfMSIsImdpdF9yZXNwb25zZV9lcnJvcl8xIiwicmVzZXRfMSIsImRlYnVnXzEiLCJnaXRfbG9nZ2VyXzEiLCJ0YXNrc19wZW5kaW5nX3F1ZXVlXzEiLCJ0YXNrIiwiZ2l0RXJyb3IiLCJjaGlsZF9wcm9jZXNzXzEiLCJnaXRfZXhlY3V0b3JfY2hhaW5fMSIsInBhcnNlX3JlbW90ZV9vYmplY3RzXzEiLCJwYXJzZV9yZW1vdGVfbWVzc2FnZXNfMSIsInBhcnNlX3B1c2hfMSIsInRhc2tfY2FsbGJhY2tfMSIsInB1c2hfMSIsInByb21pc2VfZGVmZXJyZWRfMSIsIkJyYW5jaERlbGV0ZVN1bW1hcnlfMSIsIkJyYW5jaFN1bW1hcnlfMSIsInBhcnNlX2JyYW5jaF9kZWxldGVfMSIsInBhcnNlX2JyYW5jaF8xIiwiQ2hlY2tJZ25vcmVfMSIsInBhcnNlX2NvbW1pdF8xIiwicGFyc2VfZGlmZl9zdW1tYXJ5XzEiLCJwYXJzZV9mZXRjaF8xIiwicGFyc2VfbGlzdF9sb2dfc3VtbWFyeV8xIiwiTWVyZ2VTdW1tYXJ5XzEiLCJwYXJzZV9wdWxsXzEiLCJwYXJzZV9tZXJnZV8xIiwicGFyc2VfbW92ZV8xIiwiR2V0UmVtb3RlU3VtbWFyeV8xIiwibG9nXzEiLCJyZXF1aXJlJCQ4IiwicmVxdWlyZSQkOSIsInJlcXVpcmUkJDEwIiwicmVxdWlyZSQkMTEiLCJyZXF1aXJlJCQxMiIsInJlcXVpcmUkJDEzIiwicmVxdWlyZSQkMTQiLCJyZXF1aXJlJCQxNSIsInJlcXVpcmUkJDE2IiwicmVxdWlyZSQkMTciLCJyZXF1aXJlJCQxOCIsInJlcXVpcmUkJDE5IiwicmVxdWlyZSQkMjAiLCJyZXF1aXJlJCQyMSIsInJlcXVpcmUkJDIyIiwicmVxdWlyZSQkMjMiLCJyZXF1aXJlJCQyNCIsInJlcXVpcmUkJDI1IiwicmVxdWlyZSQkMjYiLCJyZXF1aXJlJCQyNyIsInJlcXVpcmUkJDI4IiwicGx1Z2lucyIsInBsdWdpbnNfMSIsIkdpdCIsImdpdF9mYWN0b3J5XzEiLCJzaW1wbGVHaXQiLCJzcGF3blN5bmMiLCJURmlsZSIsIk5vdGljZSIsIlBsdWdpbiIsIlNldHRpbmciLCJQbHVnaW5TZXR0aW5nVGFiIiwiU3VnZ2VzdE1vZGFsIiwiRnV6enlTdWdnZXN0TW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLGFBQWEsR0FBRyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUU7QUFDbkMsSUFBSSxhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7QUFDekMsU0FBUyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQ3BGLFFBQVEsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxNQUFNLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0FBQzFHLElBQUksT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQy9CLENBQUMsQ0FBQztBQUNGO0FBQ08sU0FBUyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtBQUNoQyxJQUFJLElBQUksT0FBTyxDQUFDLEtBQUssVUFBVSxJQUFJLENBQUMsS0FBSyxJQUFJO0FBQzdDLFFBQVEsTUFBTSxJQUFJLFNBQVMsQ0FBQyxzQkFBc0IsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsK0JBQStCLENBQUMsQ0FBQztBQUNsRyxJQUFJLGFBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDeEIsSUFBSSxTQUFTLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDM0MsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsS0FBSyxJQUFJLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0FBQ3pGLENBQUM7QUF1Q0Q7QUFDTyxTQUFTLFNBQVMsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsRUFBRSxTQUFTLEVBQUU7QUFDN0QsSUFBSSxTQUFTLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLEtBQUssWUFBWSxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLFVBQVUsT0FBTyxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDaEgsSUFBSSxPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxPQUFPLENBQUMsRUFBRSxVQUFVLE9BQU8sRUFBRSxNQUFNLEVBQUU7QUFDL0QsUUFBUSxTQUFTLFNBQVMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ25HLFFBQVEsU0FBUyxRQUFRLENBQUMsS0FBSyxFQUFFLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFO0FBQ3RHLFFBQVEsU0FBUyxJQUFJLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxRQUFRLENBQUMsQ0FBQyxFQUFFO0FBQ3RILFFBQVEsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsT0FBTyxFQUFFLFVBQVUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQzlFLEtBQUssQ0FBQyxDQUFDO0FBQ1AsQ0FBQztBQUNEO0FBQ08sU0FBUyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtBQUMzQyxJQUFJLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7QUFDckgsSUFBSSxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsV0FBVyxFQUFFLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENB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Q0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ3BDLEdBQUc7QUFDSCxFQUFFLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtBQUNsQixJQUFJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0FBQ3BDLEdBQUc7QUFDSCxFQUFFLE9BQU8sRUFBRSxHQUFHLElBQUksQ0FBQztBQUNuQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyxPQUFPLENBQUMsRUFBRSxFQUFFO0FBQ3JCLEVBQUUsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQztBQUMzQixFQUFFLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtBQUNsQixJQUFJLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO0FBQ3ZDLEdBQUc7QUFDSCxFQUFFLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtBQUNsQixJQUFJLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ3hDLEdBQUc7QUFDSCxFQUFFLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtBQUNsQixJQUFJLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLEdBQUc7QUFDSCxFQUFFLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtBQUNsQixJQUFJLE9BQU8sTUFBTSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO0FBQzFDLEdBQUc7QUFDSCxFQUFFLE9BQU8sRUFBRSxHQUFHLEtBQUssQ0FBQztBQUNwQixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVMsTUFBTSxDQUFDLEVBQUUs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Q0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxTQUFTO0FBQ1YsQ0FBQyxDQUFDO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLFNBQVMsR0FBRztBQUNyQjtBQUNBO0FBQ0E7QUFDQSxDQUFDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxJQUFJLE1BQU0sQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDdkgsRUFBRSxPQUFPLElBQUksQ0FBQztBQUNkLEVBQUU7QUFDRjtBQUNBO0FBQ0EsQ0FBQyxJQUFJLE9BQU8sU0FBUyxLQUFLLFdBQVcsSUFBSSxTQUFTLENBQUMsU0FB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QUFHLEVBQUU7QUFDTCxHQUFHLEVBQUU7QUFDTCxHQUFHLEVBQUU7QUFDTCxHQUFHLEVBQUU7QUFDTCxHQUFHLEVBQUU7QUFDTCxHQUFHLEVBQUU7QUFDTCxHQUFHLEVBQUU7QUFDTCxHQUFHLEVBQUU7QUFDTCxHQUFHLEVBQUU7QUFDTCxHQUFHLEVBQUU7QUFDTCxHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLEdBQUc7QUFDTixHQUFHLENBQUM7QUFDSixFQUFFO0FBQ0YsQ0FBQyxDQUFDLE9BQU8sS0FBSyxFQUFFO0FBQ2hCO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QUMsQ0FBQztBQUMzTSxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksS0FBS0EsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDaEssSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsUUFBUSxFQUFFLG1CQUFtQixDQUFDLElBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUtBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSUEsS0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxDQUFDO0FBQ2xLLElBQUksTUFBTSxDQUFDLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUUsSUFBSSxLQUFLQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLElBQUlBLEtBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztBQUN0SyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsbUJBQW1CLENBQUMsSUFBSSxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksS0FBSztBQUNwRixRQUFRQSxLQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEVBQUUsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDMUQsS0FBSyxDQUFDO0FBQ04sSUFBSSxNQUFNLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBRSxJQUFJLEtBQUs7QUFDeEYsUUFB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
