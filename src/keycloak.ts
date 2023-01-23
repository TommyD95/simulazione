import Keycloak, { KeycloakConfig } from "keycloak-js";

const initOptions: KeycloakConfig = {
    url: "http://localhost:8080/auth",
    realm: "myrealm",
    clientId: "myclient",
};

const keycloak = new Keycloak(initOptions);

export default keycloak;