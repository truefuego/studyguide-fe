import FillInTheBlanksMode from "../components/lessons/Modes/FillInTheBlanksMode";
import PairMatchingMode from "../components/lessons/Modes/PairMatchingMode";
import SelectOptionsMode from "../components/lessons/Modes/SelectOptionsMode";
import SentenceBuildingMode from "../components/lessons/Modes/SentenceBuildingMode";

export const dummyRecentLessonsData = [
    {
        title: "Sentence Translation",
        score: 8,
        date: "09/03/2025",
        time: "8:14 P.M.",
        duration: "2:53",
        points: 12
    },
    {
        title: "Verbs",
        score: 9,
        date: "09/03/2025",
        time: "7:58 P.M.",
        duration: "2:04",
        points: 13
    },
    {
        title: "Particles Lesson 4",
        score: 10,
        date: "09/03/2025",
        time: "7:45 P.M.",
        duration: "2:56",
        points: 15
    },
    {
        title: "Nouns",
        score: 7,
        date: "09/03/2025",
        time: "7:41 P.M.",
        duration: "3:01",
        points: 11
    },
    {
        title: "JLPT N5 Vocabulary",
        score: 9,
        date: "09/03/2025",
        time: "7:35 P.M.",
        duration: "2:36",
        points: 13
    },
    {
        title: "Kanji Lesson 3",
        score: 10,
        date: "09/03/2025",
        time: "7:32 P.M.",
        duration: "3:11",
        points: 15
    }
];

