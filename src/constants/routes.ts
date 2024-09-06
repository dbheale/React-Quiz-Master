const base = window.location.pathname.split("/").slice(0, -1).join("/");

export const Routes = {
    Home: base + "/",
    Quiz: base + "/quiz",
    Results: base + "/results",
    Statistics: base + "/stats"
}