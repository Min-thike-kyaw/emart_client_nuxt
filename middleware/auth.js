export default function ({ store, redirect, route }) {
    // If the user is not authenticated
    if (!store.state.auth.token) {
      const path = encodeURIComponent(route.path);
      return redirect(`/login?r=${path}`);
    }
  }