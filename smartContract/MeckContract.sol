// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract MeckMedicalRecords {

    struct MedicalRecord {
        address patient;
        string data;
    }

    address[] public verifiedDoctors;
    mapping(address => MedicalRecord[]) private records;

    // Add doctor to verified list
    function addDoctor(address _doctor) public {
        verifiedDoctors.push(_doctor);
    }

    // Check if doctor is verified
    function isVerifiedDoctor(address _doctor) public view returns (bool) {
        for (uint i = 0; i < verifiedDoctors.length; i++) {
            if (verifiedDoctors[i] == _doctor) {
                return true;
            }
        }
        return false;
    }

    // Add medical record (only by verified doctor)
    function addMedicalRecord(address _patient, string memory _data) public {
        require(isVerifiedDoctor(msg.sender), "Only verified doctors can add records");
        records[_patient].push(MedicalRecord(_patient, _data));
    }

    // Get medical records by patient address
    function getMedicalRecords(address _patient) public view returns (MedicalRecord[] memory) {
        return records[_patient];
    }
}
