import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import axios from "axios";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom"; // **For redirecting on session expiry**

function AskGemini() {
  const [query, setQuery] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("**Session expired. Please login again.**");
      navigate("/login"); // **Redirect to login page if no token**
    }
  }, [navigate]);

  const handleSearch = async () => {
    if (!query.trim()) {
      toast.error("**Please enter a valid question!**");
      return;
    }

    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      const { data } = await axios.post(
        "http://localhost:4444/api/gemini/ask",
        { query },
        { headers: { Authorization: `Bearer ${token}` } } // **Token included**
      );

      const formattedResponse = data.response
        .replace(/\*\*(.*?)\*\*/g, "<h2>$1</h2>")
        .replace(/\*(.*?)\*/g, "<li>$1</li>");

      setResponse(formattedResponse);
      toast.success("**Response received successfully!**");
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("**Session expired. Please login again.**");
        navigate("/login");
      } else {
        console.error("**Error fetching response:**", error);
        toast.error("**Failed to fetch response. Try again.**");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 mt-14 flex justify-center items-center h-screen">
      <Card className="h-[80vh] w-[80vw] border-2">
        <CardContent className="h-[70vh] overflow-auto p-4">
          <h1 className="text-2xl font-bold mb-4">Ask Gemini</h1>

          {/* **Response Display** */}
          {loading ? (
            <p className="text-gray-500">**Loading...**</p>
          ) : response ? (
            <div
              className="text-black"
              dangerouslySetInnerHTML={{ __html: response }}
            />
          ) : (
            <p className="text-gray-400">Your response will appear here...</p>
          )}
        </CardContent>

        {/* **Input with Search Icon** */}
        <div className="relative w-[60vw] m-auto mb-10">
          <Input
            placeholder="Ask with Ask Gemini?"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pr-10"
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <Search
            className="absolute top-1/2 right-3 -translate-y-1/2 text-gray-400 cursor-pointer"
            onClick={handleSearch}
          />
        </div>
      </Card>
    </div>
  );
}

export default AskGemini;