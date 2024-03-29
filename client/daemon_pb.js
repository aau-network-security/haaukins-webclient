/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.daemon.AddChallengeRequest', null, global);
goog.exportSymbol('proto.daemon.AddChallengeResponse', null, global);
goog.exportSymbol('proto.daemon.AddNotificationRequest', null, global);
goog.exportSymbol('proto.daemon.AddNotificationResponse', null, global);
goog.exportSymbol('proto.daemon.CreateEventRequest', null, global);
goog.exportSymbol('proto.daemon.CredsResponse', null, global);
goog.exportSymbol('proto.daemon.DeleteProfileRequest', null, global);
goog.exportSymbol('proto.daemon.DeleteTeamRequest', null, global);
goog.exportSymbol('proto.daemon.DeleteTeamResponse', null, global);
goog.exportSymbol('proto.daemon.DestroyUserRequest', null, global);
goog.exportSymbol('proto.daemon.DestroyUserResponse', null, global);
goog.exportSymbol('proto.daemon.Empty', null, global);
goog.exportSymbol('proto.daemon.EventStatus', null, global);
goog.exportSymbol('proto.daemon.Flag', null, global);
goog.exportSymbol('proto.daemon.GetExsByTagsReq', null, global);
goog.exportSymbol('proto.daemon.GetExsByTagsResp', null, global);
goog.exportSymbol('proto.daemon.GetExsByTagsResp.ExInfo', null, global);
goog.exportSymbol('proto.daemon.GetTeamInfoRequest', null, global);
goog.exportSymbol('proto.daemon.GetTeamInfoResponse', null, global);
goog.exportSymbol('proto.daemon.GetTeamInfoResponse.Instance', null, global);
goog.exportSymbol('proto.daemon.InviteUserRequest', null, global);
goog.exportSymbol('proto.daemon.InviteUserResponse', null, global);
goog.exportSymbol('proto.daemon.LabStatus', null, global);
goog.exportSymbol('proto.daemon.ListCategoriesResponse', null, global);
goog.exportSymbol('proto.daemon.ListCategoriesResponse.Category', null, global);
goog.exportSymbol('proto.daemon.ListEventTeamsRequest', null, global);
goog.exportSymbol('proto.daemon.ListEventTeamsResponse', null, global);
goog.exportSymbol('proto.daemon.ListEventTeamsResponse.Teams', null, global);
goog.exportSymbol('proto.daemon.ListEventsRequest', null, global);
goog.exportSymbol('proto.daemon.ListEventsResponse', null, global);
goog.exportSymbol('proto.daemon.ListEventsResponse.Events', null, global);
goog.exportSymbol('proto.daemon.ListExercisesResponse', null, global);
goog.exportSymbol('proto.daemon.ListExercisesResponse.Exercise', null, global);
goog.exportSymbol('proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo', null, global);
goog.exportSymbol('proto.daemon.ListFrontendsResponse', null, global);
goog.exportSymbol('proto.daemon.ListFrontendsResponse.Frontend', null, global);
goog.exportSymbol('proto.daemon.ListProfilesResponse', null, global);
goog.exportSymbol('proto.daemon.ListProfilesResponse.Profile', null, global);
goog.exportSymbol('proto.daemon.ListProfilesResponse.Profile.Challenge', null, global);
goog.exportSymbol('proto.daemon.ListUsersResponse', null, global);
goog.exportSymbol('proto.daemon.ListUsersResponse.UserInfo', null, global);
goog.exportSymbol('proto.daemon.LoginUserRequest', null, global);
goog.exportSymbol('proto.daemon.LoginUserResponse', null, global);
goog.exportSymbol('proto.daemon.MonitorHostResponse', null, global);
goog.exportSymbol('proto.daemon.ProfileStatus', null, global);
goog.exportSymbol('proto.daemon.ResetExerciseRequest', null, global);
goog.exportSymbol('proto.daemon.ResetFrontendsRequest', null, global);
goog.exportSymbol('proto.daemon.ResetTeamStatus', null, global);
goog.exportSymbol('proto.daemon.RestartTeamLabRequest', null, global);
goog.exportSymbol('proto.daemon.SaveProfileRequest', null, global);
goog.exportSymbol('proto.daemon.SaveProfileRequest.Challenge', null, global);
goog.exportSymbol('proto.daemon.SetFrontendCpuRequest', null, global);
goog.exportSymbol('proto.daemon.SetFrontendMemoryRequest', null, global);
goog.exportSymbol('proto.daemon.SetTeamSuspendRequest', null, global);
goog.exportSymbol('proto.daemon.SignupUserRequest', null, global);
goog.exportSymbol('proto.daemon.SolveChallengeRequest', null, global);
goog.exportSymbol('proto.daemon.SolveChallengeResponse', null, global);
goog.exportSymbol('proto.daemon.StopEventRequest', null, global);
goog.exportSymbol('proto.daemon.SuspendEventRequest', null, global);
goog.exportSymbol('proto.daemon.Team', null, global);
goog.exportSymbol('proto.daemon.TeamChalsInfo', null, global);
goog.exportSymbol('proto.daemon.TestEventLoadReq', null, global);
goog.exportSymbol('proto.daemon.TestEventLoadResp', null, global);
goog.exportSymbol('proto.daemon.UpdatePasswdRequest', null, global);
goog.exportSymbol('proto.daemon.UpdatePasswdResponse', null, global);
goog.exportSymbol('proto.daemon.UpdateTeamPassRequest', null, global);
goog.exportSymbol('proto.daemon.UpdateTeamPassResponse', null, global);
goog.exportSymbol('proto.daemon.VersionResponse', null, global);

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.AddNotificationRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.AddNotificationRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.AddNotificationRequest.displayName = 'proto.daemon.AddNotificationRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.AddNotificationRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.AddNotificationRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.AddNotificationRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.AddNotificationRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    loggedusers: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.AddNotificationRequest}
 */
proto.daemon.AddNotificationRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.AddNotificationRequest;
  return proto.daemon.AddNotificationRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.AddNotificationRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.AddNotificationRequest}
 */
proto.daemon.AddNotificationRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setLoggedusers(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.AddNotificationRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.AddNotificationRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.AddNotificationRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.AddNotificationRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getLoggedusers();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.daemon.AddNotificationRequest.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.AddNotificationRequest.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool loggedUsers = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.daemon.AddNotificationRequest.prototype.getLoggedusers = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.daemon.AddNotificationRequest.prototype.setLoggedusers = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.AddNotificationResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.AddNotificationResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.AddNotificationResponse.displayName = 'proto.daemon.AddNotificationResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.AddNotificationResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.AddNotificationResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.AddNotificationResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.AddNotificationResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    response: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.AddNotificationResponse}
 */
proto.daemon.AddNotificationResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.AddNotificationResponse;
  return proto.daemon.AddNotificationResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.AddNotificationResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.AddNotificationResponse}
 */
proto.daemon.AddNotificationResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponse(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.AddNotificationResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.AddNotificationResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.AddNotificationResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.AddNotificationResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResponse();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string response = 1;
 * @return {string}
 */
proto.daemon.AddNotificationResponse.prototype.getResponse = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.AddNotificationResponse.prototype.setResponse = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.AddChallengeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.AddChallengeRequest.repeatedFields_, null);
};
goog.inherits(proto.daemon.AddChallengeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.AddChallengeRequest.displayName = 'proto.daemon.AddChallengeRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.AddChallengeRequest.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.AddChallengeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.AddChallengeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.AddChallengeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.AddChallengeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    challengetagList: jspb.Message.getRepeatedField(msg, 2)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.AddChallengeRequest}
 */
proto.daemon.AddChallengeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.AddChallengeRequest;
  return proto.daemon.AddChallengeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.AddChallengeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.AddChallengeRequest}
 */
proto.daemon.AddChallengeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventtag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addChallengetag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.AddChallengeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.AddChallengeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.AddChallengeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.AddChallengeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChallengetagList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
};


/**
 * optional string eventTag = 1;
 * @return {string}
 */
proto.daemon.AddChallengeRequest.prototype.getEventtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.AddChallengeRequest.prototype.setEventtag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated string challengeTag = 2;
 * @return {!Array<string>}
 */
proto.daemon.AddChallengeRequest.prototype.getChallengetagList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/** @param {!Array<string>} value */
proto.daemon.AddChallengeRequest.prototype.setChallengetagList = function(value) {
  jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.daemon.AddChallengeRequest.prototype.addChallengetag = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


proto.daemon.AddChallengeRequest.prototype.clearChallengetagList = function() {
  this.setChallengetagList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.AddChallengeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.AddChallengeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.AddChallengeResponse.displayName = 'proto.daemon.AddChallengeResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.AddChallengeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.AddChallengeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.AddChallengeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.AddChallengeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.AddChallengeResponse}
 */
proto.daemon.AddChallengeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.AddChallengeResponse;
  return proto.daemon.AddChallengeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.AddChallengeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.AddChallengeResponse}
 */
proto.daemon.AddChallengeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.AddChallengeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.AddChallengeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.AddChallengeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.AddChallengeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.daemon.AddChallengeResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.AddChallengeResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.GetExsByTagsReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.GetExsByTagsReq.repeatedFields_, null);
};
goog.inherits(proto.daemon.GetExsByTagsReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.GetExsByTagsReq.displayName = 'proto.daemon.GetExsByTagsReq';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.GetExsByTagsReq.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.GetExsByTagsReq.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.GetExsByTagsReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.GetExsByTagsReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetExsByTagsReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagsList: jspb.Message.getRepeatedField(msg, 1)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.GetExsByTagsReq}
 */
proto.daemon.GetExsByTagsReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.GetExsByTagsReq;
  return proto.daemon.GetExsByTagsReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.GetExsByTagsReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.GetExsByTagsReq}
 */
proto.daemon.GetExsByTagsReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.GetExsByTagsReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.GetExsByTagsReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.GetExsByTagsReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetExsByTagsReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
};


/**
 * repeated string tags = 1;
 * @return {!Array<string>}
 */
proto.daemon.GetExsByTagsReq.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.daemon.GetExsByTagsReq.prototype.setTagsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.daemon.GetExsByTagsReq.prototype.addTags = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.daemon.GetExsByTagsReq.prototype.clearTagsList = function() {
  this.setTagsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.GetExsByTagsResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.GetExsByTagsResp.repeatedFields_, null);
};
goog.inherits(proto.daemon.GetExsByTagsResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.GetExsByTagsResp.displayName = 'proto.daemon.GetExsByTagsResp';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.GetExsByTagsResp.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.GetExsByTagsResp.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.GetExsByTagsResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.GetExsByTagsResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetExsByTagsResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    exercisesList: jspb.Message.toObjectList(msg.getExercisesList(),
    proto.daemon.GetExsByTagsResp.ExInfo.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.GetExsByTagsResp}
 */
proto.daemon.GetExsByTagsResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.GetExsByTagsResp;
  return proto.daemon.GetExsByTagsResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.GetExsByTagsResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.GetExsByTagsResp}
 */
proto.daemon.GetExsByTagsResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.daemon.GetExsByTagsResp.ExInfo;
      reader.readMessage(value,proto.daemon.GetExsByTagsResp.ExInfo.deserializeBinaryFromReader);
      msg.addExercises(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.GetExsByTagsResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.GetExsByTagsResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.GetExsByTagsResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetExsByTagsResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExercisesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.daemon.GetExsByTagsResp.ExInfo.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.GetExsByTagsResp.ExInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.GetExsByTagsResp.ExInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.GetExsByTagsResp.ExInfo.displayName = 'proto.daemon.GetExsByTagsResp.ExInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.GetExsByTagsResp.ExInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.GetExsByTagsResp.ExInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.GetExsByTagsResp.ExInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetExsByTagsResp.ExInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.GetExsByTagsResp.ExInfo}
 */
proto.daemon.GetExsByTagsResp.ExInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.GetExsByTagsResp.ExInfo;
  return proto.daemon.GetExsByTagsResp.ExInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.GetExsByTagsResp.ExInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.GetExsByTagsResp.ExInfo}
 */
