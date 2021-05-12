/**
 * @fileoverview gRPC-Web generated client stub for daemon
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.daemon = require('./daemon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.daemon.DaemonClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.daemon.DaemonPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

  /**
   * @private @const {?Object} The credentials to be used to connect
   *    to the server
   */
  this.credentials_ = credentials;

  /**
   * @private @const {?Object} Options for the client
   */
  this.options_ = options;
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.LoginUserRequest,
 *   !proto.daemon.LoginUserResponse>}
 */
const methodDescriptor_Daemon_LoginUser = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/LoginUser',
  grpc.web.MethodType.UNARY,
  proto.daemon.LoginUserRequest,
  proto.daemon.LoginUserResponse,
  /** @param {!proto.daemon.LoginUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.LoginUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.LoginUserRequest,
 *   !proto.daemon.LoginUserResponse>}
 */
const methodInfo_Daemon_LoginUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.LoginUserResponse,
  /** @param {!proto.daemon.LoginUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.LoginUserResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.LoginUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.LoginUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.LoginUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.loginUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/LoginUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_LoginUser,
      callback);
};


/**
 * @param {!proto.daemon.LoginUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.LoginUserResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.loginUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/LoginUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_LoginUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.SignupUserRequest,
 *   !proto.daemon.LoginUserResponse>}
 */
const methodDescriptor_Daemon_SignupUser = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/SignupUser',
  grpc.web.MethodType.UNARY,
  proto.daemon.SignupUserRequest,
  proto.daemon.LoginUserResponse,
  /** @param {!proto.daemon.SignupUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.LoginUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.SignupUserRequest,
 *   !proto.daemon.LoginUserResponse>}
 */
const methodInfo_Daemon_SignupUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.LoginUserResponse,
  /** @param {!proto.daemon.SignupUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.LoginUserResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.SignupUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.LoginUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.LoginUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.signupUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/SignupUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_SignupUser,
      callback);
};


/**
 * @param {!proto.daemon.SignupUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.LoginUserResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.signupUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/SignupUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_SignupUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.InviteUserRequest,
 *   !proto.daemon.InviteUserResponse>}
 */
const methodDescriptor_Daemon_InviteUser = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/InviteUser',
  grpc.web.MethodType.UNARY,
  proto.daemon.InviteUserRequest,
  proto.daemon.InviteUserResponse,
  /** @param {!proto.daemon.InviteUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.InviteUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.InviteUserRequest,
 *   !proto.daemon.InviteUserResponse>}
 */
const methodInfo_Daemon_InviteUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.InviteUserResponse,
  /** @param {!proto.daemon.InviteUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.InviteUserResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.InviteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.InviteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.InviteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.inviteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/InviteUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_InviteUser,
      callback);
};


/**
 * @param {!proto.daemon.InviteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.InviteUserResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.inviteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/InviteUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_InviteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.Empty,
 *   !proto.daemon.ListUsersResponse>}
 */
const methodDescriptor_Daemon_ListUsers = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/ListUsers',
  grpc.web.MethodType.UNARY,
  proto.daemon.Empty,
  proto.daemon.ListUsersResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ListUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.Empty,
 *   !proto.daemon.ListUsersResponse>}
 */
const methodInfo_Daemon_ListUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.ListUsersResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ListUsersResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.ListUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.ListUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.listUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/ListUsers',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListUsers,
      callback);
};


/**
 * @param {!proto.daemon.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.ListUsersResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.listUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/ListUsers',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.UpdatePasswdRequest,
 *   !proto.daemon.UpdatePasswdResponse>}
 */
const methodDescriptor_Daemon_ChangeUserPasswd = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/ChangeUserPasswd',
  grpc.web.MethodType.UNARY,
  proto.daemon.UpdatePasswdRequest,
  proto.daemon.UpdatePasswdResponse,
  /** @param {!proto.daemon.UpdatePasswdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.UpdatePasswdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.UpdatePasswdRequest,
 *   !proto.daemon.UpdatePasswdResponse>}
 */
