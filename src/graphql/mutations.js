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
      TournamentBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      TournamentBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      TournamentBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      PlatformToGOP {
        items {
          id
          gameID
          platformID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      PlatformToGOP {
        items {
          id
          gameID
          platformID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      PlatformToGOP {
        items {
          id
          gameID
          platformID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      GameToGOP {
        items {
          id
          gameID
          platformID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      GameToGOP {
        items {
          id
          gameID
          platformID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      GameToGOP {
        items {
          id
          gameID
          platformID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      ControllerToPlatform {
        id
        platformName
        PlatformToGOP {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      ControllerToPlatform {
        id
        platformName
        PlatformToGOP {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      ControllerToPlatform {
        id
        platformName
        PlatformToGOP {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
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
      ArcToBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      ArcToBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
      ArcToBrackets {
        items {
          id
          tournamentarcID
          bracketType
          startDate
          endDat
          registeredusersID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
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
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
