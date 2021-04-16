/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRegisteredUsers = /* GraphQL */ `
  subscription OnCreateRegisteredUsers {
    onCreateRegisteredUsers {
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
export const onUpdateRegisteredUsers = /* GraphQL */ `
  subscription OnUpdateRegisteredUsers {
    onUpdateRegisteredUsers {
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
export const onDeleteRegisteredUsers = /* GraphQL */ `
  subscription OnDeleteRegisteredUsers {
    onDeleteRegisteredUsers {
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
export const onCreateGameOnPlatform = /* GraphQL */ `
  subscription OnCreateGameOnPlatform {
    onCreateGameOnPlatform {
      id
      gameID
      platformID
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
export const onUpdatePlatform = /* GraphQL */ `
  subscription OnUpdatePlatform {
    onUpdatePlatform {
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
export const onDeletePlatform = /* GraphQL */ `
  subscription OnDeletePlatform {
    onDeletePlatform {
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
export const onCreateGame = /* GraphQL */ `
  subscription OnCreateGame {
    onCreateGame {
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
export const onUpdateGame = /* GraphQL */ `
  subscription OnUpdateGame {
    onUpdateGame {
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
export const onDeleteGame = /* GraphQL */ `
  subscription OnDeleteGame {
    onDeleteGame {
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
export const onCreateController = /* GraphQL */ `
  subscription OnCreateController {
    onCreateController {
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
export const onUpdateController = /* GraphQL */ `
  subscription OnUpdateController {
    onUpdateController {
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
export const onDeleteController = /* GraphQL */ `
  subscription OnDeleteController {
    onDeleteController {
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
export const onCreateTournamentBracket = /* GraphQL */ `
  subscription OnCreateTournamentBracket {
    onCreateTournamentBracket {
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
export const onUpdateTournamentBracket = /* GraphQL */ `
  subscription OnUpdateTournamentBracket {
    onUpdateTournamentBracket {
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
export const onDeleteTournamentBracket = /* GraphQL */ `
  subscription OnDeleteTournamentBracket {
    onDeleteTournamentBracket {
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
