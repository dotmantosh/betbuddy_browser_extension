(function () {
  // Create message dispatcher
  const sendToExtension = (message) => {
    window.postMessage(
      {
        type: "BETBUDDY_API_DATA",
        payload: message,
      },
      "*"
    );
  };

  const TARGET_API_ENDPOINTS = [
    "/factsCenter/pcUpcomingEvents", // Example: Sportybet odds API
    "/factsCenter/pcEvents", // Example: Sportybet odds API
  ];

  const isTargetedUrl = (url) => {
    return TARGET_API_ENDPOINTS.some((endpoint) => url.includes(endpoint));
  };

  // Override axios if it exists
  if (window.axios) {
    const originalRequest = window.axios.request;
    window.axios.request = async function (config) {
      // if (!isTargetedUrl(config.url)) {
      //   return originalRequest(config)
      // };
      console.log("[Axios Intercepted Request]", config);
      const response = await originalRequest.call(this, config);
      console.log("[Axios Intercepted Response]", response);
      return response;
    };
  }

  // Override fetch
  const originalFetch = window.fetch;
  window.fetch = async (...args) => {
    const url = args[0];

    if (!isTargetedUrl(url)) {
      return originalFetch(...args); // Ensure the original fetch is called for non-targeted URLs
    }
    const response = await originalFetch(...args);
    const clonedResponse = response.clone();
    console.log("clonedResponse: ", clonedResponse);
    try {
      const { data } = await clonedResponse.json();
      console.log("[Fetch Intercepted Response]", { url, data });

      if (url.includes("/factsCenter/pcUpcomingEvents")) {
        sendToExtension({
          type: "API_RESPONSE",
          url,
          data: data,
          method: "GET",
        });
        // Send data to the extension
        // chromeRuntime.sendMessage(
        //   {
        //     type: "API_RESPONSE",
        //     url,
        //     data: data.tournaments,
        //     method: "GET",
        //   },
        //   (response) => {
        //     if (chrome.runtime.lastError) {
        //       console.error(
        //         "[Interceptor] Error sending message:",
        //         chrome.runtime.lastError.message
        //       );
        //     } else {
        //       console.log("[Interceptor] Message sent successfully:", response);
        //     }
        //   }
        // );
      }

      if (url.includes("/factsCenter/pcEvents")) {
        sendToExtension({
          type: "API_RESPONSE",
          url,
          data: data,
          method: "GET",
        });
        // Send data to the extension
        // chrome.runtime.sendMessage(
        //   {
        //     type: "API_RESPONSE",
        //     url,
        //     data: data.data,
        //     method: "GET",
        //   },
        //   (response) => {
        //     if (chrome.runtime.lastError) {
        //       console.error(
        //         "[Interceptor] Error sending message:",
        //         chrome.runtime.lastError.message
        //       );
        //     } else {
        //       console.log("[Interceptor] Message sent successfully:", response);
        //     }
        //   }
        // );
      }
    } catch (error) {
      console.error(
        "[Fetch Intercepted] Failed to parse response:",
        error.message
      );
    }
    return response;
  };

  // Override XMLHttpRequest
  const originalXHROpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url) {
    if (!isTargetedUrl(url)) {
      return originalFetch(...args); // Ensure the original fetch is called for non-targeted URLs
    }

    console.log("[XHR Intercepted]", method, url);
    const originalSend = this.send;
    this.send = function (body) {
      this.addEventListener("readystatechange", () => {
        if (this.readyState === 4 && this.status >= 200 && this.status < 300) {
          try {
            const data =
              this.responseType === "json"
                ? this.response
                : JSON.parse(this.responseText || "{}");
            console.log("[XHR Intercepted Response]", { url, data });

            // Send data to the extension
            // chrome.runtime.sendMessage({
            //   type: "API_RESPONSE",
            //   url,
            //   data,
            //   method,
            // });
          } catch (error) {
            console.error("[XHR Intercepted] Failed to parse response:", error);
          }
        }
      });
      originalSend.call(this, body);
    };
    originalXHROpen.apply(this, arguments);
  };
})();