const methodInfo_Daemon_ChangeUserPasswd = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.UpdatePasswdResponse,
  /** @param {!proto.daemon.UpdatePasswdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.UpdatePasswdResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.UpdatePasswdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.UpdatePasswdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.UpdatePasswdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.changeUserPasswd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/ChangeUserPasswd',
      request,
      metadata || {},
      methodDescriptor_Daemon_ChangeUserPasswd,
      callback);
};


/**
 * @param {!proto.daemon.UpdatePasswdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.UpdatePasswdResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.changeUserPasswd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/ChangeUserPasswd',
      request,
      metadata || {},
      methodDescriptor_Daemon_ChangeUserPasswd);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.DestroyUserRequest,
 *   !proto.daemon.DestroyUserResponse>}
 */
const methodDescriptor_Daemon_DestroyUser = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/DestroyUser',
  grpc.web.MethodType.UNARY,
  proto.daemon.DestroyUserRequest,
  proto.daemon.DestroyUserResponse,
  /** @param {!proto.daemon.DestroyUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.DestroyUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.DestroyUserRequest,
 *   !proto.daemon.DestroyUserResponse>}
 */
const methodInfo_Daemon_DestroyUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.DestroyUserResponse,
  /** @param {!proto.daemon.DestroyUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.DestroyUserResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.DestroyUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.DestroyUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.DestroyUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.destroyUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/DestroyUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_DestroyUser,
      callback);
};


/**
 * @param {!proto.daemon.DestroyUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.DestroyUserResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.destroyUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/DestroyUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_DestroyUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.SetTeamSuspendRequest,
 *   !proto.daemon.Empty>}
 */
const methodDescriptor_Daemon_SetTeamSuspend = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/SetTeamSuspend',
  grpc.web.MethodType.UNARY,
  proto.daemon.SetTeamSuspendRequest,
  proto.daemon.Empty,
  /** @param {!proto.daemon.SetTeamSuspendRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.SetTeamSuspendRequest,
 *   !proto.daemon.Empty>}
 */
const methodInfo_Daemon_SetTeamSuspend = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.Empty,
  /** @param {!proto.daemon.SetTeamSuspendRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.Empty.deserializeBinary
);


/**
 * @param {!proto.daemon.SetTeamSuspendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.setTeamSuspend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/SetTeamSuspend',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetTeamSuspend,
      callback);
};


/**
 * @param {!proto.daemon.SetTeamSuspendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.Empty>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.setTeamSuspend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/SetTeamSuspend',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetTeamSuspend);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.UpdateTeamPassRequest,
 *   !proto.daemon.UpdateTeamPassResponse>}
 */
const methodDescriptor_Daemon_UpdateTeamPassword = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/UpdateTeamPassword',
  grpc.web.MethodType.UNARY,
  proto.daemon.UpdateTeamPassRequest,
  proto.daemon.UpdateTeamPassResponse,
  /** @param {!proto.daemon.UpdateTeamPassRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.UpdateTeamPassResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.UpdateTeamPassRequest,
 *   !proto.daemon.UpdateTeamPassResponse>}
 */
const methodInfo_Daemon_UpdateTeamPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.UpdateTeamPassResponse,
  /** @param {!proto.daemon.UpdateTeamPassRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.UpdateTeamPassResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.UpdateTeamPassRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.UpdateTeamPassResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.UpdateTeamPassResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.updateTeamPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/UpdateTeamPassword',
      request,
      metadata || {},
      methodDescriptor_Daemon_UpdateTeamPassword,
      callback);
};


/**
 * @param {!proto.daemon.UpdateTeamPassRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.UpdateTeamPassResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.updateTeamPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/UpdateTeamPassword',
      request,
      metadata || {},
      methodDescriptor_Daemon_UpdateTeamPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.Empty,
 *   !proto.daemon.CredsResponse>}
 */