proto.daemon.GetExsByTagsResp.ExInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.GetExsByTagsResp.ExInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.GetExsByTagsResp.ExInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.GetExsByTagsResp.ExInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetExsByTagsResp.ExInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.daemon.GetExsByTagsResp.ExInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.GetExsByTagsResp.ExInfo.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.daemon.GetExsByTagsResp.ExInfo.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.GetExsByTagsResp.ExInfo.prototype.setTag = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated ExInfo exercises = 1;
 * @return {!Array<!proto.daemon.GetExsByTagsResp.ExInfo>}
 */
proto.daemon.GetExsByTagsResp.prototype.getExercisesList = function() {
  return /** @type{!Array<!proto.daemon.GetExsByTagsResp.ExInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.GetExsByTagsResp.ExInfo, 1));
};


/** @param {!Array<!proto.daemon.GetExsByTagsResp.ExInfo>} value */
proto.daemon.GetExsByTagsResp.prototype.setExercisesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.daemon.GetExsByTagsResp.ExInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.GetExsByTagsResp.ExInfo}
 */
proto.daemon.GetExsByTagsResp.prototype.addExercises = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.daemon.GetExsByTagsResp.ExInfo, opt_index);
};


proto.daemon.GetExsByTagsResp.prototype.clearExercisesList = function() {
  this.setExercisesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.DeleteTeamRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.DeleteTeamRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.DeleteTeamRequest.displayName = 'proto.daemon.DeleteTeamRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.DeleteTeamRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.DeleteTeamRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.DeleteTeamRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.DeleteTeamRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    evtag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.DeleteTeamRequest}
 */
proto.daemon.DeleteTeamRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.DeleteTeamRequest;
  return proto.daemon.DeleteTeamRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.DeleteTeamRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.DeleteTeamRequest}
 */
proto.daemon.DeleteTeamRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEvtag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.DeleteTeamRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.DeleteTeamRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.DeleteTeamRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.DeleteTeamRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEvtag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string evTag = 1;
 * @return {string}
 */
proto.daemon.DeleteTeamRequest.prototype.getEvtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.DeleteTeamRequest.prototype.setEvtag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string teamId = 2;
 * @return {string}
 */
proto.daemon.DeleteTeamRequest.prototype.getTeamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.DeleteTeamRequest.prototype.setTeamid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.DeleteTeamResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.DeleteTeamResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.DeleteTeamResponse.displayName = 'proto.daemon.DeleteTeamResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.DeleteTeamResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.DeleteTeamResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.DeleteTeamResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.DeleteTeamResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.DeleteTeamResponse}
 */
proto.daemon.DeleteTeamResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.DeleteTeamResponse;
  return proto.daemon.DeleteTeamResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.DeleteTeamResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.DeleteTeamResponse}
 */
proto.daemon.DeleteTeamResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.DeleteTeamResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.DeleteTeamResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.DeleteTeamResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.DeleteTeamResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.daemon.DeleteTeamResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.DeleteTeamResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.UpdateTeamPassRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.UpdateTeamPassRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.UpdateTeamPassRequest.displayName = 'proto.daemon.UpdateTeamPassRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.UpdateTeamPassRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.UpdateTeamPassRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.UpdateTeamPassRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.UpdateTeamPassRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    password: jspb.Message.getFieldWithDefault(msg, 3, ""),
    passwordrepeat: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.UpdateTeamPassRequest}
 */
proto.daemon.UpdateTeamPassRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.UpdateTeamPassRequest;
  return proto.daemon.UpdateTeamPassRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.UpdateTeamPassRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.UpdateTeamPassRequest}
 */
proto.daemon.UpdateTeamPassRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventtag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPasswordrepeat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.UpdateTeamPassRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.UpdateTeamPassRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.UpdateTeamPassRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.UpdateTeamPassRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPasswordrepeat();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string eventTag = 1;
 * @return {string}
 */
proto.daemon.UpdateTeamPassRequest.prototype.getEventtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.UpdateTeamPassRequest.prototype.setEventtag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string teamID = 2;
 * @return {string}
 */
proto.daemon.UpdateTeamPassRequest.prototype.getTeamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.UpdateTeamPassRequest.prototype.setTeamid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string password = 3;
 * @return {string}
 */
proto.daemon.UpdateTeamPassRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.daemon.UpdateTeamPassRequest.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string passwordRepeat = 4;
 * @return {string}
 */
proto.daemon.UpdateTeamPassRequest.prototype.getPasswordrepeat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.daemon.UpdateTeamPassRequest.prototype.setPasswordrepeat = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.UpdateTeamPassResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.UpdateTeamPassResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.UpdateTeamPassResponse.displayName = 'proto.daemon.UpdateTeamPassResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.UpdateTeamPassResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.UpdateTeamPassResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.UpdateTeamPassResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.UpdateTeamPassResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.UpdateTeamPassResponse}
 */
proto.daemon.UpdateTeamPassResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.UpdateTeamPassResponse;
  return proto.daemon.UpdateTeamPassResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.UpdateTeamPassResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.UpdateTeamPassResponse}
 */
proto.daemon.UpdateTeamPassResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.UpdateTeamPassResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.UpdateTeamPassResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.UpdateTeamPassResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.UpdateTeamPassResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.daemon.UpdateTeamPassResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.UpdateTeamPassResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.SolveChallengeRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.SolveChallengeRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.SolveChallengeRequest.displayName = 'proto.daemon.SolveChallengeRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.SolveChallengeRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.SolveChallengeRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.SolveChallengeRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SolveChallengeRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    challengetag: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.SolveChallengeRequest}
 */
proto.daemon.SolveChallengeRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.SolveChallengeRequest;
  return proto.daemon.SolveChallengeRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.SolveChallengeRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.SolveChallengeRequest}
 */
proto.daemon.SolveChallengeRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventtag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChallengetag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.SolveChallengeRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.SolveChallengeRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.SolveChallengeRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SolveChallengeRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChallengetag();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string eventTag = 1;
 * @return {string}
 */
proto.daemon.SolveChallengeRequest.prototype.getEventtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.SolveChallengeRequest.prototype.setEventtag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string teamID = 2;
 * @return {string}
 */
proto.daemon.SolveChallengeRequest.prototype.getTeamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.SolveChallengeRequest.prototype.setTeamid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string challengeTag = 3;
 * @return {string}
 */
proto.daemon.SolveChallengeRequest.prototype.getChallengetag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.daemon.SolveChallengeRequest.prototype.setChallengetag = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.SolveChallengeResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.SolveChallengeResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.SolveChallengeResponse.displayName = 'proto.daemon.SolveChallengeResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.SolveChallengeResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.SolveChallengeResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.SolveChallengeResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SolveChallengeResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.SolveChallengeResponse}
 */
proto.daemon.SolveChallengeResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.SolveChallengeResponse;
  return proto.daemon.SolveChallengeResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.SolveChallengeResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.SolveChallengeResponse}
 */
proto.daemon.SolveChallengeResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.SolveChallengeResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.SolveChallengeResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.SolveChallengeResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SolveChallengeResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string status = 1;
 * @return {string}
 */
proto.daemon.SolveChallengeResponse.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.SolveChallengeResponse.prototype.setStatus = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.Flag = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.Flag, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.Flag.displayName = 'proto.daemon.Flag';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.Flag.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.Flag.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.Flag} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.Flag.toObject = function(includeInstance, msg) {
  var f, obj = {
    challengename: jspb.Message.getFieldWithDefault(msg, 1, ""),
    challengetag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    challengeflag: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.Flag}
 */
proto.daemon.Flag.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.Flag;
  return proto.daemon.Flag.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.Flag} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.Flag}
 */
proto.daemon.Flag.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChallengename(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setChallengetag(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setChallengeflag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.Flag.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.Flag.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.Flag} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.Flag.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChallengename();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getChallengetag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getChallengeflag();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string challengeName = 1;
 * @return {string}
 */
proto.daemon.Flag.prototype.getChallengename = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.Flag.prototype.setChallengename = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string challengeTag = 2;
 * @return {string}
 */
proto.daemon.Flag.prototype.getChallengetag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.Flag.prototype.setChallengetag = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string challengeFlag = 3;
 * @return {string}
 */
proto.daemon.Flag.prototype.getChallengeflag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.daemon.Flag.prototype.setChallengeflag = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.TeamChalsInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.TeamChalsInfo.repeatedFields_, null);
};
goog.inherits(proto.daemon.TeamChalsInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.TeamChalsInfo.displayName = 'proto.daemon.TeamChalsInfo';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.TeamChalsInfo.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.TeamChalsInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.TeamChalsInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.TeamChalsInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.TeamChalsInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    flagsList: jspb.Message.toObjectList(msg.getFlagsList(),
    proto.daemon.Flag.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.TeamChalsInfo}
 */
proto.daemon.TeamChalsInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.TeamChalsInfo;
  return proto.daemon.TeamChalsInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.TeamChalsInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.TeamChalsInfo}
 */
proto.daemon.TeamChalsInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.daemon.Flag;
      reader.readMessage(value,proto.daemon.Flag.deserializeBinaryFromReader);
      msg.addFlags(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.TeamChalsInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.TeamChalsInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.TeamChalsInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.TeamChalsInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFlagsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.daemon.Flag.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Flag flags = 1;
 * @return {!Array<!proto.daemon.Flag>}
 */
proto.daemon.TeamChalsInfo.prototype.getFlagsList = function() {
  return /** @type{!Array<!proto.daemon.Flag>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.Flag, 1));
};


/** @param {!Array<!proto.daemon.Flag>} value */
proto.daemon.TeamChalsInfo.prototype.setFlagsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.daemon.Flag=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.Flag}
 */
proto.daemon.TeamChalsInfo.prototype.addFlags = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.daemon.Flag, opt_index);
};


proto.daemon.TeamChalsInfo.prototype.clearFlagsList = function() {
  this.setFlagsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.CredsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.CredsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.CredsResponse.displayName = 'proto.daemon.CredsResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.CredsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.CredsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.CredsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.CredsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.CredsResponse}
 */
proto.daemon.CredsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.CredsResponse;
  return proto.daemon.CredsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.CredsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.CredsResponse}
 */
proto.daemon.CredsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.CredsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.CredsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.CredsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.CredsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.daemon.CredsResponse.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.CredsResponse.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.daemon.CredsResponse.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.CredsResponse.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.Team = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.Team, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.Team.displayName = 'proto.daemon.Team';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.Team.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.Team.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.Team} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.Team.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.Team}
 */
proto.daemon.Team.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.Team;
  return proto.daemon.Team.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.Team} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.Team}
 */
proto.daemon.Team.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.Team.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.Team.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.Team} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.Team.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.daemon.Team.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.Team.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.SuspendEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.SuspendEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.SuspendEventRequest.displayName = 'proto.daemon.SuspendEventRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.SuspendEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.SuspendEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.SuspendEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SuspendEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    suspend: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.SuspendEventRequest}
 */
proto.daemon.SuspendEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.SuspendEventRequest;
  return proto.daemon.SuspendEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.SuspendEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.SuspendEventRequest}
 */
proto.daemon.SuspendEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventtag(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuspend(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.SuspendEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.SuspendEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.SuspendEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SuspendEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSuspend();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional string eventTag = 1;
 * @return {string}
 */
proto.daemon.SuspendEventRequest.prototype.getEventtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.SuspendEventRequest.prototype.setEventtag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool suspend = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.daemon.SuspendEventRequest.prototype.getSuspend = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.daemon.SuspendEventRequest.prototype.setSuspend = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.SetTeamSuspendRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.SetTeamSuspendRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.SetTeamSuspendRequest.displayName = 'proto.daemon.SetTeamSuspendRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.SetTeamSuspendRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.SetTeamSuspendRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.SetTeamSuspendRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SetTeamSuspendRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventtag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    suspend: jspb.Message.getFieldWithDefault(msg, 3, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.SetTeamSuspendRequest}
 */
proto.daemon.SetTeamSuspendRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.SetTeamSuspendRequest;
  return proto.daemon.SetTeamSuspendRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.SetTeamSuspendRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.SetTeamSuspendRequest}
 */
proto.daemon.SetTeamSuspendRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventtag(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuspend(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.SetTeamSuspendRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.SetTeamSuspendRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.SetTeamSuspendRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SetTeamSuspendRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventtag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSuspend();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
};


/**
 * optional string teamId = 1;
 * @return {string}
 */
proto.daemon.SetTeamSuspendRequest.prototype.getTeamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.SetTeamSuspendRequest.prototype.setTeamid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string eventTag = 2;
 * @return {string}
 */
proto.daemon.SetTeamSuspendRequest.prototype.getEventtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.SetTeamSuspendRequest.prototype.setEventtag = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool suspend = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.daemon.SetTeamSuspendRequest.prototype.getSuspend = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 3, false));
};


