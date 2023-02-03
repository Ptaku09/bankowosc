import '/styles/globals.css';
import type { AppProps } from 'next/app';
import StatsTrackerProvider from '/providers/StatsTrackerProvider';
import HideCorrectlyAnsweredProvider from '/providers/HideCorrectlyAnsweredProvider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <HideCorrectlyAnsweredProvider>
      <StatsTrackerProvider>
        <Component {...pageProps} />
      </StatsTrackerProvider>
    </HideCorrectlyAnsweredProvider>
  );
}
