/**
 * @fileoverview gRPC-Web generated client stub for 
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = require('./daemon_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.DaemonClient =
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
proto.DaemonPromiseClient =
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
 *   !proto.LoginUserRequest,
 *   !proto.LoginUserResponse>}
 */
const methodDescriptor_Daemon_LoginUser = new grpc.web.MethodDescriptor(
  '/Daemon/LoginUser',
  grpc.web.MethodType.UNARY,
  proto.LoginUserRequest,
  proto.LoginUserResponse,
  /** @param {!proto.LoginUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.LoginUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.LoginUserRequest,
 *   !proto.LoginUserResponse>}
 */
const methodInfo_Daemon_LoginUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.LoginUserResponse,
  /** @param {!proto.LoginUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.LoginUserResponse.deserializeBinary
);


/**
 * @param {!proto.LoginUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.LoginUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.LoginUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.loginUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/LoginUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_LoginUser,
      callback);
};


/**
 * @param {!proto.LoginUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.LoginUserResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.loginUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/LoginUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_LoginUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SignupUserRequest,
 *   !proto.LoginUserResponse>}
 */
const methodDescriptor_Daemon_SignupUser = new grpc.web.MethodDescriptor(
  '/Daemon/SignupUser',
  grpc.web.MethodType.UNARY,
  proto.SignupUserRequest,
  proto.LoginUserResponse,
  /** @param {!proto.SignupUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.LoginUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SignupUserRequest,
 *   !proto.LoginUserResponse>}
 */
const methodInfo_Daemon_SignupUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.LoginUserResponse,
  /** @param {!proto.SignupUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.LoginUserResponse.deserializeBinary
);


/**
 * @param {!proto.SignupUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.LoginUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.LoginUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.signupUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/SignupUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_SignupUser,
      callback);
};


/**
 * @param {!proto.SignupUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.LoginUserResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.signupUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/SignupUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_SignupUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.InviteUserRequest,
 *   !proto.InviteUserResponse>}
 */
const methodDescriptor_Daemon_InviteUser = new grpc.web.MethodDescriptor(
  '/Daemon/InviteUser',
  grpc.web.MethodType.UNARY,
  proto.InviteUserRequest,
  proto.InviteUserResponse,
  /** @param {!proto.InviteUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.InviteUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.InviteUserRequest,
 *   !proto.InviteUserResponse>}
 */
const methodInfo_Daemon_InviteUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.InviteUserResponse,
  /** @param {!proto.InviteUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.InviteUserResponse.deserializeBinary
);


/**
 * @param {!proto.InviteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.InviteUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.InviteUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.inviteUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/InviteUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_InviteUser,
      callback);
};


/**
 * @param {!proto.InviteUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.InviteUserResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.inviteUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/InviteUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_InviteUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.ListUsersResponse>}
 */
const methodDescriptor_Daemon_ListUsers = new grpc.web.MethodDescriptor(
  '/Daemon/ListUsers',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.ListUsersResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListUsersResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.ListUsersResponse>}
 */
const methodInfo_Daemon_ListUsers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ListUsersResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListUsersResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ListUsersResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListUsersResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.listUsers =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/ListUsers',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListUsers,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListUsersResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.listUsers =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/ListUsers',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListUsers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.UpdatePasswdRequest,
 *   !proto.UpdatePasswdResponse>}
 */
const methodDescriptor_Daemon_ChangeUserPasswd = new grpc.web.MethodDescriptor(
  '/Daemon/ChangeUserPasswd',
  grpc.web.MethodType.UNARY,
  proto.UpdatePasswdRequest,
  proto.UpdatePasswdResponse,
  /** @param {!proto.UpdatePasswdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdatePasswdResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.UpdatePasswdRequest,
 *   !proto.UpdatePasswdResponse>}
 */
const methodInfo_Daemon_ChangeUserPasswd = new grpc.web.AbstractClientBase.MethodInfo(
  proto.UpdatePasswdResponse,
  /** @param {!proto.UpdatePasswdRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.UpdatePasswdResponse.deserializeBinary
);


/**
 * @param {!proto.UpdatePasswdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.UpdatePasswdResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.UpdatePasswdResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.changeUserPasswd =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/ChangeUserPasswd',
      request,
      metadata || {},
      methodDescriptor_Daemon_ChangeUserPasswd,
      callback);
};


/**
 * @param {!proto.UpdatePasswdRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.UpdatePasswdResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.changeUserPasswd =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/ChangeUserPasswd',
      request,
      metadata || {},
      methodDescriptor_Daemon_ChangeUserPasswd);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.DestroyUserRequest,
 *   !proto.DestroyUserResponse>}
 */
const methodDescriptor_Daemon_DestroyUser = new grpc.web.MethodDescriptor(
  '/Daemon/DestroyUser',
  grpc.web.MethodType.UNARY,
  proto.DestroyUserRequest,
  proto.DestroyUserResponse,
  /** @param {!proto.DestroyUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.DestroyUserResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.DestroyUserRequest,
 *   !proto.DestroyUserResponse>}
 */
const methodInfo_Daemon_DestroyUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.DestroyUserResponse,
  /** @param {!proto.DestroyUserRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.DestroyUserResponse.deserializeBinary
);


/**
 * @param {!proto.DestroyUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.DestroyUserResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.DestroyUserResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.destroyUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/DestroyUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_DestroyUser,
      callback);
};


/**
 * @param {!proto.DestroyUserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.DestroyUserResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.destroyUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/DestroyUser',
      request,
      metadata || {},
      methodDescriptor_Daemon_DestroyUser);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetTeamSuspendRequest,
 *   !proto.Empty>}
 */
const methodDescriptor_Daemon_SetTeamSuspend = new grpc.web.MethodDescriptor(
  '/Daemon/SetTeamSuspend',
  grpc.web.MethodType.UNARY,
  proto.SetTeamSuspendRequest,
  proto.Empty,
  /** @param {!proto.SetTeamSuspendRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetTeamSuspendRequest,
 *   !proto.Empty>}
 */
const methodInfo_Daemon_SetTeamSuspend = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Empty,
  /** @param {!proto.SetTeamSuspendRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.SetTeamSuspendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.setTeamSuspend =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/SetTeamSuspend',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetTeamSuspend,
      callback);
};


/**
 * @param {!proto.SetTeamSuspendRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.setTeamSuspend =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/SetTeamSuspend',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetTeamSuspend);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.CredsResponse>}
 */
const methodDescriptor_Daemon_GetAPICreds = new grpc.web.MethodDescriptor(
  '/Daemon/GetAPICreds',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.CredsResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.CredsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.CredsResponse>}
 */
const methodInfo_Daemon_GetAPICreds = new grpc.web.AbstractClientBase.MethodInfo(
  proto.CredsResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.CredsResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.CredsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.CredsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.getAPICreds =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/GetAPICreds',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetAPICreds,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.CredsResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.getAPICreds =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/GetAPICreds',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetAPICreds);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.CreateEventRequest,
 *   !proto.LabStatus>}
 */
const methodDescriptor_Daemon_CreateEvent = new grpc.web.MethodDescriptor(
  '/Daemon/CreateEvent',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.CreateEventRequest,
  proto.LabStatus,
  /** @param {!proto.CreateEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.LabStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.CreateEventRequest,
 *   !proto.LabStatus>}
 */
const methodInfo_Daemon_CreateEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.LabStatus,
  /** @param {!proto.CreateEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.LabStatus.deserializeBinary
);


/**
 * @param {!proto.CreateEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.LabStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.createEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/CreateEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_CreateEvent);
};


/**
 * @param {!proto.CreateEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.LabStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonPromiseClient.prototype.createEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/CreateEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_CreateEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.StopEventRequest,
 *   !proto.EventStatus>}
 */
const methodDescriptor_Daemon_StopEvent = new grpc.web.MethodDescriptor(
  '/Daemon/StopEvent',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.StopEventRequest,
  proto.EventStatus,
  /** @param {!proto.StopEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EventStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.StopEventRequest,
 *   !proto.EventStatus>}
 */
const methodInfo_Daemon_StopEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EventStatus,
  /** @param {!proto.StopEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EventStatus.deserializeBinary
);


/**
 * @param {!proto.StopEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.stopEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/StopEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_StopEvent);
};


/**
 * @param {!proto.StopEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonPromiseClient.prototype.stopEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/StopEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_StopEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SuspendEventRequest,
 *   !proto.EventStatus>}
 */
const methodDescriptor_Daemon_SuspendEvent = new grpc.web.MethodDescriptor(
  '/Daemon/SuspendEvent',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.SuspendEventRequest,
  proto.EventStatus,
  /** @param {!proto.SuspendEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EventStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SuspendEventRequest,
 *   !proto.EventStatus>}
 */
const methodInfo_Daemon_SuspendEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EventStatus,
  /** @param {!proto.SuspendEventRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EventStatus.deserializeBinary
);


/**
 * @param {!proto.SuspendEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.suspendEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/SuspendEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_SuspendEvent);
};


/**
 * @param {!proto.SuspendEventRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonPromiseClient.prototype.suspendEvent =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/SuspendEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_SuspendEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ListEventsRequest,
 *   !proto.ListEventsResponse>}
 */
const methodDescriptor_Daemon_ListEvents = new grpc.web.MethodDescriptor(
  '/Daemon/ListEvents',
  grpc.web.MethodType.UNARY,
  proto.ListEventsRequest,
  proto.ListEventsResponse,
  /** @param {!proto.ListEventsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListEventsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ListEventsRequest,
 *   !proto.ListEventsResponse>}
 */
const methodInfo_Daemon_ListEvents = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ListEventsResponse,
  /** @param {!proto.ListEventsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListEventsResponse.deserializeBinary
);


/**
 * @param {!proto.ListEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ListEventsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListEventsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.listEvents =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/ListEvents',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListEvents,
      callback);
};


/**
 * @param {!proto.ListEventsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListEventsResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.listEvents =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/ListEvents',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListEvents);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ListEventTeamsRequest,
 *   !proto.ListEventTeamsResponse>}
 */
const methodDescriptor_Daemon_ListEventTeams = new grpc.web.MethodDescriptor(
  '/Daemon/ListEventTeams',
  grpc.web.MethodType.UNARY,
  proto.ListEventTeamsRequest,
  proto.ListEventTeamsResponse,
  /** @param {!proto.ListEventTeamsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListEventTeamsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ListEventTeamsRequest,
 *   !proto.ListEventTeamsResponse>}
 */
const methodInfo_Daemon_ListEventTeams = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ListEventTeamsResponse,
  /** @param {!proto.ListEventTeamsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListEventTeamsResponse.deserializeBinary
);


/**
 * @param {!proto.ListEventTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ListEventTeamsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListEventTeamsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.listEventTeams =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/ListEventTeams',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListEventTeams,
      callback);
};


/**
 * @param {!proto.ListEventTeamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListEventTeamsResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.listEventTeams =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/ListEventTeams',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListEventTeams);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.RestartTeamLabRequest,
 *   !proto.EventStatus>}
 */
const methodDescriptor_Daemon_RestartTeamLab = new grpc.web.MethodDescriptor(
  '/Daemon/RestartTeamLab',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.RestartTeamLabRequest,
  proto.EventStatus,
  /** @param {!proto.RestartTeamLabRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EventStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.RestartTeamLabRequest,
 *   !proto.EventStatus>}
 */
const methodInfo_Daemon_RestartTeamLab = new grpc.web.AbstractClientBase.MethodInfo(
  proto.EventStatus,
  /** @param {!proto.RestartTeamLabRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.EventStatus.deserializeBinary
);


/**
 * @param {!proto.RestartTeamLabRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.restartTeamLab =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/RestartTeamLab',
      request,
      metadata || {},
      methodDescriptor_Daemon_RestartTeamLab);
};


/**
 * @param {!proto.RestartTeamLabRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.EventStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonPromiseClient.prototype.restartTeamLab =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/RestartTeamLab',
      request,
      metadata || {},
      methodDescriptor_Daemon_RestartTeamLab);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.TestEventLoadReq,
 *   !proto.TestEventLoadResp>}
 */
const methodDescriptor_Daemon_StressEvent = new grpc.web.MethodDescriptor(
  '/Daemon/StressEvent',
  grpc.web.MethodType.UNARY,
  proto.TestEventLoadReq,
  proto.TestEventLoadResp,
  /** @param {!proto.TestEventLoadReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.TestEventLoadResp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.TestEventLoadReq,
 *   !proto.TestEventLoadResp>}
 */
const methodInfo_Daemon_StressEvent = new grpc.web.AbstractClientBase.MethodInfo(
  proto.TestEventLoadResp,
  /** @param {!proto.TestEventLoadReq} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.TestEventLoadResp.deserializeBinary
);


/**
 * @param {!proto.TestEventLoadReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.TestEventLoadResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.TestEventLoadResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.stressEvent =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/StressEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_StressEvent,
      callback);
};


/**
 * @param {!proto.TestEventLoadReq} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.TestEventLoadResp>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.stressEvent =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/StressEvent',
      request,
      metadata || {},
      methodDescriptor_Daemon_StressEvent);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.ListExercisesResponse>}
 */
const methodDescriptor_Daemon_ListExercises = new grpc.web.MethodDescriptor(
  '/Daemon/ListExercises',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.ListExercisesResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListExercisesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.ListExercisesResponse>}
 */
const methodInfo_Daemon_ListExercises = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ListExercisesResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListExercisesResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ListExercisesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListExercisesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.listExercises =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/ListExercises',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListExercises,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListExercisesResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.listExercises =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/ListExercises',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListExercises);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ResetExerciseRequest,
 *   !proto.ResetTeamStatus>}
 */
const methodDescriptor_Daemon_ResetExercise = new grpc.web.MethodDescriptor(
  '/Daemon/ResetExercise',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.ResetExerciseRequest,
  proto.ResetTeamStatus,
  /** @param {!proto.ResetExerciseRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResetTeamStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ResetExerciseRequest,
 *   !proto.ResetTeamStatus>}
 */
const methodInfo_Daemon_ResetExercise = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ResetTeamStatus,
  /** @param {!proto.ResetExerciseRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResetTeamStatus.deserializeBinary
);


/**
 * @param {!proto.ResetExerciseRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ResetTeamStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.resetExercise =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/ResetExercise',
      request,
      metadata || {},
      methodDescriptor_Daemon_ResetExercise);
};


/**
 * @param {!proto.ResetExerciseRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ResetTeamStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonPromiseClient.prototype.resetExercise =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/ResetExercise',
      request,
      metadata || {},
      methodDescriptor_Daemon_ResetExercise);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.ListFrontendsResponse>}
 */
const methodDescriptor_Daemon_ListFrontends = new grpc.web.MethodDescriptor(
  '/Daemon/ListFrontends',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.ListFrontendsResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListFrontendsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.ListFrontendsResponse>}
 */
const methodInfo_Daemon_ListFrontends = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ListFrontendsResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ListFrontendsResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ListFrontendsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ListFrontendsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.listFrontends =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/ListFrontends',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListFrontends,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ListFrontendsResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.listFrontends =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/ListFrontends',
      request,
      metadata || {},
      methodDescriptor_Daemon_ListFrontends);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ResetFrontendsRequest,
 *   !proto.ResetTeamStatus>}
 */
const methodDescriptor_Daemon_ResetFrontends = new grpc.web.MethodDescriptor(
  '/Daemon/ResetFrontends',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.ResetFrontendsRequest,
  proto.ResetTeamStatus,
  /** @param {!proto.ResetFrontendsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResetTeamStatus.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ResetFrontendsRequest,
 *   !proto.ResetTeamStatus>}
 */
const methodInfo_Daemon_ResetFrontends = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ResetTeamStatus,
  /** @param {!proto.ResetFrontendsRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.ResetTeamStatus.deserializeBinary
);


/**
 * @param {!proto.ResetFrontendsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ResetTeamStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.resetFrontends =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/ResetFrontends',
      request,
      metadata || {},
      methodDescriptor_Daemon_ResetFrontends);
};


/**
 * @param {!proto.ResetFrontendsRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.ResetTeamStatus>}
 *     The XHR Node Readable Stream
 */
proto.DaemonPromiseClient.prototype.resetFrontends =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/ResetFrontends',
      request,
      metadata || {},
      methodDescriptor_Daemon_ResetFrontends);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetFrontendMemoryRequest,
 *   !proto.Empty>}
 */
const methodDescriptor_Daemon_SetFrontendMemory = new grpc.web.MethodDescriptor(
  '/Daemon/SetFrontendMemory',
  grpc.web.MethodType.UNARY,
  proto.SetFrontendMemoryRequest,
  proto.Empty,
  /** @param {!proto.SetFrontendMemoryRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetFrontendMemoryRequest,
 *   !proto.Empty>}
 */
const methodInfo_Daemon_SetFrontendMemory = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Empty,
  /** @param {!proto.SetFrontendMemoryRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.SetFrontendMemoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.setFrontendMemory =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/SetFrontendMemory',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetFrontendMemory,
      callback);
};


/**
 * @param {!proto.SetFrontendMemoryRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.setFrontendMemory =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/SetFrontendMemory',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetFrontendMemory);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.SetFrontendCpuRequest,
 *   !proto.Empty>}
 */
const methodDescriptor_Daemon_SetFrontendCpu = new grpc.web.MethodDescriptor(
  '/Daemon/SetFrontendCpu',
  grpc.web.MethodType.UNARY,
  proto.SetFrontendCpuRequest,
  proto.Empty,
  /** @param {!proto.SetFrontendCpuRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.SetFrontendCpuRequest,
 *   !proto.Empty>}
 */
const methodInfo_Daemon_SetFrontendCpu = new grpc.web.AbstractClientBase.MethodInfo(
  proto.Empty,
  /** @param {!proto.SetFrontendCpuRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.Empty.deserializeBinary
);


/**
 * @param {!proto.SetFrontendCpuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.setFrontendCpu =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/SetFrontendCpu',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetFrontendCpu,
      callback);
};


/**
 * @param {!proto.SetFrontendCpuRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.Empty>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.setFrontendCpu =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/SetFrontendCpu',
      request,
      metadata || {},
      methodDescriptor_Daemon_SetFrontendCpu);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.GetTeamInfoRequest,
 *   !proto.GetTeamInfoResponse>}
 */
const methodDescriptor_Daemon_GetTeamInfo = new grpc.web.MethodDescriptor(
  '/Daemon/GetTeamInfo',
  grpc.web.MethodType.UNARY,
  proto.GetTeamInfoRequest,
  proto.GetTeamInfoResponse,
  /** @param {!proto.GetTeamInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetTeamInfoResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.GetTeamInfoRequest,
 *   !proto.GetTeamInfoResponse>}
 */
const methodInfo_Daemon_GetTeamInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.GetTeamInfoResponse,
  /** @param {!proto.GetTeamInfoRequest} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.GetTeamInfoResponse.deserializeBinary
);


/**
 * @param {!proto.GetTeamInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.GetTeamInfoResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.GetTeamInfoResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.getTeamInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/GetTeamInfo',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetTeamInfo,
      callback);
};


/**
 * @param {!proto.GetTeamInfoRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.GetTeamInfoResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.getTeamInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/GetTeamInfo',
      request,
      metadata || {},
      methodDescriptor_Daemon_GetTeamInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.MonitorHostResponse>}
 */
const methodDescriptor_Daemon_MonitorHost = new grpc.web.MethodDescriptor(
  '/Daemon/MonitorHost',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.Empty,
  proto.MonitorHostResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.MonitorHostResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.MonitorHostResponse>}
 */
const methodInfo_Daemon_MonitorHost = new grpc.web.AbstractClientBase.MethodInfo(
  proto.MonitorHostResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.MonitorHostResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.MonitorHostResponse>}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.monitorHost =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/MonitorHost',
      request,
      metadata || {},
      methodDescriptor_Daemon_MonitorHost);
};


/**
 * @param {!proto.Empty} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.MonitorHostResponse>}
 *     The XHR Node Readable Stream
 */
proto.DaemonPromiseClient.prototype.monitorHost =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/Daemon/MonitorHost',
      request,
      metadata || {},
      methodDescriptor_Daemon_MonitorHost);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.Empty,
 *   !proto.VersionResponse>}
 */
const methodDescriptor_Daemon_Version = new grpc.web.MethodDescriptor(
  '/Daemon/Version',
  grpc.web.MethodType.UNARY,
  proto.Empty,
  proto.VersionResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.VersionResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.Empty,
 *   !proto.VersionResponse>}
 */
const methodInfo_Daemon_Version = new grpc.web.AbstractClientBase.MethodInfo(
  proto.VersionResponse,
  /** @param {!proto.Empty} request */
  function(request) {
    return request.serializeBinary();
  },
  proto.VersionResponse.deserializeBinary
);


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.VersionResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.VersionResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.DaemonClient.prototype.version =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/Daemon/Version',
      request,
      metadata || {},
      methodDescriptor_Daemon_Version,
      callback);
};


/**
 * @param {!proto.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.VersionResponse>}
 *     A native promise that resolves to the response
 */
proto.DaemonPromiseClient.prototype.version =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/Daemon/Version',
      request,
      metadata || {},
      methodDescriptor_Daemon_Version);
};


module.exports = proto;