/** @param {boolean} value */
proto.daemon.SetTeamSuspendRequest.prototype.setSuspend = function(value) {
  jspb.Message.setProto3BooleanField(this, 3, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.DestroyUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.DestroyUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.DestroyUserRequest.displayName = 'proto.daemon.DestroyUserRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.DestroyUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.DestroyUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.DestroyUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.DestroyUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.DestroyUserRequest}
 */
proto.daemon.DestroyUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.DestroyUserRequest;
  return proto.daemon.DestroyUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.DestroyUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.DestroyUserRequest}
 */
proto.daemon.DestroyUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.DestroyUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.DestroyUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.DestroyUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.DestroyUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.daemon.DestroyUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.DestroyUserRequest.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.DestroyUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.DestroyUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.DestroyUserResponse.displayName = 'proto.daemon.DestroyUserResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.DestroyUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.DestroyUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.DestroyUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.DestroyUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.DestroyUserResponse}
 */
proto.daemon.DestroyUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.DestroyUserResponse;
  return proto.daemon.DestroyUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.DestroyUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.DestroyUserResponse}
 */
proto.daemon.DestroyUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.DestroyUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.DestroyUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.DestroyUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.DestroyUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.daemon.DestroyUserResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.DestroyUserResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.UpdatePasswdRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.UpdatePasswdRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.UpdatePasswdRequest.displayName = 'proto.daemon.UpdatePasswdRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.UpdatePasswdRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.UpdatePasswdRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.UpdatePasswdRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.UpdatePasswdRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.UpdatePasswdRequest}
 */
proto.daemon.UpdatePasswdRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.UpdatePasswdRequest;
  return proto.daemon.UpdatePasswdRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.UpdatePasswdRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.UpdatePasswdRequest}
 */
proto.daemon.UpdatePasswdRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.UpdatePasswdRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.UpdatePasswdRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.UpdatePasswdRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.UpdatePasswdRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.daemon.UpdatePasswdRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.UpdatePasswdRequest.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.daemon.UpdatePasswdRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.UpdatePasswdRequest.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.UpdatePasswdResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.UpdatePasswdResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.UpdatePasswdResponse.displayName = 'proto.daemon.UpdatePasswdResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.UpdatePasswdResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.UpdatePasswdResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.UpdatePasswdResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.UpdatePasswdResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.UpdatePasswdResponse}
 */
proto.daemon.UpdatePasswdResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.UpdatePasswdResponse;
  return proto.daemon.UpdatePasswdResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.UpdatePasswdResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.UpdatePasswdResponse}
 */
proto.daemon.UpdatePasswdResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.UpdatePasswdResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.UpdatePasswdResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.UpdatePasswdResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.UpdatePasswdResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string message = 1;
 * @return {string}
 */
proto.daemon.UpdatePasswdResponse.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.UpdatePasswdResponse.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.LoginUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.LoginUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.LoginUserRequest.displayName = 'proto.daemon.LoginUserRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.LoginUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.LoginUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.LoginUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.LoginUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    password: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.LoginUserRequest}
 */
proto.daemon.LoginUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.LoginUserRequest;
  return proto.daemon.LoginUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.LoginUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.LoginUserRequest}
 */
proto.daemon.LoginUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.LoginUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.LoginUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.LoginUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.LoginUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.daemon.LoginUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.LoginUserRequest.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string password = 2;
 * @return {string}
 */
proto.daemon.LoginUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.LoginUserRequest.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.LoginUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.LoginUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.LoginUserResponse.displayName = 'proto.daemon.LoginUserResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.LoginUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.LoginUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.LoginUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.LoginUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    token: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.LoginUserResponse}
 */
proto.daemon.LoginUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.LoginUserResponse;
  return proto.daemon.LoginUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.LoginUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.LoginUserResponse}
 */
proto.daemon.LoginUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setToken(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.LoginUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.LoginUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.LoginUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.LoginUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getToken();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string token = 1;
 * @return {string}
 */
proto.daemon.LoginUserResponse.prototype.getToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.LoginUserResponse.prototype.setToken = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.daemon.LoginUserResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.LoginUserResponse.prototype.setError = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.SignupUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.SignupUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.SignupUserRequest.displayName = 'proto.daemon.SignupUserRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.SignupUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.SignupUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.SignupUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SignupUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    username: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 4, ""),
    email: jspb.Message.getFieldWithDefault(msg, 5, ""),
    password: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.SignupUserRequest}
 */
proto.daemon.SignupUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.SignupUserRequest;
  return proto.daemon.SignupUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.SignupUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.SignupUserRequest}
 */
proto.daemon.SignupUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurname(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.SignupUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.SignupUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.SignupUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SignupUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSurname();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.daemon.SignupUserRequest.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.SignupUserRequest.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string username = 2;
 * @return {string}
 */
proto.daemon.SignupUserRequest.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.SignupUserRequest.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.daemon.SignupUserRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.daemon.SignupUserRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string surname = 4;
 * @return {string}
 */
proto.daemon.SignupUserRequest.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.daemon.SignupUserRequest.prototype.setSurname = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string email = 5;
 * @return {string}
 */
proto.daemon.SignupUserRequest.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.daemon.SignupUserRequest.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string password = 6;
 * @return {string}
 */
proto.daemon.SignupUserRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/** @param {string} value */
proto.daemon.SignupUserRequest.prototype.setPassword = function(value) {
  jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.InviteUserRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.InviteUserRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.InviteUserRequest.displayName = 'proto.daemon.InviteUserRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.InviteUserRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.InviteUserRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.InviteUserRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.InviteUserRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    superUser: jspb.Message.getFieldWithDefault(msg, 1, false),
    npUser: jspb.Message.getFieldWithDefault(msg, 2, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.InviteUserRequest}
 */
proto.daemon.InviteUserRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.InviteUserRequest;
  return proto.daemon.InviteUserRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.InviteUserRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.InviteUserRequest}
 */
proto.daemon.InviteUserRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSuperUser(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setNpUser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.InviteUserRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.InviteUserRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.InviteUserRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.InviteUserRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSuperUser();
  if (f) {
    writer.writeBool(
      1,
      f
    );
  }
  f = message.getNpUser();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
};


/**
 * optional bool super_user = 1;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.daemon.InviteUserRequest.prototype.getSuperUser = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 1, false));
};


/** @param {boolean} value */
proto.daemon.InviteUserRequest.prototype.setSuperUser = function(value) {
  jspb.Message.setProto3BooleanField(this, 1, value);
};


/**
 * optional bool np_user = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.daemon.InviteUserRequest.prototype.getNpUser = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.daemon.InviteUserRequest.prototype.setNpUser = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.InviteUserResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.InviteUserResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.InviteUserResponse.displayName = 'proto.daemon.InviteUserResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.InviteUserResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.InviteUserResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.InviteUserResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.InviteUserResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    key: jspb.Message.getFieldWithDefault(msg, 1, ""),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.InviteUserResponse}
 */
proto.daemon.InviteUserResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.InviteUserResponse;
  return proto.daemon.InviteUserResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.InviteUserResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.InviteUserResponse}
 */
proto.daemon.InviteUserResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setKey(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.InviteUserResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.InviteUserResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.InviteUserResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.InviteUserResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getKey();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string key = 1;
 * @return {string}
 */
proto.daemon.InviteUserResponse.prototype.getKey = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.InviteUserResponse.prototype.setKey = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.daemon.InviteUserResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.InviteUserResponse.prototype.setError = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListUsersResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.ListUsersResponse.repeatedFields_, null);
};
goog.inherits(proto.daemon.ListUsersResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListUsersResponse.displayName = 'proto.daemon.ListUsersResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.ListUsersResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListUsersResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListUsersResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListUsersResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListUsersResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    usersList: jspb.Message.toObjectList(msg.getUsersList(),
    proto.daemon.ListUsersResponse.UserInfo.toObject, includeInstance),
    error: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListUsersResponse}
 */
proto.daemon.ListUsersResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListUsersResponse;
  return proto.daemon.ListUsersResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListUsersResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListUsersResponse}
 */
proto.daemon.ListUsersResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.daemon.ListUsersResponse.UserInfo;
      reader.readMessage(value,proto.daemon.ListUsersResponse.UserInfo.deserializeBinaryFromReader);
      msg.addUsers(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setError(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListUsersResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListUsersResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListUsersResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListUsersResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.daemon.ListUsersResponse.UserInfo.serializeBinaryToWriter
    );
  }
  f = message.getError();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListUsersResponse.UserInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.ListUsersResponse.UserInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListUsersResponse.UserInfo.displayName = 'proto.daemon.ListUsersResponse.UserInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListUsersResponse.UserInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListUsersResponse.UserInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListUsersResponse.UserInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListUsersResponse.UserInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    username: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    surname: jspb.Message.getFieldWithDefault(msg, 3, ""),
    email: jspb.Message.getFieldWithDefault(msg, 4, ""),
    createdat: jspb.Message.getFieldWithDefault(msg, 5, ""),
    issuperuser: jspb.Message.getFieldWithDefault(msg, 6, false),
    isnpuser: jspb.Message.getFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListUsersResponse.UserInfo}
 */
proto.daemon.ListUsersResponse.UserInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListUsersResponse.UserInfo;
  return proto.daemon.ListUsersResponse.UserInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListUsersResponse.UserInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListUsersResponse.UserInfo}
 */
proto.daemon.ListUsersResponse.UserInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUsername(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSurname(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedat(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIssuperuser(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsnpuser(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListUsersResponse.UserInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListUsersResponse.UserInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListUsersResponse.UserInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListUsersResponse.UserInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUsername();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getSurname();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCreatedat();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getIssuperuser();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsnpuser();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional string username = 1;
 * @return {string}
 */
proto.daemon.ListUsersResponse.UserInfo.prototype.getUsername = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ListUsersResponse.UserInfo.prototype.setUsername = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.daemon.ListUsersResponse.UserInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ListUsersResponse.UserInfo.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string surname = 3;
 * @return {string}
 */
proto.daemon.ListUsersResponse.UserInfo.prototype.getSurname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.daemon.ListUsersResponse.UserInfo.prototype.setSurname = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string email = 4;
 * @return {string}
 */
proto.daemon.ListUsersResponse.UserInfo.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.daemon.ListUsersResponse.UserInfo.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string createdAt = 5;
 * @return {string}
 */
proto.daemon.ListUsersResponse.UserInfo.prototype.getCreatedat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.daemon.ListUsersResponse.UserInfo.prototype.setCreatedat = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool isSuperUser = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.daemon.ListUsersResponse.UserInfo.prototype.getIssuperuser = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.daemon.ListUsersResponse.UserInfo.prototype.setIssuperuser = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool isNPUser = 7;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.daemon.ListUsersResponse.UserInfo.prototype.getIsnpuser = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 7, false));
};


/** @param {boolean} value */
proto.daemon.ListUsersResponse.UserInfo.prototype.setIsnpuser = function(value) {
  jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * repeated UserInfo users = 1;
 * @return {!Array<!proto.daemon.ListUsersResponse.UserInfo>}
 */
proto.daemon.ListUsersResponse.prototype.getUsersList = function() {
  return /** @type{!Array<!proto.daemon.ListUsersResponse.UserInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.ListUsersResponse.UserInfo, 1));
};


/** @param {!Array<!proto.daemon.ListUsersResponse.UserInfo>} value */
proto.daemon.ListUsersResponse.prototype.setUsersList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.daemon.ListUsersResponse.UserInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.ListUsersResponse.UserInfo}
 */
proto.daemon.ListUsersResponse.prototype.addUsers = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.daemon.ListUsersResponse.UserInfo, opt_index);
};


proto.daemon.ListUsersResponse.prototype.clearUsersList = function() {
  this.setUsersList([]);
};


/**
 * optional string error = 2;
 * @return {string}
 */
proto.daemon.ListUsersResponse.prototype.getError = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ListUsersResponse.prototype.setError = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.CreateEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.CreateEventRequest.repeatedFields_, null);
};
goog.inherits(proto.daemon.CreateEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.CreateEventRequest.displayName = 'proto.daemon.CreateEventRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.CreateEventRequest.repeatedFields_ = [3,4,11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.CreateEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.CreateEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.CreateEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.CreateEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    frontendsList: jspb.Message.getRepeatedField(msg, 3),
    exercisesList: jspb.Message.getRepeatedField(msg, 4),
    available: jspb.Message.getFieldWithDefault(msg, 5, 0),
    capacity: jspb.Message.getFieldWithDefault(msg, 6, 0),
    starttime: jspb.Message.getFieldWithDefault(msg, 7, ""),
    finishtime: jspb.Message.getFieldWithDefault(msg, 8, ""),
    onlyvpn: jspb.Message.getFieldWithDefault(msg, 9, 0),
    secretevent: jspb.Message.getFieldWithDefault(msg, 10, ""),
    disableexercisesList: jspb.Message.getRepeatedField(msg, 11)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.CreateEventRequest}
 */
