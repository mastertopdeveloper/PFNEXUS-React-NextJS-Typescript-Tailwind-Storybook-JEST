import cx from "classnames"

import { ProjectStatus } from "@hooks/api/useLiveProjects"

export type TableDisplayProjectStatusProps = {
  type: ProjectStatus
}

const TableDisplayProjectStatus: React.FC<TableDisplayProjectStatusProps> = ({
  type,
}) => (
  <div>
    <span
      className={cx("inline-block", "w-2 h-2 mr-[6px] mb-px", "rounded-full", {
        "bg-purple-400":
          type !== ProjectStatus.IntroductionsOpen &&
          type !== ProjectStatus.PreRegisterInterest,
        "bg-green-600": type === ProjectStatus.IntroductionsOpen,
        "bg-yellow-500": type === ProjectStatus.PreRegisterInterest,
      })}
    />
    {type}
  </div>
)

export default TableDisplayProjectStatus
