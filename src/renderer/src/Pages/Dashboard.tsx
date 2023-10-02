import PageHeader from "@renderer/components/PageHeader"
import { MdOutlineDashboard } from 'react-icons/md'

const Dashboard = (): JSX.Element => {
    return (
        <div>
            <PageHeader title="Dashboard" subTitle="Here we have all the analytics and activities of the users" icon={<MdOutlineDashboard />} />
        </div>
    )
}

export default Dashboard