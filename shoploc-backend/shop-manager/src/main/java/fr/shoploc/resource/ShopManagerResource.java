package fr.shoploc.resource;

import fr.shoploc.service.ShopManagerService;
import jakarta.annotation.security.RolesAllowed;
import jakarta.inject.Inject;
import jakarta.ws.rs.*;
import jakarta.ws.rs.core.MediaType;
import jakarta.ws.rs.core.Response;

@Path("/api/shop-manager")
public class ShopManagerResource {
    @Inject
    ShopManagerService service;

    @GET
    @RolesAllowed({"admin", "user"})
    @Produces(MediaType.APPLICATION_JSON)
    @Path("/get/{id}")
    public String pingGet(@PathParam("id") String id) {
        return service.greeting(id);
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    @Path("/post")
    public Response pingPost() {
        return Response.ok("So, shop manager is... Working!").build();
    }
}
