/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegisteredUsers = /* GraphQL */ `
  query GetRegisteredUsers($id: ID!) {
    getRegisteredUsers(id: $id) {
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
export const listRegisteredUserss = /* GraphQL */ `
  query ListRegisteredUserss(
    $filter: ModelRegisteredUsersFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRegisteredUserss(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        gamerTag
        name
        location
        TournamentBrackets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGameOnPlatform = /* GraphQL */ `
  query GetGameOnPlatform($id: ID!) {
    getGameOnPlatform(id: $id) {
      id
      gameID
      platformID
      createdAt
      updatedAt
    }
  }
`;
export const listGameOnPlatforms = /* GraphQL */ `
  query ListGameOnPlatforms(
    $filter: ModelGameOnPlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGameOnPlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameID
        platformID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlatform = /* GraphQL */ `
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
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
export const listPlatforms = /* GraphQL */ `
  query ListPlatforms(
    $filter: ModelPlatformFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlatforms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        platformName
        PlatformToGOP {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
export const listGames = /* GraphQL */ `
  query ListGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGames(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        gameTitle
        GameToGOP {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getController = /* GraphQL */ `
  query GetController($id: ID!) {
    getController(id: $id) {
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
export const listControllers = /* GraphQL */ `
  query ListControllers(
    $filter: ModelControllerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listControllers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        controllerName
        ControllerToPlatform {
          id
          platformName
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTournamentBracket = /* GraphQL */ `
  query GetTournamentBracket($id: ID!) {
    getTournamentBracket(id: $id) {
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
export const listTournamentBrackets = /* GraphQL */ `
  query ListTournamentBrackets(
    $filter: ModelTournamentBracketFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournamentBrackets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getTournamentArc = /* GraphQL */ `
  query GetTournamentArc($id: ID!) {
    getTournamentArc(id: $id) {
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
export const listTournamentArcs = /* GraphQL */ `
  query ListTournamentArcs(
    $filter: ModelTournamentArcFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournamentArcs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        tournamenteventID
        arcName
        description
        organizingBody
        startDate
        endDate
        totalPrizeMoney
        ArcToBrackets {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTournamentEvent = /* GraphQL */ `
  query GetTournamentEvent($id: ID!) {
    getTournamentEvent(id: $id) {
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
export const listTournamentEvents = /* GraphQL */ `
  query ListTournamentEvents(
    $filter: ModelTournamentEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTournamentEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        eventName
        description
        organizingBody
        location
        startDate
        endDate
        totalPrizeMoney
        EventToArcs {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