proto.daemon.CreateEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.CreateEventRequest;
  return proto.daemon.CreateEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.CreateEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.CreateEventRequest}
 */
proto.daemon.CreateEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addFrontends(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.addExercises(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAvailable(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCapacity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setStarttime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinishtime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOnlyvpn(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretevent(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.addDisableexercises(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.CreateEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.CreateEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.CreateEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.CreateEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFrontendsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getExercisesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      4,
      f
    );
  }
  f = message.getAvailable();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getStarttime();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFinishtime();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getOnlyvpn();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getSecretevent();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getDisableexercisesList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      11,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.daemon.CreateEventRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.CreateEventRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string tag = 2;
 * @return {string}
 */
proto.daemon.CreateEventRequest.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.CreateEventRequest.prototype.setTag = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated string frontends = 3;
 * @return {!Array<string>}
 */
proto.daemon.CreateEventRequest.prototype.getFrontendsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/** @param {!Array<string>} value */
proto.daemon.CreateEventRequest.prototype.setFrontendsList = function(value) {
  jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.daemon.CreateEventRequest.prototype.addFrontends = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


proto.daemon.CreateEventRequest.prototype.clearFrontendsList = function() {
  this.setFrontendsList([]);
};


/**
 * repeated string exercises = 4;
 * @return {!Array<string>}
 */
proto.daemon.CreateEventRequest.prototype.getExercisesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 4));
};


/** @param {!Array<string>} value */
proto.daemon.CreateEventRequest.prototype.setExercisesList = function(value) {
  jspb.Message.setField(this, 4, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.daemon.CreateEventRequest.prototype.addExercises = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 4, value, opt_index);
};


proto.daemon.CreateEventRequest.prototype.clearExercisesList = function() {
  this.setExercisesList([]);
};


/**
 * optional int32 available = 5;
 * @return {number}
 */
proto.daemon.CreateEventRequest.prototype.getAvailable = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.daemon.CreateEventRequest.prototype.setAvailable = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 capacity = 6;
 * @return {number}
 */
proto.daemon.CreateEventRequest.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.daemon.CreateEventRequest.prototype.setCapacity = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string startTime = 7;
 * @return {string}
 */
proto.daemon.CreateEventRequest.prototype.getStarttime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.daemon.CreateEventRequest.prototype.setStarttime = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string finishTime = 8;
 * @return {string}
 */
proto.daemon.CreateEventRequest.prototype.getFinishtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.daemon.CreateEventRequest.prototype.setFinishtime = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 onlyVPN = 9;
 * @return {number}
 */
proto.daemon.CreateEventRequest.prototype.getOnlyvpn = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.daemon.CreateEventRequest.prototype.setOnlyvpn = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string secretEvent = 10;
 * @return {string}
 */
proto.daemon.CreateEventRequest.prototype.getSecretevent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.daemon.CreateEventRequest.prototype.setSecretevent = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated string disableExercises = 11;
 * @return {!Array<string>}
 */
proto.daemon.CreateEventRequest.prototype.getDisableexercisesList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 11));
};


/** @param {!Array<string>} value */
proto.daemon.CreateEventRequest.prototype.setDisableexercisesList = function(value) {
  jspb.Message.setField(this, 11, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.daemon.CreateEventRequest.prototype.addDisableexercises = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 11, value, opt_index);
};


proto.daemon.CreateEventRequest.prototype.clearDisableexercisesList = function() {
  this.setDisableexercisesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.TestEventLoadReq = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.TestEventLoadReq, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.TestEventLoadReq.displayName = 'proto.daemon.TestEventLoadReq';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.TestEventLoadReq.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.TestEventLoadReq.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.TestEventLoadReq} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.TestEventLoadReq.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventname: jspb.Message.getFieldWithDefault(msg, 1, ""),
    numberofteams: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.TestEventLoadReq}
 */
proto.daemon.TestEventLoadReq.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.TestEventLoadReq;
  return proto.daemon.TestEventLoadReq.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.TestEventLoadReq} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.TestEventLoadReq}
 */
proto.daemon.TestEventLoadReq.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventname(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setNumberofteams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.TestEventLoadReq.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.TestEventLoadReq.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.TestEventLoadReq} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.TestEventLoadReq.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventname();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNumberofteams();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional string eventName = 1;
 * @return {string}
 */
proto.daemon.TestEventLoadReq.prototype.getEventname = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.TestEventLoadReq.prototype.setEventname = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 numberOfTeams = 2;
 * @return {number}
 */
proto.daemon.TestEventLoadReq.prototype.getNumberofteams = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.daemon.TestEventLoadReq.prototype.setNumberofteams = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.TestEventLoadResp = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.TestEventLoadResp, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.TestEventLoadResp.displayName = 'proto.daemon.TestEventLoadResp';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.TestEventLoadResp.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.TestEventLoadResp.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.TestEventLoadResp} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.TestEventLoadResp.toObject = function(includeInstance, msg) {
  var f, obj = {
    signupresult: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.TestEventLoadResp}
 */
proto.daemon.TestEventLoadResp.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.TestEventLoadResp;
  return proto.daemon.TestEventLoadResp.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.TestEventLoadResp} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.TestEventLoadResp}
 */
proto.daemon.TestEventLoadResp.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setSignupresult(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.TestEventLoadResp.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.TestEventLoadResp.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.TestEventLoadResp} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.TestEventLoadResp.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSignupresult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string signUpResult = 1;
 * @return {string}
 */
proto.daemon.TestEventLoadResp.prototype.getSignupresult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.TestEventLoadResp.prototype.setSignupresult = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListEventsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.ListEventsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListEventsRequest.displayName = 'proto.daemon.ListEventsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListEventsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListEventsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListEventsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    status: jspb.Message.getFieldWithDefault(msg, 1, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListEventsRequest}
 */
proto.daemon.ListEventsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListEventsRequest;
  return proto.daemon.ListEventsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListEventsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListEventsRequest}
 */
proto.daemon.ListEventsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListEventsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListEventsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListEventsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
};


/**
 * optional int32 status = 1;
 * @return {number}
 */
proto.daemon.ListEventsRequest.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/** @param {number} value */
proto.daemon.ListEventsRequest.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListEventsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.ListEventsResponse.repeatedFields_, null);
};
goog.inherits(proto.daemon.ListEventsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListEventsResponse.displayName = 'proto.daemon.ListEventsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.ListEventsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListEventsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListEventsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListEventsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventsList: jspb.Message.toObjectList(msg.getEventsList(),
    proto.daemon.ListEventsResponse.Events.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListEventsResponse}
 */
proto.daemon.ListEventsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListEventsResponse;
  return proto.daemon.ListEventsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListEventsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListEventsResponse}
 */
proto.daemon.ListEventsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.daemon.ListEventsResponse.Events;
      reader.readMessage(value,proto.daemon.ListEventsResponse.Events.deserializeBinaryFromReader);
      msg.addEvents(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListEventsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListEventsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListEventsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.daemon.ListEventsResponse.Events.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListEventsResponse.Events = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.ListEventsResponse.Events, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListEventsResponse.Events.displayName = 'proto.daemon.ListEventsResponse.Events';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListEventsResponse.Events.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListEventsResponse.Events.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListEventsResponse.Events} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventsResponse.Events.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    teamcount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    exercises: jspb.Message.getFieldWithDefault(msg, 4, ""),
    availability: jspb.Message.getFieldWithDefault(msg, 5, 0),
    capacity: jspb.Message.getFieldWithDefault(msg, 6, 0),
    creationtime: jspb.Message.getFieldWithDefault(msg, 7, ""),
    finishtime: jspb.Message.getFieldWithDefault(msg, 8, ""),
    status: jspb.Message.getFieldWithDefault(msg, 9, 0),
    createdby: jspb.Message.getFieldWithDefault(msg, 10, ""),
    secretevent: jspb.Message.getFieldWithDefault(msg, 11, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListEventsResponse.Events}
 */
proto.daemon.ListEventsResponse.Events.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListEventsResponse.Events;
  return proto.daemon.ListEventsResponse.Events.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListEventsResponse.Events} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListEventsResponse.Events}
 */
