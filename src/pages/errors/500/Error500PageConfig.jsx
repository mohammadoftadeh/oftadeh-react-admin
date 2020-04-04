import Error500Page from "./Error500Page";

export const Error500PageConfig = {
  routes: [
    {
      path: "/pages/errors/error-500",
      exact: true,
      component: Error500Page
    }
  ]
};
