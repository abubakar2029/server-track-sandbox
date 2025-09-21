import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Play, Pause, Volume2, Maximize, RotateCcw } from "lucide-react";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration] = useState(180); // 3 minutes demo video

  const handlePlayPause = () => {
    if (!isPlaying) {
      // GA4 Event: video_start
      console.log("GA4 Event: video_start", {
        video_title: "TechStore Product Demo 2024",
        video_provider: "internal",
        video_current_time: currentTime,
        video_duration: duration,
        video_percent: Math.round((currentTime / duration) * 100),
        video_url: "/videos/product-demo-2024"
      });
    } else {
      // GA4 Event: video_pause
      console.log("GA4 Event: video_pause", {
        video_title: "TechStore Product Demo 2024",
        video_current_time: currentTime,
        video_percent: Math.round((currentTime / duration) * 100)
      });
    }
    
    setIsPlaying(!isPlaying);
    
    // Simulate video progress
    if (!isPlaying) {
      const interval = setInterval(() => {
        setCurrentTime(prev => {
          const newTime = prev + 1;
          
          // Track video progress milestones
          const percent = Math.round((newTime / duration) * 100);
          if (percent === 25 || percent === 50 || percent === 75) {
            console.log("GA4 Event: video_progress", {
              video_title: "TechStore Product Demo 2024",
              video_current_time: newTime,
              video_percent: percent
            });
          }
          
          // Video completion
          if (newTime >= duration) {
            console.log("GA4 Event: video_complete", {
              video_title: "TechStore Product Demo 2024",
              video_current_time: duration,
              video_percent: 100
            });
            setIsPlaying(false);
            clearInterval(interval);
          }
          
          return newTime >= duration ? duration : newTime;
        });
      }, 1000);
      
      return () => clearInterval(interval);
    }
  };

  const handleSeek = (percent: number) => {
    const newTime = Math.round((percent / 100) * duration);
    setCurrentTime(newTime);
    
    // GA4 Event: video_seek
    console.log("GA4 Event: video_seek", {
      video_title: "TechStore Product Demo 2024",
      video_current_time: newTime,
      video_percent: percent,
      seek_direction: newTime > currentTime ? "forward" : "backward"
    });
  };

  const handleRestart = () => {
    setCurrentTime(0);
    setIsPlaying(false);
    
    // GA4 Event: video_restart
    console.log("GA4 Event: video_restart", {
      video_title: "TechStore Product Demo 2024"
    });
  };

  const handleFullscreen = () => {
    // GA4 Event: video_fullscreen
    console.log("GA4 Event: video_fullscreen", {
      video_title: "TechStore Product Demo 2024",
      video_current_time: currentTime
    });
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercent = (currentTime / duration) * 100;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            See Our Products in Action
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch our comprehensive product demonstration showcasing the latest features 
            and capabilities of our tech lineup.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-strong border-0 overflow-hidden">
            <CardContent className="p-0 relative">
              {/* Video Player Area */}
              <div className="relative aspect-video bg-gradient-hero flex items-center justify-center group">
                {/* Video Thumbnail/Placeholder */}
                <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
                <img
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=1200&h=675&fit=crop"
                  alt="Tech products showcase"
                  className="absolute inset-0 w-full h-full object-cover opacity-50"
                />
                
                {/* Play/Pause Button */}
                <Button
                  size="icon"
                  onClick={handlePlayPause}
                  className="relative z-10 w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/50 hover:bg-white/30 transition-spring group-hover:scale-110"
                >
                  {isPlaying ? (
                    <Pause className="w-8 h-8 text-white" />
                  ) : (
                    <Play className="w-8 h-8 text-white ml-1" />
                  )}
                </Button>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 backdrop-blur-sm p-4 translate-y-full group-hover:translate-y-0 transition-spring">
                  {/* Progress Bar */}
                  <div className="mb-3">
                    <div className="relative h-2 bg-white/20 rounded-full cursor-pointer">
                      <div 
                        className="absolute left-0 top-0 h-full bg-white rounded-full transition-smooth"
                        style={{ width: `${progressPercent}%` }}
                      ></div>
                      {/* Seekable points */}
                      {[25, 50, 75].map(percent => (
                        <button
                          key={percent}
                          className="absolute top-1/2 w-3 h-3 bg-white rounded-full transform -translate-y-1/2 -translate-x-1/2 opacity-70 hover:opacity-100 hover:scale-110 transition-smooth"
                          style={{ left: `${percent}%` }}
                          onClick={() => handleSeek(percent)}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Control Buttons */}
                  <div className="flex items-center justify-between text-white">
                    <div className="flex items-center space-x-3">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handlePlayPause}
                        className="text-white hover:bg-white/20 p-2"
                      >
                        {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleRestart}
                        className="text-white hover:bg-white/20 p-2"
                      >
                        <RotateCcw className="w-5 h-5" />
                      </Button>
                      
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-white hover:bg-white/20 p-2"
                      >
                        <Volume2 className="w-5 h-5" />
                      </Button>
                      
                      <span className="text-sm">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>

                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleFullscreen}
                      className="text-white hover:bg-white/20 p-2"
                    >
                      <Maximize className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Video Details */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4">What You'll Learn</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Unboxing and first setup experience</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Performance benchmarks and real-world tests</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Exclusive features and hidden capabilities</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-muted-foreground">Comparison with previous generations</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-4">Video Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span>Duration:</span>
                  <span className="font-semibold">{formatTime(duration)}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span>Resolution:</span>
                  <span className="font-semibold">4K Ultra HD</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span>Views:</span>
                  <span className="font-semibold">2.5M+</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span>Rating:</span>
                  <span className="font-semibold">4.9/5 ⭐</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;