proto.daemon.ListEventsResponse.Events.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTeamcount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setExercises(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setAvailability(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setCapacity(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreationtime(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFinishtime(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreatedby(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setSecretevent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListEventsResponse.Events.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListEventsResponse.Events.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListEventsResponse.Events} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventsResponse.Events.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTeamcount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getExercises();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAvailability();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getCapacity();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getCreationtime();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFinishtime();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getCreatedby();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getSecretevent();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
};


/**
 * optional string tag = 1;
 * @return {string}
 */
proto.daemon.ListEventsResponse.Events.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ListEventsResponse.Events.prototype.setTag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.daemon.ListEventsResponse.Events.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ListEventsResponse.Events.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 teamCount = 3;
 * @return {number}
 */
proto.daemon.ListEventsResponse.Events.prototype.getTeamcount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.daemon.ListEventsResponse.Events.prototype.setTeamcount = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string exercises = 4;
 * @return {string}
 */
proto.daemon.ListEventsResponse.Events.prototype.getExercises = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.daemon.ListEventsResponse.Events.prototype.setExercises = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 availability = 5;
 * @return {number}
 */
proto.daemon.ListEventsResponse.Events.prototype.getAvailability = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/** @param {number} value */
proto.daemon.ListEventsResponse.Events.prototype.setAvailability = function(value) {
  jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 capacity = 6;
 * @return {number}
 */
proto.daemon.ListEventsResponse.Events.prototype.getCapacity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/** @param {number} value */
proto.daemon.ListEventsResponse.Events.prototype.setCapacity = function(value) {
  jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string creationTime = 7;
 * @return {string}
 */
proto.daemon.ListEventsResponse.Events.prototype.getCreationtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.daemon.ListEventsResponse.Events.prototype.setCreationtime = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string finishTime = 8;
 * @return {string}
 */
proto.daemon.ListEventsResponse.Events.prototype.getFinishtime = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/** @param {string} value */
proto.daemon.ListEventsResponse.Events.prototype.setFinishtime = function(value) {
  jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 status = 9;
 * @return {number}
 */
proto.daemon.ListEventsResponse.Events.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/** @param {number} value */
proto.daemon.ListEventsResponse.Events.prototype.setStatus = function(value) {
  jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string createdBy = 10;
 * @return {string}
 */
proto.daemon.ListEventsResponse.Events.prototype.getCreatedby = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/** @param {string} value */
proto.daemon.ListEventsResponse.Events.prototype.setCreatedby = function(value) {
  jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string secretEvent = 11;
 * @return {string}
 */
proto.daemon.ListEventsResponse.Events.prototype.getSecretevent = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/** @param {string} value */
proto.daemon.ListEventsResponse.Events.prototype.setSecretevent = function(value) {
  jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * repeated Events events = 1;
 * @return {!Array<!proto.daemon.ListEventsResponse.Events>}
 */
proto.daemon.ListEventsResponse.prototype.getEventsList = function() {
  return /** @type{!Array<!proto.daemon.ListEventsResponse.Events>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.ListEventsResponse.Events, 1));
};


/** @param {!Array<!proto.daemon.ListEventsResponse.Events>} value */
proto.daemon.ListEventsResponse.prototype.setEventsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.daemon.ListEventsResponse.Events=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.ListEventsResponse.Events}
 */
proto.daemon.ListEventsResponse.prototype.addEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.daemon.ListEventsResponse.Events, opt_index);
};


proto.daemon.ListEventsResponse.prototype.clearEventsList = function() {
  this.setEventsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListEventTeamsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.ListEventTeamsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListEventTeamsRequest.displayName = 'proto.daemon.ListEventTeamsRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListEventTeamsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListEventTeamsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListEventTeamsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventTeamsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListEventTeamsRequest}
 */
proto.daemon.ListEventTeamsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListEventTeamsRequest;
  return proto.daemon.ListEventTeamsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListEventTeamsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListEventTeamsRequest}
 */
proto.daemon.ListEventTeamsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListEventTeamsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListEventTeamsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListEventTeamsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventTeamsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tag = 1;
 * @return {string}
 */
proto.daemon.ListEventTeamsRequest.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ListEventTeamsRequest.prototype.setTag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListEventTeamsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.ListEventTeamsResponse.repeatedFields_, null);
};
goog.inherits(proto.daemon.ListEventTeamsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListEventTeamsResponse.displayName = 'proto.daemon.ListEventTeamsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.ListEventTeamsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListEventTeamsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListEventTeamsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListEventTeamsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventTeamsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamsList: jspb.Message.toObjectList(msg.getTeamsList(),
    proto.daemon.ListEventTeamsResponse.Teams.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListEventTeamsResponse}
 */
proto.daemon.ListEventTeamsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListEventTeamsResponse;
  return proto.daemon.ListEventTeamsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListEventTeamsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListEventTeamsResponse}
 */
proto.daemon.ListEventTeamsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.daemon.ListEventTeamsResponse.Teams;
      reader.readMessage(value,proto.daemon.ListEventTeamsResponse.Teams.deserializeBinaryFromReader);
      msg.addTeams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListEventTeamsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListEventTeamsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListEventTeamsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventTeamsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.daemon.ListEventTeamsResponse.Teams.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListEventTeamsResponse.Teams = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.ListEventTeamsResponse.Teams, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListEventTeamsResponse.Teams.displayName = 'proto.daemon.ListEventTeamsResponse.Teams';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListEventTeamsResponse.Teams.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListEventTeamsResponse.Teams.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListEventTeamsResponse.Teams} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventTeamsResponse.Teams.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    email: jspb.Message.getFieldWithDefault(msg, 3, ""),
    accessedat: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListEventTeamsResponse.Teams}
 */
proto.daemon.ListEventTeamsResponse.Teams.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListEventTeamsResponse.Teams;
  return proto.daemon.ListEventTeamsResponse.Teams.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListEventTeamsResponse.Teams} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListEventTeamsResponse.Teams}
 */
proto.daemon.ListEventTeamsResponse.Teams.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setEmail(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessedat(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListEventTeamsResponse.Teams.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListEventTeamsResponse.Teams.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListEventTeamsResponse.Teams} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListEventTeamsResponse.Teams.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getEmail();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getAccessedat();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional string Id = 1;
 * @return {string}
 */
proto.daemon.ListEventTeamsResponse.Teams.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ListEventTeamsResponse.Teams.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string Name = 2;
 * @return {string}
 */
proto.daemon.ListEventTeamsResponse.Teams.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ListEventTeamsResponse.Teams.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string Email = 3;
 * @return {string}
 */
proto.daemon.ListEventTeamsResponse.Teams.prototype.getEmail = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.daemon.ListEventTeamsResponse.Teams.prototype.setEmail = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string AccessedAt = 4;
 * @return {string}
 */
proto.daemon.ListEventTeamsResponse.Teams.prototype.getAccessedat = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.daemon.ListEventTeamsResponse.Teams.prototype.setAccessedat = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated Teams teams = 1;
 * @return {!Array<!proto.daemon.ListEventTeamsResponse.Teams>}
 */
proto.daemon.ListEventTeamsResponse.prototype.getTeamsList = function() {
  return /** @type{!Array<!proto.daemon.ListEventTeamsResponse.Teams>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.ListEventTeamsResponse.Teams, 1));
};


/** @param {!Array<!proto.daemon.ListEventTeamsResponse.Teams>} value */
proto.daemon.ListEventTeamsResponse.prototype.setTeamsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.daemon.ListEventTeamsResponse.Teams=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.ListEventTeamsResponse.Teams}
 */
proto.daemon.ListEventTeamsResponse.prototype.addTeams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.daemon.ListEventTeamsResponse.Teams, opt_index);
};


proto.daemon.ListEventTeamsResponse.prototype.clearTeamsList = function() {
  this.setTeamsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.RestartTeamLabRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.RestartTeamLabRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.RestartTeamLabRequest.displayName = 'proto.daemon.RestartTeamLabRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.RestartTeamLabRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.RestartTeamLabRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.RestartTeamLabRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.RestartTeamLabRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    teamid: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.RestartTeamLabRequest}
 */
proto.daemon.RestartTeamLabRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.RestartTeamLabRequest;
  return proto.daemon.RestartTeamLabRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.RestartTeamLabRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.RestartTeamLabRequest}
 */
proto.daemon.RestartTeamLabRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventtag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.RestartTeamLabRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.RestartTeamLabRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.RestartTeamLabRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.RestartTeamLabRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTeamid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string eventTag = 1;
 * @return {string}
 */
proto.daemon.RestartTeamLabRequest.prototype.getEventtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.RestartTeamLabRequest.prototype.setEventtag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string teamId = 2;
 * @return {string}
 */
proto.daemon.RestartTeamLabRequest.prototype.getTeamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.RestartTeamLabRequest.prototype.setTeamid = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ResetExerciseRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.ResetExerciseRequest.repeatedFields_, null);
};
goog.inherits(proto.daemon.ResetExerciseRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ResetExerciseRequest.displayName = 'proto.daemon.ResetExerciseRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.ResetExerciseRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ResetExerciseRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ResetExerciseRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ResetExerciseRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ResetExerciseRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    exercisetag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventtag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    teamsList: jspb.Message.toObjectList(msg.getTeamsList(),
    proto.daemon.Team.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ResetExerciseRequest}
 */
proto.daemon.ResetExerciseRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ResetExerciseRequest;
  return proto.daemon.ResetExerciseRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ResetExerciseRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ResetExerciseRequest}
 */
proto.daemon.ResetExerciseRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setExercisetag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventtag(value);
      break;
    case 3:
      var value = new proto.daemon.Team;
      reader.readMessage(value,proto.daemon.Team.deserializeBinaryFromReader);
      msg.addTeams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ResetExerciseRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ResetExerciseRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ResetExerciseRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ResetExerciseRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExercisetag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventtag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTeamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.daemon.Team.serializeBinaryToWriter
    );
  }
};


/**
 * optional string exerciseTag = 1;
 * @return {string}
 */
proto.daemon.ResetExerciseRequest.prototype.getExercisetag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ResetExerciseRequest.prototype.setExercisetag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string eventTag = 2;
 * @return {string}
 */
proto.daemon.ResetExerciseRequest.prototype.getEventtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ResetExerciseRequest.prototype.setEventtag = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Team teams = 3;
 * @return {!Array<!proto.daemon.Team>}
 */
proto.daemon.ResetExerciseRequest.prototype.getTeamsList = function() {
  return /** @type{!Array<!proto.daemon.Team>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.Team, 3));
};


/** @param {!Array<!proto.daemon.Team>} value */
proto.daemon.ResetExerciseRequest.prototype.setTeamsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.daemon.Team=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.Team}
 */
proto.daemon.ResetExerciseRequest.prototype.addTeams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.daemon.Team, opt_index);
};


proto.daemon.ResetExerciseRequest.prototype.clearTeamsList = function() {
  this.setTeamsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListExercisesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.ListExercisesResponse.repeatedFields_, null);
};
goog.inherits(proto.daemon.ListExercisesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListExercisesResponse.displayName = 'proto.daemon.ListExercisesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.ListExercisesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListExercisesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListExercisesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListExercisesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListExercisesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    exercisesList: jspb.Message.toObjectList(msg.getExercisesList(),
    proto.daemon.ListExercisesResponse.Exercise.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListExercisesResponse}
 */
proto.daemon.ListExercisesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListExercisesResponse;
  return proto.daemon.ListExercisesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListExercisesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListExercisesResponse}
 */
proto.daemon.ListExercisesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.daemon.ListExercisesResponse.Exercise;
      reader.readMessage(value,proto.daemon.ListExercisesResponse.Exercise.deserializeBinaryFromReader);
      msg.addExercises(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListExercisesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListExercisesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListExercisesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListExercisesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getExercisesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.daemon.ListExercisesResponse.Exercise.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListExercisesResponse.Exercise = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.ListExercisesResponse.Exercise.repeatedFields_, null);
};
goog.inherits(proto.daemon.ListExercisesResponse.Exercise, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListExercisesResponse.Exercise.displayName = 'proto.daemon.ListExercisesResponse.Exercise';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.ListExercisesResponse.Exercise.repeatedFields_ = [1,5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListExercisesResponse.Exercise.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListExercisesResponse.Exercise.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListExercisesResponse.Exercise} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListExercisesResponse.Exercise.toObject = function(includeInstance, msg) {
  var f, obj = {
    tagsList: jspb.Message.getRepeatedField(msg, 1),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    dockerimagecount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    vboximagecount: jspb.Message.getFieldWithDefault(msg, 4, 0),
    secret: jspb.Message.getFieldWithDefault(msg, 6, false),
    exerciseinfoList: jspb.Message.toObjectList(msg.getExerciseinfoList(),
    proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.toObject, includeInstance),
    orgdescription: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListExercisesResponse.Exercise}
 */
proto.daemon.ListExercisesResponse.Exercise.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListExercisesResponse.Exercise;
  return proto.daemon.ListExercisesResponse.Exercise.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListExercisesResponse.Exercise} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListExercisesResponse.Exercise}
 */
