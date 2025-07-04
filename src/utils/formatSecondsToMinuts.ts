export function formatSecondsToMinutes(seconds: number) {
    const hour = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsMod = String(Math.floor(seconds % 60)).padStart(2, '0');
    const hourStr = String(hour).padStart(2, '0');
    const minutesStr = String(minutes).padStart(2, '0');

    return hourStr !== '00' ? `${hourStr}:${minutesStr}:${secondsMod}` : `${minutesStr}:${secondsMod}`;
}