const methodDescriptor_Daemon_GetAPICreds = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/GetAPICreds',
  grpc.web.MethodType.UNARY,
  proto.daemon.Empty,
  proto.daemon.CredsResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.CredsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.Empty,
 *   !proto.daemon.CredsResponse>}
 */
const methodInfo_Daemon_GetAPICreds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.CredsResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.CredsResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.CredsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.CredsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.getAPICreds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/GetAPICreds',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetAPICreds,
      callback);
};


/**
 * @param {!proto.daemon.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.CredsResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.getAPICreds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/GetAPICreds',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetAPICreds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.CreateEventRequest,
 *   !proto.daemon.LabStatus>}
 */
const methodDescriptor_Daemon_CreateEvent = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/CreateEvent',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.daemon.CreateEventRequest,
  proto.daemon.LabStatus,
  /** @param {!proto.daemon.CreateEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.LabStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.CreateEventRequest,
 *   !proto.daemon.LabStatus>}
 */
const methodInfo_Daemon_CreateEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.LabStatus,
  /** @param {!proto.daemon.CreateEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.LabStatus.deserializeBinary
);


/**
 * @param {!proto.daemon.CreateEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.LabStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.createEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/CreateEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_CreateEvent);
};


/**
 * @param {!proto.daemon.CreateEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.LabStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonPromiseClient.prototype.createEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/CreateEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_CreateEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.StopEventRequest,
 *   !proto.daemon.EventStatus>}
 */
const methodDescriptor_Daemon_StopEvent = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/StopEvent',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.daemon.StopEventRequest,
  proto.daemon.EventStatus,
  /** @param {!proto.daemon.StopEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.EventStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.StopEventRequest,
 *   !proto.daemon.EventStatus>}
 */
const methodInfo_Daemon_StopEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.EventStatus,
  /** @param {!proto.daemon.StopEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.EventStatus.deserializeBinary
);


/**
 * @param {!proto.daemon.StopEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.stopEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/StopEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_StopEvent);
};


/**
 * @param {!proto.daemon.StopEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonPromiseClient.prototype.stopEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/StopEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_StopEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.SuspendEventRequest,
 *   !proto.daemon.EventStatus>}
 */
const methodDescriptor_Daemon_SuspendEvent = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/SuspendEvent',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.daemon.SuspendEventRequest,
  proto.daemon.EventStatus,
  /** @param {!proto.daemon.SuspendEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.EventStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.SuspendEventRequest,
 *   !proto.daemon.EventStatus>}
 */
const methodInfo_Daemon_SuspendEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.EventStatus,
  /** @param {!proto.daemon.SuspendEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.EventStatus.deserializeBinary
);


/**
 * @param {!proto.daemon.SuspendEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.suspendEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/SuspendEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_SuspendEvent);
};


/**
 * @param {!proto.daemon.SuspendEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonPromiseClient.prototype.suspendEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/SuspendEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_SuspendEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.ListEventsRequest,
 *   !proto.daemon.ListEventsResponse>}
 */
const methodDescriptor_Daemon_ListEvents = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/ListEvents',
  grpc.web.MethodType.UNARY,
  proto.daemon.ListEventsRequest,
  proto.daemon.ListEventsResponse,
  /** @param {!proto.daemon.ListEventsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ListEventsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.ListEventsRequest,
 *   !proto.daemon.ListEventsResponse>}
 */
const methodInfo_Daemon_ListEvents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.ListEventsResponse,
  /** @param {!proto.daemon.ListEventsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ListEventsResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.ListEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.ListEventsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.ListEventsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.listEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/ListEvents',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListEvents,
      callback);
};


/**
 * @param {!proto.daemon.ListEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.ListEventsResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.listEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/ListEvents',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.ListEventTeamsRequest,
 *   !proto.daemon.ListEventTeamsResponse>}
 */
const methodDescriptor_Daemon_ListEventTeams = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/ListEventTeams',
  grpc.web.MethodType.UNARY,
  proto.daemon.ListEventTeamsRequest,
  proto.daemon.ListEventTeamsResponse,
  /** @param {!proto.daemon.ListEventTeamsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ListEventTeamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.ListEventTeamsRequest,
 *   !proto.daemon.ListEventTeamsResponse>}
 */