export const dummyGraphUsageData = [
    {'date': '11-03-2025', 'count': 1},
    {'date': '10-03-2025', 'count': 0},
    {'date': '09-03-2025', 'count': 6},
    {'date': '08-03-2025', 'count': 6},
    {'date': '07-03-2025', 'count': 0},
    {'date': '06-03-2025', 'count': 3},
    {'date': '05-03-2025', 'count': 2},
    {'date': '04-03-2025', 'count': 0},
    {'date': '03-03-2025', 'count': 9},
    {'date': '02-03-2025', 'count': 8},
    {'date': '01-03-2025', 'count': 0},
    {'date': '28-02-2025', 'count': 0},
    {'date': '27-02-2025', 'count': 4},
    {'date': '26-02-2025', 'count': 10},
    {'date': '25-02-2025', 'count': 10},
    {'date': '24-02-2025', 'count': 6},
    {'date': '23-02-2025', 'count': 9},
    {'date': '22-02-2025', 'count': 0},
    {'date': '21-02-2025', 'count': 7},
    {'date': '20-02-2025', 'count': 1},
    {'date': '19-02-2025', 'count': 9},
    {'date': '18-02-2025', 'count': 6},
    {'date': '17-02-2025', 'count': 1},
    {'date': '16-02-2025', 'count': 2},
    {'date': '15-02-2025', 'count': 0},
    {'date': '14-02-2025', 'count': 1},
    {'date': '13-02-2025', 'count': 4},
    {'date': '12-02-2025', 'count': 6},
    {'date': '11-02-2025', 'count': 0},
    {'date': '10-02-2025', 'count': 9},
    {'date': '09-02-2025', 'count': 8},
    {'date': '08-02-2025', 'count': 0},
    {'date': '07-02-2025', 'count': 6},
    {'date': '06-02-2025', 'count': 2},
    {'date': '05-02-2025', 'count': 0},
    {'date': '04-02-2025', 'count': 6},
    {'date': '03-02-2025', 'count': 0},
    {'date': '02-02-2025', 'count': 6},
    {'date': '01-02-2025', 'count': 0},
    {'date': '31-01-2025', 'count': 1},
    {'date': '30-01-2025', 'count': 0},
    {'date': '29-01-2025', 'count': 2},
    {'date': '28-01-2025', 'count': 4},
    {'date': '27-01-2025', 'count': 0},
    {'date': '26-01-2025', 'count': 0},
    {'date': '25-01-2025', 'count': 9},
    {'date': '24-01-2025', 'count': 5},
    {'date': '23-01-2025', 'count': 0},
    {'date': '22-01-2025', 'count': 0},
    {'date': '21-01-2025', 'count': 0},
    {'date': '20-01-2025', 'count': 0},
    {'date': '19-01-2025', 'count': 0},
    {'date': '18-01-2025', 'count': 9},
    {'date': '17-01-2025', 'count': 0},
    {'date': '16-01-2025', 'count': 9},
    {'date': '15-01-2025', 'count': 0},
    {'date': '14-01-2025', 'count': 1},
    {'date': '13-01-2025', 'count': 0},
    {'date': '12-01-2025', 'count': 0},
    {'date': '11-01-2025', 'count': 0},
    {'date': '10-01-2025', 'count': 0},
    {'date': '09-01-2025', 'count': 0},
    {'date': '08-01-2025', 'count': 0},
    {'date': '07-01-2025', 'count': 0},
    {'date': '06-01-2025', 'count': 0},
    {'date': '05-01-2025', 'count': 0},
    {'date': '04-01-2025', 'count': 0},
    {'date': '03-01-2025', 'count': 0},
    {'date': '02-01-2025', 'count': 0},
    {'date': '01-01-2025', 'count': 2},
    {'date': '31-12-2024', 'count': 0},
    {'date': '30-12-2024', 'count': 2},
    {'date': '29-12-2024', 'count': 4},
    {'date': '28-12-2024', 'count': 0},
    {'date': '27-12-2024', 'count': 9},
    {'date': '26-12-2024', 'count': 1},
    {'date': '25-12-2024', 'count': 0},
    {'date': '24-12-2024', 'count': 1},
    {'date': '23-12-2024', 'count': 0},
    {'date': '22-12-2024', 'count': 0},
    {'date': '21-12-2024', 'count': 8},
    {'date': '20-12-2024', 'count': 5},
    {'date': '19-12-2024', 'count': 1},
    {'date': '18-12-2024', 'count': 0},
    {'date': '17-12-2024', 'count': 0},
    {'date': '16-12-2024', 'count': 3},
    {'date': '15-12-2024', 'count': 0},
    {'date': '14-12-2024', 'count': 6},
    {'date': '13-12-2024', 'count': 2},
    {'date': '12-12-2024', 'count': 1},
    {'date': '11-12-2024', 'count': 7},
    {'date': '10-12-2024', 'count': 0},
    {'date': '09-12-2024', 'count': 7},
    {'date': '08-12-2024', 'count': 8},
    {'date': '07-12-2024', 'count': 0},
    {'date': '06-12-2024', 'count': 0},
    {'date': '05-12-2024', 'count': 0},
    {'date': '04-12-2024', 'count': 0},
    {'date': '03-12-2024', 'count': 0},
    {'date': '02-12-2024', 'count': 8},
    {'date': '01-12-2024', 'count': 0},
    {'date': '30-11-2024', 'count': 6},
    {'date': '29-11-2024', 'count': 2},
    {'date': '28-11-2024', 'count': 8},
    {'date': '27-11-2024', 'count': 7},
    {'date': '26-11-2024', 'count': 0},
    {'date': '25-11-2024', 'count': 3},
    {'date': '24-11-2024', 'count': 2},
    {'date': '23-11-2024', 'count': 0},
    {'date': '22-11-2024', 'count': 0},
    {'date': '21-11-2024', 'count': 0},
    {'date': '20-11-2024', 'count': 7},
    {'date': '19-11-2024', 'count': 7},
    {'date': '18-11-2024', 'count': 0},
    {'date': '17-11-2024', 'count': 4},
    {'date': '16-11-2024', 'count': 0},
    {'date': '15-11-2024', 'count': 0},
    {'date': '14-11-2024', 'count': 9},
    {'date': '13-11-2024', 'count': 0},
    {'date': '12-11-2024', 'count': 1},
    {'date': '11-11-2024', 'count': 2},
    {'date': '10-11-2024', 'count': 4},
    {'date': '09-11-2024', 'count': 1},
    {'date': '08-11-2024', 'count': 0},
    {'date': '07-11-2024', 'count': 0},
    {'date': '06-11-2024', 'count': 0},
    {'date': '05-11-2024', 'count': 7},
    {'date': '04-11-2024', 'count': 9},
    {'date': '03-11-2024', 'count': 5},
    {'date': '02-11-2024', 'count': 6},
    {'date': '01-11-2024', 'count': 1},
    {'date': '31-10-2024', 'count': 9},
    {'date': '30-10-2024', 'count': 0},
    {'date': '29-10-2024', 'count': 0},
    {'date': '28-10-2024', 'count': 0},
    {'date': '27-10-2024', 'count': 0},
    {'date': '26-10-2024', 'count': 4},
    {'date': '25-10-2024', 'count': 4},
    {'date': '24-10-2024', 'count': 0},
    {'date': '23-10-2024', 'count': 4},
    {'date': '22-10-2024', 'count': 10},
    {'date': '21-10-2024', 'count': 0},
    {'date': '20-10-2024', 'count': 0},
    {'date': '19-10-2024', 'count': 8},
    {'date': '18-10-2024', 'count': 9},
    {'date': '17-10-2024', 'count': 3},
    {'date': '16-10-2024', 'count': 0},
    {'date': '15-10-2024', 'count': 0},
    {'date': '14-10-2024', 'count': 7},
    {'date': '13-10-2024', 'count': 0},
    {'date': '12-10-2024', 'count': 8},
    {'date': '11-10-2024', 'count': 0},
    {'date': '10-10-2024', 'count': 2},
    {'date': '09-10-2024', 'count': 0},
    {'date': '08-10-2024', 'count': 0},
    {'date': '07-10-2024', 'count': 0},
    {'date': '06-10-2024', 'count': 0},
    {'date': '05-10-2024', 'count': 3},
    {'date': '04-10-2024', 'count': 0},
    {'date': '03-10-2024', 'count': 1},
    {'date': '02-10-2024', 'count': 9},
    {'date': '01-10-2024', 'count': 3},
    {'date': '30-09-2024', 'count': 9},
    {'date': '29-09-2024', 'count': 2},
    {'date': '28-09-2024', 'count': 3},
    {'date': '27-09-2024', 'count': 0},
    {'date': '26-09-2024', 'count': 0},
    {'date': '25-09-2024', 'count': 0},
    {'date': '24-09-2024', 'count': 0},
    {'date': '23-09-2024', 'count': 0},
    {'date': '22-09-2024', 'count': 0},
    {'date': '21-09-2024', 'count': 0},
    {'date': '20-09-2024', 'count': 0},
    {'date': '19-09-2024', 'count': 10},
    {'date': '18-09-2024', 'count': 9},
    {'date': '17-09-2024', 'count': 4},
    {'date': '16-09-2024', 'count': 5},
    {'date': '15-09-2024', 'count': 0},
    {'date': '14-09-2024', 'count': 7},
    {'date': '13-09-2024', 'count': 0},
    {'date': '12-09-2024', 'count': 3},
    {'date': '11-09-2024', 'count': 6},
    {'date': '10-09-2024', 'count': 0},
    {'date': '09-09-2024', 'count': 4},
    {'date': '08-09-2024', 'count': 0},
    {'date': '07-09-2024', 'count': 3},
    {'date': '06-09-2024', 'count': 10},
    {'date': '05-09-2024', 'count': 1},
    {'date': '04-09-2024', 'count': 0},
    {'date': '03-09-2024', 'count': 0},
    {'date': '02-09-2024', 'count': 0},
    {'date': '01-09-2024', 'count': 0},
    {'date': '31-08-2024', 'count': 0},
    {'date': '30-08-2024', 'count': 3},
    {'date': '29-08-2024', 'count': 0},
    {'date': '28-08-2024', 'count': 7},
    {'date': '27-08-2024', 'count': 0},
    {'date': '26-08-2024', 'count': 3},
    {'date': '25-08-2024', 'count': 9},
    {'date': '24-08-2024', 'count': 0},
    {'date': '23-08-2024', 'count': 0},
    {'date': '22-08-2024', 'count': 8},
    {'date': '21-08-2024', 'count': 0},
    {'date': '20-08-2024', 'count': 4},
    {'date': '19-08-2024', 'count': 0},
    {'date': '18-08-2024', 'count': 9},
    {'date': '17-08-2024', 'count': 6},
    {'date': '16-08-2024', 'count': 1},
    {'date': '15-08-2024', 'count': 10},
    {'date': '14-08-2024', 'count': 0},
    {'date': '13-08-2024', 'count': 9},
    {'date': '12-08-2024', 'count': 0},
    {'date': '11-08-2024', 'count': 3},
    {'date': '10-08-2024', 'count': 0},
    {'date': '09-08-2024', 'count': 6},
    {'date': '08-08-2024', 'count': 0},
    {'date': '07-08-2024', 'count': 0},
    {'date': '06-08-2024', 'count': 9},
    {'date': '05-08-2024', 'count': 0},
    {'date': '04-08-2024', 'count': 2},
    {'date': '03-08-2024', 'count': 0},
    {'date': '02-08-2024', 'count': 2},
    {'date': '01-08-2024', 'count': 0},
    {'date': '31-07-2024', 'count': 8},
    {'date': '30-07-2024', 'count': 0},
    {'date': '29-07-2024', 'count': 0},
    {'date': '28-07-2024', 'count': 0},
    {'date': '27-07-2024', 'count': 2},
    {'date': '26-07-2024', 'count': 6},
    {'date': '25-07-2024', 'count': 4},
    {'date': '24-07-2024', 'count': 9},
    {'date': '23-07-2024', 'count': 2},
    {'date': '22-07-2024', 'count': 9},
    {'date': '21-07-2024', 'count': 1},
    {'date': '20-07-2024', 'count': 5},
    {'date': '19-07-2024', 'count': 8},
    {'date': '18-07-2024', 'count': 0},
    {'date': '17-07-2024', 'count': 0},
    {'date': '16-07-2024', 'count': 0},
    {'date': '15-07-2024', 'count': 3},
    {'date': '14-07-2024', 'count': 5},
    {'date': '13-07-2024', 'count': 0},
    {'date': '12-07-2024', 'count': 2},
    {'date': '11-07-2024', 'count': 6},
    {'date': '10-07-2024', 'count': 10},
    {'date': '09-07-2024', 'count': 5},
    {'date': '08-07-2024', 'count': 7},
    {'date': '07-07-2024', 'count': 6},
    {'date': '06-07-2024', 'count': 0},
    {'date': '05-07-2024', 'count': 4},
    {'date': '04-07-2024', 'count': 0},
    {'date': '03-07-2024', 'count': 9},
    {'date': '02-07-2024', 'count': 0},
    {'date': '01-07-2024', 'count': 0},
    {'date': '30-06-2024', 'count': 0},
    {'date': '29-06-2024', 'count': 0},
    {'date': '28-06-2024', 'count': 0},
    {'date': '27-06-2024', 'count': 9},
    {'date': '26-06-2024', 'count': 0},
    {'date': '25-06-2024', 'count': 2},
    {'date': '24-06-2024', 'count': 0},
    {'date': '23-06-2024', 'count': 0},
    {'date': '22-06-2024', 'count': 10},
    {'date': '21-06-2024', 'count': 10},
    {'date': '20-06-2024', 'count': 7},
    {'date': '19-06-2024', 'count': 5},
    {'date': '18-06-2024', 'count': 0},
    {'date': '17-06-2024', 'count': 4},
    {'date': '16-06-2024', 'count': 0},
    {'date': '15-06-2024', 'count': 2},
    {'date': '14-06-2024', 'count': 0},
    {'date': '13-06-2024', 'count': 0},
    {'date': '12-06-2024', 'count': 2},
    {'date': '11-06-2024', 'count': 0},
    {'date': '10-06-2024', 'count': 2},
    {'date': '09-06-2024', 'count': 3},
    {'date': '08-06-2024', 'count': 8},
    {'date': '07-06-2024', 'count': 1},
    {'date': '06-06-2024', 'count': 8},
    {'date': '05-06-2024', 'count': 1},
    {'date': '04-06-2024', 'count': 1},
    {'date': '03-06-2024', 'count': 4},
    {'date': '02-06-2024', 'count': 0},
    {'date': '01-06-2024', 'count': 6},
    {'date': '31-05-2024', 'count': 0},
    {'date': '30-05-2024', 'count': 1},
    {'date': '29-05-2024', 'count': 8},
    {'date': '28-05-2024', 'count': 7},
    {'date': '27-05-2024', 'count': 0},
    {'date': '26-05-2024', 'count': 8},
    {'date': '25-05-2024', 'count': 0},
    {'date': '24-05-2024', 'count': 0},
    {'date': '23-05-2024', 'count': 0},
    {'date': '22-05-2024', 'count': 6},
    {'date': '21-05-2024', 'count': 0},
    {'date': '20-05-2024', 'count': 0},
    {'date': '19-05-2024', 'count': 6},
    {'date': '18-05-2024', 'count': 2},
    {'date': '17-05-2024', 'count': 4},
    {'date': '16-05-2024', 'count': 0},
    {'date': '15-05-2024', 'count': 0},
    {'date': '14-05-2024', 'count': 7},
    {'date': '13-05-2024', 'count': 6},
    {'date': '12-05-2024', 'count': 0},
    {'date': '11-05-2024', 'count': 5},
    {'date': '10-05-2024', 'count': 0},
    {'date': '09-05-2024', 'count': 9},
    {'date': '08-05-2024', 'count': 0},
    {'date': '07-05-2024', 'count': 0},
    {'date': '06-05-2024', 'count': 6},
    {'date': '05-05-2024', 'count': 1},
    {'date': '04-05-2024', 'count': 7},
    {'date': '03-05-2024', 'count': 0},
    {'date': '02-05-2024', 'count': 0},
    {'date': '01-05-2024', 'count': 0},
    {'date': '30-04-2024', 'count': 0},
    {'date': '29-04-2024', 'count': 0},
    {'date': '28-04-2024', 'count': 0},
    {'date': '27-04-2024', 'count': 0},
    {'date': '26-04-2024', 'count': 0},
    {'date': '25-04-2024', 'count': 2},
    {'date': '24-04-2024', 'count': 2},
    {'date': '23-04-2024', 'count': 5},
    {'date': '22-04-2024', 'count': 0},
    {'date': '21-04-2024', 'count': 0},
    {'date': '20-04-2024', 'count': 3},
    {'date': '19-04-2024', 'count': 1},
    {'date': '18-04-2024', 'count': 0},
    {'date': '17-04-2024', 'count': 0},
    {'date': '16-04-2024', 'count': 0},
    {'date': '15-04-2024', 'count': 0},
    {'date': '14-04-2024', 'count': 0},
    {'date': '13-04-2024', 'count': 0},
    {'date': '12-04-2024', 'count': 0},
    {'date': '11-04-2024', 'count': 1},
    {'date': '10-04-2024', 'count': 0},
    {'date': '09-04-2024', 'count': 8},
    {'date': '08-04-2024', 'count': 3},
    {'date': '07-04-2024', 'count': 0},
    {'date': '06-04-2024', 'count': 0},
    {'date': '05-04-2024', 'count': 7},
    {'date': '04-04-2024', 'count': 0},
    {'date': '03-04-2024', 'count': 0},
    {'date': '02-04-2024', 'count': 0},
    {'date': '01-04-2024', 'count': 7},
    {'date': '31-03-2024', 'count': 2},
    {'date': '30-03-2024', 'count': 0},
    {'date': '29-03-2024', 'count': 9},
    {'date': '28-03-2024', 'count': 0},
    {'date': '27-03-2024', 'count': 0},
    {'date': '26-03-2024', 'count': 0},
    {'date': '25-03-2024', 'count': 7},
    {'date': '24-03-2024', 'count': 1},
    {'date': '23-03-2024', 'count': 8},
    {'date': '22-03-2024', 'count': 6},
    {'date': '21-03-2024', 'count': 8},
    {'date': '20-03-2024', 'count': 0},
    {'date': '19-03-2024', 'count': 8},
    {'date': '18-03-2024', 'count': 9},
    {'date': '17-03-2024', 'count': 4},
    {'date': '16-03-2024', 'count': 0},
    {'date': '15-03-2024', 'count': 2},
    {'date': '14-03-2024', 'count': 0},
    {'date': '13-03-2024', 'count': 0}
];

