/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRegisteredUsers = /* GraphQL */ `
  subscription OnCreateRegisteredUsers {
    onCreateRegisteredUsers {
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
export const onUpdateRegisteredUsers = /* GraphQL */ `
  subscription OnUpdateRegisteredUsers {
    onUpdateRegisteredUsers {
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
export const onDeleteRegisteredUsers = /* GraphQL */ `
  subscription OnDeleteRegisteredUsers {
    onDeleteRegisteredUsers {
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
export const onCreateGameOnPlatform = /* GraphQL */ `
  subscription OnCreateGameOnPlatform {
    onCreateGameOnPlatform {
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
export const onUpdateGameOnPlatform = /* GraphQL */ `
  subscription OnUpdateGameOnPlatform {
    onUpdateGameOnPlatform {
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
export const onDeleteGameOnPlatform = /* GraphQL */ `
  subscription OnDeleteGameOnPlatform {
    onDeleteGameOnPlatform {
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
export const onCreatePlatform = /* GraphQL */ `
  subscription OnCreatePlatform {
    onCreatePlatform {
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
export const onUpdatePlatform = /* GraphQL */ `
  subscription OnUpdatePlatform {
    onUpdatePlatform {
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
export const onDeletePlatform = /* GraphQL */ `
  subscription OnDeletePlatform {
    onDeletePlatform {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateController = /* GraphQL */ `
  subscription OnCreateController {
    onCreateController {
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
export const onUpdateController = /* GraphQL */ `
  subscription OnUpdateController {
    onUpdateController {
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
export const onDeleteController = /* GraphQL */ `
  subscription OnDeleteController {
    onDeleteController {
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
export const onCreateTournamentBracket = /* GraphQL */ `
  subscription OnCreateTournamentBracket {
    onCreateTournamentBracket {
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
export const onUpdateTournamentBracket = /* GraphQL */ `
  subscription OnUpdateTournamentBracket {
    onUpdateTournamentBracket {
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
export const onDeleteTournamentBracket = /* GraphQL */ `
  subscription OnDeleteTournamentBracket {
    onDeleteTournamentBracket {
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
export const onCreateTournamentArc = /* GraphQL */ `
  subscription OnCreateTournamentArc {
    onCreateTournamentArc {
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
export const onUpdateTournamentArc = /* GraphQL */ `
  subscription OnUpdateTournamentArc {
    onUpdateTournamentArc {
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
export const onDeleteTournamentArc = /* GraphQL */ `
  subscription OnDeleteTournamentArc {
    onDeleteTournamentArc {
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
export const onCreateTournamentEvent = /* GraphQL */ `
  subscription OnCreateTournamentEvent {
    onCreateTournamentEvent {
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
export const onUpdateTournamentEvent = /* GraphQL */ `
  subscription OnUpdateTournamentEvent {
    onUpdateTournamentEvent {
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
export const onDeleteTournamentEvent = /* GraphQL */ `
  subscription OnDeleteTournamentEvent {
    onDeleteTournamentEvent {
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
