---
title: test
---
<SwmSnippet path="/app/page.tsx" line="15">

---

The `handleForm` function is an asynchronous function that handles form submission. It starts by preventing the default form submission behavior to avoid a page reload. It then attempts to sign in the user with the provided email and password. If an error occurs during sign-in, it sets an alert to indicate the issue and logs the error to the console. If the sign-in is successful, it logs the result, displays a success message, hides any alerts, and redirects the user to the dashboard page.

```tsx
  const handleForm = async (event: { preventDefault: () => void }) => {
    event.preventDefault();

    const { result, error } = await signIn(email, password);

    if (error) {
      setAlert(!false);
      return console.log(error);
    }

    // else successful
    console.log(result);
    console.log("succesfull");
    setAlert(false);
    return router.push("/dashboard");
  };
```

---

</SwmSnippet>

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBYmlsbGRhc2glM0ElM0FIQVJJU0hXQTIwMDM=" repo-name="billdash"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