const methodInfo_Daemon_ListEventTeams = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.ListEventTeamsResponse,
  /** @param {!proto.daemon.ListEventTeamsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ListEventTeamsResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.ListEventTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.ListEventTeamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.ListEventTeamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.listEventTeams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/ListEventTeams',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListEventTeams,
      callback);
};


/**
 * @param {!proto.daemon.ListEventTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.ListEventTeamsResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.listEventTeams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/ListEventTeams',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListEventTeams);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.RestartTeamLabRequest,
 *   !proto.daemon.EventStatus>}
 */
const methodDescriptor_Daemon_RestartTeamLab = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/RestartTeamLab',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.daemon.RestartTeamLabRequest,
  proto.daemon.EventStatus,
  /** @param {!proto.daemon.RestartTeamLabRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.EventStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.RestartTeamLabRequest,
 *   !proto.daemon.EventStatus>}
 */
const methodInfo_Daemon_RestartTeamLab = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.EventStatus,
  /** @param {!proto.daemon.RestartTeamLabRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.EventStatus.deserializeBinary
);


/**
 * @param {!proto.daemon.RestartTeamLabRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.restartTeamLab =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/RestartTeamLab',
      request,
      metadata || {},
      methodDescriptor_Daemon_RestartTeamLab);
};


/**
 * @param {!proto.daemon.RestartTeamLabRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonPromiseClient.prototype.restartTeamLab =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/RestartTeamLab',
      request,
      metadata || {},
      methodDescriptor_Daemon_RestartTeamLab);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.SolveChallengeRequest,
 *   !proto.daemon.SolveChallengeResponse>}
 */
const methodDescriptor_Daemon_SolveChallenge = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/SolveChallenge',
  grpc.web.MethodType.UNARY,
  proto.daemon.SolveChallengeRequest,
  proto.daemon.SolveChallengeResponse,
  /** @param {!proto.daemon.SolveChallengeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.SolveChallengeResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.SolveChallengeRequest,
 *   !proto.daemon.SolveChallengeResponse>}
 */
const methodInfo_Daemon_SolveChallenge = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.SolveChallengeResponse,
  /** @param {!proto.daemon.SolveChallengeRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.SolveChallengeResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.SolveChallengeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.SolveChallengeResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.SolveChallengeResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.solveChallenge =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/SolveChallenge',
      request,
      metadata || {},
      methodDescriptor_Daemon_SolveChallenge,
      callback);
};


/**
 * @param {!proto.daemon.SolveChallengeRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.SolveChallengeResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.solveChallenge =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/SolveChallenge',
      request,
      metadata || {},
      methodDescriptor_Daemon_SolveChallenge);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.DeleteTeamRequest,
 *   !proto.daemon.DeleteTeamRequest>}
 */
const methodDescriptor_Daemon_DeleteTeam = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/DeleteTeam',
  grpc.web.MethodType.UNARY,
  proto.daemon.DeleteTeamRequest,
  proto.daemon.DeleteTeamResponse,
  /** @param {!proto.daemon.DeleteTeamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.DeleteTeamResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.DeleteTeamRequest,
 *   !proto.daemon.DeleteTeamRequest>}
 */
const methodInfo_Daemon_DeleteTeam = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.DeleteTeamResponse,
  /** @param {!proto.daemon.DeleteTeamRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.DeleteTeamResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.DeleteTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.DeleteTeamResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.DeleteTeamResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.deleteTeam =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/DeleteTeam',
      request,
      metadata || {},
      methodDescriptor_Daemon_DeleteTeam,
      callback);
};


/**
 * @param {!proto.daemon.DeleteTeamRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.DeleteTeamResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.deleteTeam =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/DeleteTeam',
      request,
      metadata || {},
      methodDescriptor_Daemon_DeleteTeam);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.GetTeamInfoRequest,
 *   !proto.daemon.TeamChalsInfo>}
 */