export const dummyLessonTags = [
    {tag: 'Nouns', complete: 21, total: 30},
    {tag: 'Particles', complete: 3, total: 34},
    {tag: 'Verbs', complete: 9, total: 24},
    {tag: 'Sentence Structure', complete: 19, total: 20},
    {tag: 'Adverbs', complete: 5, total: 36},
    {tag: 'Conjunction', complete: 23, total: 40},
    {tag: 'Interjection', complete: 3, total: 20},
    {tag: 'Adjective', complete: 9, total: 32},
];

export const dummyPracticeTags = [
    {tag: 'Paragraphs', complete: 2, total: 9},
    {tag: 'Stories', complete: 3, total: 5},
    {tag: 'Listen', complete: 9, total: 24},
    {tag: 'Mistakes', complete: 19, total: 20},
    {tag: 'Fill in the blanks', complete: 3, total: 40},
    {tag: 'Key Phrases', complete: 5, total: 36},
    {tag: 'Sentence Translation', complete: 3, total: 77},
    {tag: 'Speak', complete: 5, total: 6},
];

export const dummyBasicsData = [
    {tag: 'Hiragana', complete: 45, total: 104},
    {tag: 'Katakana', complete: 67, total: 119},
    {tag: 'Kanji', complete: 5, total: 107},
];

