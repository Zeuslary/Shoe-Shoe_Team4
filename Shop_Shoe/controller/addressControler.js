import useApi, { provinceApi, districtApi, wardApi } from "../model/api.js";

// Tricks
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const provinceElement = $('#province');
const districtElement = $('#district');
const wardElement = $('#ward');

function fillProvince() {
    let html = '<option value="">Chọn Tỉnh/Thành phố</option>';
    const fetchDatas = useApi.getData(provinceApi);
    fetchDatas
        .then((data) => {
            const provinces = data.results;
            provinces.forEach((province) => {
                html += `<option value="${province.province_id}">${province.province_name}</option>`;
            })

            provinceElement.innerHTML = html;
        })
}

function fillDistrictResponse(province_id) {
    let html = '<option value="">Chọn Huyện/Quận</option>';
    const fetchDatas = useApi.getData(districtApi + '/' + province_id);
    fetchDatas
        .then((data) => {
            const districtResponse = data.results;
            
            districtResponse.forEach((district) => html += `<option value="${district.district_id}">${district.district_name}</option>`)
            districtElement.innerHTML = html;
            
        })
}

function fillWardResponse(district_id) {
    let html = '<option value="">Chọn Phường/Xã</option>';
    const fetchDatas = useApi.getData(wardApi + '/' + district_id);
    fetchDatas 
        .then((data) => {
            const wardResponse = data.results;
            
            wardResponse.forEach((ward) => html += `<option value="${ward.ward_id}">${ward.ward_name}</option>`)
            wardElement.innerHTML = html;
        })
}

function fillAddress() {
    
    fillProvince();

    provinceElement.onchange = () => {
        fillDistrictResponse(provinceElement.value);
    }

    districtElement.onchange = () => {
        fillWardResponse(districtElement.value);
    }


}

export {
    fillAddress,
}