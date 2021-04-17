/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createRegisteredUsers = /* GraphQL */ `
  mutation CreateRegisteredUsers(
    $input: CreateRegisteredUsersInput!
    $condition: ModelRegisteredUsersConditionInput
  ) {
    createRegisteredUsers(input: $input, condition: $condition) {
      id
      gamerTag
      name
      location
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      TournamentBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateRegisteredUsers = /* GraphQL */ `
  mutation UpdateRegisteredUsers(
    $input: UpdateRegisteredUsersInput!
    $condition: ModelRegisteredUsersConditionInput
  ) {
    updateRegisteredUsers(input: $input, condition: $condition) {
      id
      gamerTag
      name
      location
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      TournamentBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteRegisteredUsers = /* GraphQL */ `
  mutation DeleteRegisteredUsers(
    $input: DeleteRegisteredUsersInput!
    $condition: ModelRegisteredUsersConditionInput
  ) {
    deleteRegisteredUsers(input: $input, condition: $condition) {
      id
      gamerTag
      name
      location
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      TournamentBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createGameOnPlatform = /* GraphQL */ `
  mutation CreateGameOnPlatform(
    $input: CreateGameOnPlatformInput!
    $condition: ModelGameOnPlatformConditionInput
  ) {
    createGameOnPlatform(input: $input, condition: $condition) {
      id
      gameID
      platformID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateGameOnPlatform = /* GraphQL */ `
  mutation UpdateGameOnPlatform(
    $input: UpdateGameOnPlatformInput!
    $condition: ModelGameOnPlatformConditionInput
  ) {
    updateGameOnPlatform(input: $input, condition: $condition) {
      id
      gameID
      platformID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteGameOnPlatform = /* GraphQL */ `
  mutation DeleteGameOnPlatform(
    $input: DeleteGameOnPlatformInput!
    $condition: ModelGameOnPlatformConditionInput
  ) {
    deleteGameOnPlatform(input: $input, condition: $condition) {
      id
      gameID
      platformID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createPlatform = /* GraphQL */ `
  mutation CreatePlatform(
    $input: CreatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    createPlatform(input: $input, condition: $condition) {
      id
      platformName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PlatformToGOP {
        items {
          id
          gameID
          platformID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updatePlatform = /* GraphQL */ `
  mutation UpdatePlatform(
    $input: UpdatePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    updatePlatform(input: $input, condition: $condition) {
      id
      platformName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PlatformToGOP {
        items {
          id
          gameID
          platformID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deletePlatform = /* GraphQL */ `
  mutation DeletePlatform(
    $input: DeletePlatformInput!
    $condition: ModelPlatformConditionInput
  ) {
    deletePlatform(input: $input, condition: $condition) {
      id
      platformName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      PlatformToGOP {
        items {
          id
          gameID
          platformID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createGame = /* GraphQL */ `
  mutation CreateGame(
    $input: CreateGameInput!
    $condition: ModelGameConditionInput
  ) {
    createGame(input: $input, condition: $condition) {
      id
      gameTitle
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      GameToGOP {
        items {
          id
          gameID
          platformID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateGame = /* GraphQL */ `
  mutation UpdateGame(
    $input: UpdateGameInput!
    $condition: ModelGameConditionInput
  ) {
    updateGame(input: $input, condition: $condition) {
      id
      gameTitle
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      GameToGOP {
        items {
          id
          gameID
          platformID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteGame = /* GraphQL */ `
  mutation DeleteGame(
    $input: DeleteGameInput!
    $condition: ModelGameConditionInput
  ) {
    deleteGame(input: $input, condition: $condition) {
      id
      gameTitle
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      GameToGOP {
        items {
          id
          gameID
          platformID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createController = /* GraphQL */ `
  mutation CreateController(
    $input: CreateControllerInput!
    $condition: ModelControllerConditionInput
  ) {
    createController(input: $input, condition: $condition) {
      id
      controllerName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ControllerToPlatform {
        id
        platformName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        PlatformToGOP {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const updateController = /* GraphQL */ `
  mutation UpdateController(
    $input: UpdateControllerInput!
    $condition: ModelControllerConditionInput
  ) {
    updateController(input: $input, condition: $condition) {
      id
      controllerName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ControllerToPlatform {
        id
        platformName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        PlatformToGOP {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const deleteController = /* GraphQL */ `
  mutation DeleteController(
    $input: DeleteControllerInput!
    $condition: ModelControllerConditionInput
  ) {
    deleteController(input: $input, condition: $condition) {
      id
      controllerName
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ControllerToPlatform {
        id
        platformName
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        PlatformToGOP {
          nextToken
          startedAt
        }
      }
    }
  }
`;
export const createTournamentBracket = /* GraphQL */ `
  mutation CreateTournamentBracket(
    $input: CreateTournamentBracketInput!
    $condition: ModelTournamentBracketConditionInput
  ) {
    createTournamentBracket(input: $input, condition: $condition) {
      id
      tournamentarcID
      bracketType
      startDate
      endDat
      registeredusersID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const updateTournamentBracket = /* GraphQL */ `
  mutation UpdateTournamentBracket(
    $input: UpdateTournamentBracketInput!
    $condition: ModelTournamentBracketConditionInput
  ) {
    updateTournamentBracket(input: $input, condition: $condition) {
      id
      tournamentarcID
      bracketType
      startDate
      endDat
      registeredusersID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const deleteTournamentBracket = /* GraphQL */ `
  mutation DeleteTournamentBracket(
    $input: DeleteTournamentBracketInput!
    $condition: ModelTournamentBracketConditionInput
  ) {
    deleteTournamentBracket(input: $input, condition: $condition) {
      id
      tournamentarcID
      bracketType
      startDate
      endDat
      registeredusersID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
    }
  }
`;
export const createTournamentArc = /* GraphQL */ `
  mutation CreateTournamentArc(
    $input: CreateTournamentArcInput!
    $condition: ModelTournamentArcConditionInput
  ) {
    createTournamentArc(input: $input, condition: $condition) {
      id
      tournamenteventID
      arcName
      description
      organizingBody
      startDate
      endDate
      totalPrizeMoney
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArcToBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateTournamentArc = /* GraphQL */ `
  mutation UpdateTournamentArc(
    $input: UpdateTournamentArcInput!
    $condition: ModelTournamentArcConditionInput
  ) {
    updateTournamentArc(input: $input, condition: $condition) {
      id
      tournamenteventID
      arcName
      description
      organizingBody
      startDate
      endDate
      totalPrizeMoney
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArcToBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteTournamentArc = /* GraphQL */ `
  mutation DeleteTournamentArc(
    $input: DeleteTournamentArcInput!
    $condition: ModelTournamentArcConditionInput
  ) {
    deleteTournamentArc(input: $input, condition: $condition) {
      id
      tournamenteventID
      arcName
      description
      organizingBody
      startDate
      endDate
      totalPrizeMoney
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      ArcToBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const createTournamentEvent = /* GraphQL */ `
  mutation CreateTournamentEvent(
    $input: CreateTournamentEventInput!
    $condition: ModelTournamentEventConditionInput
  ) {
    createTournamentEvent(input: $input, condition: $condition) {
      id
      eventName
      description
      organizingBody
      location
      startDate
      endDate
      totalPrizeMoney
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EventToArcs {
        items {
          id
          tournamenteventID
          arcName
          description
          organizingBody
          startDate
          endDate
          totalPrizeMoney
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const updateTournamentEvent = /* GraphQL */ `
  mutation UpdateTournamentEvent(
    $input: UpdateTournamentEventInput!
    $condition: ModelTournamentEventConditionInput
  ) {
    updateTournamentEvent(input: $input, condition: $condition) {
      id
      eventName
      description
      organizingBody
      location
      startDate
      endDate
      totalPrizeMoney
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EventToArcs {
        items {
          id
          tournamenteventID
          arcName
          description
          organizingBody
          startDate
          endDate
          totalPrizeMoney
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
export const deleteTournamentEvent = /* GraphQL */ `
  mutation DeleteTournamentEvent(
    $input: DeleteTournamentEventInput!
    $condition: ModelTournamentEventConditionInput
  ) {
    deleteTournamentEvent(input: $input, condition: $condition) {
      id
      eventName
      description
      organizingBody
      location
      startDate
      endDate
      totalPrizeMoney
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      EventToArcs {
        items {
          id
          tournamenteventID
          arcName
          description
          organizingBody
          startDate
          endDate
          totalPrizeMoney
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
        }
        nextToken
        startedAt
      }
    }
  }
`;
