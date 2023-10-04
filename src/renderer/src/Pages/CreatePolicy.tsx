import PageHeader from "@renderer/components/PageHeader"
import { MdOutlineDashboard } from "react-icons/md"
import type { CollapseProps } from 'antd';
import { Collapse, theme } from 'antd';
import collapseItems from "@renderer/data/createPolicyCollapseData";


const CreatePolicy = (): JSX.Element => {
    const { token } = theme.useToken();
    return (
        <div>
            <PageHeader title="Create Policy" subTitle="Here we have all the analytics and activities of the users" icon={<MdOutlineDashboard />} />
            <Collapse accordion items={collapseItems} style={{ background: token.colorBgContainer, border: 'none', borderRadius: 'none' }} />
        </div>
    )
}

export default CreatePolicy