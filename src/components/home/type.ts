export interface IRecentLessonsItemProps {
    title: string;
    score: number;
    date: string;
    time:string;
    duration: string;
    points: number;
};

export interface IUsageGraphItemProps {
    count: number;
};

export interface IPracticeButtonProps {
    text: string;
    link: string;
}