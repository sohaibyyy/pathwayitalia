# Video credits

## Homepage hero video

| | |
| --- | --- |
| Title | A Time-Lapse of the Roman Forum |
| Source page | https://www.pexels.com/video/a-time-lapse-of-the-roman-forum-4840514/ |
| Creator | Super Lunar — https://www.pexels.com/@super-lunar-3180156/ |
| Licence | Pexels License — https://www.pexels.com/license/ (free for commercial use; attribution not required, but given on the site) |
| Footage type | Real camera footage (time-lapse), not AI-generated |
| Original file | `4840514-uhd_3840_2160_25fps.mp4` from videos.pexels.com — 3840×2160, 25 fps, 12.01 s, H.264 + AAC, 34.7 MB (SHA-256 begins `988b40036df709eb`) |
| Downloaded | 18 November 2026 |

### What was changed

- Scaled to 1920×1080 and 1280×720.
- Made into a seamless 10.48 s loop: the last 1.5 s crossfades into the start, then the first 1.5 s were trimmed off.
- Audio removed.
- Encoded as H.264 MP4 (`-crf 25`, `+faststart`) and VP9 WebM (`-crf 36`/`37`).
- Poster images (`*-poster-lg.webp`, `*-poster-sm.webp`) are the first frame of the loop.

Files: `src/assets/video/hero-roman-forum-*`. Settings and the on-page credit live in `src/data/video.ts`.

| File | Size |
| --- | --- |
| hero-roman-forum-1080.mp4 | 4.1 MB |
| hero-roman-forum-1080.webm | 3.0 MB |
| hero-roman-forum-720.mp4 | 2.2 MB |
| hero-roman-forum-720.webm | 1.5 MB |
| hero-roman-forum-poster-lg.webp | 147 KB |
| hero-roman-forum-poster-sm.webp | 50 KB |

### Switching back to the Florence photo

The previous hero photo (Florence Cathedral at dusk) is still in `src/assets/photos/hero-lg.webp` and `hero-sm.webp`, credited in `src/data/photos.ts`. Set `enabled: false` in `src/data/video.ts` to use it again.