const methodDescriptor_Daemon_GetTeamChals = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/GetTeamChals',
  grpc.web.MethodType.UNARY,
  proto.daemon.GetTeamInfoRequest,
  proto.daemon.TeamChalsInfo,
  /** @param {!proto.daemon.GetTeamInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.TeamChalsInfo.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.GetTeamInfoRequest,
 *   !proto.daemon.TeamChalsInfo>}
 */
const methodInfo_Daemon_GetTeamChals = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.TeamChalsInfo,
  /** @param {!proto.daemon.GetTeamInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.TeamChalsInfo.deserializeBinary
);


/**
 * @param {!proto.daemon.GetTeamInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.TeamChalsInfo)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.TeamChalsInfo>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.getTeamChals =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/GetTeamChals',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetTeamChals,
      callback);
};


/**
 * @param {!proto.daemon.GetTeamInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.TeamChalsInfo>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.getTeamChals =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/GetTeamChals',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetTeamChals);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.TestEventLoadReq,
 *   !proto.daemon.TestEventLoadResp>}
 */
const methodDescriptor_Daemon_StressEvent = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/StressEvent',
  grpc.web.MethodType.UNARY,
  proto.daemon.TestEventLoadReq,
  proto.daemon.TestEventLoadResp,
  /** @param {!proto.daemon.TestEventLoadReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.TestEventLoadResp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.TestEventLoadReq,
 *   !proto.daemon.TestEventLoadResp>}
 */
const methodInfo_Daemon_StressEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.TestEventLoadResp,
  /** @param {!proto.daemon.TestEventLoadReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.TestEventLoadResp.deserializeBinary
);


/**
 * @param {!proto.daemon.TestEventLoadReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.TestEventLoadResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.TestEventLoadResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.stressEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/StressEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_StressEvent,
      callback);
};


/**
 * @param {!proto.daemon.TestEventLoadReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.TestEventLoadResp>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.stressEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/StressEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_StressEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.Empty,
 *   !proto.daemon.ListExercisesResponse>}
 */
const methodDescriptor_Daemon_ListExercises = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/ListExercises',
  grpc.web.MethodType.UNARY,
  proto.daemon.Empty,
  proto.daemon.ListExercisesResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ListExercisesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.Empty,
 *   !proto.daemon.ListExercisesResponse>}
 */
const methodInfo_Daemon_ListExercises = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.ListExercisesResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ListExercisesResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.ListExercisesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.ListExercisesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.listExercises =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/ListExercises',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListExercises,
      callback);
};


/**
 * @param {!proto.daemon.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.ListExercisesResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.listExercises =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/ListExercises',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListExercises);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.ResetExerciseRequest,
 *   !proto.daemon.ResetTeamStatus>}
 */
const methodDescriptor_Daemon_ResetExercise = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/ResetExercise',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.daemon.ResetExerciseRequest,
  proto.daemon.ResetTeamStatus,
  /** @param {!proto.daemon.ResetExerciseRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ResetTeamStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.ResetExerciseRequest,
 *   !proto.daemon.ResetTeamStatus>}
 */
const methodInfo_Daemon_ResetExercise = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.ResetTeamStatus,
  /** @param {!proto.daemon.ResetExerciseRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ResetTeamStatus.deserializeBinary
);


/**
 * @param {!proto.daemon.ResetExerciseRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.ResetTeamStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.resetExercise =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/ResetExercise',
      request,
      metadata || {},
      methodDescriptor_Daemon_ResetExercise);
};


/**
 * @param {!proto.daemon.ResetExerciseRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.ResetTeamStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonPromiseClient.prototype.resetExercise =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/ResetExercise',
      request,
      metadata || {},
      methodDescriptor_Daemon_ResetExercise);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.GetExsByTagsReq,
 *   !proto.daemon.GetExsByTagsResp>}
 */
