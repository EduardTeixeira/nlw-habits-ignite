self.addEventListener("push", function (event) {
  
  const body = event.data?.text() ?? "Vazio...";

  event.waitUntil(
    self.registration.showNotification("Habits", {
      body,
    })
  );
});
