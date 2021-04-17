/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRegisteredUsers = /* GraphQL */ `
  query GetRegisteredUsers($id: ID!) {
    getRegisteredUsers(id: $id) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        TournamentBrackets {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncRegisteredUsers = /* GraphQL */ `
  query SyncRegisteredUsers(
    $filter: ModelRegisteredUsersFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncRegisteredUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getGameOnPlatform = /* GraphQL */ `
  query GetGameOnPlatform($id: ID!) {
    getGameOnPlatform(id: $id) {
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
`;
export const syncGameOnPlatforms = /* GraphQL */ `
  query SyncGameOnPlatforms(
    $filter: ModelGameOnPlatformFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGameOnPlatforms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
      nextToken
      startedAt
    }
  }
`;
export const getPlatform = /* GraphQL */ `
  query GetPlatform($id: ID!) {
    getPlatform(id: $id) {
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
export const syncPlatforms = /* GraphQL */ `
  query SyncPlatforms(
    $filter: ModelPlatformFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPlatforms(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getGame = /* GraphQL */ `
  query GetGame($id: ID!) {
    getGame(id: $id) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        GameToGOP {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncGames = /* GraphQL */ `
  query SyncGames(
    $filter: ModelGameFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncGames(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        gameTitle
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        GameToGOP {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const getController = /* GraphQL */ `
  query GetController($id: ID!) {
    getController(id: $id) {
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
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncControllers = /* GraphQL */ `
  query SyncControllers(
    $filter: ModelControllerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncControllers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
        }
      }
      nextToken
      startedAt
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
      _version
      _deleted
      _lastChangedAt
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
`;
export const syncTournamentBrackets = /* GraphQL */ `
  query SyncTournamentBrackets(
    $filter: ModelTournamentBracketFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTournamentBrackets(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        ArcToBrackets {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTournamentArcs = /* GraphQL */ `
  query SyncTournamentArcs(
    $filter: ModelTournamentArcFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTournamentArcs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        ArcToBrackets {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        EventToArcs {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
export const syncTournamentEvents = /* GraphQL */ `
  query SyncTournamentEvents(
    $filter: ModelTournamentEventFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncTournamentEvents(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
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
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        EventToArcs {
          nextToken
          startedAt
        }
      }
      nextToken
      startedAt
    }
  }
`;
