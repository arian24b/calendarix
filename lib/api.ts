/**
 * API client for CalendarIX services
 */
export const apiClient = {
  /**
   * Get the current count of early access requests
   * @returns Promise with the count of subscribed users
   */
  getRequestCount: async (): Promise<number> => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/v1/subscribe/count`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch request count: ${response.status}`);
      }

      const data = await response.json();
      return data.subscribed_count;
    } catch (error) {
      console.error("Error fetching request count:", error);
      return 0;
    }
  },

  /**
   * Submit an email for early access
   * @param email User's email address
   * @returns Promise with the API response
   */
  subscribeForEarlyAccess: async (email: string) => {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/v1/subscribe/`,
      {
        method: "POST",
        redirect: "manual",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          requestdata: { data: "early access request" },
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Failed to submit: ${response.statusText}`);
    }

    try {
      return await response.json();
    } catch (jsonError) {
      console.warn("Could not parse JSON response:", jsonError);
      return { success: true };
    }
  },
};
