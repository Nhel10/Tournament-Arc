import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class RegisteredUsers {
  readonly id: string;
  readonly gamerTag?: string;
  readonly name?: string;
  readonly location?: string;
  readonly TournamentBrackets?: (TournamentBracket | null)[];
  constructor(init: ModelInit<RegisteredUsers>);
  static copyOf(source: RegisteredUsers, mutator: (draft: MutableModel<RegisteredUsers>) => MutableModel<RegisteredUsers> | void): RegisteredUsers;
}

export declare class TournamentBracket {
  readonly id: string;
  readonly tournamentarcID?: string;
  readonly bracketType?: string;
  readonly startDate?: string;
  readonly endDat?: string;
  readonly registeredusersID?: string;
  constructor(init: ModelInit<TournamentBracket>);
  static copyOf(source: TournamentBracket, mutator: (draft: MutableModel<TournamentBracket>) => MutableModel<TournamentBracket> | void): TournamentBracket;
}

export declare class GameOnPlatform {
  readonly id: string;
  readonly gameID?: string;
  readonly platformID?: string;
  constructor(init: ModelInit<GameOnPlatform>);
  static copyOf(source: GameOnPlatform, mutator: (draft: MutableModel<GameOnPlatform>) => MutableModel<GameOnPlatform> | void): GameOnPlatform;
}

export declare class Platform {
  readonly id: string;
  readonly platformName?: string;
  readonly PlatformToGOP?: (GameOnPlatform | null)[];
  constructor(init: ModelInit<Platform>);
  static copyOf(source: Platform, mutator: (draft: MutableModel<Platform>) => MutableModel<Platform> | void): Platform;
}

export declare class Game {
  readonly id: string;
  readonly gameTitle?: string;
  readonly GameToGOP?: (GameOnPlatform | null)[];
  constructor(init: ModelInit<Game>);
  static copyOf(source: Game, mutator: (draft: MutableModel<Game>) => MutableModel<Game> | void): Game;
}

export declare class Controller {
  readonly id: string;
  readonly controllerName?: string;
  readonly ControllerToPlatform?: Platform;
  constructor(init: ModelInit<Controller>);
  static copyOf(source: Controller, mutator: (draft: MutableModel<Controller>) => MutableModel<Controller> | void): Controller;
}

export declare class TournamentArc {
  readonly id: string;
  readonly tournamenteventID?: string;
  readonly arcName?: string;
  readonly description?: string;
  readonly organizingBody?: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly totalPrizeMoney?: number;
  readonly ArcToBrackets?: (TournamentBracket | null)[];
  constructor(init: ModelInit<TournamentArc>);
  static copyOf(source: TournamentArc, mutator: (draft: MutableModel<TournamentArc>) => MutableModel<TournamentArc> | void): TournamentArc;
}

export declare class TournamentEvent {
  readonly id: string;
  readonly eventName?: string;
  readonly description?: string;
  readonly organizingBody?: string;
  readonly location?: string;
  readonly startDate?: string;
  readonly endDate?: string;
  readonly totalPrizeMoney?: number;
  readonly EventToArcs?: (TournamentArc | null)[];
  constructor(init: ModelInit<TournamentEvent>);
  static copyOf(source: TournamentEvent, mutator: (draft: MutableModel<TournamentEvent>) => MutableModel<TournamentEvent> | void): TournamentEvent;
}