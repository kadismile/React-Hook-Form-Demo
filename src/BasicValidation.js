import { Form, Button, Card, Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const DisplayFieldErrors = ({ errorType }) => {
  switch (errorType) {
    case "required":
      return <span style={{ color: "red" }}>Input must not be empty</span>;
    case "maxLength":
      return <span style={{ color: "red" }}>Max characters exceeded</span>;
    case "pattern":
      return <span style={{ color: "red" }}>Invalid input</span>;
    default:
      return <></>;
  }
};

const BasicValidation = () => {
  const {
    register,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      name: "John Doe",
    },
  });

  const hasErrors = errors.name || errors.Email || errors.address;

  const onSubmit = () => {
    alert("Submit");
  };

  return (
    <Card className="my-4">
      <Card.Title className="mt-3 mx-auto">Basic Validation Form</Card.Title>
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Text className="muted">Required form field</Form.Text>
            <br></br>
            <Form.Label>Name</Form.Label>
            <Form.Control
              className="fs-sm"
              type="text"
              {...register("name", { required: true })}
              isInvalid={!!errors.name}
            />
            {errors.name && <DisplayFieldErrors errorType={errors.name.type} />}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              className="fs-sm"
              type="text"
              {...register("Email", {
                required: true,
                pattern:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              })}
            />
            {console.log({ errors })}
            {errors.Email && (
              <DisplayFieldErrors errorType={errors.Email.type} />
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Address</Form.Label>
            <Form.Control
              className="fs-sm"
              type="text"
              {...register("address", { maxLength: 30 })}
              isInvalid={!!errors.address}
            />
            {errors.address && (
              <DisplayFieldErrors errorType={errors.address.type} />
            )}
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            className="mx-2"
            style={{ width: 80 }}
            disabled={hasErrors}
            onClick={onSubmit}
          >
            Submit
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default BasicValidation;
