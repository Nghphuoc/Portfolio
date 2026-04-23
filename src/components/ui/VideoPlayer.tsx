/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import dynamic from "next/dynamic";
import "plyr-react/plyr.css";
import { ComponentType } from "react";

const Plyr = dynamic(() => import("plyr-react").then((mod) => mod.Plyr), {
    ssr: false,
}) as ComponentType<any>;

// 1. CẬP NHẬT LẠI INTERFACE CHO ĐẦY ĐỦ
interface CommonVideoPlayerProps {
    videoUrl: string;
    wrapperClassName?: string;
    controls?: boolean;
    playing?: boolean;
    muted?: boolean;
    loop?: boolean;
    onEnded?: () => void;
    onPause?: () => void;
    onPlay?: () => void;
    [key: string]: any;
}

export default function CommonVideoPlayer({
    videoUrl,
    wrapperClassName = "",
    controls = true,
    playing = false,
    muted = false,
    loop = false,
    ...restProps
}: CommonVideoPlayerProps) {
    if (!videoUrl) {
        return (
            <div className={`w-full ${wrapperClassName}`}>
                <div className="w-full aspect-video rounded-xl bg-gray-800 animate-pulse flex items-center justify-center">
                    <span className="text-gray-400">Không tìm thấy video</span>
                </div>
            </div>
        );
    }

    return (
        <div className={`w-full ${wrapperClassName}`}>
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg bg-black">
                <Plyr
                    source={{
                        type: "video",
                        sources: [
                            {
                                src: videoUrl.trim(),
                                provider: "youtube",
                            },
                        ],
                    }}
                    options={{
                        // 2. GẮN CÁC PROP VÀO CONFIG CỦA PLYR
                        autoplay: playing,
                        muted: muted,
                        loop: { active: loop },
                        controls: controls
                            ? [
                                  "play-large",
                                  "play",
                                  "progress",
                                  "current-time",
                                  "mute",
                                  "volume",
                                  "captions",
                                  "settings",
                                  "pip",
                                  "airplay",
                                  "fullscreen",
                              ]
                            : [],
                    }}
                    {...restProps}
                />
            </div>
        </div>
    );
}
