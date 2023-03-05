import React from 'react'
import { Button, DatePicker, Form, Input } from 'antd'
import style from './style.module.scss'
import { EditOutlined, LockOutlined } from '@ant-design/icons'

const SettingsPage: React.FC = () => {
  return (
    <div className={style.setting}>
      <div className={style.setting__header}>
        <p className={style.setting__header__title}>Account Information</p>
        <p className={style.setting__header__subtitle}>Update your account information</p>
      </div>
      <div className={style.setting__form}>
        <div className={style.setting__form__header}>
          <p className={style.setting__form__header__title}>Personal Information</p>
          <Button
            className={style.setting__form__header__btn}
            icon={<EditOutlined />}
            type="link"
          >
            Edit
          </Button>
        </div>

        <Form layout="vertical" className={style.setting__form__form}>
          <Form.Item>
            <Form.Item
              name="firstName"
              label="First Name"
              className={style.setting__form__form__input__group}
            >
              <Input
                className={style.setting__form__form__input}
                placeholder="Your first name..."
              />
            </Form.Item>
            <Form.Item
              name="lastName"
              label="Last"
              className={style.setting__form__form__input__group}
              style={{ marginLeft: 40 }}
            >
              <Input
                className={style.setting__form__form__input}
                placeholder="Your last name..."
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="dateOfBirth"
              label="Date of Birth"
              className={style.setting__form__form__input__group}
            >
              <DatePicker
                className={style.setting__form__form__datePicker}
                placeholder="Select your birthday..."
              />
            </Form.Item>
            <Form.Item
              name="phone"
              label="Mobile Number"
              className={style.setting__form__form__input__group}
              style={{ marginLeft: 40 }}
            >
              <Input
                className={style.setting__form__form__input}
                placeholder="Your mobile number..."
              />
            </Form.Item>
          </Form.Item>
          <Form.Item name="email" label="Email">
            <Input
              className={style.setting__form__form__input}
              placeholder="Your email..."
            />
          </Form.Item>
          <Form.Item>
            <Form.Item
              name="password"
              label="New Password"
              className={style.setting__form__form__input__group}
            >
              <Input.Password
                prefix={<LockOutlined />}
                className={style.setting__form__form__input}
                placeholder="Your new password..."
              />
            </Form.Item>
            <Form.Item
              name="passwordConfirm"
              label="Confirm Password"
              className={style.setting__form__form__input__group}
              style={{ marginLeft: 40 }}
            >
              <Input.Password
                prefix={<LockOutlined />}
                className={style.setting__form__form__input}
                placeholder="Confirm password..."
              />
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" className={style.setting__form__form__btn}>
              Update
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default SettingsPage