const methodDescriptor_Daemon_GetExercisesByTags = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/GetExercisesByTags',
  grpc.web.MethodType.UNARY,
  proto.daemon.GetExsByTagsReq,
  proto.daemon.GetExsByTagsResp,
  /** @param {!proto.daemon.GetExsByTagsReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.GetExsByTagsResp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.GetExsByTagsReq,
 *   !proto.daemon.GetExsByTagsResp>}
 */
const methodInfo_Daemon_GetExercisesByTags = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.GetExsByTagsResp,
  /** @param {!proto.daemon.GetExsByTagsReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.GetExsByTagsResp.deserializeBinary
);


/**
 * @param {!proto.daemon.GetExsByTagsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.GetExsByTagsResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.GetExsByTagsResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.getExercisesByTags =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/GetExercisesByTags',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetExercisesByTags,
      callback);
};


/**
 * @param {!proto.daemon.GetExsByTagsReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.GetExsByTagsResp>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.getExercisesByTags =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/GetExercisesByTags',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetExercisesByTags);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.Empty,
 *   !proto.daemon.ListFrontendsResponse>}
 */
const methodDescriptor_Daemon_ListFrontends = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/ListFrontends',
  grpc.web.MethodType.UNARY,
  proto.daemon.Empty,
  proto.daemon.ListFrontendsResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ListFrontendsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.Empty,
 *   !proto.daemon.ListFrontendsResponse>}
 */
const methodInfo_Daemon_ListFrontends = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.ListFrontendsResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ListFrontendsResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.ListFrontendsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.ListFrontendsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.listFrontends =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/ListFrontends',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListFrontends,
      callback);
};


/**
 * @param {!proto.daemon.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.ListFrontendsResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.listFrontends =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/ListFrontends',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListFrontends);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.ResetFrontendsRequest,
 *   !proto.daemon.ResetTeamStatus>}
 */
const methodDescriptor_Daemon_ResetFrontends = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/ResetFrontends',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.daemon.ResetFrontendsRequest,
  proto.daemon.ResetTeamStatus,
  /** @param {!proto.daemon.ResetFrontendsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ResetTeamStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.ResetFrontendsRequest,
 *   !proto.daemon.ResetTeamStatus>}
 */
const methodInfo_Daemon_ResetFrontends = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.ResetTeamStatus,
  /** @param {!proto.daemon.ResetFrontendsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.ResetTeamStatus.deserializeBinary
);


/**
 * @param {!proto.daemon.ResetFrontendsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.ResetTeamStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.resetFrontends =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/ResetFrontends',
      request,
      metadata || {},
      methodDescriptor_Daemon_ResetFrontends);
};


/**
 * @param {!proto.daemon.ResetFrontendsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.ResetTeamStatus>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonPromiseClient.prototype.resetFrontends =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/ResetFrontends',
      request,
      metadata || {},
      methodDescriptor_Daemon_ResetFrontends);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.SetFrontendMemoryRequest,
 *   !proto.daemon.Empty>}
 */
const methodDescriptor_Daemon_SetFrontendMemory = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/SetFrontendMemory',
  grpc.web.MethodType.UNARY,
  proto.daemon.SetFrontendMemoryRequest,
  proto.daemon.Empty,
  /** @param {!proto.daemon.SetFrontendMemoryRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.SetFrontendMemoryRequest,
 *   !proto.daemon.Empty>}
 */
const methodInfo_Daemon_SetFrontendMemory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.Empty,
  /** @param {!proto.daemon.SetFrontendMemoryRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.Empty.deserializeBinary
);


/**
 * @param {!proto.daemon.SetFrontendMemoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.setFrontendMemory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/SetFrontendMemory',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetFrontendMemory,
      callback);
};


/**
 * @param {!proto.daemon.SetFrontendMemoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.Empty>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.setFrontendMemory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/SetFrontendMemory',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetFrontendMemory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.SetFrontendCpuRequest,
 *   !proto.daemon.Empty>}
 */
