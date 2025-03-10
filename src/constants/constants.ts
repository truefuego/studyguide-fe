import { BookIcon, ClockIcon, HeartIcon, ShuffleIcon, UserIcon } from '../assets/icons/icons'

export const sidePanelItems = [
    {
        text: 'Profile',
        Icon: UserIcon,
    },
    {
        text: 'Lessons',
        Icon: BookIcon,
    },
    {
        text: 'Favourites',
        Icon: HeartIcon,
    },
    {
        text: 'Random',
        Icon: ShuffleIcon,
    },
    {
        text: 'Recent',
        Icon: ClockIcon,
    },
];

export const clockPreferences = {
    timeZone: 'Asia/Kolkata',
    year: 'numeric' as const,
    month: 'numeric' as const,
    day: 'numeric' as const,
    hour: 'numeric' as const,
    minute: 'numeric' as const,
    hour12: true
};