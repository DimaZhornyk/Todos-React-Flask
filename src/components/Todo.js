import React from "react";
import { Card, Col, Modal } from "antd";
import "antd/dist/antd.css";
import {
  CloseOutlined,
  CheckOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

export default class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { diff: props.deadline - Date.now() };
    this.showDeleteConfirm = this.showDeleteConfirm.bind(this);
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    this.setState({ diff: this.props.deadline - Date.now() });
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({ diff: this.props.deadline - Date.now() });
  }

  showDeleteConfirm() {
    let { confirm } = Modal;
    let toDelete = this.props.onClick;
    confirm({
      title: "Are you sure delete this task?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes",
      okType: "danger",
      cancelText: "No",
      onOk() {
        toDelete();
      },
      onCancel() {},
    });
  }

  render() {
    return (
      <>
        <Col span={7}>
          <Card
            title="Card"
            bordered={true}
            hoverable="true"
            title={dhm(this.state.diff)}
            headStyle={{
              borderColor: this.props.completed ? "#5d4db9" : "#f0f0f0",
              color: "#3c3080",
            }}
            style={{
              backgroundColor: this.props.completed ? "#f9f9ff" : "#ffffff",
              color: "#3c3080",
            }}
            extra={
              <>
                <CheckOutlined
                  onClick={(e) => {
                    e.preventDefault();
                    this.props.onComplete();
                  }}
                  id="tick"
                  style={{ fontSize: "20px" }}
                ></CheckOutlined>
                <CloseOutlined
                  onClick={this.showDeleteConfirm}
                  id="cross"
                  style={{ fontSize: "20px" }}
                ></CloseOutlined>
              </>
            }
          >
            <p className="content">{this.props.body}</p>
          </Card>
        </Col>
      </>
    );
  }
}

function dhm(t) {
  let sign = "";
  if (t < 0) {
    t = -t;
    sign = "-";
  }

  let cd = 24 * 60 * 60 * 1000,
    ch = 60 * 60 * 1000,
    d = Math.floor(t / cd),
    h = Math.floor((t - d * cd) / ch),
    m = Math.floor((t - d * cd - h * ch) / 60000),
    s = Math.round((t - d * cd - h * ch - m * 60 * 1000) / 1000),
    pad = function (n) {
      return n < 10 ? "0" + n : n;
    };
  if (m === 60) {
    h++;
    m = 0;
  }
  if (h === 24) {
    d++;
    h = 0;
  }
  let slug = d === 1 ? "day" : "days";
  return d === 0
    ? `${sign}` + [pad(h), pad(m), pad(s)].join(":")
    : `${sign}${d} ${slug} ` + [pad(h), pad(m), pad(s)].join(":");
}
