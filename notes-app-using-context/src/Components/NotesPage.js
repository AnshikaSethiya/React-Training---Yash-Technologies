import { Button, Row, Col, Modal, Form, Input, Select, Card, Tooltip} from "antd";
import { DeleteOutlined, EditOutlined, PlusOutlined } from "@ant-design/icons";
import React, { useContext, useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";
import "./styles/NotesPage.css";
import { NotesContext } from "../Context/context";

const NotesPage = () => {
  const [AddNote] = Form.useForm();
  const notesContext = useContext(NotesContext);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    notesContext.getNotes();
  }, []);

  const showModal = () => {
    AddNote.resetFields();
    setIsModalOpen(true);
  };

  const handleOk = () => {
    AddNote.resetFields();
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    AddNote.resetFields();
  };

  const onFormSubmit = (values) => {
    notesContext.AddNote(values);
    setIsModalOpen(false);
    // window.location.reload()
  };

  const editNote = (record) => {
    console.log(record)
    AddNote.setFieldsValue({
      id: record.id,
      title: record.title,
      description: record.description,
      priority: record.priority
    })
    setIsModalOpen(true)
  }

  return (
    <div className="notesBlock">
      <Row>
        <Col lg={24} md={16} sm={16} xs={16}>
          <Button
            type="primary"
            size="large"
            icon={<PlusOutlined />}
            onClick={showModal}
            className="addButton"
          >
            Add a note
          </Button>
          
        </Col>
      </Row>

      <br />
      <br />

      <Row gutter={[24, 24]}>
        {notesContext.notes.map((element) => {
          return (
            <Col lg={8} md={10} sm={16} xs={24} key={element.id}>
              <Card
                key={element.id}
                className="cardNote"
                type="inner" hoverable
                bordered="false"
                title={<span style={{fontSize:"1.5rem", fontStyle:"italic"}}>{element.title}</span>}
                extra={
                    <div>
                      <Tooltip title="Edit Note" color="blue"><EditOutlined onClick={() => editNote(element)}/></Tooltip> {"    "}
                      <Tooltip title="Delete Note" color="red"><DeleteOutlined onClick={() => notesContext.DeleteNote(element.id)}/></Tooltip>
                    </div>
                }
              >
              <div>{element.description}</div>
              <br />
              <div className="note-footer"><b>Priority: </b> {element.priority}</div>
              </Card>
            </Col>
          );
        })}
      </Row>

      <Modal
        title="Add Note"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <div key="noteModalFooter">
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>
            <Button
              key="submit"
              type="primary"
              htmlType="submit"
              form="AddNote"
            >
              Add
            </Button>
          </div>
        }
        okText="Add"
      >
        <Form
          form={AddNote}
          name="AddNote"
          title="Add Note"
          onFinish={onFormSubmit}
        >
          <Form.Item name="id">
            <Input type="hidden" style={{visibility:"hidden"}}/>
          </Form.Item>
          
          <Form.Item
            label="Note Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your title!",
              },
            ]}
          >
            <Input placeholder="Please enter note title" />
          </Form.Item>

          <Form.Item
            label="Note Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input note description!",
              },
            ]}
          >
            <TextArea placeholder="Please enter note description" rows={4} />
          </Form.Item>

          <Form.Item
            label="Select Priority"
            name="priority"
            rules={[
              {
                required: true,
                message: "Please select priority!",
              },
            ]}
          >
            <Select placeholder="Select note Priority">
              <Select.Option value="High">High</Select.Option>
              <Select.Option value="Moderate">Moderate</Select.Option>
              <Select.Option value="Low">Low</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default NotesPage;