proto.daemon.ListExercisesResponse.Exercise.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addTags(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setDockerimagecount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setVboximagecount(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSecret(value);
      break;
    case 5:
      var value = new proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo;
      reader.readMessage(value,proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.deserializeBinaryFromReader);
      msg.addExerciseinfo(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrgdescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListExercisesResponse.Exercise.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListExercisesResponse.Exercise.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListExercisesResponse.Exercise} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListExercisesResponse.Exercise.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTagsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDockerimagecount();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getVboximagecount();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getSecret();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getExerciseinfoList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.serializeBinaryToWriter
    );
  }
  f = message.getOrgdescription();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.displayName = 'proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    points: jspb.Message.getFieldWithDefault(msg, 3, 0),
    category: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo}
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo;
  return proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo}
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPoints(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCategory(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPoints();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getCategory();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string tag = 1;
 * @return {string}
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.setTag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 points = 3;
 * @return {number}
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.getPoints = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.setPoints = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string category = 4;
 * @return {string}
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.getCategory = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.setCategory = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/** @param {string} value */
proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo.prototype.setDescription = function(value) {
  jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated string tags = 1;
 * @return {!Array<string>}
 */
proto.daemon.ListExercisesResponse.Exercise.prototype.getTagsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/** @param {!Array<string>} value */
proto.daemon.ListExercisesResponse.Exercise.prototype.setTagsList = function(value) {
  jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {!string} value
 * @param {number=} opt_index
 */
proto.daemon.ListExercisesResponse.Exercise.prototype.addTags = function(value, opt_index) {
  jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


proto.daemon.ListExercisesResponse.Exercise.prototype.clearTagsList = function() {
  this.setTagsList([]);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.daemon.ListExercisesResponse.Exercise.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ListExercisesResponse.Exercise.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 dockerImageCount = 3;
 * @return {number}
 */
proto.daemon.ListExercisesResponse.Exercise.prototype.getDockerimagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.daemon.ListExercisesResponse.Exercise.prototype.setDockerimagecount = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 vboxImageCount = 4;
 * @return {number}
 */
proto.daemon.ListExercisesResponse.Exercise.prototype.getVboximagecount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.daemon.ListExercisesResponse.Exercise.prototype.setVboximagecount = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional bool secret = 6;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.daemon.ListExercisesResponse.Exercise.prototype.getSecret = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 6, false));
};


/** @param {boolean} value */
proto.daemon.ListExercisesResponse.Exercise.prototype.setSecret = function(value) {
  jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * repeated ExerciseInfo exerciseinfo = 5;
 * @return {!Array<!proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo>}
 */
proto.daemon.ListExercisesResponse.Exercise.prototype.getExerciseinfoList = function() {
  return /** @type{!Array<!proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo, 5));
};


/** @param {!Array<!proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo>} value */
proto.daemon.ListExercisesResponse.Exercise.prototype.setExerciseinfoList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo}
 */
proto.daemon.ListExercisesResponse.Exercise.prototype.addExerciseinfo = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.daemon.ListExercisesResponse.Exercise.ExerciseInfo, opt_index);
};


proto.daemon.ListExercisesResponse.Exercise.prototype.clearExerciseinfoList = function() {
  this.setExerciseinfoList([]);
};


/**
 * optional string orgdescription = 7;
 * @return {string}
 */
proto.daemon.ListExercisesResponse.Exercise.prototype.getOrgdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/** @param {string} value */
proto.daemon.ListExercisesResponse.Exercise.prototype.setOrgdescription = function(value) {
  jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * repeated Exercise exercises = 1;
 * @return {!Array<!proto.daemon.ListExercisesResponse.Exercise>}
 */
proto.daemon.ListExercisesResponse.prototype.getExercisesList = function() {
  return /** @type{!Array<!proto.daemon.ListExercisesResponse.Exercise>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.ListExercisesResponse.Exercise, 1));
};


/** @param {!Array<!proto.daemon.ListExercisesResponse.Exercise>} value */
proto.daemon.ListExercisesResponse.prototype.setExercisesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.daemon.ListExercisesResponse.Exercise=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.ListExercisesResponse.Exercise}
 */
proto.daemon.ListExercisesResponse.prototype.addExercises = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.daemon.ListExercisesResponse.Exercise, opt_index);
};


proto.daemon.ListExercisesResponse.prototype.clearExercisesList = function() {
  this.setExercisesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListProfilesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.ListProfilesResponse.repeatedFields_, null);
};
goog.inherits(proto.daemon.ListProfilesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListProfilesResponse.displayName = 'proto.daemon.ListProfilesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.ListProfilesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListProfilesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListProfilesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListProfilesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListProfilesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    profilesList: jspb.Message.toObjectList(msg.getProfilesList(),
    proto.daemon.ListProfilesResponse.Profile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListProfilesResponse}
 */
proto.daemon.ListProfilesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListProfilesResponse;
  return proto.daemon.ListProfilesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListProfilesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListProfilesResponse}
 */
proto.daemon.ListProfilesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.daemon.ListProfilesResponse.Profile;
      reader.readMessage(value,proto.daemon.ListProfilesResponse.Profile.deserializeBinaryFromReader);
      msg.addProfiles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListProfilesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListProfilesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListProfilesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListProfilesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfilesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.daemon.ListProfilesResponse.Profile.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListProfilesResponse.Profile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.ListProfilesResponse.Profile.repeatedFields_, null);
};
goog.inherits(proto.daemon.ListProfilesResponse.Profile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListProfilesResponse.Profile.displayName = 'proto.daemon.ListProfilesResponse.Profile';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.ListProfilesResponse.Profile.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListProfilesResponse.Profile.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListProfilesResponse.Profile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListProfilesResponse.Profile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListProfilesResponse.Profile.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    secret: jspb.Message.getFieldWithDefault(msg, 2, false),
    challengesList: jspb.Message.toObjectList(msg.getChallengesList(),
    proto.daemon.ListProfilesResponse.Profile.Challenge.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListProfilesResponse.Profile}
 */
proto.daemon.ListProfilesResponse.Profile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListProfilesResponse.Profile;
  return proto.daemon.ListProfilesResponse.Profile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListProfilesResponse.Profile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListProfilesResponse.Profile}
 */
proto.daemon.ListProfilesResponse.Profile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSecret(value);
      break;
    case 3:
      var value = new proto.daemon.ListProfilesResponse.Profile.Challenge;
      reader.readMessage(value,proto.daemon.ListProfilesResponse.Profile.Challenge.deserializeBinaryFromReader);
      msg.addChallenges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListProfilesResponse.Profile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListProfilesResponse.Profile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListProfilesResponse.Profile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListProfilesResponse.Profile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecret();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getChallengesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.daemon.ListProfilesResponse.Profile.Challenge.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListProfilesResponse.Profile.Challenge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.ListProfilesResponse.Profile.Challenge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListProfilesResponse.Profile.Challenge.displayName = 'proto.daemon.ListProfilesResponse.Profile.Challenge';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListProfilesResponse.Profile.Challenge.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListProfilesResponse.Profile.Challenge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListProfilesResponse.Profile.Challenge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListProfilesResponse.Profile.Challenge.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListProfilesResponse.Profile.Challenge}
 */
proto.daemon.ListProfilesResponse.Profile.Challenge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListProfilesResponse.Profile.Challenge;
  return proto.daemon.ListProfilesResponse.Profile.Challenge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListProfilesResponse.Profile.Challenge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListProfilesResponse.Profile.Challenge}
 */
proto.daemon.ListProfilesResponse.Profile.Challenge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListProfilesResponse.Profile.Challenge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListProfilesResponse.Profile.Challenge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListProfilesResponse.Profile.Challenge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListProfilesResponse.Profile.Challenge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string tag = 1;
 * @return {string}
 */
proto.daemon.ListProfilesResponse.Profile.Challenge.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ListProfilesResponse.Profile.Challenge.prototype.setTag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.daemon.ListProfilesResponse.Profile.Challenge.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ListProfilesResponse.Profile.Challenge.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.daemon.ListProfilesResponse.Profile.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ListProfilesResponse.Profile.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool secret = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.daemon.ListProfilesResponse.Profile.prototype.getSecret = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.daemon.ListProfilesResponse.Profile.prototype.setSecret = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated Challenge challenges = 3;
 * @return {!Array<!proto.daemon.ListProfilesResponse.Profile.Challenge>}
 */
proto.daemon.ListProfilesResponse.Profile.prototype.getChallengesList = function() {
  return /** @type{!Array<!proto.daemon.ListProfilesResponse.Profile.Challenge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.ListProfilesResponse.Profile.Challenge, 3));
};


/** @param {!Array<!proto.daemon.ListProfilesResponse.Profile.Challenge>} value */
proto.daemon.ListProfilesResponse.Profile.prototype.setChallengesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.daemon.ListProfilesResponse.Profile.Challenge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.ListProfilesResponse.Profile.Challenge}
 */
proto.daemon.ListProfilesResponse.Profile.prototype.addChallenges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.daemon.ListProfilesResponse.Profile.Challenge, opt_index);
};


proto.daemon.ListProfilesResponse.Profile.prototype.clearChallengesList = function() {
  this.setChallengesList([]);
};


/**
 * repeated Profile profiles = 1;
 * @return {!Array<!proto.daemon.ListProfilesResponse.Profile>}
 */
proto.daemon.ListProfilesResponse.prototype.getProfilesList = function() {
  return /** @type{!Array<!proto.daemon.ListProfilesResponse.Profile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.ListProfilesResponse.Profile, 1));
};


/** @param {!Array<!proto.daemon.ListProfilesResponse.Profile>} value */
proto.daemon.ListProfilesResponse.prototype.setProfilesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.daemon.ListProfilesResponse.Profile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.ListProfilesResponse.Profile}
 */
proto.daemon.ListProfilesResponse.prototype.addProfiles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.daemon.ListProfilesResponse.Profile, opt_index);
};


proto.daemon.ListProfilesResponse.prototype.clearProfilesList = function() {
  this.setProfilesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.SaveProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.SaveProfileRequest.repeatedFields_, null);
};
goog.inherits(proto.daemon.SaveProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.SaveProfileRequest.displayName = 'proto.daemon.SaveProfileRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.SaveProfileRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.SaveProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.SaveProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.SaveProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SaveProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    secret: jspb.Message.getFieldWithDefault(msg, 2, false),
    challengesList: jspb.Message.toObjectList(msg.getChallengesList(),
    proto.daemon.SaveProfileRequest.Challenge.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.SaveProfileRequest}
 */
proto.daemon.SaveProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.SaveProfileRequest;
  return proto.daemon.SaveProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.SaveProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.SaveProfileRequest}
 */
proto.daemon.SaveProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setSecret(value);
      break;
    case 3:
      var value = new proto.daemon.SaveProfileRequest.Challenge;
      reader.readMessage(value,proto.daemon.SaveProfileRequest.Challenge.deserializeBinaryFromReader);
      msg.addChallenges(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.SaveProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.SaveProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.SaveProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SaveProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSecret();
  if (f) {
    writer.writeBool(
      2,
      f
    );
  }
  f = message.getChallengesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.daemon.SaveProfileRequest.Challenge.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.SaveProfileRequest.Challenge = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.SaveProfileRequest.Challenge, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.SaveProfileRequest.Challenge.displayName = 'proto.daemon.SaveProfileRequest.Challenge';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.SaveProfileRequest.Challenge.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.SaveProfileRequest.Challenge.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.SaveProfileRequest.Challenge} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SaveProfileRequest.Challenge.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.SaveProfileRequest.Challenge}
 */
proto.daemon.SaveProfileRequest.Challenge.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.SaveProfileRequest.Challenge;
  return proto.daemon.SaveProfileRequest.Challenge.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.SaveProfileRequest.Challenge} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.SaveProfileRequest.Challenge}
 */
proto.daemon.SaveProfileRequest.Challenge.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.SaveProfileRequest.Challenge.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.SaveProfileRequest.Challenge.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.SaveProfileRequest.Challenge} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SaveProfileRequest.Challenge.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string tag = 1;
 * @return {string}
 */
proto.daemon.SaveProfileRequest.Challenge.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.SaveProfileRequest.Challenge.prototype.setTag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.daemon.SaveProfileRequest.Challenge.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.SaveProfileRequest.Challenge.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.daemon.SaveProfileRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.SaveProfileRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional bool secret = 2;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.daemon.SaveProfileRequest.prototype.getSecret = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldWithDefault(this, 2, false));
};


/** @param {boolean} value */
proto.daemon.SaveProfileRequest.prototype.setSecret = function(value) {
  jspb.Message.setProto3BooleanField(this, 2, value);
};


/**
 * repeated Challenge challenges = 3;
 * @return {!Array<!proto.daemon.SaveProfileRequest.Challenge>}
 */
proto.daemon.SaveProfileRequest.prototype.getChallengesList = function() {
  return /** @type{!Array<!proto.daemon.SaveProfileRequest.Challenge>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.SaveProfileRequest.Challenge, 3));
};


/** @param {!Array<!proto.daemon.SaveProfileRequest.Challenge>} value */
proto.daemon.SaveProfileRequest.prototype.setChallengesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.daemon.SaveProfileRequest.Challenge=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.SaveProfileRequest.Challenge}
 */
proto.daemon.SaveProfileRequest.prototype.addChallenges = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.daemon.SaveProfileRequest.Challenge, opt_index);
};


proto.daemon.SaveProfileRequest.prototype.clearChallengesList = function() {
  this.setChallengesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.DeleteProfileRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.DeleteProfileRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.DeleteProfileRequest.displayName = 'proto.daemon.DeleteProfileRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.DeleteProfileRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.DeleteProfileRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.DeleteProfileRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.DeleteProfileRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.DeleteProfileRequest}
 */
proto.daemon.DeleteProfileRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.DeleteProfileRequest;
  return proto.daemon.DeleteProfileRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.DeleteProfileRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.DeleteProfileRequest}
 */
proto.daemon.DeleteProfileRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.DeleteProfileRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.DeleteProfileRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.DeleteProfileRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.DeleteProfileRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.daemon.DeleteProfileRequest.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.DeleteProfileRequest.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ProfileStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.ProfileStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ProfileStatus.displayName = 'proto.daemon.ProfileStatus';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ProfileStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ProfileStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ProfileStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ProfileStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    profile: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ProfileStatus}
 */
proto.daemon.ProfileStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ProfileStatus;
  return proto.daemon.ProfileStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ProfileStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ProfileStatus}
 */
