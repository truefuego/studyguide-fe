import clsx from "clsx";
import { IUsageGraphItemProps } from "./type";

const UsageGraphItem:React.FC<IUsageGraphItemProps> = ({count}) => {
    let cellColor;
    switch (count) {
        case 0:
            cellColor = 'bg-graph-item-inactive';
            break;
        case 1:
        case 2:
            cellColor = 'bg-accent-green-dark';
            break;
        case 3:
        case 4:
            cellColor = 'bg-accent-green-medium';
            break;
        case 5:
        case 6:
            cellColor = 'bg-accent-green-regular';
            break;
        default:
            cellColor = 'bg-accent-green';
            break;
    }

    // const [isVisible, setIsVisible] = useState<boolean>(false);
    // const toggleVisibility = () => {
    //     setIsVisible(prev => !prev);
    // }
    return (
      // <div className='relative items-end'>
      <div
        className={`h-2 w-2 rounded-[2px] ${clsx(cellColor)} cursor-pointer`}
        // onMouseEnter={toggleVisibility}
        // onMouseLeave={toggleVisibility}
      />
      // <motion.div className={`absolute bg-card-bg py-1 px-4 ${isVisible ? 'z-10' : '-z-10'} rounded-lg border-1 border-graph-border`} animate={{ opacity: Number(isVisible), display: isVisible ? 'block' : 'hidden',  transition: { duration: .3 }}}>
      // <Text text='8 lessons on March 19th' className='whitespace-nowrap'/>
      // </motion.div>
      // </div>
    );
}

export default UsageGraphItem;
