console.log("🚀 DevOps Pipeline is working!");

document.addEventListener("DOMContentLoaded", function() {
  console.log("✅ Site loaded successfully!");
  
  const badge = document.querySelector(".badge");
  badge.addEventListener("click", function() {
    badge.textContent = "🎉 CI/CD is AWESOME!";
  });
});
