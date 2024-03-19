package fr.shoploc.shoplocBackend.health;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/health")
public class HealthController {
        @RequestMapping
        public String health() {
            return "OK";
        }
}