proto.daemon.ProfileStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProfile(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ProfileStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ProfileStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ProfileStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ProfileStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProfile();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string profile = 1;
 * @return {string}
 */
proto.daemon.ProfileStatus.prototype.getProfile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ProfileStatus.prototype.setProfile = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.daemon.ProfileStatus.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ProfileStatus.prototype.setStatus = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListCategoriesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.ListCategoriesResponse.repeatedFields_, null);
};
goog.inherits(proto.daemon.ListCategoriesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListCategoriesResponse.displayName = 'proto.daemon.ListCategoriesResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.ListCategoriesResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListCategoriesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListCategoriesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListCategoriesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListCategoriesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    categoriesList: jspb.Message.toObjectList(msg.getCategoriesList(),
    proto.daemon.ListCategoriesResponse.Category.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListCategoriesResponse}
 */
proto.daemon.ListCategoriesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListCategoriesResponse;
  return proto.daemon.ListCategoriesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListCategoriesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListCategoriesResponse}
 */
proto.daemon.ListCategoriesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.daemon.ListCategoriesResponse.Category;
      reader.readMessage(value,proto.daemon.ListCategoriesResponse.Category.deserializeBinaryFromReader);
      msg.addCategories(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListCategoriesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListCategoriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListCategoriesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListCategoriesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getCategoriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.daemon.ListCategoriesResponse.Category.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListCategoriesResponse.Category = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.ListCategoriesResponse.Category, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListCategoriesResponse.Category.displayName = 'proto.daemon.ListCategoriesResponse.Category';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListCategoriesResponse.Category.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListCategoriesResponse.Category.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListCategoriesResponse.Category} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListCategoriesResponse.Category.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: jspb.Message.getFieldWithDefault(msg, 1, ""),
    name: jspb.Message.getFieldWithDefault(msg, 2, ""),
    catdescription: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListCategoriesResponse.Category}
 */
proto.daemon.ListCategoriesResponse.Category.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListCategoriesResponse.Category;
  return proto.daemon.ListCategoriesResponse.Category.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListCategoriesResponse.Category} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListCategoriesResponse.Category}
 */
proto.daemon.ListCategoriesResponse.Category.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCatdescription(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListCategoriesResponse.Category.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListCategoriesResponse.Category.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListCategoriesResponse.Category} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListCategoriesResponse.Category.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCatdescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional string tag = 1;
 * @return {string}
 */
proto.daemon.ListCategoriesResponse.Category.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ListCategoriesResponse.Category.prototype.setTag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string name = 2;
 * @return {string}
 */
proto.daemon.ListCategoriesResponse.Category.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ListCategoriesResponse.Category.prototype.setName = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string catDescription = 3;
 * @return {string}
 */
proto.daemon.ListCategoriesResponse.Category.prototype.getCatdescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.daemon.ListCategoriesResponse.Category.prototype.setCatdescription = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * repeated Category categories = 1;
 * @return {!Array<!proto.daemon.ListCategoriesResponse.Category>}
 */
proto.daemon.ListCategoriesResponse.prototype.getCategoriesList = function() {
  return /** @type{!Array<!proto.daemon.ListCategoriesResponse.Category>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.ListCategoriesResponse.Category, 1));
};


/** @param {!Array<!proto.daemon.ListCategoriesResponse.Category>} value */
proto.daemon.ListCategoriesResponse.prototype.setCategoriesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.daemon.ListCategoriesResponse.Category=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.ListCategoriesResponse.Category}
 */
proto.daemon.ListCategoriesResponse.prototype.addCategories = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.daemon.ListCategoriesResponse.Category, opt_index);
};


proto.daemon.ListCategoriesResponse.prototype.clearCategoriesList = function() {
  this.setCategoriesList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ResetTeamStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.ResetTeamStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ResetTeamStatus.displayName = 'proto.daemon.ResetTeamStatus';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ResetTeamStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ResetTeamStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ResetTeamStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ResetTeamStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ResetTeamStatus}
 */
proto.daemon.ResetTeamStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ResetTeamStatus;
  return proto.daemon.ResetTeamStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ResetTeamStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ResetTeamStatus}
 */
proto.daemon.ResetTeamStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ResetTeamStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ResetTeamStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ResetTeamStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ResetTeamStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string teamId = 1;
 * @return {string}
 */
proto.daemon.ResetTeamStatus.prototype.getTeamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ResetTeamStatus.prototype.setTeamid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.daemon.ResetTeamStatus.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ResetTeamStatus.prototype.setStatus = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.StopEventRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.StopEventRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.StopEventRequest.displayName = 'proto.daemon.StopEventRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.StopEventRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.StopEventRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.StopEventRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.StopEventRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    tag: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.StopEventRequest}
 */
proto.daemon.StopEventRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.StopEventRequest;
  return proto.daemon.StopEventRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.StopEventRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.StopEventRequest}
 */
proto.daemon.StopEventRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.StopEventRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.StopEventRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.StopEventRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.StopEventRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTag();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string tag = 1;
 * @return {string}
 */
proto.daemon.StopEventRequest.prototype.getTag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.StopEventRequest.prototype.setTag = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.EventStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.EventStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.EventStatus.displayName = 'proto.daemon.EventStatus';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.EventStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.EventStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.EventStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.EventStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    entity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    status: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.EventStatus}
 */
proto.daemon.EventStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.EventStatus;
  return proto.daemon.EventStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.EventStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.EventStatus}
 */
proto.daemon.EventStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setEntity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setStatus(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.EventStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.EventStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.EventStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.EventStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEntity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getStatus();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string entity = 1;
 * @return {string}
 */
proto.daemon.EventStatus.prototype.getEntity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.EventStatus.prototype.setEntity = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string status = 2;
 * @return {string}
 */
proto.daemon.EventStatus.prototype.getStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.EventStatus.prototype.setStatus = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.LabStatus = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.LabStatus, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.LabStatus.displayName = 'proto.daemon.LabStatus';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.LabStatus.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.LabStatus.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.LabStatus} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.LabStatus.toObject = function(includeInstance, msg) {
  var f, obj = {
    message: jspb.Message.getFieldWithDefault(msg, 1, ""),
    errormessage: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.LabStatus}
 */
proto.daemon.LabStatus.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.LabStatus;
  return proto.daemon.LabStatus.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.LabStatus} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.LabStatus}
 */
proto.daemon.LabStatus.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setErrormessage(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.LabStatus.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.LabStatus.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.LabStatus} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.LabStatus.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getErrormessage();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string Message = 1;
 * @return {string}
 */
proto.daemon.LabStatus.prototype.getMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.LabStatus.prototype.setMessage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string errorMessage = 2;
 * @return {string}
 */
proto.daemon.LabStatus.prototype.getErrormessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.LabStatus.prototype.setErrormessage = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.MonitorHostResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.MonitorHostResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.MonitorHostResponse.displayName = 'proto.daemon.MonitorHostResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.MonitorHostResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.MonitorHostResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.MonitorHostResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.MonitorHostResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    memorypercent: +jspb.Message.getFieldWithDefault(msg, 1, 0.0),
    memoryreaderror: jspb.Message.getFieldWithDefault(msg, 2, ""),
    cpupercent: +jspb.Message.getFieldWithDefault(msg, 3, 0.0),
    cpureaderror: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.MonitorHostResponse}
 */
proto.daemon.MonitorHostResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.MonitorHostResponse;
  return proto.daemon.MonitorHostResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.MonitorHostResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.MonitorHostResponse}
 */
proto.daemon.MonitorHostResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setMemorypercent(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMemoryreaderror(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCpupercent(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setCpureaderror(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.MonitorHostResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.MonitorHostResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.MonitorHostResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.MonitorHostResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMemorypercent();
  if (f !== 0.0) {
    writer.writeFloat(
      1,
      f
    );
  }
  f = message.getMemoryreaderror();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getCpupercent();
  if (f !== 0.0) {
    writer.writeFloat(
      3,
      f
    );
  }
  f = message.getCpureaderror();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional float MemoryPercent = 1;
 * @return {number}
 */
proto.daemon.MonitorHostResponse.prototype.getMemorypercent = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 1, 0.0));
};


/** @param {number} value */
proto.daemon.MonitorHostResponse.prototype.setMemorypercent = function(value) {
  jspb.Message.setProto3FloatField(this, 1, value);
};


/**
 * optional string MemoryReadError = 2;
 * @return {string}
 */
proto.daemon.MonitorHostResponse.prototype.getMemoryreaderror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.MonitorHostResponse.prototype.setMemoryreaderror = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional float CPUPercent = 3;
 * @return {number}
 */
proto.daemon.MonitorHostResponse.prototype.getCpupercent = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 3, 0.0));
};


/** @param {number} value */
proto.daemon.MonitorHostResponse.prototype.setCpupercent = function(value) {
  jspb.Message.setProto3FloatField(this, 3, value);
};


/**
 * optional string CPUReadError = 4;
 * @return {string}
 */
proto.daemon.MonitorHostResponse.prototype.getCpureaderror = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/** @param {string} value */
proto.daemon.MonitorHostResponse.prototype.setCpureaderror = function(value) {
  jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.Empty = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.Empty, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.Empty.displayName = 'proto.daemon.Empty';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.Empty.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.Empty.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.Empty} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.Empty.toObject = function(includeInstance, msg) {
  var f, obj = {

  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.Empty}
 */
proto.daemon.Empty.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.Empty;
  return proto.daemon.Empty.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.Empty} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.Empty}
 */
proto.daemon.Empty.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.Empty.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.Empty.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.Empty} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.Empty.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.VersionResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.VersionResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.VersionResponse.displayName = 'proto.daemon.VersionResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.VersionResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.VersionResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.VersionResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.VersionResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    version: jspb.Message.getFieldWithDefault(msg, 1, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.VersionResponse}
 */
proto.daemon.VersionResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.VersionResponse;
  return proto.daemon.VersionResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.VersionResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.VersionResponse}
 */
proto.daemon.VersionResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setVersion(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.VersionResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.VersionResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.VersionResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.VersionResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getVersion();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
};


/**
 * optional string version = 1;
 * @return {string}
 */
proto.daemon.VersionResponse.prototype.getVersion = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.VersionResponse.prototype.setVersion = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListFrontendsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.ListFrontendsResponse.repeatedFields_, null);
};
goog.inherits(proto.daemon.ListFrontendsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListFrontendsResponse.displayName = 'proto.daemon.ListFrontendsResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.ListFrontendsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListFrontendsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListFrontendsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListFrontendsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListFrontendsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    frontendsList: jspb.Message.toObjectList(msg.getFrontendsList(),
    proto.daemon.ListFrontendsResponse.Frontend.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListFrontendsResponse}
 */
proto.daemon.ListFrontendsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListFrontendsResponse;
  return proto.daemon.ListFrontendsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListFrontendsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListFrontendsResponse}
 */
proto.daemon.ListFrontendsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.daemon.ListFrontendsResponse.Frontend;
      reader.readMessage(value,proto.daemon.ListFrontendsResponse.Frontend.deserializeBinaryFromReader);
      msg.addFrontends(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListFrontendsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListFrontendsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListFrontendsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListFrontendsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getFrontendsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.daemon.ListFrontendsResponse.Frontend.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ListFrontendsResponse.Frontend = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.ListFrontendsResponse.Frontend, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ListFrontendsResponse.Frontend.displayName = 'proto.daemon.ListFrontendsResponse.Frontend';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ListFrontendsResponse.Frontend.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ListFrontendsResponse.Frontend.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ListFrontendsResponse.Frontend} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListFrontendsResponse.Frontend.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: jspb.Message.getFieldWithDefault(msg, 1, ""),
    size: jspb.Message.getFieldWithDefault(msg, 2, 0),
    memorymb: jspb.Message.getFieldWithDefault(msg, 3, 0),
    cpu: +jspb.Message.getFieldWithDefault(msg, 4, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ListFrontendsResponse.Frontend}
 */
proto.daemon.ListFrontendsResponse.Frontend.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ListFrontendsResponse.Frontend;
  return proto.daemon.ListFrontendsResponse.Frontend.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ListFrontendsResponse.Frontend} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ListFrontendsResponse.Frontend}
 */