export const dummyLessonData = [
    {
        LessonMode: SentenceBuildingMode,
        props: {
            question: 'Question 1',
            options: ['word 1', 'word 2', 'word 3', 'word 4'],
            correct: 'option 1 option 3 option 2',
        },
    },
    {
        LessonMode: PairMatchingMode,
        props: {
            question: 'Question 2',
            options: ['option A', 'option B', 'option C', 'option D', 'option E', 'option 1', 'option 2', 'option 3', 'option 4', 'option 5'],
            correct: '7895634012',
        },
    },
    {
        LessonMode: FillInTheBlanksMode,
        props: {
            question: 'Question 1 ___ extends',
            correct: 'option 1',
            options: [],
        },
    },
    {
        LessonMode: SelectOptionsMode,
        props: {
            question: 'Question 4',
            options: ['option A', 'option B', 'option C', 'option D'],
            correct: 'option A',
        },
    },
    {
        LessonMode: SelectOptionsMode,
        props: {
            question: 'Question 5',
            options: ['option 1', 'option 2', 'option 3', 'option 4'],
            correct: 'option 1',
        },
    },
    {
        LessonMode: SelectOptionsMode,
        props: {
            question: 'Question 6',
            options: ['option A', 'option B', 'option C', 'option D'],
            correct: 'option A',
        },
    },
    {
        LessonMode: SelectOptionsMode,
        props: {
            question: 'Question 7',
            options: ['option 1', 'option 2', 'option 3', 'option 4'],
            correct: 'option 1',
        },
    },
    {
        LessonMode: SelectOptionsMode,
        props: {
            question: 'Question 8',
            options: ['option A', 'option B', 'option C', 'option D'],
            correct: 'option A',
        },
    },
    {
        LessonMode: SelectOptionsMode,
        props: {
            question: 'Question 9',
            options: ['option 1', 'option 2', 'option 3', 'option 4'],
            correct: 'option 1',
        },
    },
    {
        LessonMode: SelectOptionsMode,
        props: {
            question: 'Question 10',
            options: ['option A', 'option B', 'option C', 'option D'],
            correct: 'option A',
        },
    }
];
