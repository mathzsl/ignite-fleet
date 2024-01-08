import Realm from "realm";
import { createRealmContext } from "@realm/react";

import { Historic } from "./schemas/Historic";

const realmAccessBehavior: Realm.OpenRealmBehaviorConfiguration = {
  type: Realm.OpenRealmBehaviorType.OpenImmediately,
};

export const syncConfig: any = {
  flexible: true,
  newRealmFileBehavior: realmAccessBehavior,
  existingRealmFileBehavior: realmAccessBehavior,
};

export const { RealmProvider, useRealm, useObject, useQuery } =
  createRealmContext({
    schema: [Historic],
  });
