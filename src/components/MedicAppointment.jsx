import React from "react";
import { useState } from "react";
import { useRef } from "react";

const MedicAppointment = () => {
  const availableDates = [
    {
      date: "2023-09-01",
      hours: ["10:00 AM", "11:00 AM", "2:00 PM", "3:00 PM"],
    },
    {
      date: "2023-09-02",
      hours: ["9:00 AM", "10:00 AM", "1:00 PM", "2:00 PM"],
    },
  ];

  const defaultForm = {
    fullName: "",
    dni: "",
    email: "",
    animalName: "",
    animalAge: "",
    motive: "",
    animalType: "",
    selectedDate: "",
    selectedHour: "",
  };

  const [form, setForm] = useState(defaultForm);
  const [dniError, setDniError] = useState(false);
  const [validateForm, setValidateForm] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedHour, setSelectedHour] = useState("");
  const dniRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleHourChange = (event) => {
    setSelectedHour(event.target.value);
    setForm((prevForm) => ({
      ...prevForm,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.dni < 999999 || form.dni > 99999999) {
      dniRef.current.focus();
      dniRef.current.style.border = "solid red";
      setDniError(true);
    } else {
      dniRef.current.style.border = "none";
      setDniError(false);
      setValidateForm(true);
      //Enviamos datos en el objeto form
    }
  };

  const handleReset = () => {
    setForm(defaultForm);
    setValidateForm(false);
    setSelectedDate("");
    setSelectedHour("");
  };

  return (
    <>
      {validateForm && (
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-2xl font-semibold mb-4 text-center">
            Turno solicitado con éxito!
          </h3>
          <button
            onClick={handleReset}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Solicitar otro turno
          </button>
        </div>
      )}
      <div
        className={
          validateForm ? "hidden" : "flex items-center justify-center w-full"
        }
      >
        <div>
          <h1 className="text-2xl font-semibold mb-6 text-center">
            Solicitud de turno
          </h1>
          <div className="flex gap-4">
            <form onSubmit={handleSubmit} className="grid grid-cols-4 gap-4">
              <div className="mb-4 col-span-2">
                <h2 className="text-xl font-semibold mb-2">Datos del dueño</h2>
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Nombre y apellido
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Ingrese nombre y apellido"
                  onChange={handleChange}
                  value={form.fullName}
                  required
                />
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  DNI
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dni"
                  type="number"
                  name="dni"
                  placeholder="Ingrese DNI"
                  onChange={handleChange}
                  value={form.dni}
                  ref={dniRef}
                />
                {dniError && (
                  <p className="text-red-300">
                    El formato de DNI es incorrecto
                  </p>
                )}
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Email
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Ingrese email"
                  onChange={handleChange}
                  value={form.email}
                  required
                />
              </div>
              <div className="mb-4 flex-1 col-span-2">
                <h2 className="text-xl font-semibold mb-2">Datos del animal</h2>
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Nombre
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="animalName"
                  name="animalName"
                  type="text"
                  placeholder="Nombre"
                  onChange={handleChange}
                  value={form.animalName}
                  required
                />
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Edad
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="animalAge"
                  name="animalAge"
                  type="number"
                  placeholder="Edad"
                  onChange={handleChange}
                  value={form.animalAge}
                  required
                />
                <select
                  className="shadow border rounded w-full mt-6 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="animalType"
                  name="animalType"
                  onChange={handleChange}
                  value={form.animalType}
                  required
                >
                  <option value="" disabled selected>
                    Tipo de animal
                  </option>
                  <option value={"perro"}>Perro</option>
                  <option value={"gato"}>Gato</option>
                  <option value={"ave"}>Ave</option>
                  <option value={"conejo"}>Conejo</option>
                  <option value={"hamster"}>Hamster</option>
                </select>
              </div>
              <div className="col-span-4">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Motivo de turno
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="motive"
                  name="motive"
                  onChange={handleChange}
                  value={form.motive}
                  type="text"
                  placeholder="Motivo de turno"
                />
                <div className="shadow appearance-none border rounded mt-4 flex flex-row justify-between h-8 content-center">
                  <div className="flex flex-row">
                    <label className="text-gray-700 text-sm font-bold">
                      Fecha de Turno:
                    </label>
                    <select
                      id="selectedDate"
                      name="selectedDate"
                      value={selectedDate}
                      onChange={handleDateChange}
                    >
                      <option value="">Selecciona una fecha</option>
                      {availableDates.map((availableDate, index) => (
                        <option key={index} value={availableDate.date}>
                          {availableDate.date}
                        </option>
                      ))}
                    </select>
                  </div>
                  {selectedDate && (
                    <div>
                      <label className="text-gray-700 text-sm font-bold">
                        Hora:
                      </label>
                      <select
                        id="selectedHour"
                        name="selectedHour"
                        value={selectedHour}
                        onChange={handleHourChange}
                      >
                        <option value="">Selecciona una hora</option>
                        {availableDates
                          .find((dateEntry) => dateEntry.date === selectedDate)
                          .hours.map((hour, index) => (
                            <option key={index} value={hour}>
                              {hour}
                            </option>
                          ))}
                      </select>
                    </div>
                  )}
                </div>
                {selectedHour && (
                  <div className="mt-1">
                    <p className="text-center text-green-500">
                      Has seleccionado un turno para {selectedDate} a las{" "}
                      {selectedHour}.
                    </p>
                  </div>
                )}
              </div>
              <div className="mt-6 col-start-2 col-span-2">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                  type="submit"
                >
                  Solicitar Turno
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicAppointment;
