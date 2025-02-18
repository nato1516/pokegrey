import React from 'react';
import "./style/personaje.css";

export default function FiltroTempFin({ cambioFiltroFin }) {
    const handleChange = (e) => {
        const value = e.target.value;
        // Pasa el valor al padre (Paginass)
        cambioFiltroFin(value);
    };

    return (
        <div className="filtros">
            <div className="especialidad-conten">
                <label className="titulo-label" htmlFor="aparicionFin">Ultima aparición:</label>
                <select
                    className="especialidad"
                    id="aparicionFin"
                    onChange={handleChange}
                >
                    <option value="">Todas</option>
                    <option value="3">3</option>
                    <option value="5">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>
                    <option value="19">19</option>
                    <option value="20">20</option>
                    <option value="21">21</option>
                </select>
            </div>
        </div>
    );
}
