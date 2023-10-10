package com.example.demo.service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.EventOrganiser;
import com.example.demo.repository.EventOrganiserRepo;

import java.util.List;
import java.util.Optional;

@Service
public class EventOrganiserService {

	@Autowired
    private  EventOrganiserRepo eventOrganiserService;

    

    public List<EventOrganiser> getAllOrganiser() {
        return eventOrganiserService.findAll();
    }

    public Optional<EventOrganiser> getOrganiserById(int id) {
        return eventOrganiserService.findById(id);
    }

    public EventOrganiser createOrganiser(EventOrganiser EventOrganiserService) {
        return eventOrganiserService.save(EventOrganiserService);
    }

    public EventOrganiser updateOrganiser(int id, EventOrganiser updatedOrg) {
        Optional<EventOrganiser> existingOrgOptional = eventOrganiserService.findById(id);

        if (existingOrgOptional.isPresent()) {
            EventOrganiser existingOrg = existingOrgOptional.get();
            existingOrg.setOrgName(updatedOrg.getOrgName());
            existingOrg.setEmail(updatedOrg.getEmail());
            existingOrg.setContactnum(updatedOrg.getContactnum());
            

            return eventOrganiserService.save(existingOrg);
        } else {
            throw new RuntimeException("User not found with ID: " + id);
        }
    }

    public void deleteOrganiser(int id) {
        eventOrganiserService.deleteById(id);
    }
}