proto.daemon.ListFrontendsResponse.Frontend.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemorymb(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCpu(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ListFrontendsResponse.Frontend.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ListFrontendsResponse.Frontend.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ListFrontendsResponse.Frontend} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ListFrontendsResponse.Frontend.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getMemorymb();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getCpu();
  if (f !== 0.0) {
    writer.writeFloat(
      4,
      f
    );
  }
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.daemon.ListFrontendsResponse.Frontend.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.ListFrontendsResponse.Frontend.prototype.setImage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 size = 2;
 * @return {number}
 */
proto.daemon.ListFrontendsResponse.Frontend.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.daemon.ListFrontendsResponse.Frontend.prototype.setSize = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int64 memoryMB = 3;
 * @return {number}
 */
proto.daemon.ListFrontendsResponse.Frontend.prototype.getMemorymb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/** @param {number} value */
proto.daemon.ListFrontendsResponse.Frontend.prototype.setMemorymb = function(value) {
  jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional float cpu = 4;
 * @return {number}
 */
proto.daemon.ListFrontendsResponse.Frontend.prototype.getCpu = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 4, 0.0));
};


/** @param {number} value */
proto.daemon.ListFrontendsResponse.Frontend.prototype.setCpu = function(value) {
  jspb.Message.setProto3FloatField(this, 4, value);
};


/**
 * repeated Frontend frontends = 1;
 * @return {!Array<!proto.daemon.ListFrontendsResponse.Frontend>}
 */
proto.daemon.ListFrontendsResponse.prototype.getFrontendsList = function() {
  return /** @type{!Array<!proto.daemon.ListFrontendsResponse.Frontend>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.ListFrontendsResponse.Frontend, 1));
};


/** @param {!Array<!proto.daemon.ListFrontendsResponse.Frontend>} value */
proto.daemon.ListFrontendsResponse.prototype.setFrontendsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.daemon.ListFrontendsResponse.Frontend=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.ListFrontendsResponse.Frontend}
 */
proto.daemon.ListFrontendsResponse.prototype.addFrontends = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.daemon.ListFrontendsResponse.Frontend, opt_index);
};


proto.daemon.ListFrontendsResponse.prototype.clearFrontendsList = function() {
  this.setFrontendsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.ResetFrontendsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.ResetFrontendsRequest.repeatedFields_, null);
};
goog.inherits(proto.daemon.ResetFrontendsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.ResetFrontendsRequest.displayName = 'proto.daemon.ResetFrontendsRequest';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.ResetFrontendsRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.ResetFrontendsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.ResetFrontendsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.ResetFrontendsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ResetFrontendsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    eventtag: jspb.Message.getFieldWithDefault(msg, 2, ""),
    teamsList: jspb.Message.toObjectList(msg.getTeamsList(),
    proto.daemon.Team.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.ResetFrontendsRequest}
 */
proto.daemon.ResetFrontendsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.ResetFrontendsRequest;
  return proto.daemon.ResetFrontendsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.ResetFrontendsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.ResetFrontendsRequest}
 */
proto.daemon.ResetFrontendsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventtag(value);
      break;
    case 3:
      var value = new proto.daemon.Team;
      reader.readMessage(value,proto.daemon.Team.deserializeBinaryFromReader);
      msg.addTeams(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.ResetFrontendsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.ResetFrontendsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.ResetFrontendsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.ResetFrontendsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getEventtag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTeamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.daemon.Team.serializeBinaryToWriter
    );
  }
};


/**
 * optional string eventTag = 2;
 * @return {string}
 */
proto.daemon.ResetFrontendsRequest.prototype.getEventtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.ResetFrontendsRequest.prototype.setEventtag = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated Team teams = 3;
 * @return {!Array<!proto.daemon.Team>}
 */
proto.daemon.ResetFrontendsRequest.prototype.getTeamsList = function() {
  return /** @type{!Array<!proto.daemon.Team>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.Team, 3));
};


/** @param {!Array<!proto.daemon.Team>} value */
proto.daemon.ResetFrontendsRequest.prototype.setTeamsList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.daemon.Team=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.Team}
 */
proto.daemon.ResetFrontendsRequest.prototype.addTeams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.daemon.Team, opt_index);
};


proto.daemon.ResetFrontendsRequest.prototype.clearTeamsList = function() {
  this.setTeamsList([]);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.SetFrontendMemoryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.SetFrontendMemoryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.SetFrontendMemoryRequest.displayName = 'proto.daemon.SetFrontendMemoryRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.SetFrontendMemoryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.SetFrontendMemoryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.SetFrontendMemoryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SetFrontendMemoryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: jspb.Message.getFieldWithDefault(msg, 1, ""),
    memorymb: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.SetFrontendMemoryRequest}
 */
proto.daemon.SetFrontendMemoryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.SetFrontendMemoryRequest;
  return proto.daemon.SetFrontendMemoryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.SetFrontendMemoryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.SetFrontendMemoryRequest}
 */
proto.daemon.SetFrontendMemoryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setMemorymb(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.SetFrontendMemoryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.SetFrontendMemoryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.SetFrontendMemoryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SetFrontendMemoryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMemorymb();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.daemon.SetFrontendMemoryRequest.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.SetFrontendMemoryRequest.prototype.setImage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 memoryMB = 2;
 * @return {number}
 */
proto.daemon.SetFrontendMemoryRequest.prototype.getMemorymb = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/** @param {number} value */
proto.daemon.SetFrontendMemoryRequest.prototype.setMemorymb = function(value) {
  jspb.Message.setProto3IntField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.SetFrontendCpuRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.SetFrontendCpuRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.SetFrontendCpuRequest.displayName = 'proto.daemon.SetFrontendCpuRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.SetFrontendCpuRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.SetFrontendCpuRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.SetFrontendCpuRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SetFrontendCpuRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: jspb.Message.getFieldWithDefault(msg, 1, ""),
    cpu: +jspb.Message.getFieldWithDefault(msg, 2, 0.0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.SetFrontendCpuRequest}
 */
proto.daemon.SetFrontendCpuRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.SetFrontendCpuRequest;
  return proto.daemon.SetFrontendCpuRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.SetFrontendCpuRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.SetFrontendCpuRequest}
 */
proto.daemon.SetFrontendCpuRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readFloat());
      msg.setCpu(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.SetFrontendCpuRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.SetFrontendCpuRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.SetFrontendCpuRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.SetFrontendCpuRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getCpu();
  if (f !== 0.0) {
    writer.writeFloat(
      2,
      f
    );
  }
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.daemon.SetFrontendCpuRequest.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.SetFrontendCpuRequest.prototype.setImage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional float cpu = 2;
 * @return {number}
 */
proto.daemon.SetFrontendCpuRequest.prototype.getCpu = function() {
  return /** @type {number} */ (+jspb.Message.getFieldWithDefault(this, 2, 0.0));
};


/** @param {number} value */
proto.daemon.SetFrontendCpuRequest.prototype.setCpu = function(value) {
  jspb.Message.setProto3FloatField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.GetTeamInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.GetTeamInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.GetTeamInfoRequest.displayName = 'proto.daemon.GetTeamInfoRequest';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.GetTeamInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.GetTeamInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.GetTeamInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetTeamInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    teamid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    eventtag: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.GetTeamInfoRequest}
 */
proto.daemon.GetTeamInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.GetTeamInfoRequest;
  return proto.daemon.GetTeamInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.GetTeamInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.GetTeamInfoRequest}
 */
proto.daemon.GetTeamInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTeamid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setEventtag(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.GetTeamInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.GetTeamInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.GetTeamInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetTeamInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTeamid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getEventtag();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string teamId = 1;
 * @return {string}
 */
proto.daemon.GetTeamInfoRequest.prototype.getTeamid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.GetTeamInfoRequest.prototype.setTeamid = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string eventTag = 2;
 * @return {string}
 */
proto.daemon.GetTeamInfoRequest.prototype.getEventtag = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.GetTeamInfoRequest.prototype.setEventtag = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.GetTeamInfoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.daemon.GetTeamInfoResponse.repeatedFields_, null);
};
goog.inherits(proto.daemon.GetTeamInfoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.GetTeamInfoResponse.displayName = 'proto.daemon.GetTeamInfoResponse';
}
/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.daemon.GetTeamInfoResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.GetTeamInfoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.GetTeamInfoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.GetTeamInfoResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetTeamInfoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    instancesList: jspb.Message.toObjectList(msg.getInstancesList(),
    proto.daemon.GetTeamInfoResponse.Instance.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.GetTeamInfoResponse}
 */
proto.daemon.GetTeamInfoResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.GetTeamInfoResponse;
  return proto.daemon.GetTeamInfoResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.GetTeamInfoResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.GetTeamInfoResponse}
 */
proto.daemon.GetTeamInfoResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.daemon.GetTeamInfoResponse.Instance;
      reader.readMessage(value,proto.daemon.GetTeamInfoResponse.Instance.deserializeBinaryFromReader);
      msg.addInstances(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.GetTeamInfoResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.GetTeamInfoResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.GetTeamInfoResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetTeamInfoResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getInstancesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.daemon.GetTeamInfoResponse.Instance.serializeBinaryToWriter
    );
  }
};



/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.daemon.GetTeamInfoResponse.Instance = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.daemon.GetTeamInfoResponse.Instance, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.daemon.GetTeamInfoResponse.Instance.displayName = 'proto.daemon.GetTeamInfoResponse.Instance';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.daemon.GetTeamInfoResponse.Instance.prototype.toObject = function(opt_includeInstance) {
  return proto.daemon.GetTeamInfoResponse.Instance.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.daemon.GetTeamInfoResponse.Instance} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetTeamInfoResponse.Instance.toObject = function(includeInstance, msg) {
  var f, obj = {
    image: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, ""),
    state: jspb.Message.getFieldWithDefault(msg, 4, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.daemon.GetTeamInfoResponse.Instance}
 */
proto.daemon.GetTeamInfoResponse.Instance.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.daemon.GetTeamInfoResponse.Instance;
  return proto.daemon.GetTeamInfoResponse.Instance.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.daemon.GetTeamInfoResponse.Instance} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.daemon.GetTeamInfoResponse.Instance}
 */
proto.daemon.GetTeamInfoResponse.Instance.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setImage(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setState(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.daemon.GetTeamInfoResponse.Instance.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.daemon.GetTeamInfoResponse.Instance.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.daemon.GetTeamInfoResponse.Instance} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.daemon.GetTeamInfoResponse.Instance.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getImage();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getState();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
};


/**
 * optional string image = 1;
 * @return {string}
 */
proto.daemon.GetTeamInfoResponse.Instance.prototype.getImage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/** @param {string} value */
proto.daemon.GetTeamInfoResponse.Instance.prototype.setImage = function(value) {
  jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string type = 2;
 * @return {string}
 */
proto.daemon.GetTeamInfoResponse.Instance.prototype.getType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/** @param {string} value */
proto.daemon.GetTeamInfoResponse.Instance.prototype.setType = function(value) {
  jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string id = 3;
 * @return {string}
 */
proto.daemon.GetTeamInfoResponse.Instance.prototype.getId = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/** @param {string} value */
proto.daemon.GetTeamInfoResponse.Instance.prototype.setId = function(value) {
  jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 state = 4;
 * @return {number}
 */
proto.daemon.GetTeamInfoResponse.Instance.prototype.getState = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/** @param {number} value */
proto.daemon.GetTeamInfoResponse.Instance.prototype.setState = function(value) {
  jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated Instance instances = 1;
 * @return {!Array<!proto.daemon.GetTeamInfoResponse.Instance>}
 */
proto.daemon.GetTeamInfoResponse.prototype.getInstancesList = function() {
  return /** @type{!Array<!proto.daemon.GetTeamInfoResponse.Instance>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.daemon.GetTeamInfoResponse.Instance, 1));
};


/** @param {!Array<!proto.daemon.GetTeamInfoResponse.Instance>} value */
proto.daemon.GetTeamInfoResponse.prototype.setInstancesList = function(value) {
  jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.daemon.GetTeamInfoResponse.Instance=} opt_value
 * @param {number=} opt_index
 * @return {!proto.daemon.GetTeamInfoResponse.Instance}
 */
proto.daemon.GetTeamInfoResponse.prototype.addInstances = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.daemon.GetTeamInfoResponse.Instance, opt_index);
};


proto.daemon.GetTeamInfoResponse.prototype.clearInstancesList = function() {
  this.setInstancesList([]);
};


goog.object.extend(exports, proto.daemon);