const methodDescriptor_Daemon_SetFrontendCpu = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/SetFrontendCpu',
  grpc.web.MethodType.UNARY,
  proto.daemon.SetFrontendCpuRequest,
  proto.daemon.Empty,
  /** @param {!proto.daemon.SetFrontendCpuRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.SetFrontendCpuRequest,
 *   !proto.daemon.Empty>}
 */
const methodInfo_Daemon_SetFrontendCpu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.Empty,
  /** @param {!proto.daemon.SetFrontendCpuRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.Empty.deserializeBinary
);


/**
 * @param {!proto.daemon.SetFrontendCpuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.setFrontendCpu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/SetFrontendCpu',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetFrontendCpu,
      callback);
};


/**
 * @param {!proto.daemon.SetFrontendCpuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.Empty>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.setFrontendCpu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/SetFrontendCpu',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetFrontendCpu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.GetTeamInfoRequest,
 *   !proto.daemon.GetTeamInfoResponse>}
 */
const methodDescriptor_Daemon_GetTeamInfo = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/GetTeamInfo',
  grpc.web.MethodType.UNARY,
  proto.daemon.GetTeamInfoRequest,
  proto.daemon.GetTeamInfoResponse,
  /** @param {!proto.daemon.GetTeamInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.GetTeamInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.GetTeamInfoRequest,
 *   !proto.daemon.GetTeamInfoResponse>}
 */
const methodInfo_Daemon_GetTeamInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.GetTeamInfoResponse,
  /** @param {!proto.daemon.GetTeamInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.GetTeamInfoResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.GetTeamInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.GetTeamInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.GetTeamInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.getTeamInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/GetTeamInfo',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetTeamInfo,
      callback);
};


/**
 * @param {!proto.daemon.GetTeamInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.GetTeamInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.getTeamInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/GetTeamInfo',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetTeamInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.Empty,
 *   !proto.daemon.MonitorHostResponse>}
 */
const methodDescriptor_Daemon_MonitorHost = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/MonitorHost',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.daemon.Empty,
  proto.daemon.MonitorHostResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.MonitorHostResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.Empty,
 *   !proto.daemon.MonitorHostResponse>}
 */
const methodInfo_Daemon_MonitorHost = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.MonitorHostResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.MonitorHostResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.MonitorHostResponse>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.monitorHost =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/MonitorHost',
      request,
      metadata || {},
      methodDescriptor_Daemon_MonitorHost);
};


/**
 * @param {!proto.daemon.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.MonitorHostResponse>}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonPromiseClient.prototype.monitorHost =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/daemon.Daemon/MonitorHost',
      request,
      metadata || {},
      methodDescriptor_Daemon_MonitorHost);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.daemon.Empty,
 *   !proto.daemon.VersionResponse>}
 */
const methodDescriptor_Daemon_Version = new grpc.web.MethodDescriptor(
  '/daemon.Daemon/Version',
  grpc.web.MethodType.UNARY,
  proto.daemon.Empty,
  proto.daemon.VersionResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.VersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.daemon.Empty,
 *   !proto.daemon.VersionResponse>}
 */
const methodInfo_Daemon_Version = new grpc.web.AbstractClientBase.MethodInfo(
  proto.daemon.VersionResponse,
  /** @param {!proto.daemon.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.daemon.VersionResponse.deserializeBinary
);


/**
 * @param {!proto.daemon.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.daemon.VersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.daemon.VersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.daemon.DaemonClient.prototype.version =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/daemon.Daemon/Version',
      request,
      metadata || {},
      methodDescriptor_Daemon_Version,
      callback);
};


/**
 * @param {!proto.daemon.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.daemon.VersionResponse>}
 *     A native promise that resolves to the response
 */
proto.daemon.DaemonPromiseClient.prototype.version =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/daemon.Daemon/Version',
      request,
      metadata || {},
      methodDescriptor_Daemon_Version);
};


module.exports = proto.daemon;

