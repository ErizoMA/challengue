// this file was generated by serverless-auto-swagger
            module.exports = {
  "swagger": "2.0",
  "info": {
    "title": "challengue",
    "version": "1"
  },
  "paths": {
    "/characters": {
      "get": {
        "summary": "get-characters",
        "description": "",
        "operationId": "get-characters.get./characters",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "query",
            "name": "search",
            "type": "string",
            "description": "Name of the character",
            "required": false
          },
          {
            "in": "query",
            "name": "page",
            "type": "integer",
            "description": "Page number",
            "required": false
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "schema": {
              "$ref": "#/definitions/ResponseList"
            }
          },
          "404": {
            "description": "Not found",
            "schema": {
              "$ref": "#/definitions/ErrorNotFound"
            }
          },
          "500": {
            "description": "Internal Error",
            "schema": {
              "$ref": "#/definitions/ErrorInternal"
            }
          }
        }
      },
      "post": {
        "summary": "post-character",
        "description": "",
        "operationId": "post-character.post./characters",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Body required in the request",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Request"
            }
          }
        ],
        "responses": {
          "201": {
            "description": "Created",
            "schema": {
              "$ref": "#/definitions/ResponseCreated"
            }
          },
          "409": {
            "description": "Already created",
            "schema": {
              "$ref": "#/definitions/ErrorConflict"
            }
          },
          "500": {
            "description": "Internal Error",
            "schema": {
              "$ref": "#/definitions/ErrorInternal"
            }
          }
        }
      }
    },
    "/characters/{id}": {
      "get": {
        "summary": "get-character",
        "description": "",
        "operationId": "get-character.get./characters/{id}",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "name": "id",
            "in": "path",
            "required": true,
            "type": "string"
          }
        ],
        "responses": {
          "200": {
            "description": "Success",
            "schema": {
              "$ref": "#/definitions/Response"
            }
          },
          "400": {
            "description": "Bad request",
            "schema": {
              "$ref": "#/definitions/ErrorBadRequest"
            }
          },
          "404": {
            "description": "Not found",
            "schema": {
              "$ref": "#/definitions/ErrorNotFound"
            }
          },
          "500": {
            "description": "Internal Error",
            "schema": {
              "$ref": "#/definitions/ErrorInternal"
            }
          }
        }
      }
    },
    "/charactersdb": {
      "get": {
        "summary": "get-characters-db",
        "description": "",
        "operationId": "get-characters-db.get./charactersdb",
        "consumes": [
          "application/json"
        ],
        "produces": [
          "application/json"
        ],
        "parameters": [],
        "responses": {
          "200": {
            "description": "Success",
            "schema": {
              "$ref": "#/definitions/ResponseList"
            }
          },
          "404": {
            "description": "Not found",
            "schema": {
              "$ref": "#/definitions/ErrorNotFound"
            }
          },
          "500": {
            "description": "Internal Error",
            "schema": {
              "$ref": "#/definitions/ErrorInternal"
            }
          }
        }
      }
    }
  },
  "definitions": {
    "Personaje": {
      "properties": {
        "nombre": {
          "title": "Personaje.nombre",
          "type": "string"
        },
        "altura": {
          "title": "Personaje.altura",
          "type": "string"
        },
        "masa": {
          "title": "Personaje.masa",
          "type": "string"
        },
        "colorCabello": {
          "title": "Personaje.colorCabello",
          "type": "string"
        },
        "colorPiel": {
          "title": "Personaje.colorPiel",
          "type": "string"
        },
        "colorOjos": {
          "title": "Personaje.colorOjos",
          "type": "string"
        },
        "añoNacimiento": {
          "title": "Personaje.añoNacimiento",
          "type": "string"
        },
        "género": {
          "title": "Personaje.género",
          "type": "string"
        },
        "planetaOrigen": {
          "title": "Personaje.planetaOrigen",
          "type": "string"
        },
        "películas": {
          "items": {
            "title": "Personaje.películas.[]",
            "type": "string"
          },
          "title": "Personaje.películas",
          "type": "array"
        },
        "especies": {
          "items": {
            "title": "Personaje.especies.[]",
            "type": "string"
          },
          "title": "Personaje.especies",
          "type": "array"
        },
        "vehículos": {
          "items": {
            "title": "Personaje.vehículos.[]",
            "type": "string"
          },
          "title": "Personaje.vehículos",
          "type": "array"
        },
        "navesEstelares": {
          "items": {
            "title": "Personaje.navesEstelares.[]",
            "type": "string"
          },
          "title": "Personaje.navesEstelares",
          "type": "array"
        },
        "creado": {
          "title": "Personaje.creado",
          "type": "string"
        },
        "editado": {
          "title": "Personaje.editado",
          "type": "string"
        },
        "url": {
          "title": "Personaje.url",
          "type": "string"
        }
      },
      "required": [
        "nombre",
        "altura",
        "masa",
        "colorCabello",
        "colorPiel",
        "colorOjos",
        "añoNacimiento",
        "género",
        "planetaOrigen",
        "películas",
        "especies",
        "vehículos",
        "navesEstelares",
        "creado",
        "editado",
        "url"
      ],
      "additionalProperties": false,
      "title": "Personaje",
      "type": "object"
    },
    "Response": {
      "properties": {
        "message": {
          "title": "Response.message",
          "type": "string"
        },
        "result": {
          "$ref": "#/definitions/Personaje",
          "title": "Response.result"
        }
      },
      "required": [
        "message",
        "result"
      ],
      "additionalProperties": false,
      "title": "Response",
      "type": "object"
    },
    "ResponseList": {
      "properties": {
        "message": {
          "title": "ResponseList.message",
          "type": "string"
        },
        "result": {
          "items": {
            "$ref": "#/definitions/Personaje",
            "title": "ResponseList.result.[]"
          },
          "title": "ResponseList.result",
          "type": "array"
        }
      },
      "required": [
        "message",
        "result"
      ],
      "additionalProperties": false,
      "title": "ResponseList",
      "type": "object"
    },
    "ResponseCreated": {
      "properties": {
        "message": {
          "title": "ResponseCreated.message",
          "enum": [
            "CREATED"
          ],
          "type": "string"
        }
      },
      "required": [
        "message"
      ],
      "additionalProperties": false,
      "title": "ResponseCreated",
      "type": "object"
    },
    "ErrorNotFound": {
      "properties": {
        "message": {
          "title": "ErrorNotFound.message",
          "enum": [
            "NOT_FOUND"
          ],
          "type": "string"
        }
      },
      "required": [
        "message"
      ],
      "additionalProperties": false,
      "title": "ErrorNotFound",
      "type": "object"
    },
    "ErrorInternal": {
      "properties": {
        "message": {
          "title": "ErrorInternal.message",
          "enum": [
            "INTERNAL_ERROR"
          ],
          "type": "string"
        }
      },
      "required": [
        "message"
      ],
      "additionalProperties": false,
      "title": "ErrorInternal",
      "type": "object"
    },
    "ErrorConflict": {
      "properties": {
        "message": {
          "title": "ErrorConflict.message",
          "enum": [
            "CONFLICT"
          ],
          "type": "string"
        }
      },
      "required": [
        "message"
      ],
      "additionalProperties": false,
      "title": "ErrorConflict",
      "type": "object"
    },
    "ErrorBadRequest": {
      "properties": {
        "message": {
          "title": "ErrorBadRequest.message",
          "enum": [
            "BAD_REQUEST"
          ],
          "type": "string"
        }
      },
      "required": [
        "message"
      ],
      "additionalProperties": false,
      "title": "ErrorBadRequest",
      "type": "object"
    },
    "Request": {
      "properties": {
        "nombre": {
          "title": "Request.nombre",
          "type": "string"
        },
        "altura": {
          "title": "Request.altura",
          "type": "string"
        },
        "masa": {
          "title": "Request.masa",
          "type": "string"
        },
        "colorCabello": {
          "title": "Request.colorCabello",
          "type": "string"
        },
        "colorPiel": {
          "title": "Request.colorPiel",
          "type": "string"
        },
        "colorOjos": {
          "title": "Request.colorOjos",
          "type": "string"
        },
        "añoNacimiento": {
          "title": "Request.añoNacimiento",
          "type": "string"
        },
        "género": {
          "title": "Request.género",
          "type": "string"
        },
        "planetaOrigen": {
          "title": "Request.planetaOrigen",
          "type": "string"
        },
        "películas": {
          "items": {
            "title": "Request.películas.[]",
            "type": "string"
          },
          "title": "Request.películas",
          "type": "array"
        },
        "especies": {
          "items": {
            "title": "Request.especies.[]",
            "type": "string"
          },
          "title": "Request.especies",
          "type": "array"
        },
        "vehículos": {
          "items": {
            "title": "Request.vehículos.[]",
            "type": "string"
          },
          "title": "Request.vehículos",
          "type": "array"
        },
        "navesEstelares": {
          "items": {
            "title": "Request.navesEstelares.[]",
            "type": "string"
          },
          "title": "Request.navesEstelares",
          "type": "array"
        },
        "url": {
          "title": "Request.url",
          "type": "string"
        }
      },
      "required": [
        "nombre"
      ],
      "additionalProperties": false,
      "title": "Request",
      "type": "object"
    }
  },
  "securityDefinitions": {},
  "basePath": "/develop"
};