// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { RegisteredUsers, TournamentBracket, GameOnPlatform, Platform, Game, Controller, TournamentArc, TournamentEvent } = initSchema(schema);

export {
  RegisteredUsers,
  TournamentBracket,
  GameOnPlatform,
  Platform,
  Game,
  Controller,
  TournamentArc,
  TournamentEvent
};